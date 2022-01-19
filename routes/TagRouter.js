const Router = require('express').Router();
const controller = require('../controllers/TagController');
const { stripToken, verifyToken } = require('../middleware');

Router.get('/:tag_id', controller.GetTagByID);
Router.get('/', controller.GetAllTags);
Router.get(`/user/:user_id`, controller.GetTagsByUserId);
Router.post('/new/', stripToken, verifyToken, controller.CreateTag);
Router.put('/:tag_id', stripToken, verifyToken, controller.UpdateTag);
Router.delete('/:tag_id', stripToken, verifyToken, controller.DeleteTag);
Router.get('/user/:user_id', controller.GetTagByUser);

module.exports = Router;
