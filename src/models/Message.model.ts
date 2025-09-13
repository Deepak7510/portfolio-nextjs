import mongoose, { Document } from "mongoose";

export interface IMessage extends Document {
  name: string;
  email: string;
  phone: string;
  enquiryType: string;
  message: string;
}

const messageSchema = new mongoose.Schema<IMessage>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    enquiryType: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const MessageModel =
  mongoose.models.Message || mongoose.model<IMessage>("Message", messageSchema);

export default MessageModel;
