const User = require("../models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const dotenv=require("dotenv");
dotenv.config();

const secret_key=process.env.SECRET_KEY

exports.signup = async (req, res) => {
  try {
    const createUser = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 12),
      cpassword: bcrypt.hashSync(req.body.password, 12),
    });

    if (createUser) res.send({ message: "User registered successfully!" });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

exports.signin = async (req, res) => {
  try {
    const user = await User.findOne({
      username: req.body.username,
    });

    if (!user) {
      return res.status(404).send({ message: "User Not found." });
    }

    const passwordIsValid = bcrypt.compareSync(
      req.body.password,
      user.password
    );

    if (!passwordIsValid) {
      return res.status(401).send({
        message: "Invalid Password!",
      });
    }

    const token = jwt.sign({ username: user.username }, secret_key, {
      algorithm: ['RS256'],
      allowInsecureKeySizes: true,
      expiresIn: 129600, // 36 hours
    });

    req.session.token = token;

    return res.status(200).send({
      username: user.username,
      email: user.email,
    });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

exports.signout = async (req, res) => {
  try {
    req.session = null;
    return res.status(200).send({
      message: "You've been signed out!",
    });
  } catch (err) {
    this.next(err);
  }
};

exports.reset = async (req, res) => {
  try {
    // req.session = null;
    const username = req.body.username;

    const existUser = await User.findOne({ username: username });
    return res.status(200).send({
      email: existUser.email,
    });
  } catch (err) {
    this.next(err);
  }
};
