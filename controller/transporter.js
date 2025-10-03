import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config(); // Load .env

// ✅ Gmail SMTP transporter for Render
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",  // Gmail SMTP server
  port: 587,               // Must use 587 for TLS on Render
  secure: false,           // false for port 587
  auth: {
    user: process.env.EMAIL_USER, // Your Gmail
    pass: process.env.EMAIL_PASS, // Gmail App Password
  },
  logger: true,
  debug: true,
});

// Verify connection
transporter.verify()
  .then(() => console.log("✅ Gmail SMTP ready on Render"))
  .catch((err) => console.error("❌ SMTP connection error:", err));

export default transporter;
