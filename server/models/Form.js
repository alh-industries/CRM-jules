const mongoose = require('mongoose');

const FormSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  fields: [
    {
      label: {
        type: String,
        required: true,
      },
      type: {
        type: String,
        required: true,
        enum: ['text', 'textarea', 'checkbox', 'radio', 'select'],
      },
      options: [
        {
          type: String,
        },
      ],
    },
  ],
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Form', FormSchema);
