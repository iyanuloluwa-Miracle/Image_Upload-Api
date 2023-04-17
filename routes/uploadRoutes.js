const express = require('express');
const router = express.Router();
const uploadController = require('../controller/uploadController');

// Handle file upload
router.post('/', uploadController.uploadFile);
router.get('/uploads/:filename', uploadController.getFile)

module.exports = router;
