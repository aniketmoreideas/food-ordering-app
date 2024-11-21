import mongoose from "mongoose";
import { User } from "@/models/User";

import bcrypt from "bcryptjs";
export async function POST(req: { json: () => any; }) {
  mongoose.connect(process.env.MONGO_URL);
  const body = await req.json();

  const pass = body.password;
  if (!pass?.length || pass.length < 5) {
    new Error("Password must be at least 5 characters");
  }

  const notHashedPassword = pass;
  const salt = bcrypt.genSaltSync(10);
  const hashedPassword = bcrypt.hashSync(notHashedPassword, salt);
  body.password = hashedPassword;

  const createUser = await User.create(body);
  return Response.json(createUser);
}
