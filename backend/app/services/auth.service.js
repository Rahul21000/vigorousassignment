const User = require("../models/User");


exports.signin = async () => {
  // check all register user
  try {
    const user = await User.find({});
    return user;
  } catch (error) {
    return error;
  }
};

