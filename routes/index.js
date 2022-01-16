const Router = require('express').Router();
const UserRouter = require('./UserRouter');
const TagRouter = require('./TagRouter');
const SessionRouter = require('./SessionRouter');
const AuthRouter = require('./AuthRouter');

Router.get('/', (req, res) => {
  res.send('This is root');
});
Router.use('/user', UserRouter);
Router.use('/tag', TagRouter);
Router.use('/sesion', SessionRouter);
Router.use('/auth', AuthRouter);

module.exports = Router;