import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config(); // Load .env

// ✅ Gmail SMTP transporter for Render
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // false for TLS
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  logger: true,
  debug: true,
  tls: {
    rejectUnauthorized: false // Prevents certificate errors on cloud hosts
  }
});


// Verify connection
transporter.verify()
  .then(() => console.log("✅ Gmail SMTP ready on Render"))
  .catch((err) => console.error("❌ SMTP connection error:", err));

export default transporter;

