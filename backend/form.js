const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
require("dotenv").config();

// Define the route to handle form submissions
router.post("/submit-form", (req, res) => {
  // Extract the form data from the request body
  const { email, message } = req.body;

  // Create a nodemailer transporter
  const transporter = nodemailer.createTransport({
    // Set up your email provider details here
    service: "gmail",
    auth: {
      user: "Pulumbu11@gmail.com",
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  // Create the email message
  const mailOptions = {
    from: `${email}`,
    to: "pulumbu11@gmail.com",
    subject: "New form submission",
    text: `Email: ${email}\n\nMessage: ${message}`,
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send("Error sending email");
    } else {
      console.log("Email sent: " + info.response);
      res.send("Email sent successfully");
    }
  });
});

module.exports = router;
