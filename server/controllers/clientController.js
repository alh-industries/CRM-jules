const Client = require('../models/Client');

// Get all clients for a user
exports.getClients = async (req, res) => {
  try {
    const clients = await Client.find({ user: req.user.id }).sort({ date: -1 });
    res.json(clients);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// Create a client
exports.createClient = async (req, res) => {
  const { name, email, phone, address, status } = req.body;

  try {
    const newClient = new Client({
      name,
      email,
      phone,
      address,
      status,
      user: req.user.id,
    });

    const client = await newClient.save();
    res.json(client);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// Update a client
exports.updateClient = async (req, res) => {
  const { name, email, phone, address, status } = req.body;

  // Build client object
  const clientFields = {};
  if (name) clientFields.name = name;
  if (email) clientFields.email = email;
  if (phone) clientFields.phone = phone;
  if (address) clientFields.address = address;
  if (status) clientFields.status = status;

  try {
    let client = await Client.findById(req.params.id);

    if (!client) return res.status(404).json({ msg: 'Client not found' });

    // Make sure user owns client
    if (client.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'Not authorized' });
    }

    client = await Client.findByIdAndUpdate(
      req.params.id,
      { $set: clientFields },
      { new: true }
    );

    res.json(client);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// Delete a client
exports.deleteClient = async (req, res) => {
  try {
    let client = await Client.findById(req.params.id);

    if (!client) return res.status(404).json({ msg: 'Client not found' });

    // Make sure user owns client
    if (client.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'Not authorized' });
    }

    await Client.findByIdAndRemove(req.params.id);

    res.json({ msg: 'Client removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};
