import express from "express";
import emailRouter from "./routes/email.routes.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", emailRouter);

export { app };
