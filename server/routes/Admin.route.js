import express from "express";
import { getAdmins, createAdmin } from "../Controllers/Admin.controller.js";
const router = express.Router();

router.get("/", getAdmins);

router.post("/", createAdmin);

export default router;
