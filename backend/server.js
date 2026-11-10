const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Employee = require('./models/Employee');

const app = express();

app.use(express.json());
app.use(cors());



mongoose.connect('mongodb://127.0.0.1:27017/hr_database')
    .then(() => console.log('Connected to MongoDB (hr_database)'))
    .catch((err) =>  console.log('Failed to connect DB', err));


app.get('/api/employees', async (req, res) => {
    try{
        const employees = await Employee.find();
        res.json(employees);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


app.post('/api/employees', async (req, res) => {
    const employee = new Employee({
        fullName: req.body.fullName,
        position: req.body.position,
        phone: req.body.phone,
        hireDate: req.body.hireDate,
        salary: req.body.salary
    });

    try{
        const newEmployee = await employee.save();
        res.status(201).json(newEmployee);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});


app.put('/api/employees/:id', async (req, res) => {
    try{
        const updateEmployee = await Employee.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.json(updateEmployee);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});


app.delete('/api/employees/:id', async (req, res) => {
    try{
        await Employee.findByIdAndDelete(req.params.id);
        res.json({ message: 'Employee deleted' });
    } catch (err) {
        res.status(500).json({  message: err.message });
    }
});


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Backend runs on port: ${PORT}`);
});