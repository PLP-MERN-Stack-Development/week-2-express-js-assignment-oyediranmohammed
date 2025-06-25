const express = require('express');
const {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct
} = require('../controllers/productController');

const authenticate = require('../middleware/authMiddleware');
const paginate = require('../utils/pagination');
const products = require('../data/products');

const router = express.Router();

// Apply pagination middleware before the controller
router.get('/', paginate(products), getAllProducts);

router.get('/:id', getProductById);
router.post('/', authenticate, createProduct);
router.put('/:id', authenticate, updateProduct);
router.delete('/:id', authenticate, deleteProduct);

module.exports = router;
