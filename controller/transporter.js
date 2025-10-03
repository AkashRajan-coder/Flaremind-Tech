import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config(); // Load .env

const transporter = nodemailer.createTransport({
  host: "smtp.resend.com",      // Changed from Gmail
  port: 587,                     // Standard TLS port
  secure: false,                 // false for port 587
  auth: {
    user: "resend",              // Resend requires this literal value
    pass: process.env.RESEND_API_KEY, // Your Resend API key
  },
  logger: true,
  debug: true,
});

// Verify connection
transporter.verify()
  .then(() => console.log("✅ Mail server ready (Resend)"))
  .catch(console.error);

export default transporter; // Keep ES module export
