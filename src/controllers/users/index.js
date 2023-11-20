const jwt = require('jsonwebtoken');
const User = require('../../models/users');

exports.createUser = async (req, res, next) => {
  try {
    console.log('users controller got hit');
    console.log(req.body);
    const newUser = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });

    const token = jwt.sign({ id: newUser._id }, process.env.JWT_KEY, {
      expiresIn: process.env.JWT_EXPIRES_IN,
    });
    console.log('this is token', token);

    res.status(200).json({
      message: 'User was created',
      token,
      data: {
        newUser,
      },
    });
    next();
  } catch (error) {
    console.log(error);
  }
};
