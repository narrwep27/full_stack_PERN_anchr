const { User } = require('../models');
const { hashPassword, comparePassword, createToken } = require('../middleware');

const GetAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.send(users);
  } catch (error) {
    throw error;
  }
};

const GetUserById = async (req, res) => {
  try {
    let id = parseInt(req.params.user_id);
    const user = await User.findByPk(id);
    res.send(user);
  } catch (error) {
    throw error;
  }
};

const CreateUser = async (req, res) => {
  try {
    let user = await User.create(req.body);
    res.send(user);
  } catch (error) {
    // console.log(req);
    throw error;
  }
};

const UpdateUser = async (req, res) => {
  try {
    let id = parseInt(req.params.user_id);
    let userUpdate = await User.update(req.body, {
      where: { id: id },
      returning: true
    });
    res.send(userUpdate);
  } catch (error) {
    throw error;
  }
};

const DeleteUser = async (req, res) => {
  try {
    let id = parseInt(req.params.user_id);
    await User.destroy({ where: { id: id } });
    res.send({ message: `User ID ${id} has been deleted.` });
  } catch (error) {
    throw error;
  }
};

module.exports = {
  GetAllUsers,
  GetUserById,
  CreateUser,
  UpdateUser,
  DeleteUser
};
