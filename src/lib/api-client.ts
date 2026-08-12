/**
 * api-client.ts
 * ─────────────
 * Browser-side REST API client for the Magnertia Express backend.
 * Replaces the former TanStack Start server functions (excel-server.ts).
 *
 * All functions call the Express API at /api/* (proxied via Vite in dev,
 * and served directly in production).
 */

import { getLocalSubmissions, deleteLocalSubmission } from "./excel-client";

// ─── Shared Types ─────────────────────────────────────────────────────────────

export interface InquiryRecord {
  /** Differentiates inquiry vs contact submissions */
  type: "inquiry" | "contact";
  fullName: string;
  email: string;
  phone: string;
  company?: string;
  businessType?: string;
  product?: string;
  requirements?: string;
  quantity?: string;
  deployment?: string;
  gst?: string;
  location?: string;
  fleetSize?: string;
  purpose?: string;
  message?: string;
}

/** MongoDB document shape returned from GET endpoints */
export interface SubmissionDocument extends InquiryRecord {
  _id: string;
  createdAt: string;
  updatedAt: string;
}

export interface SubmissionsResponse {
  success: boolean;
  inquiries: SubmissionDocument[];
  contacts: SubmissionDocument[];
  isMongoDB?: boolean;
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

const BASE_URL = "/api";

async function post<T>(path: string, body: unknown): Promise<T> {
  const res = await fetch(`${BASE_URL}${path}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  const json = await res.json();
  if (!res.ok) {
    throw new Error(json?.error ?? `POST ${path} failed (${res.status})`);
  }
  return json as T;
}

async function get<T>(path: string): Promise<T> {
  const res = await fetch(`${BASE_URL}${path}`);
  const json = await res.json();
  if (!res.ok) {
    throw new Error(json?.error ?? `GET ${path} failed (${res.status})`);
  }
  return json as T;
}

async function del<T>(path: string): Promise<T> {
  const res = await fetch(`${BASE_URL}${path}`, { method: "DELETE" });
  const json = await res.json();
  if (!res.ok) {
    throw new Error(json?.error ?? `DELETE ${path} failed (${res.status})`);
  }
  return json as T;
}

// ─── Public API ───────────────────────────────────────────────────────────────

/**
 * Save an inquiry submission to MongoDB.
 */
export async function saveInquiry(record: InquiryRecord): Promise<{ success: boolean }> {
  return post("/inquiries", record);
}

/**
 * Save a contact message to MongoDB.
 */
export async function saveContact(record: InquiryRecord): Promise<{ success: boolean }> {
  return post("/contacts", record);
}

/**
 * Fetch all inquiries and contacts from MongoDB.
 * Falls back to local storage if backend API is not running.
 */
export async function getSubmissions(): Promise<SubmissionsResponse> {
  try {
    const [inquiriesRes, contactsRes] = await Promise.all([
      get<{ success: boolean; data: SubmissionDocument[]; connected?: boolean }>("/inquiries"),
      get<{ success: boolean; data: SubmissionDocument[]; connected?: boolean }>("/contacts"),
    ]);

    const isConnected = inquiriesRes.connected !== false && contactsRes.connected !== false;

    if (!isConnected) {
      const local = getLocalSubmissions();
      const inquiries = local
        .filter((s) => s.type === "inquiry" || !s.type)
        .map((s, idx) => ({ ...s, _id: `local_inq_${idx}`, createdAt: s.timestamp || new Date().toISOString(), updatedAt: s.timestamp || new Date().toISOString() })) as SubmissionDocument[];
      const contacts = local
        .filter((s) => s.type === "contact")
        .map((s, idx) => ({ ...s, _id: `local_cnt_${idx}`, createdAt: s.timestamp || new Date().toISOString(), updatedAt: s.timestamp || new Date().toISOString() })) as SubmissionDocument[];

      return {
        success: true,
        inquiries,
        contacts,
        isMongoDB: false,
      };
    }

    return {
      success: true,
      inquiries: inquiriesRes.data ?? [],
      contacts: contactsRes.data ?? [],
      isMongoDB: true,
    };
  } catch (err) {
    console.warn("Backend API offline or unreachable, falling back to local storage:", err);
    const local = getLocalSubmissions();
    const inquiries = local
      .filter((s) => s.type === "inquiry" || !s.type)
      .map((s, idx) => ({ ...s, _id: `local_inq_${idx}`, createdAt: s.timestamp || new Date().toISOString(), updatedAt: s.timestamp || new Date().toISOString() })) as SubmissionDocument[];
    const contacts = local
      .filter((s) => s.type === "contact")
      .map((s, idx) => ({ ...s, _id: `local_cnt_${idx}`, createdAt: s.timestamp || new Date().toISOString(), updatedAt: s.timestamp || new Date().toISOString() })) as SubmissionDocument[];

    return {
      success: true,
      inquiries,
      contacts,
      isMongoDB: false,
    };
  }
}

/**
 * Delete a submission by its MongoDB _id or local fallback id.
 */
export async function deleteSubmission(
  type: "inquiry" | "contact",
  id: string
): Promise<{ success: boolean }> {
  deleteLocalSubmission(type, id);
  try {
    const path = type === "inquiry" ? `/inquiries/${id}` : `/contacts/${id}`;
    return await del(path);
  } catch (err) {
    console.warn("Backend delete API notice:", err);
    return { success: true };
  }
}

/**
 * Convenience alias — saves either inquiry or contact based on record.type.
 * Used by components that don't distinguish at call time.
 */
export async function saveSubmission(record: InquiryRecord): Promise<{ success: boolean }> {
  return record.type === "inquiry" ? saveInquiry(record) : saveContact(record);
}
