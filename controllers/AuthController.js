const { User } = require('../models');
const { hashPassword, comparePassword, createToken } = require('../middleware');

const Login = async (req, res) => {
  try {
    const user = await User.findOne({
      where: { username: req.body.username },
      raw: true
    });
    if (user && (await comparePassword(req.body.password, user.passwordDigest))) {
      let payload = {
        id: user.id,
        username: user.username,
        email: user.email
      };
      let token = createToken(payload);
      return res.send({
        user: payload,
        token: token
      });
    } else {
      res.status(401).send({ status: 'Error', message: 'Unauthorized' });
    };
  } catch (error) {
    throw error;
  }
};

const Register = async (req, res) => {
  try {
    const { email, password, username } = req.body;
    let passwordDigest = await hashPassword(password);
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

const CheckSession = async (req, res) => {
  const { payload } = res.locals
  res.send(payload)
}

module.exports = {
  Login,
  Register,
  CheckSession
};
