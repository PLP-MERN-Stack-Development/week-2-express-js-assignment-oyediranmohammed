const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');

const productRoutes = require('./routes/productRoutes');
const logger = require('./middleware/logger');
const { notFound, errorHandler } = require('./middleware/errorHandler');

dotenv.config();

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(logger);

// Routes
app.get('/', (req, res) => {
  res.send('Welcome to the Product API! Go to /api/products to see all products.');
});
app.use('/api/products', productRoutes);

// Error Handling
app.use(notFound);
app.use(errorHandler);

module.exports = app;
