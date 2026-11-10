const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    fullname: { type: String, required: true },
    position: { type: String, required: true },
    phone: { type: String, required: true },
    hiredate: { type: Date, required: true },
    salay: { type: Number, required: true }
});

module.exports = mongoose.model('Employee', employeeSchema)