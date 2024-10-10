import { sendMail } from "../utils/emailUtils.js";
import Email from "../model/eMail.model.js";

const emailController = async (req, res) => {
  const { email } = req.body;
  try {
    // Create a new Email document
    const code = Math.floor(100000 + Math.random() * 900000);

    const email_data = new Email({
      email,
      code,
    });
    await email_data.save();
    await sendMail(email,code);

    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("error sending mail", error);
    res.status(500).json({ error: "internal server error" });
  }
};

export { emailController };
