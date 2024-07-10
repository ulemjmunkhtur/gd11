const Review = require('../models/Review');

exports.createReview = async (reviewData) => {
  try {
    const review = await Review.create(reviewData);
    return review;
  } catch (error) {
    throw new Error('Failed to create review');
  }
};

exports.getAllReviews = async () => {
  try {
    const reviews = await Review.findAll();
    return reviews;
  } catch (error) {
    throw new Error('Failed to retrieve reviews');
  }
};

exports.getReviewById = async (reviewId) => {
  try {
    const review = await Review.findByPk(reviewId);
    if (!review) {
      throw new Error('Review not found');
    }
    return review;
  } catch (error) {
    throw new Error('Failed to retrieve review');
  }
};

exports.updateReview = async (reviewId, reviewData) => {
  try {
    const review = await Review.findByPk(reviewId);
    if (!review) {
      throw new Error('Review not found');
    }
    await review.update(reviewData);
    return review;
  } catch (error) {
    throw new Error('Failed to update review');
  }
};

exports.deleteReview = async (reviewId) => {
  try {
    const review = await Review.findByPk(reviewId);
    if (!review) {
      throw new Error('Review not found');
    }
    await review.destroy();
    return review;
  } catch (error) {
    throw new Error('Failed to delete review');
  }
};