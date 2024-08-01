const ReviewService = require('../services/reviewService');

exports.createReview = async (req, res) => {
  try {
    const reviewData = req.body;
    const review = await ReviewService.createReview(reviewData);
    res.status(201).json(review);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAllReviews = async (req, res) => {
  try {
    const reviews = await ReviewService.getAllReviews();
    res.json(reviews);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getReviewById = async (req, res) => {
  try {
    const reviewId = req.params.id;
    const review = await ReviewService.getReviewById(reviewId);
    res.json(review);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

exports.updateReview = async (req, res) => {
  try {
    const reviewId = req.params.id;
    const reviewData = req.body;
    const updatedReview = await ReviewService.updateReview(reviewId, reviewData);
    res.json(updatedReview);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteReview = async (req, res) => {
  try {
    const reviewId = req.params.id;
    await ReviewService.deleteReview(reviewId);
    res.sendStatus(204);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};