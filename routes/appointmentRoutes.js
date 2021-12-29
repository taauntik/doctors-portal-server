// external imports
const express = require("express");

// internal imports
const { addAppointment } = require("../controllers/appointmentConroller");

const router = express.Router();

// add appointment
router.post("/", addAppointment);

// export
module.exports = router;