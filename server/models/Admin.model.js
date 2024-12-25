import { Schema, model } from "mongoose";

const newUserSchema = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const newUser = model("newUser", newUserSchema);
export default newUser;
