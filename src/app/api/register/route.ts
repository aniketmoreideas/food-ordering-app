import mongoose from "mongoose";
import { User } from "@/models/User";

export async function POST(req) {
  mongoose.connect(process.env.MONGO_URL);
  const body = await req.json();
  const createUser = await User.create(body);
  return Response.json(createUser);
}
