const { Router } = require('express');
const router = Router();
const AuthRouter = require('./AuthRouter');

router.get('/', (req, res) => {
  res.send('This is root');
});
router.use('/auth', AuthRouter);

module.exports = router;
