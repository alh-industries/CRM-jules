const express = require('express');
const router = express.Router();
const { uploadFile } = require('../controllers/fileController');
const auth = require('../middleware/auth');

// @route   POST api/files/upload
// @desc    Upload a file
// @access  Private
router.post('/upload', auth, uploadFile);

module.exports = router;
