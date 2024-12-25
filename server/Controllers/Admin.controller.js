import Admin from "../models/Admin.model.js";

export const getAdmins = async (req, res) => {
  try {
    const admins = await Admin.find();
    res.json(admins);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const createAdmin = async (req, res) => {
  const newAdmin = new Admin({
    userEmail: req.body.userEmail,
    password: req.body.password,
  });
  try {
    const admin = await newAdmin.save();
    res.status(201).json(admin);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
