const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const app = express();


// Parse JSON request bodies
app.use(express.json());

// Parse URL-encoded request bodies
app.use(express.urlencoded({ extended: false }));
// Import routes
const uploadRoutes = require('./routes/uploadRoutes');

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// Use routes
app.use('/api/upload', uploadRoutes);


// Set port
const port = process.env.PORT || 3004;

// Start server
app.listen(port, () => console.log(`Server started on port ${port}`));
