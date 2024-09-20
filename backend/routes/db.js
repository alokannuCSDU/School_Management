const mysql = require ('mysql2');
require('dotenv').config(); // Ensure environment variables are loaded

// Create the MySQL connection using environment variables
const db = mysql.createConnection({
  port: process.env.DB_PORT,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

// Connect to the MySQL database
db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    throw err;
  }
  console.log('Connected');
});

// Export the connection for use in other parts of the application
module.exports = db;
