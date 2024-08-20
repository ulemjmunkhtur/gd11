const ProductService = require('../services/productService');


exports.getProductsByCategoryName = async (req, res) => {
  try {
    const { categoryName } = req.params;
    const products = await ProductService.getProductsByCategoryName(categoryName);
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch products by category name' });
  }
};

exports.createProduct = async (req, res) => {
  try {
    const productData = req.body;
    console.log(productData);
    const product = await ProductService.createProduct(productData);
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAllProducts = async (req, res) => {
  try {
    const products = await ProductService.getAllProducts();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


exports.getProductById = async (req, res) => {
  try {
    const { id } = req.params; // Make sure you're using 'id' and not 'category'
    const product = await ProductService.getProductById(id);
    res.json(product);
  } catch (error) {
    console.error('Error in getProductById controller:', error);
    res.status(400).json({ error: error.message });
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    const productData = req.body;
    const updatedProduct = await ProductService.updateProduct(productId, productData);
    res.json(updatedProduct);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    await ProductService.deleteProduct(productId);
    res.sendStatus(204);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};