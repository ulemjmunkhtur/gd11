const Product = require('../models/Product'); // Assuming the product model path
const ProductCategory = require('../models/ProductCategory'); // Assuming the product category model path
const Sequelize = require('sequelize');
const { Op } = Sequelize;

// Create a new product
async function createProduct(productDetails) {
    try {
        // Assuming productDetails contains all necessary product information including category name
        const category = await ProductCategory.findOne({
            where: { Name: productDetails.productCategoryName }
        });

        if (!category) {
            console.error('Category not found!');
            return;
        }

        const newProduct = await Product.create({
            CategoryID: category.CategoryID,
            Name: productDetails.Name,
            volume: productDetails.volume,
            function: productDetails.function,
            skinbenefits: productDetails.skinbenefits,
            characteristics: productDetails.characteristics,
            howtouse: productDetails.howtouse,
            Price: productDetails.Price
        });

        console.log('Product created successfully:', newProduct.toJSON());
        return newProduct;
    } catch (error) {
        console.error('Failed to create product:', error);
    }
}


// Retrieve all products
async function getAllProducts() {
    try {
        const products = await Product.findAll();
        return products.map(product => product.toJSON());
    } catch (error) {
        console.error('Error retrieving all products:', error);
        return [];
    }
}

// Read product by ID
async function getProductById(productId) {
    try {
      // Ensure productId is a number
      const id = parseInt(productId, 10);
      
      if (isNaN(id)) {
        throw new Error('Invalid ProductID: must be a number');
      }
  
      const product = await Product.findByPk(id);
      
      if (!product) {
        throw new Error('Product not found');
      }
  
      return product;
    } catch (error) {
      console.error('Error retrieving product:', error);
      throw error;
    }
  };
// Retrieve products by name
async function getProductsByName(productName) {
    try {
        const products = await Product.findAll({
            where: {
                Name: {
                    [Op.iLike]: `%${productName}%` // Use iLike for case-insensitive matching
                }
            }
        });

        if (products && products.length > 0) {
            console.log('Products found:', products.map(product => product.toJSON()));
            return products;
        } else {
            console.log('No products found with that name.');
            return [];
        }
    } catch (error) {
        console.error('Error retrieving products by name:', error);
    }
}


// Update product
async function updateProduct(productId, updates) {
    try {
        const product = await Product.findByPk(productId);
        if (product) {
            const updatedProduct = await product.update(updates);
            console.log('Product updated successfully:', updatedProduct.toJSON());
            return updatedProduct;
        } else {
            console.log('Product not found!');
            return null;
        }
    } catch (error) {
        console.error('Failed to update product:', error);
    }
}

// Delete product
async function deleteProduct(productId) {
    try {
        const result = await Product.destroy({
            where: { ProductID: productId }
        });
        if (result > 0) {
            console.log('Product deleted successfully');
            return true;
        } else {
            console.log('No product found to delete');
            return false;
        }
    } catch (error) {
        console.error('Error deleting product:', error);
    }
}

async function getProductsByCategoryName(categoryName) {
    try {
      console.log(`Fetching products for category: ${categoryName}`);
  
      if (categoryName === '') {
        // Handle the 'ALL' case by fetching all products
        const products = await Product.findAll();
        console.log(`Found ${products.length} products across all categories`);
        return products;
      }
  
      const category = await ProductCategory.findOne({ 
        where: { Name: categoryName },
        attributes: ['CategoryID', 'Name'] // Only select the fields you need
      });
  
      if (!category) {
        console.log(`Category not found: ${categoryName}`);
        return []; // Return an empty array instead of throwing an error
      }
  
      console.log(`Found category:`, JSON.stringify(category, null, 2));
  
      const products = await Product.findAll({ 
        where: { CategoryID: category.CategoryID },
        attributes: ['ProductID', 'Name', 'CategoryID'] // Adjust as needed
      });
  
      console.log(`Found ${products.length} products for category ${categoryName}`);
      return products;
  
    } catch (error) {
      console.error('Error in getProductsByCategoryName:', error);
      throw error; // Rethrow the error with more context
    }
  };

// Export functions
module.exports = {
    createProduct,
    getProductsByName,
    updateProduct,
    deleteProduct,
    getAllProducts,
    getProductById,
    getProductsByCategoryName
};
