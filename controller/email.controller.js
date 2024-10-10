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
    await sendMail(email, code);

    res.status(200).json({ message: "Email sent successfully",statusCode:200,data:email_data });
  } catch (error) {
    console.error("error sending mail", error);
    res.status(500).json({ error: "internal server error" });
  }
};

const verifyCode = async (req, res) => {
  const { email, code } = req.body;
  try {
    const emailData = await Email.findOne({ email, code });

    if (!emailData) {
      res.status(200).json({ message: "Incorrect code.",statusCode:401 });
    } else if (emailData.code === code && emailData.email === email) {
      res.status(200).json({ message: "code verified",statusCode:200 ,data:emailData});
    } else {
      res.status(401).json({ message: "invalid code" });
    }
  } catch (error) {
    console.error("error for verify code", error);
    res.status(500).json({ error: "internal server error" });
  }
};

export { emailController, verifyCode };
