// import nodemailer from "nodemailer";
// import dotenv from "dotenv";

// dotenv.config(); // Load .env

// const transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: process.env.EMAIL_USER,
//     pass: process.env.EMAIL_PASS, // App Password
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

// mailer.js
import { Resend } from "resend";
import dotenv from "dotenv";
dotenv.config();

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendMail = async (mailOptions) => {
  try {
    const { to, subject, html, text } = mailOptions;

    const { data, error } = await resend.emails.send({
      from: process.env.DEFAULT_FROM,
      to,
      subject,
      html: html || `<p>${text}</p>`,
    });

    if (error) throw error;
    console.log(`✅ Email sent to ${to}`);
    return { success: true };
  } catch (err) {
    console.error(`❌ Failed to send email to ${mailOptions.to}:`, err.message);
    return { success: false, error: err.message };
  }
};


// xsmtpsib-7f34199e3abd46b235ec37e1f53f86be2033f7b5379ee16cfa17eded75c9c0ec-h0cEpnSJVkNRajbz
