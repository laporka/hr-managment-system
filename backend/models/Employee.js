const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    fullName: { type: String, required: true },
    position: { type: String, required: true },
    phone: { type: String, required: true },
    hireDate: { type: Date, required: true },
    salary: { type: Number, required: true }
});

module.exports = mongoose.model('Employee', employeeSchema)