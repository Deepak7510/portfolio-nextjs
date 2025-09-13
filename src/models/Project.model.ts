import mongoose, { Document } from "mongoose";

export interface IProject extends Document {
  name: string;
  slug: string;
  category: string;
  description: string;
  media: mongoose.ObjectId[];
  techStack: string;
  websiteUrl: string;
  sourceCode: string;
  startDate: Date;
  endDate: Date;
  isActive: boolean;
}

const projectSchema = new mongoose.Schema<IProject>(
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

const ProjectModel =
  mongoose.models.Project || mongoose.model<IProject>("Project", projectSchema);

export default ProjectModel;
