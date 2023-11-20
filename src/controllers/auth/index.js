const User = require('../../models/users');

exports.login = async (req, res, next) => {
  console.log('login controller got hit');

  const { email, password } = req.body;

  // check if email and password exists
  if (!email || !password) {
    return res.status(400).json({
      message: 'Email or Password do not match',
    });
  }

  const user = await User.findOne({ email }).select('+password');

  console.log('this is the user', user);

  res.status(200).json({
    message: 'Login route got hit',
  });
  next();
};
