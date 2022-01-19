const Router = require('express').Router();
const controller = require('../controllers/TagController');

Router.get('/', controller.GetAllTags);
Router.get('/:tag_id', controller.GetTagByID);
Router.post('/new/', controller.CreateTag);
Router.put('/:tag_id', controller.UpdateTag);
Router.delete('/:tag_id', controller.DeleteTag);
Router.get('/user/:user_id', controller.GetTagByUser);

module.exports = Router;
