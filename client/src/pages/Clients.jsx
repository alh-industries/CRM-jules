import React from 'react';
import { mockClients } from '../mockData';

const Clients = () => {
  const clients = mockClients;

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
