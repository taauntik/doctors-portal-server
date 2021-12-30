// external imports
const express = require("express");

// internal imports
const {
  addAppointment,
  getAppointmentsByDate,
  changeIsVisited,
  getAllAppointment,
  updateStatus,
} = require("../controllers/appointmentConroller");

const router = express.Router();

// add appointment
router.post("/", addAppointment);

// get appointments by date
router.get("/", getAppointmentsByDate);

// update isvisited field with findByIdAndUpdate
router.put("/", changeIsVisited);

// update status field with findByIdAndUpdate
router.put("/update_status", updateStatus);

// get all the appointments
router.get("/get_all_appointment", getAllAppointment);

// export
module.exports = router;
