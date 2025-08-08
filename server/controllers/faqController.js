const FAQ = require('../models/FAQ');

// @desc    Create an FAQ
exports.createFAQ = async (req, res) => {
  const { question, answer } = req.body;

  try {
    const newFAQ = new FAQ({
      question,
      answer,
    });

    const faq = await newFAQ.save();
    res.json(faq);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// @desc    Get all FAQs
exports.getFAQs = async (req, res) => {
  try {
    const faqs = await FAQ.find().sort({ date: -1 });
    res.json(faqs);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// @desc    Update an FAQ
exports.updateFAQ = async (req, res) => {
  const { question, answer } = req.body;

  const faqFields = {};
  if (question) faqFields.question = question;
  if (answer) faqFields.answer = answer;

  try {
    let faq = await FAQ.findById(req.params.id);

    if (!faq) return res.status(404).json({ msg: 'FAQ not found' });

    faq = await FAQ.findByIdAndUpdate(
      req.params.id,
      { $set: faqFields },
      { new: true }
    );

    res.json(faq);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// @desc    Delete an FAQ
exports.deleteFAQ = async (req, res) => {
  try {
    let faq = await FAQ.findById(req.params.id);

    if (!faq) return res.status(404).json({ msg: 'FAQ not found' });

    await FAQ.findByIdAndRemove(req.params.id);

    res.json({ msg: 'FAQ removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};
