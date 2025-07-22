const mongoose = require('mongoose');

const staffSchema = new mongoose.Schema({
    name: String,
    role: String,
    photo: String, // URL to image
    email: String,
    phone: String,
});

module.exports = mongoose.model('Staff', staffSchema);
