const User =require('../models/user.model');

// checkExistUsernameOrEmail

exports.checkExistUsernameOrEmail = async (req, res, next) => {
  try {
    // Username
    let existUser = await User.findOne({
      where: {
        username: req.body.username
      }
    });

    if (existUser) {
      return res.status(400).send({
        message: "Failed! Username is already exist!"
      });
    }

    // Email
   let existEmail = await User.findOne({
      where: {
        email: req.body.email
      }
    });

    if (existEmail) {
      return res.status(400).send({
        message: "Failed! Email is already exist!"
      });
    }

    next();
  } catch (error) {
    return res.status(500).send({
      message: error.message
    });
  }
};


// checkDuplicateUsernameOrEmail

exports.checkDuplicateUsernameOrEmail = async (req, res, next) => {
  try {
    // Username
    let existUser = await User.findOne({
      where: {
        username: req.body.username
      }
    });

    if (!existUser) {
      return res.status(400).send({
        message: "Failed! Username does not exist!"
      });
    }

    // Email
   let existEmail = await User.findOne({
      where: {
        email: req.body.email
      }
    });

    if (!existEmail) {
      return res.status(400).send({
        message: "Failed! Email does not exist!"
      });
    }
    next();
  } catch (error) {
    return res.status(500).send({
      message: error.message
    });
  }
};



