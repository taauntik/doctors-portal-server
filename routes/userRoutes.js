const express = require("express");
const { addUser, findUserById } = require("../controllers/userController");

const router = express.Router();

// add user
router.post("/", addUser);

// find user with userId
router.get("/:id", findUserById);

module.exports = router;
