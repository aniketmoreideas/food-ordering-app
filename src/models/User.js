import { Schema, model, models } from "mongoose";
// import bcrypt from "bcrypt";

const bcrypt = require("bcryptjs");
const UserSchema = new Schema(
  {
    name: { type: String },
    email: { type: String, required: true, unique: true },
    password: { type: String },
    image: { type: String },
    phoneNumber: { type: String },
    streetAddress: { type: String },
    postalCode: { type: String },
    city: { type: String },
    country: { type: String },
    is_admin: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export const User = models?.User || model("User", UserSchema);
