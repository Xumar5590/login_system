const User = require('../../models/users');

exports.createUser = async (req, res, next) => {
  try {
    console.log('users controller got hit');
    console.log(req.body);
    const newUser = await User.create(req.body);

    res.status(200).json({
      message: 'User was created',
      data: {
        newUser,
      },
    });
    next();
  } catch (error) {
    console.log(error);
  }
};
