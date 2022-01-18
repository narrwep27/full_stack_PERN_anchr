const Router = require('express').Router();
const controller = require('../controllers/SessionController');
const { stripToken, verifyToken } = require('../middleware');

Router.get('/', controller.GetAllSessions);
Router.get('/:session_id', controller.GetSessionByID);
Router.get(`/user/:user_id`, controller.GetSessionByUserId);
Router.post('/new/', stripToken, verifyToken, controller.CreateSession);
Router.put('/:session_id', stripToken, verifyToken, controller.UpdateSession);
Router.delete(
  '/:session_id',
  stripToken,
  verifyToken,
  controller.DeleteSession
);

module.exports = Router;
