import nodemailer from "nodemailer";

// Create a transporter object using SMTP transport
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com", // Your SMTP server hostname
  port: 587, // Port of your SMTP server
  secure: false, // Use SSL/TLS or not
  auth: {
    user: "kshitish.naxtre@gmail.com", // Your email address
    pass: "cclmwpzgttpowvgd", // Your email password or application-specific password
  },
});

const emailSender = (mailOptions) => {
  let successful;
  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error occurred:", error);
      successful = false;
    } else {
      console.log("Email sent:", info.response);
      successful = true;
    }
  });
  return successful;
};

export { emailSender };
