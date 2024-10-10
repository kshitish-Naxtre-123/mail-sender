import express from "express";
import { emailController } from "../controller/email.controller.js";
import multer from "multer";
const router = express.Router();

router.route("/mail").post(emailController);
export default router;
