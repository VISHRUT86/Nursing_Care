const mongoose = require("mongoose");
const Staff = require("./models/Staff"); // Update path as needed

const staffData = [/* paste the above array here */
  {
    name: "Aarohi Sharma",
    role: "Project Manager",
    photo: "https://randomuser.me/api/portraits/women/65.jpg",
    email: "aarohi.sharma@example.com",
    phone: "+91 9876543210",
  },
  {
    name: "Ishita Verma",
    role: "Software Engineer",
    photo: "https://randomuser.me/api/portraits/women/68.jpg",
    email: "ishita.verma@example.com",
    phone: "+91 9812345678",
  },
  {
    name: "Riya Kapoor",
    role: "Frontend Developer",
    photo: "https://randomuser.me/api/portraits/women/70.jpg",
    email: "riya.kapoor@example.com",
    phone: "+91 9123456780",
  },
  {
    name: "Sanya Mehta",
    role: "UI/UX Designer",
    photo: "https://randomuser.me/api/portraits/women/72.jpg",
    email: "sanya.mehta@example.com",
    phone: "+91 9834567890",
  },
  {
    name: "Neha Singh",
    role: "Marketing Specialist",
    photo: "https://randomuser.me/api/portraits/women/75.jpg",
    email: "neha.singh@example.com",
    phone: "+91 9900123456",
  },
  {
    name: "Divya Joshi",
    role: "Content Strategist",
    photo: "https://randomuser.me/api/portraits/women/78.jpg",
    email: "divya.joshi@example.com",
    phone: "+91 9888777666",
  },
  {
    name: "Arjun Patel",
    role: "Backend Developer",
    photo: "https://randomuser.me/api/portraits/men/60.jpg",
    email: "arjun.patel@example.com",
    phone: "+91 9000011122",
  },
  {
    name: "Kabir Malhotra",
    role: "DevOps Engineer",
    photo: "https://randomuser.me/api/portraits/men/64.jpg",
    email: "kabir.malhotra@example.com",
    phone: "+91 9123456789",
  },
  {
    name: "Raghav Bansal",
    role: "Security Analyst",
    photo: "https://randomuser.me/api/portraits/men/67.jpg",
    email: "raghav.bansal@example.com",
    phone: "+91 9998887776",
  },
  {
    name: "Yash Agarwal",
    role: "Data Analyst",
    photo: "https://randomuser.me/api/portraits/men/71.jpg",
    email: "yash.agarwal@example.com",
    phone: "+91 9012345670",
  },
];



mongoose.connect("mongodb://localhost:27017/MrDas", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
})
.then(async () => {
  await Staff.deleteMany({});
  await Staff.insertMany(staffData);
  console.log("Staff data inserted successfully");
  mongoose.disconnect();
})
.catch((err) => {
  console.error("Error seeding staff data:", err);
});
