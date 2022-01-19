const Router = require('express').Router();
const controller = require('../controllers/SessionController');
const { stripToken, verifyToken } = require('../middleware');

Router.get('/', controller.GetAllSessions);
Router.get('/:session_id', controller.GetSessionByID);
Router.get(`/user/:user_id`, controller.GetSessionByUserId);
Router.post('/new/', controller.CreateSession);
Router.put('/:session_id', controller.UpdateSession);
Router.delete('/:session_id', controller.DeleteSession);

module.exports = Router;
