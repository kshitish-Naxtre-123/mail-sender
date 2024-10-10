import express from "express";
import { emailController, verifyCode } from "../controller/email.controller.js";
import multer from "multer";
const router = express.Router();

router.route("/mail").post(emailController);
router.route("/verify-code").post(verifyCode);

export default router;
