const express = require('express');
const sequelize = require('./src/config/database');
const userRoutes = require('./src/routes/userRoutes');
const addressRoutes = require('./src/routes/addressRoutes');
const productCategoryRoutes = require('./src/routes/productCategoryRoutes');
const productRoutes = require('./src/routes/productRoutes');
const inventoryRoutes = require('./src/routes/inventoryRoutes');
const orderRoutes = require('./src/routes/orderRoutes');
const orderItemRoutes = require('./src/routes/orderItemRoutes');
const paymentRoutes = require('./src/routes/paymentRoutes');
const reviewRoutes = require('./src/routes/reviewRoutes');
const wishlistRoutes = require('./src/routes/wishlistRoutes');
const cors = require('cors');
const app = express();

// Enable CORS
app.use(cors());

// Middleware
app.use(express.json());

app.use('/users', userRoutes);
app.use('/addresses', addressRoutes);
app.use('/productCategories', productCategoryRoutes);
app.use('/products', productRoutes);
app.use('/inventories', inventoryRoutes);
app.use('/orders', orderRoutes);
app.use('/orderItems', orderItemRoutes);
app.use('/payments', paymentRoutes);
app.use('/reviews', reviewRoutes);
app.use('/wishlists', wishlistRoutes);



// Routes

// Sync database and start the server
sequelize.sync()
  .then(() => {
    console.log('Database synced successfully');
    app.listen(3000, () => {
      console.log('Server is running on port 3000');
    });
  })
  .catch((error) => {
    console.error('Error syncing database:', error);
  });