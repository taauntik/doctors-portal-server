const Appointment = require("../models/Appointment");
const createError = require("http-errors");

// add appointment
async function addAppointment(req, res) {
  const appointment = req.body;
  try {
    const newAppointment = new Appointment({
      ...appointment,
    });
    const result = await newAppointment.save();
    res.status(200).json({
      message: "appointment successfully inserted!",
      insertedCount: result.insertedCount,
      success: result.insertedCount > 0,
    });
  } catch (err) {
    res.status(500).json({
      error: "There was a problem on server side",
    });
    console.log(err);
  }
}

module.exports = {
  addAppointment,
};
