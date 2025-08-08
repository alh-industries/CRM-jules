const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const connectionString = 'mongodb://localhost:27017/crm'; // I'll assume a local mongodb instance for now

mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err));

// Define Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/clients', require('./routes/clients'));
app.use('/api/forms', require('./routes/forms'));
app.use('/api/files', require('./routes/files'));
app.use('/api/faqs', require('./routes/faqs'));

// Serve static assets
app.use('/uploads', express.static('server/uploads'));

app.get('/', (req, res) => {
  res.send('Hello from the server!');
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
