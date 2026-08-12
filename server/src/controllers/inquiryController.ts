import { Request, Response, NextFunction } from "express";
import mongoose from "mongoose";
import Inquiry from "../models/Inquiry";
import { tryConnectMongoDB } from "../config/db";

// POST /api/inquiries
export const createInquiry = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    await tryConnectMongoDB();
    const inquiry = new Inquiry({ ...req.body, type: "inquiry" });
    await inquiry.save();
    res.status(201).json({ success: true, data: inquiry });
  } catch (error) {
    next(error);
  }
};

// GET /api/inquiries
export const getInquiries = async (
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
    const inquiries = await Inquiry.find().sort({ createdAt: -1 }).lean();
    res.status(200).json({ success: true, data: inquiries, connected: true });
  } catch (error) {
    next(error);
  }
};

// DELETE /api/inquiries/:id
export const deleteInquiry = async (
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
    const deleted = await Inquiry.findByIdAndDelete(id);
    if (!deleted) {
      res.status(200).json({ success: true, message: "Record removed." });
      return;
    }
    res.status(200).json({ success: true, message: "Inquiry deleted from MongoDB." });
  } catch (error) {
    next(error);
  }
};
