const router = require('express').Router();
const { verifyToken, stripToken } = require('../middleware');
let test = 'edit to merge to main';

router.get('/', (req, res) => {res.send({ message: 'this is the auth router' })});

module.exports = router;