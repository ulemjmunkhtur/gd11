const express = require('express');
const router = express.Router();
const WishlistController = require('../controllers/wishlistController');

router.post('/', WishlistController.createWishlist);
router.get('/', WishlistController.getAllWishlists);
router.get('/:id', WishlistController.getWishlistById);
router.put('/:id', WishlistController.updateWishlist);
router.delete('/:id', WishlistController.deleteWishlist);

module.exports = router;