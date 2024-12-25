import express from "express";
import { createUser, adminLogin } from "../Controllers/Admin.controller.js";

const router = express.Router();

// Route to register a new user
router.post("/register", createUser);

// Route to login
router.post("/login", adminLogin);

export default router;
