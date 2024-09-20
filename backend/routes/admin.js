const express = require('express');
const router = express.Router();
const db = require('./db'); // Import the MySQL connection from db.js

// Route to add a student
router.post('/add-student', (req, res) => {
  const { Name, Roll_no } = req.body;

  const query = 'INSERT INTO students (Name, Roll_no) VALUES (?, ?)';
  db.query(query, [Name, Roll_no], (err, results) => {
    if (err) {
      console.error('Error adding student:', err);
      return res.status(500).json({ error: 'Database error' });
    }
    res.status(201).json({ message: 'Student added successfully' });
  });
});

// Route to get all students
router.get('/students', (req, res) => {
  db.query('SELECT * FROM students', (err, results) => {
    if (err) {
      console.error('Error fetching students:', err);
      return res.status(500).json({ error: 'Database error' });
    }
    res.json(results);
  });
});

module.exports = router;
