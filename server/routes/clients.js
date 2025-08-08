const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const {
  getClients,
  createClient,
  updateClient,
  deleteClient,
} = require('../controllers/clientController');

// @route   GET api/clients
// @desc    Get all user's clients
// @access  Private
router.get('/', auth, getClients);

// @route   POST api/clients
// @desc    Create a client
// @access  Private
router.post('/', auth, createClient);

// @route   PUT api/clients/:id
// @desc    Update a client
// @access  Private
router.put('/:id', auth, updateClient);

// @route   DELETE api/clients/:id
// @desc    Delete a client
// @access  Private
router.delete('/:id', auth, deleteClient);

module.exports = router;
