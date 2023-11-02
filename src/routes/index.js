const express = require('express');
const { login } = require('../controllers/auth');
const { createUser } = require('../controllers/users');
const router = express.Router();

router.route('/').get((req, res) => {
  res.status(200).json({
    message: 'Home route got hit',
  });
});

router.route('/signup').post(createUser);

router.route('/login').get(login);

module.exports = router;
