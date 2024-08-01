const OrderItemService = require('../services/orderItemService');

exports.createOrderItem = async (req, res) => {
  try {
    const orderItemData = req.body;
    const orderItem = await OrderItemService.createOrderItem(orderItemData);
    res.status(201).json(orderItem);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAllOrderItems = async (req, res) => {
  try {
    const orderItems = await OrderItemService.getAllOrderItems();
    res.json(orderItems);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getOrderItemById = async (req, res) => {
  try {
    const orderItemId = req.params.id;
    const orderItem = await OrderItemService.getOrderItemById(orderItemId);
    res.json(orderItem);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

exports.updateOrderItem = async (req, res) => {
  try {
    const orderItemId = req.params.id;
    const orderItemData = req.body;
    const updatedOrderItem = await OrderItemService.updateOrderItem(orderItemId, orderItemData);
    res.json(updatedOrderItem);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteOrderItem = async (req, res) => {
  try {
    const orderItemId = req.params.id;
    await OrderItemService.deleteOrderItem(orderItemId);
    res.sendStatus(204);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};