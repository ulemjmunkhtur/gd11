const ProductService = require('../services/ProductService');

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
    const productId = req.params.id;
    const product = await ProductService.getProductById(productId);
    res.json(product);
  } catch (error) {
    res.status(404).json({ error: error.message });
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