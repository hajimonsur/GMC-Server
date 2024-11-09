
const mongoose = require("mongoose");
const studentSchema = new mongoose.Schema({

    firstName: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    address: {
        type: String,
        trim: true
    },
    dob: {
        type: Date
    },
    gender: {
        type: String,
        trim: true
    },
    phoneNo: {
        type: String,
        trim: true
    },
    class: {
        type: String,
        trim: true
    },
    isStudent: {
        type: Boolean,
        default: false
    },
    username: {
        type: String,
        default: "student"
    },
    password: {
        type: String,
        default: "pass"
    }

   
});

const Student = mongoose.model("Student", studentSchema);
module.exports = Student;