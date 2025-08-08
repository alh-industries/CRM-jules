const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const {
  createForm,
  getForms,
  getFormById,
  updateForm,
  deleteForm,
  submitForm,
  getFormSubmissions,
} = require('../controllers/formController');

// Form Management
router.route('/').post(auth, createForm).get(auth, getForms);
router
  .route('/:id')
  .get(getFormById) // Public route to view a form
  .put(auth, updateForm)
  .delete(auth, deleteForm);

// Form Submission
router.route('/:id/submit').post(submitForm);
router.route('/:id/submissions').get(auth, getFormSubmissions);

module.exports = router;
