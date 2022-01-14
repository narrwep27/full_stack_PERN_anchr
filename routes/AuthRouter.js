const router = require('express').Router();

router.get('/', (req, res) => {res.send({ message: 'this is the auth router' })});

module.exports = router;