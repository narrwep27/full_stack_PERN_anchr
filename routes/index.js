const Router = require('express').Router();
const UserRouter = require('./UserRouter');
const TagRouter = require('./TagRouter');
const SessionRouter = require('./SessionRouter');

Router.get('/', (req, res) => {
  res.send('This is root');
});
Router.use('/user', UserRouter);
Router.use('/tag', TagRouter);
Router.use('/sesion', SessionRouter);

module.exports = Router;
