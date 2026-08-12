import { Request, Response, NextFunction } from "express";
import mongoose from "mongoose";
import Contact from "../models/Contact";
import { tryConnectMongoDB } from "../config/db";

// POST /api/contacts
export const createContact = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    await tryConnectMongoDB();
    const contact = new Contact({ ...req.body, type: "contact" });
    await contact.save();
    res.status(201).json({ success: true, data: contact });
  } catch (error) {
    next(error);
  }
};

// GET /api/contacts
export const getContacts = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const isConnected = await tryConnectMongoDB();
    if (!isConnected || mongoose.connection.readyState !== 1) {
      res.status(200).json({ success: true, data: [], connected: false });
      return;
    }
    const contacts = await Contact.find().sort({ createdAt: -1 }).lean();
    res.status(200).json({ success: true, data: contacts, connected: true });
  } catch (error) {
    next(error);
  }
};

// DELETE /api/contacts/:id
export const deleteContact = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.status(200).json({ success: true, message: "Record removed." });
      return;
    }
    const deleted = await Contact.findByIdAndDelete(id);
    if (!deleted) {
      res.status(200).json({ success: true, message: "Record removed." });
      return;
    }
    res.status(200).json({ success: true, message: "Contact deleted from MongoDB." });
  } catch (error) {
    next(error);
  }
};
