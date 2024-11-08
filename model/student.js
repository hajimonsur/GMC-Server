
const mongoose = require("mongoose");
const studentSchema = new mongoose.Schema({

    // model schema will be here
});

const Student = mongoose.model("Student", studentSchema);
module.exports = Student;