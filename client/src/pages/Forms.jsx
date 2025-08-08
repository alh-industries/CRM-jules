import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Forms = () => {
  const [forms, setForms] = useState([]);

  useEffect(() => {
    const fetchForms = async () => {
      const token = localStorage.getItem('token');
      if (token) {
        const config = {
          headers: {
            'x-auth-token': token,
          },
        };
        try {
          const res = await axios.get('http://localhost:5000/api/forms', config);
          setForms(res.data);
        } catch (err) {
          console.error(err.response.data);
        }
      }
    };

    fetchForms();
  }, []);

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
