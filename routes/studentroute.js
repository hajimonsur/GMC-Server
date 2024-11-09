// student route will here
const express = require("express");
const router = express.Router();
const Student = require("../model/Student");

// get all students
router.get("/all-students", async (req, res) => {
  
    try {
        const students = await Student.find();
        res.status(200).json({
            success: true,
            data: students
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});



module.exports = router;