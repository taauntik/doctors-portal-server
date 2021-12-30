// external imports
const express = require("express");

// internal imports
const {
  addAppointment,
  getAppointmentsByDate,
  changeIsVisited,
  getAllAppointment,
  getPendingAppointments,
  todaysAppointments,
} = require("../controllers/appointmentConroller");

const router = express.Router();

// add appointment
router.post("/", addAppointment);

// get appointments by date
router.get("/", getAppointmentsByDate);

// update isvisited field with findByIdAndUpdate
router.put("/", changeIsVisited);

// get all the appointments
router.get("/get_all_appointment", getAllAppointment);

// get all pending appointments
router.get("/pending_appointments", getPendingAppointments);

// get today's appointment
router.get("/todays_appointment", todaysAppointments);

// export
module.exports = router;
