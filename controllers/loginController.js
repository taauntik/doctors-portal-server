// external imports
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

// internal imports
const User = require("../models/people");

// do login
async function login(req, res, next) {
  try {
    // find a user who has a same email
    const user = await User.findOne({
      email: req.body.email,
    });

    if (user && user._id) {
      const isValidatePassword = await bcrypt.compare(
        req.body.password,
        user.password
      );

      if (isValidatePassword) {
        // prepare the user object to validate token
        const userObject = {
          userid: user._id,
          username: user.name,
          email: user.email,
          avatar: user.avatar || null,
          role: user.role,
        };

        // generate the token
        const token = jwt.sign(userObject, process.env.JWT_SECRET);

        res.status(200).json({
          message: "Successfully authorized!",
          token,
        });
        next();
      } else {
        throw createError("Login failed! Please try again.");
      }
    } else {
      throw createError("Login failed! Please try again.");
    }
  } catch (err) {
    res.status(200).json({
      error: "There was a problem on server side!",
    });
  }
}

module.exports = { login };
