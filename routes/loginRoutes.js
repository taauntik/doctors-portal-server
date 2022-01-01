// external imports
const express = require("express");

// internal imports
const { login } = require("../controllers/loginController");

const router = express.Router();

router.post("/", login);

module.exports = router;
