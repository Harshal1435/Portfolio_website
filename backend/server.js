const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Nodemailer Transporter
const transporter = nodemailer.createTransport({
  service: "Gmail", // You can use other services like Yahoo, Outlook, etc.
  auth: {
    user: "raghatateharshal4@gmail.com", // Replace with your email
    pass: "onxj egey gurh lkdn", // Replace with your email password or app-specific password
  },
});

// Contact Form Route
app.post("/send", (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: email,
    to: "raghatateharshal4@gmail.com", // Ressssplace with your email (the recipient)
    subject: `New Message from ${name}`,
    text: `You have received a new message from your website's contact form:\n\nName: ${name}\nEmail: ${email}\nMessage:\n${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
      return res.status(500).send("Something went wrong. Please try again later.");
    }
    console.log("Email sent:", info.response);
    res.status(200).send("Your message has been sent successfully!");
  });
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
