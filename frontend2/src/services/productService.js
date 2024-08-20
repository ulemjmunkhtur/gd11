import api from './api';

export const getProducts = async () => {
  try {
    const response = await api.get('/products');
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch products');
  }
};

export const getProductById = async (id) => {
  try {
    console.log("id: ", id);
    const response = await api.get(`/products/${id}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch product details');
  }
};

export const createProduct = async (name, description, price, category, stock) => {
  try {
    console.log("Product name: ", name);
    const response = await api.post('/products', {name, description, price, category, stock});
    return response.data;
  } catch (error) {
    throw new Error('Failed to create product');
  }
};

export const updateProduct = async (id, name, description, price, category, stock) => {
  try {
    console.log("ID: ", id);
    const response = await api.put(`/products/${id}`, {name, description, price, category, stock});
    return response.data;
  } catch (error) {
    console.error('Error updating product:', error);
    console.error('Error response:', error.response);
    throw new Error('Failed to update product');
  }
};

export const deleteProduct = async (id) => {
  try {
    console.log("id: ", id)
    const response = await api.delete(`/products/${id}`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to delete product');
  }
};
export const getProductsByCategoryName = async (categoryName) => {
  try {
    const response = await api.get(`/products/category/${categoryName}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch products by category name');
  }
};