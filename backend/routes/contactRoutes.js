const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");

router.post("/contact", async (req, res) => {
  try {
    const { name, email,phone, message } = req.body;
    const contact = new Contact({ name, email,phone, message });
    await contact.save();
    res.status(201).json({ message: "Message received! We'll get back to you soon." });
  } catch (error) {
    res.status(500).json({ message: "Error saving message", error });
  }
});

module.exports = router;
