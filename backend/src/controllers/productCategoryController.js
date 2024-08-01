const ProductCategoryService = require('../services/productCategoryService');

exports.createProductCategory = async (req, res) => {
  try {
    const productCategoryData = req.body;
    const productCategory = await ProductCategoryService.createProductCategory(productCategoryData);
    res.status(201).json(productCategory);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAllProductCategories = async (req, res) => {
  try {
    const productCategories = await ProductCategoryService.getAllProductCategories();
    res.json(productCategories);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getProductCategoryById = async (req, res) => {
  try {
    const productCategoryId = req.params.id;
    const productCategory = await ProductCategoryService.getProductCategoryById(productCategoryId);
    res.json(productCategory);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

exports.updateProductCategory = async (req, res) => {
  try {
    const productCategoryId = req.params.id;
    const productCategoryData = req.body;
    const updatedProductCategory = await ProductCategoryService.updateProductCategory(productCategoryId, productCategoryData);
    res.json(updatedProductCategory);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteProductCategory = async (req, res) => {
  try {
    const productCategoryId = req.params.id;
    await ProductCategoryService.deleteProductCategory(productCategoryId);
    res.sendStatus(204);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};