import mongoose, { Document } from "mongoose";

export interface ICategory extends Document {
  name: string;
  slug: string;
  isActive: boolean;
}

const categorySchema = new mongoose.Schema<ICategory>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    slug: {
      type: String,
      unique: true,
      required: true,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

const CategoryModel =
  mongoose.models.Category ||
  mongoose.model<ICategory>("Category", categorySchema);

export default CategoryModel;
