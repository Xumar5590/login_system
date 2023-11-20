const express = require('express');
const { login } = require('../controllers/auth');
const { createUser, getAllUsers } = require('../controllers/users');
const router = express.Router();

router.route('/').get((req, res) => {
  res.status(200).json({
    message: 'Home route got hit',
  });
});

router.route('/signup').post(createUser);
router.route('/login').post(login);

module.exports = router;
