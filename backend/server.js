const mysql = require('mysql2');
const express = require('express');
const cors = require('cors');
const adminRoutes = require('./routes/admin'); // Import admin routes
require('dotenv').config(); // Load environment variables

// Initialize Express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Parse JSON requests

// MySQL connection
const db = mysql.createConnection({
  port: process.env.DB_PORT,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

db.connect(err => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected');
});

// Use routes after initializing the app
app.use('/api/admin', adminRoutes); // Admin routes

// Root route
app.get('/', (req, res) => res.send('MBVM System Backend is running'));

// Define port
const PORT = process.env.PORT || 3000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
