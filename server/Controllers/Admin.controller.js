import newUser from "../models/Admin.model.js";
import bcrypt from "bcrypt";

// Create User
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

// Admin Login
export const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const admin = await newUser.findOne({ email: email });

    if (!admin) {
      return res.status(400).json({ message: "Invalid email or password." });
    }

    const validPassword = bcrypt.compareSync(password, admin.password);
    if (!validPassword) {
      return res.status(400).json({ message: "Invalid email or password." });
    }

    res.status(200).json({ message: "Login successful" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
