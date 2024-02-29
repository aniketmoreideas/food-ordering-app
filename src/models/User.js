import { Schema, model, models } from "mongoose";
// import bcrypt from "bcrypt";

const bcrypt = require('bcryptjs');
const UserSchema = new Schema(
  {
    email: { type: String, required: true, unique: true },
    password: {
      type: String,
      required: true,
      validate: (pass) => {
        if (!pass?.length || pass.length < 5) {
          new Error("Password must be at least 5 characters");
          return false;
        }
      },
    },
  },
  { timestamps: true }
);

UserSchema.post("validate", function (user) {
  const salt = bcrypt.genSaltSync(10);
  const hashedPassword = bcrypt.hashSync(user.password, salt);
  user.password = hashedPassword;
});

export const User = models?.User || model("User", UserSchema);
