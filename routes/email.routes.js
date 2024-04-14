import express, { Router } from "express";
import { emailController } from "../controller/email.controller.js";

const router = Router()

router.route("/mail").post(emailController)

export default router;