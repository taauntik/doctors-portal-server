// external imports
const express = require("express");

// internal imports
const {
  addAppointment,
  getAppointmentsByDate,
  changeIsVisited,
} = require("../controllers/appointmentConroller");

const router = express.Router();

// add appointment
router.post("/", addAppointment);

// get appointments by date
router.get("/", getAppointmentsByDate);

// update isvisited field with findByIdAndUpdate
router.put("/", changeIsVisited);

// export
module.exports = router;
