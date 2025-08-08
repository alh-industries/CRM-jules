import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Clients = () => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    const fetchClients = async () => {
      const token = localStorage.getItem('token');
      if (token) {
        const config = {
          headers: {
            'x-auth-token': token,
          },
        };

        try {
          const res = await axios.get('http://localhost:5000/api/clients', config);
          setClients(res.data);
        } catch (err) {
          console.error(err.response.data);
        }
      }
    };

    fetchClients();
  }, []);

  return (
    <div>
      <h2>Clients</h2>
      <ul>
        {clients.map(client => (
          <li key={client._id}>
            {client.name} - <strong>{client.status}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Clients;
