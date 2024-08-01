const Payment = require('../models/Payment');

exports.createPayment = async (paymentData) => {
  try {
    const payment = await Payment.create(paymentData);
    return payment;
  } catch (error) {
    throw new Error('Failed to create payment');
  }
};

exports.getAllPayments = async () => {
  try {
    const payments = await Payment.findAll();
    return payments;
  } catch (error) {
    throw new Error('Failed to retrieve payments');
  }
};

exports.getPaymentById = async (paymentId) => {
  try {
    const payment = await Payment.findByPk(paymentId);
    if (!payment) {
      throw new Error('Payment not found');
    }
    return payment;
  } catch (error) {
    throw new Error('Failed to retrieve payment');
  }
};

exports.updatePayment = async (paymentId, paymentData) => {
  try {
    const payment = await Payment.findByPk(paymentId);
    if (!payment) {
      throw new Error('Payment not found');
    }
    await payment.update(paymentData);
    return payment;
  } catch (error) {
    throw new Error('Failed to update payment');
  }
};

exports.deletePayment = async (paymentId) => {
  try {
    const payment = await Payment.findByPk(paymentId);
    if (!payment) {
      throw new Error('Payment not found');
    }
    await payment.destroy();
    return payment;
  } catch (error) {
    throw new Error('Failed to delete payment');
  }
};