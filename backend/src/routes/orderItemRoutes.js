const express = require('express');
const router = express.Router();
const OrderItemController = require('../controllers/orderItemController');

router.post('/', OrderItemController.createOrderItem);
router.get('/', OrderItemController.getAllOrderItems);
router.get('/:id', OrderItemController.getOrderItemById);
router.put('/:id', OrderItemController.updateOrderItem);
router.delete('/:id', OrderItemController.deleteOrderItem);

module.exports = router;