function paginate(dataArray) {
  return (req, res, next) => {
    let { page = 1, limit = 10 } = req.query;

    page = parseInt(page);
    limit = parseInt(limit);

    if (isNaN(page) || isNaN(limit) || page <= 0 || limit <= 0) {
      return res.status(400).json({ message: 'Invalid pagination parameters' });
    }

    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    const paginatedResults = dataArray.slice(startIndex, endIndex);

    res.paginatedResults = {
      page,
      limit,
      totalItems: dataArray.length,
      totalPages: Math.ceil(dataArray.length / limit),
      results: paginatedResults
    };

    next();
  };
}

module.exports = paginate;
