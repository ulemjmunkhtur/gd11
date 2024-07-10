const express = require('express');
const sequelize = require('./src/config/database');
const cors = require('cors');
const app = express();

// Enable CORS
app.use(cors());

// Middleware
app.use(express.json());

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