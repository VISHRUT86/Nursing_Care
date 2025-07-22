const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
const staffRoutes = require('./routes/staffRoutes.js');

dotenv.config();
const app = express();



// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("MongoDB connected"))
  .catch(err => console.log("MongoDB connection error:", err));

// Contact model
const Contact = require("./models/Contact");

// Routes
app.get("/api/hello", (req, res) => {
    res.json({ message: "Hello from backend!" });
});


app.use("/api/staffs", staffRoutes);


app.post("/api/contact", async (req, res) => {
    try {
        const { name, email, phone, message } = req.body;

        // 1. Save to MongoDB
        const newContact = new Contact({ name, email, phone, message });
        await newContact.save();

        // 2. Setup Nodemailer
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

       const mailOptions = {
    from: `"${name}" <${email}>`,  // Use your authenticated Gmail address here
    to: process.env.EMAIL_USER,                     // You receive it
    replyTo: email,                                 // User's email from the contact form
    subject: `New message from ${name}`,
     html: `
    <h3>New Contact Request</h3>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <p><strong>Message:</strong><br>${message}</p>
  `
};


        await transporter.sendMail(mailOptions);

        res.status(200).json({ message: "Form submitted and email sent successfully!" });
    } catch (error) {
        console.error("Email send/save error:", error);
        res.status(500).json({ message: "Failed to submit form or send email." });
    }
});

// 

// Start server
const PORT = process.env.PORT || 5500;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});


