const express = require('express');
const router = express.Router();
// ✅ IMPORT YOUR CONTROLLER FUNCTION
const {
  createStaff,
  getAllStaff,
  updateStaff,
  deleteStaff
} = require("../controllers/staffController"); // adjust path if needed


router.get("/", getAllStaff);
router.post("/", createStaff);
router.put("/:id", updateStaff);
router.delete("/:id", deleteStaff);

module.exports = router;
