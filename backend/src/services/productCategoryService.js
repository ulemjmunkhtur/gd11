const ProductCategory = require('../models/ProductCategory'); // Assuming the ProductCategory model path

// Create a new product category
async function createProductCategory(categoryData) {
    try {
        const newCategory = await ProductCategory.create(categoryData);
        console.log('Product category created successfully:', newCategory.toJSON());
        return newCategory;
    } catch (error) {
        console.error('Failed to create product category:', error);
    }
}

// Retrieve product category by ID
async function getProductCategoryById(categoryId) {
    try {
        const category = await ProductCategory.findByPk(categoryId);
        return category ? category.toJSON() : null;
    } catch (error) {
        console.error('Error retrieving product category:', error);
    }
}


// Retrieve all product categories
async function getAllProductCategories() {
    try {
        const categories = await ProductCategory.findAll();
        return categories.map(category => category.toJSON());
    } catch (error) {
        console.error('Error retrieving all product categories:', error);
        return [];
    }
}


// Update product category
async function updateProductCategory(categoryId, updates) {
    try {
        const category = await ProductCategory.findByPk(categoryId);
        if (category) {
            const updatedCategory = await category.update(updates);
            console.log('Product category updated successfully:', updatedCategory.toJSON());
            return updatedCategory;
        } else {
            console.log('Product category not found!');
        }
    } catch (error) {
        console.error('Failed to update product category:', error);
    }
}

// Delete product category
async function deleteProductCategory(categoryId) {
    try {
        const result = await ProductCategory.destroy({
            where: { CategoryID: categoryId }
        });
        if (result > 0) {
            console.log('Product category deleted successfully');
        } else {
            console.log('No product category found to delete');
        }
    } catch (error) {
        console.error('Error deleting product category:', error);
    }
}

module.exports = { createProductCategory, getProductCategoryById, updateProductCategory, deleteProductCategory, getAllProductCategories };
