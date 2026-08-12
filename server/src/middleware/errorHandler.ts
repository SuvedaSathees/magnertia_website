import { Request, Response, NextFunction } from "express";

interface AppError extends Error {
  status?: number;
  code?: number;
}

export const errorHandler = (
  err: AppError,
  _req: Request,
  res: Response,
  _next: NextFunction
): void => {
  console.error("❌ Error:", err.message);

  // Mongoose validation error
  if (err.name === "ValidationError") {
    res.status(400).json({ success: false, error: err.message });
    return;
  }

  // Mongoose cast error (invalid ObjectId)
  if (err.name === "CastError") {
    res.status(400).json({ success: false, error: "Invalid ID format." });
    return;
  }

  const statusCode = err.status ?? 500;
  res.status(statusCode).json({
    success: false,
    error: err.message || "Internal Server Error",
  });
};
