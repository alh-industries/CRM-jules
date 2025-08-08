import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const FormView = () => {
  const [form, setForm] = useState(null);
  const [responses, setResponses] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchForm = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/forms/${id}`);
        setForm(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchForm();
  }, [id]);

  const onChange = (fieldLabel, value) => {
    setResponses({ ...responses, [fieldLabel]: value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    const submission = {
      responses: Object.entries(responses).map(([fieldLabel, value]) => ({ fieldLabel, value })),
      // In a real app, you'd get the clientId from the logged-in client user
      clientId: '60d5f3f7a8b6a2b3e8c3e8a6' // Placeholder
    };
    try {
      await axios.post(`http://localhost:5000/api/forms/${id}/submit`, submission);
      alert('Form submitted successfully!');
      navigate('/');
    } catch (err) {
      console.error(err.response.data);
    }
  };

  if (!form) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{form.name}</h2>
      <p>{form.description}</p>
      <form onSubmit={onSubmit}>
        {form.fields.map(field => (
          <div key={field._id}>
            <label>{field.label}</label>
            {/* Render different input types based on field.type */}
            <input type="text" onChange={e => onChange(field.label, e.target.value)} />
          </div>
        ))}
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default FormView;
