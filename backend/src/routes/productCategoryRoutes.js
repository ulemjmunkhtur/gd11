const express = require('express');
const router = express.Router();
const ProductCategoryController = require('../controllers/productCategoryController');

router.post('/', ProductCategoryController.createProductCategory);
router.get('/', ProductCategoryController.getAllProductCategories);
router.get('/:id', ProductCategoryController.getProductCategoryById);
router.put('/:id', ProductCategoryController.updateProductCategory);
router.delete('/:id', ProductCategoryController.deleteProductCategory);

module.exports = router;