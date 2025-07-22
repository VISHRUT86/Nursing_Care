const mongoose = require("mongoose");
const Staff = require("./models/Staff");

const MONGO_URI = "mongodb+srv://vishrut:vishrut1@cluster0.flc2l.mongodb.net/MrDas"; 
const staffData = [
  {
    name: "Ishita Verma",
    role: "Software Engineer",
    photo: "https://randomuser.me/api/portraits/women/68.jpg",
    email: "ishita.verma@example.com",
    phone: "+91 9812345678"
  },
  {
    name: "Riya Kapoor",
    role: "Frontend Developer",
    photo: "https://randomuser.me/api/portraits/women/70.jpg",
    email: "riya.kapoor@example.com",
    phone: "+91 9123456780"
  },
  {
    name: "Sanya Mehta",
    role: "UI/UX Designer",
    photo: "https://randomuser.me/api/portraits/women/72.jpg",
    email: "sanya.mehta@example.com",
    phone: "+91 9834567890"
  },
  {
    name: "Neha Singh",
    role: "Marketing Specialist",
    photo: "https://randomuser.me/api/portraits/women/75.jpg",
    email: "neha.singh@example.com",
    phone: "+91 9900123456"
  },
  {
    name: "Updated Name",
    role: "Updated Role",
    photo: "https://example.com/image.jpg",
    email: "test@example.com",
    phone: "1234567890"
  },
  {
    name: "Arjun Patel",
    role: "Backend Developer",
    photo: "https://randomuser.me/api/portraits/men/60.jpg",
    email: "arjun.patel@example.com",
    phone: "+91 9000011122"
  },
  {
    name: "Kabir Malhotra",
    role: "DevOps Engineer",
    photo: "https://randomuser.me/api/portraits/men/64.jpg",
    email: "kabir.malhotra@example.com",
    phone: "+91 9123456789"
  },
  {
    name: "Yash Agarwal",
    role: "Data Analyst",
    photo: "https://randomuser.me/api/portraits/men/71.jpg",
    email: "yash.agarwal@example.com",
    phone: "+91 9012345670"
  }
];

mongoose
  .connect(MONGO_URI, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true
  })
  .then(async () => {
    console.log("MongoDB connected!");

    await Staff.deleteMany(); // Optional: Clears existing data
    await Staff.insertMany(staffData);

    console.log("Staff data inserted successfully!");
    mongoose.disconnect();
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });
