import mongoose, { Document } from "mongoose";

export interface IMedia extends Document {
    title: string;
    alt: string;
    asset_id: string;
    public_id: string;
    secure_url: string;
    path: string;
    thumbnail_url: string;
    isActive: boolean;
}

const mediaSchema = new mongoose.Schema<IMedia>(
    {
        title: {
            type: String,
        },
        alt: {
            type: String,
        },
        asset_id: {
            type: String,
            required: true
        },
        public_id: {
            type: String,
            required: true
        },
        secure_url: {
            type: String,
            required: true
        },
        path: {
            type: String,
            required: true
        },
        thumbnail_url: {
            type: String,
            required: true
        },
        isActive: {
            type: Boolean,
            default: true,
        },
    },
    { timestamps: true }
);

const MediaModel =
    mongoose.models.Media || mongoose.model<IMedia>("Media", mediaSchema);

export default MediaModel;
