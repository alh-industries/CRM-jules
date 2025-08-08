const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth'); // Assuming only authenticated users can manage FAQs
const {
  createFAQ,
  getFAQs,
  updateFAQ,
  deleteFAQ,
} = require('../controllers/faqController');

// @route   GET api/faqs
// @desc    Get all faqs
// @access  Public
router.get('/', getFAQs);

// @route   POST api/faqs
// @desc    Create an faq
// @access  Private
router.post('/', auth, createFAQ);

// @route   PUT api/faqs/:id
// @desc    Update an faq
// @access  Private
router.put('/:id', auth, updateFAQ);

// @route   DELETE api/faqs/:id
// @desc    Delete an faq
// @access  Private
router.delete('/:id', auth, deleteFAQ);

module.exports = router;
