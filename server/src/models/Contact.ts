import mongoose, { Document, Schema } from "mongoose";

export interface IContact extends Document {
  type: "contact";
  fullName: string;
  email: string;
  phone: string;
  message: string;
  createdAt: Date;
}

const ContactSchema = new Schema<IContact>(
  {
    type: { type: String, default: "contact", immutable: true },
    fullName: { type: String, required: true, trim: true, maxlength: 100 },
    email: { type: String, required: true, trim: true, maxlength: 255 },
    phone: { type: String, required: true, trim: true, maxlength: 20 },
    message: { type: String, required: true, trim: true, maxlength: 1000 },
  },
  {
    timestamps: true,
  }
);

const Contact = mongoose.model<IContact>("Contact", ContactSchema);
export default Contact;
