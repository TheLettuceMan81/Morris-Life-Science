import express from "express";
import { getAdmins } from "../Controllers/Admin.controller.js";
const router = express.Router();

router.get("/", getAdmins);
