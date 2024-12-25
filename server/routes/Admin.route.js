import express from "express";

import { createUser } from "../Controllers/Admin.controller.js";
const router = express.Router();

router.post("/", createUser);

export default router;
