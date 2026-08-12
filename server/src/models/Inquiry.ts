import mongoose, { Document, Schema } from "mongoose";

export interface IInquiry extends Document {
  type: "inquiry";
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
  createdAt: Date;
}

const InquirySchema = new Schema<IInquiry>(
  {
    type: { type: String, default: "inquiry", immutable: true },
    fullName: { type: String, required: true, trim: true, maxlength: 100 },
    email: { type: String, required: true, trim: true, maxlength: 255 },
    phone: { type: String, required: true, trim: true, maxlength: 20 },
    company: { type: String, trim: true, maxlength: 120 },
    businessType: { type: String, trim: true, maxlength: 60 },
    product: { type: String, trim: true, maxlength: 80 },
    requirements: { type: String, trim: true, maxlength: 1000 },
    quantity: { type: String, trim: true, maxlength: 20 },
    deployment: { type: String, trim: true, maxlength: 60 },
    gst: { type: String, trim: true, maxlength: 20 },
    location: { type: String, trim: true, maxlength: 120 },
    fleetSize: { type: String, trim: true, maxlength: 20 },
    purpose: { type: String, trim: true, maxlength: 300 },
  },
  {
    timestamps: true, // adds createdAt + updatedAt automatically
  }
);

const Inquiry = mongoose.model<IInquiry>("Inquiry", InquirySchema);
export default Inquiry;
