import { Schema, model } from "mongoose";

interface IUser {
  name: string;
  email: string;
  hashedPassword: string;
}

const userSchema = new Schema<IUser>({
  name: {
    type: String,
    required: true,
  },
  email: { type: String, required: true, unique: true },
  hashedPassword: {
    type: String,
    required: true,
  },
});

export const User = model("user", userSchema);
