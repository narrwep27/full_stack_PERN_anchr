const Router = require('express').Router();
const controller = require('../controllers/UserController');
const { stripToken, verifyToken } = require('../middleware');

Router.get('/:user_id', controller.GetUserById);
Router.get('/', controller.GetAllUsers);
Router.post('/new/', stripToken, verifyToken, controller.CreateUser);
Router.put('/:user_id', stripToken, verifyToken, controller.UpdateUser);
Router.delete('/:user_id', stripToken, verifyToken, controller.DeleteUser);

module.exports = Router;
