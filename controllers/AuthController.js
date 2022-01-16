const { reset } = require('nodemon');
const { hashPassword, comparePassword, createToken } = require('../middleware');
const middleware = require('../middleware');

const { User } = require('../models');

const Login = async (req, res) => {
  try {
  } catch (error) {
    throw error;
  }
};

const Register = async (req, res) => {
  try {
    const { email, password, username } = req.body;
    let passwordDigest = await middleware.hashPassword(password);
    // let username = name
    const user = await User.create({
      email,
      passwordDigest,
      username
    });
    res.send(user);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  Login,
  Register
};
