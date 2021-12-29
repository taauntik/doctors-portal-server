const mongoose = require("mongoose");

const AppointmentSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  age: {
    type: String,
    required: true,
  },
  weight: {
    type: String,
    required: true,
  },
  date: Date,
  createdAt: Date,
  service: {
    type: String,
    required: true,
  },
  isVisited: {
    type: Boolean,
    default: false,
  }
});

const Appointment = mongoose.model("Appointment", AppointmentSchema);

module.exports = Appointment;
