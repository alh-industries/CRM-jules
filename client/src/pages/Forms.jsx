import React from 'react';
import { Link } from 'react-router-dom';
import { mockForms } from '../mockData';

const Forms = () => {
  const forms = mockForms;

  return (
    <div>
      <h2>Your Forms</h2>
      <Link to="/forms/new">Create a new form</Link>
      <ul>
        {forms.map(form => (
          <li key={form._id}>
            {form.name}
            <Link to={`/form/${form._id}`}>View</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Forms;
