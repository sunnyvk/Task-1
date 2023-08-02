
const Employee = require('../models/employeeModel');

exports.createEmployee = async (req, res) => {
  try {
    const { name, title, department, annualSalary } = req.body;
    const newEmployee = new Employee({
      name,
      title,
      department,
      annualSalary,
    });
    const savedEmployee = await newEmployee.save();
    res.status(201).json(savedEmployee);
  } catch (err) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.updateEmployee = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, department, annualSalary } = req.body;
    const updatedEmployee = await Employee.findByIdAndUpdate(
      id,
      { title, department, annualSalary },
      { new: true }
    );
    if (!updatedEmployee) {
      return res.status(404).json({ error: 'Employee not found' });
    }
    res.json(updatedEmployee);
  } catch (err) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.deleteEmployee = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedEmployee = await Employee.findByIdAndUpdate(
      id,
      { isDeleted: true },
      { new: true }
    );
    if (!deletedEmployee) {
      return res.status(404).json({ error: 'Employee not found' });
    }
    res.json(deletedEmployee);
  } catch (err) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
