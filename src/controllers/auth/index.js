exports.login = (req, res, next) => {
  console.log('login controller got hit');
  res.status(200).json({
    message: 'Login route got hit',
  });
  next();
};
