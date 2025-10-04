// import nodemailer from "nodemailer";
// import dotenv from "dotenv";

// dotenv.config(); // Load .env

// const transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: process.env.SMTP_USER,
//     pass: process.env.SMTP_PASS, // App Password
//   },
//   logger: true,
//   debug: true,
// });

// // Verify connection
// transporter.verify()
//   .then(() => console.log("Mail server ready"))
//   .catch(console.error);

// export default transporter; // ES module default export
// import nodemailer from "nodemailer";
// import dotenv from "dotenv";

// dotenv.config(); // Load .env

// // ✅ Gmail SMTP transporter for Render
// const transporter = nodemailer.createTransport({
//   host: "smtp.gmail.com",
//   port: 587,
//   secure: false, // false for TLS
//   auth: {
//     user: process.env.EMAIL_USER,
//     pass: process.env.EMAIL_PASS,
//   },
//   logger: true,
//   debug: true,
//   tls: {
//     rejectUnauthorized: false // Prevents certificate errors on cloud hosts
//   }
// });


// // Verify connection
// transporter.verify()
//   .then(() => console.log("✅ Gmail SMTP ready on Render"))
//   .catch((err) => console.error("❌ SMTP connection error:", err));

// export default transporter;
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const transporter = nodemailer.createTransport({
  host: 'smtp-relay.sendinblue.com',
  port: 587,
  secure: false, // Use TLS
  auth: {
    user: process.env.SMTP_USER, // Your verified sender email (e.g., info@flaremindstech.com)
    pass: process.env.SMTP_PASS, // The SMTP key you generated
  },
  logger: true,
  debug: true,
});

transporter.verify()
  .then(() => console.log('Brevo SMTP ready'))
  .catch(err => console.error('Brevo SMTP error:', err));




// xsmtpsib-7f34199e3abd46b235ec37e1f53f86be2033f7b5379ee16cfa17eded75c9c0ec-h0cEpnSJVkNRajbz
