import newUser from "../models/Admin.model.js";
import bcrypt from "bcrypt";
export const createUser = async (req, res) => {
  const { username, email, password } = req.body;
  const hash = bcrypt.hashSync(password, 10);
  const newAdmin = new newUser({
    username: username,
    email: email,
    password: hash,
  });

  try {
    const admin = await newAdmin.save();
    res.status(201).json(admin);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
