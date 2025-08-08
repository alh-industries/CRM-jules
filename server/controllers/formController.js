const Form = require('../models/Form');
const FormSubmission = require('../models/FormSubmission');

// @desc    Create a form
exports.createForm = async (req, res) => {
  const { name, description, fields } = req.body;

  try {
    const newForm = new Form({
      name,
      description,
      fields,
      user: req.user.id,
    });

    const form = await newForm.save();
    res.json(form);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// @desc    Get all forms for a user
exports.getForms = async (req, res) => {
  try {
    const forms = await Form.find({ user: req.user.id }).sort({ date: -1 });
    res.json(forms);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// @desc    Get a single form
exports.getFormById = async (req, res) => {
  try {
    const form = await Form.findById(req.params.id);

    if (!form) {
      return res.status(404).json({ msg: 'Form not found' });
    }

    res.json(form);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// @desc    Update a form
exports.updateForm = async (req, res) => {
  const { name, description, fields } = req.body;

  const formFields = {};
  if (name) formFields.name = name;
  if (description) formFields.description = description;
  if (fields) formFields.fields = fields;

  try {
    let form = await Form.findById(req.params.id);

    if (!form) return res.status(404).json({ msg: 'Form not found' });

    if (form.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'Not authorized' });
    }

    form = await Form.findByIdAndUpdate(
      req.params.id,
      { $set: formFields },
      { new: true }
    );

    res.json(form);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// @desc    Delete a form
exports.deleteForm = async (req, res) => {
  try {
    let form = await Form.findById(req.params.id);

    if (!form) return res.status(404).json({ msg: 'Form not found' });

    if (form.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'Not authorized' });
    }

    await Form.findByIdAndRemove(req.params.id);

    res.json({ msg: 'Form removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// @desc    Submit a form
exports.submitForm = async (req, res) => {
  const { responses } = req.body;
  const { id: formId } = req.params;
  // Assuming client id is sent in the request body or from auth
  const { clientId } = req.body;

  try {
    const newSubmission = new FormSubmission({
      form: formId,
      client: clientId,
      responses,
    });

    const submission = await newSubmission.save();
    res.json(submission);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// @desc    Get all submissions for a form
exports.getFormSubmissions = async (req, res) => {
  try {
    const submissions = await FormSubmission.find({ form: req.params.id })
      .populate('client', ['name', 'email'])
      .sort({ date: -1 });
    res.json(submissions);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};
