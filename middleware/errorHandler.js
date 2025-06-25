function notFound(req, res, next) {
  res.status(404).json({ message: 'Route not found' });
}

function errorHandler(err, req, res, next) {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal server error' });
}

module.exports = { notFound, errorHandler };
