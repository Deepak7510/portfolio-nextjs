import mongoose, { Mongoose } from "mongoose";

const MONGO_URL: string = process.env.MONGO_URL as string;

if (!MONGO_URL) {
  throw new Error("MONGO_URL is required for connection");
}

let cached: { conn: Mongoose | null; promise: Promise<Mongoose> | null } = (
  global as any
).mongoose;

if (!cached) {
  cached = (global as any).mongoose = { conn: null, promise: null };
}

export async function connectDB() {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGO_URL, {
      bufferCommands: false,
    });

    cached.conn = await cached.promise;
    return cached.conn;
  }
}
