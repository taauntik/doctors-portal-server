// external imports
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const createError = require("http-errors");

// internal imports
const appointmentRoutes = require("./routes/appointmentRoutes");

dotenv.config();

const app = express();

app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

// database connection
mongoose
  .connect(process.env.MONGO_CONNECTION_STRING)
  .then(() => {
    app.listen(process.env.PORT, () =>
      console.log(`listening to port ${process.env.PORT}`)
    );
  })
  .catch((err) => createError(500, "There was a server side error!"));

// routing setup
app.use("/appointment", appointmentRoutes);

app.get("/", (req, res) => {
  res.send("Hello world");
});
