const router = require('express').Router();
const { verifyToken, stripToken } = require('../middleware');

router.get('/', (req, res) => {res.send({ message: 'this is the auth router' })});

module.exports = router;