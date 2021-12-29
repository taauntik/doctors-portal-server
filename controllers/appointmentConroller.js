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

// get appointments by date
async function getAppointmentsByDate(req, res) {
  console.log(req.query.date);
  const date = new Date(req.query.date);
  console.log(date);
  try {
    const appointments = await Appointment.find({
      date: date,
    });
    res.status(200).json({
      data: appointments,
    });
  } catch (err) {
    res.status(500).json({
      error: "There was a server side error",
    });
    console.log(err);
  }
}

// change the value of isvisted field
function changeIsVisited(req, res) {
  const appointmentId = req.query.id;
  const value = req.query.value;
  Appointment.findByIdAndUpdate(
    appointmentId,
    {
      $set: {
        isVisited: value,
      },
    },
    { new: true },
    (err, appointment) => {
      if (!err) {
        res.status(200).json({
          message: "updated succesfully!",
          isVisited: appointment.isVisited,
        });
      } else {
        res.status(500).json({
          error: "There was a server side error",
        });
      }
    }
  );
}

module.exports = {
  addAppointment,
  getAppointmentsByDate,
  changeIsVisited,
};
