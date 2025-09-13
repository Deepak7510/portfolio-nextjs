import mongoose, { Document } from "mongoose";

export interface IBlog extends Document {
  title: string;
  slug: string;
  description: string;
  isActive: boolean;
}

const blogSchema = new mongoose.Schema<IBlog>(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    slug: {
      type: String,
      unique: true,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

const BlogModel =
  mongoose.models.Blog || mongoose.model<IBlog>("Blog", blogSchema);

export default BlogModel;
