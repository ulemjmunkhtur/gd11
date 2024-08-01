const Wishlist = require('../models/Wishlist');

exports.createWishlist = async (wishlistData) => {
  try {
    const wishlist = await Wishlist.create(wishlistData);
    return wishlist;
  } catch (error) {
    throw new Error('Failed to create wishlist');
  }
};

exports.getAllWishlists = async () => {
  try {
    const wishlists = await Wishlist.findAll();
    return wishlists;
  } catch (error) {
    throw new Error('Failed to retrieve wishlists');
  }
};

exports.getWishlistById = async (wishlistId) => {
  try {
    const wishlist = await Wishlist.findByPk(wishlistId);
    if (!wishlist) {
      throw new Error('Wishlist not found');
    }
    return wishlist;
  } catch (error) {
    throw new Error('Failed to retrieve wishlist');
  }
};

exports.updateWishlist = async (wishlistId, wishlistData) => {
  try {
    const wishlist = await Wishlist.findByPk(wishlistId);
    if (!wishlist) {
      throw new Error('Wishlist not found');
    }
    await wishlist.update(wishlistData);
    return wishlist;
  } catch (error) {
    throw new Error('Failed to update wishlist');
  }
};

exports.deleteWishlist = async (wishlistId) => {
  try {
    const wishlist = await Wishlist.findByPk(wishlistId);
    if (!wishlist) {
      throw new Error('Wishlist not found');
    }
    await wishlist.destroy();
    return wishlist;
  } catch (error) {
    throw new Error('Failed to delete wishlist');
  }
};