function authenticate(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader || authHeader !== 'Bearer secrettoken') {
    return res.status(401).json({ message: 'Unauthorized' });
  }
  next();
}

module.exports = authenticate;
