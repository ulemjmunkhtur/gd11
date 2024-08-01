const Order = require('../models/Order');

exports.createOrder = async (orderData) => {
  try {
    const order = await Order.create(orderData);
    return order;
  } catch (error) {
    throw new Error('Failed to create order');
  }
};

exports.getAllOrders = async () => {
  try {
    const orders = await Order.findAll();
    return orders;
  } catch (error) {
    throw new Error('Failed to retrieve orders');
  }
};

exports.getOrderById = async (orderId) => {
  try {
    const order = await Order.findByPk(orderId);
    if (!order) {
      throw new Error('Order not found');
    }
    return order;
  } catch (error) {
    throw new Error('Failed to retrieve order');
  }
};

exports.updateOrder = async (orderId, orderData) => {
  try {
    const order = await Order.findByPk(orderId);
    if (!order) {
      throw new Error('Order not found');
    }
    await order.update(orderData);
    return order;
  } catch (error) {
    throw new Error('Failed to update order');
  }
};

exports.deleteOrder = async (orderId) => {
  try {
    const order = await Order.findByPk(orderId);
    if (!order) {
      throw new Error('Order not found');
    }
    await order.destroy();
    return order;
  } catch (error) {
    throw new Error('Failed to delete order');
  }
};