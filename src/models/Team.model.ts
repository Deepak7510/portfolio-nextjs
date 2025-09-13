import mongoose, { Schema, Document } from "mongoose";

// Data sent from client when creating/updating a team member
// export type TeamInput = {
//   name: string;
//   role?: string;
//   email?: string;
//   avatarUrl?: string;
//   bio?: string;
//   social?: {
//     twitter?: string;
//     linkedin?: string;
//     github?: string;
//     [key: string]: string | undefined;
//   };
//   skills?: string[]; // e.g. ["React", "Node", "Design"]
//   isActive?: boolean;
//   order?: number; // for ordering on UI
//   joinedAt?: Date | string;
// };

export interface ITeam extends Document {
  name: string;
  role: string;
  email?: string;
  avatarUrl?: string;
  bio?: string;
  social: {
    twitter?: string;
    linkedin?: string;
    github?: string;
    [key: string]: string | undefined;
  };
  skills: string[];
  isActive: boolean;
  order: number;
  joinedAt?: Date;
  createdAt: Date;
  updatedAt: Date;
}

const SocialSchema = new Schema({
  twitter: { type: String, trim: true },
  linkedin: { type: String, trim: true },
  github: { type: String, trim: true },
});

const teamSchema = new Schema<ITeam>(
  {
    name: { type: String, required: true, trim: true },
    role: { type: String, default: "Member", trim: true },
    email: {
      type: String,
      trim: true,
      required: true,
    },
    avatarUrl: {
      type: mongoose.Types.ObjectId,
      ref: "media",
      required: true,
    },
    bio: { type: String, trim: true, maxlength: 1000 },
    social: { type: SocialSchema, default: {} },
    skills: { type: [String], default: [] },
    isActive: { type: Boolean, default: true },
    joinedAt: { type: Date },
  },
  {
    timestamps: true,
  }
);

const TeamModel =
  mongoose.models.Team || mongoose.model<ITeam>("Team", teamSchema);

export default TeamModel;
