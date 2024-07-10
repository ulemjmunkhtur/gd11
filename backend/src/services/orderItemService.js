const OrderItem = require('../models/OrderItem');

exports.createOrderItem = async (orderItemData) => {
  try {
    const orderItem = await OrderItem.create(orderItemData);
    return orderItem;
  } catch (error) {
    throw new Error('Failed to create order item');
  }
};

exports.getAllOrderItems = async () => {
  try {
    const orderItems = await OrderItem.findAll();
    return orderItems;
  } catch (error) {
    throw new Error('Failed to retrieve order items');
  }
};

exports.getOrderItemById = async (orderItemId) => {
  try {
    const orderItem = await OrderItem.findByPk(orderItemId);
    if (!orderItem) {
      throw new Error('Order item not found');
    }
    return orderItem;
  } catch (error) {
    throw new Error('Failed to retrieve order item');
  }
};

exports.updateOrderItem = async (orderItemId, orderItemData) => {
  try {
    const orderItem = await OrderItem.findByPk(orderItemId);
    if (!orderItem) {
      throw new Error('Order item not found');
    }
    await orderItem.update(orderItemData);
    return orderItem;
  } catch (error) {
    throw new Error('Failed to update order item');
  }
};

exports.deleteOrderItem = async (orderItemId) => {
  try {
    const orderItem = await OrderItem.findByPk(orderItemId);
    if (!orderItem) {
      throw new Error('Order item not found');
    }
    await orderItem.destroy();
    return orderItem;
  } catch (error) {
    throw new Error('Failed to delete order item');
  }
};