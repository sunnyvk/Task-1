
const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    title: { type: String, required: true },
    department: { type: String, enum: ['HR', 'Tech', 'Product', 'Leadership'], required: true },
    annualSalary: { type: Number, required: true },
    isDeleted: { type: Boolean, default: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Employee', employeeSchema);
