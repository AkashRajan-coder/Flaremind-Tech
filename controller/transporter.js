import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,             // Must use 587 on Render
  secure: false,         // TLS
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  tls: { rejectUnauthorized: false }, // Avoid cert errors
  logger: true,
  debug: true,
});

transporter.verify()
  .then(() => console.log("✅ Gmail SMTP ready on Render"))
  .catch(err => console.error("❌ SMTP connection error:", err));

export default transporter;
