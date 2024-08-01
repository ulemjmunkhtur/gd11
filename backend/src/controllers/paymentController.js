const PaymentService = require('../services/paymentService');

exports.createPayment = async (req, res) => {
  try {
    const paymentData = req.body;
    const payment = await PaymentService.createPayment(paymentData);
    res.status(201).json(payment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAllPayments = async (req, res) => {
  try {
    const payments = await PaymentService.getAllPayments();
    res.json(payments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getPaymentById = async (req, res) => {
  try {
    const paymentId = req.params.id;
    const payment = await PaymentService.getPaymentById(paymentId);
    res.json(payment);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

exports.updatePayment = async (req, res) => {
  try {
    const paymentId = req.params.id;
    const paymentData = req.body;
    const updatedPayment = await PaymentService.updatePayment(paymentId, paymentData);
    res.json(updatedPayment);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deletePayment = async (req, res) => {
  try {
    const paymentId = req.params.id;
    await PaymentService.deletePayment(paymentId);
    res.sendStatus(204);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};