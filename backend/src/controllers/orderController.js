const OrderService = require('../services/orderService');

exports.createOrder = async (req, res) => {
  try {
    const orderData = req.body;
    const order = await OrderService.createOrder(orderData);
    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAllOrders = async (req, res) => {
  try {
    const orders = await OrderService.getAllOrders();
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getOrderById = async (req, res) => {
  try {
    const orderId = req.params.id;
    const order = await OrderService.getOrderById(orderId);
    res.json(order);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

exports.updateOrder = async (req, res) => {
  try {
    const orderId = req.params.id;
    const orderData = req.body;
    const updatedOrder = await OrderService.updateOrder(orderId, orderData);
    res.json(updatedOrder);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteOrder = async (req, res) => {
  try {
    const orderId = req.params.id;
    await OrderService.deleteOrder(orderId);
    res.sendStatus(204);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};