const router = require('express').Router();
const { verifyToken, stripToken } = require('../middleware');
const controller = require('../controllers/AuthController');

router.get('/', (req, res) => {
  res.send({ message: 'this is the auth router' });
});
router.post(`/auth/register`, controller.Register);
router.post(`/auth/login`, controller.Login);

module.exports = router;
