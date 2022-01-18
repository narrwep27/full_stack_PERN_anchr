const router = require('express').Router();
const { verifyToken, stripToken } = require('../middleware');
const controller = require('../controllers/AuthController');

router.post(`/register`, controller.Register);
router.post(`/login`, controller.Login);

router.get(`/session`, stripToken, verifyToken, controller.CheckSession)

module.exports = router;
