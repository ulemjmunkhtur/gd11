const WishlistService = require('../services/wishlistService');

exports.createWishlist = async (req, res) => {
  try {
    const wishlistData = req.body;
    const wishlist = await WishlistService.createWishlist(wishlistData);
    res.status(201).json(wishlist);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAllWishlists = async (req, res) => {
  try {
    const wishlists = await WishlistService.getAllWishlists();
    res.json(wishlists);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getWishlistById = async (req, res) => {
  try {
    const wishlistId = req.params.id;
    const wishlist = await WishlistService.getWishlistById(wishlistId);
    res.json(wishlist);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

exports.updateWishlist = async (req, res) => {
  try {
    const wishlistId = req.params.id;
    const wishlistData = req.body;
    const updatedWishlist = await WishlistService.updateWishlist(wishlistId, wishlistData);
    res.json(updatedWishlist);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteWishlist = async (req, res) => {
  try {
    const wishlistId = req.params.id;
    await WishlistService.deleteWishlist(wishlistId);
    res.sendStatus(204);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};