const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/productController');

router.post('/', ProductController.createProduct);
router.get('/', ProductController.getAllProducts);
router.get('/:id', ProductController.getProductById);
router.put('/:id', ProductController.updateProduct);
router.delete('/:id', ProductController.deleteProduct);
router.get('/category/:categoryName', ProductController.getProductsByCategoryName);

module.exports = router;