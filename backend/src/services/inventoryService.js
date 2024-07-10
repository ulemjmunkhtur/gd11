const Order = require('../models/Order');

exports.createOrder = async (orderData) => {
  const order = await Order.create(orderData);
  return order;
};

exports.getAllOrders = async () => {
  const orders = await Order.findAll();
  return orders;
};

exports.getOrderById = async (orderId) => {
  const order = await Order.findByPk(orderId);
  return order;
};

exports.updateOrder = async (orderId, orderData) => {
  const order = await Order.findByPk(orderId);
  if (order) {
    await order.update(orderData);
  }
  return order;
};

exports.deleteOrder = async (orderId) => {
  const order = await Order.findByPk(orderId);
  if (order) {
    await order.destroy();
  }
  return order;
};