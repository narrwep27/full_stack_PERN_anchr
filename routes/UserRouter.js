const Router = require('express').Router();
const controller = require('../controllers/UserController');

Router.get('/:user_id', controller.GetUserById);
Router.get('/', controller.GetAllUsers);
Router.post('/new/', controller.CreateUser);
Router.put('/:user_id', controller.UpdateUser);
Router.delete('/:user_id', controller.DeleteUser);

module.exports = Router;
