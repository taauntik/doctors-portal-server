const bcrypt = require("bcrypt");
const User = require("../models/people");

// add user
async function addUser(req, res) {
  let newUser;
  const hashedPassword = await bcrypt.hash(req.body.password, 10);
  newUser = new User({
    ...req.body,
    password: hashedPassword,
  });

  // save the user and send error
  try {
    const result = await newUser.save();
    res.status(200).json({
      message: "User was created successfully",
    });
  } catch (err) {
    res.status(500).json({
      error: "There was a server side!",
    });
  }
}

// find user by id
async function findUserById(req, res) {
  try {
    const user = await User.findOne({ _id: req.params.id });
    res.status(200).json({
      data: user,
    });
  } catch (err) {
    res.status(500).json({
      error: "There was a server side error",
    });
  }
}

module.exports = { addUser, findUserById };
