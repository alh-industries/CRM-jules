import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

// A more detailed mock form for demonstration purposes
const detailedMockForm = {
    _id: 'form1',
    name: 'Client Intake Form',
    description: 'Standard form for new clients. Please fill out all fields.',
    fields: [
        { _id: 'field1', label: 'Full Name', type: 'text' },
        { _id: 'field2', label: 'Email Address', type: 'text' },
        { _id: 'field3', label: 'Date of Birth', type: 'date' },
        { _id: 'field4', label: 'Do you agree to the terms?', type: 'checkbox' },
    ],
};


const FormView = () => {
  // In a real app, you'd fetch the form based on the id.
  // For the prototype, we'll just use a detailed mock form.
  const form = detailedMockForm;
  const [responses, setResponses] = useState({});
  const { id } = useParams(); // We get the id but don't use it to fetch
  const navigate = useNavigate();

  const onChange = (fieldLabel, value) => {
    setResponses({ ...responses, [fieldLabel]: value });
  };

  const onSubmit = e => {
    e.preventDefault();
    const submission = {
      formId: id,
      responses: Object.entries(responses).map(([fieldLabel, value]) => ({ fieldLabel, value })),
    };
    // In a real app, you'd send this to a backend.
    console.log('Form submitted (prototype):', submission);
    alert('Form submitted successfully! (Prototype)');
    navigate('/dashboard');
  };

  if (!form) {
    return <div>Loading form...</div>;
  }

  return (
    <div>
      <h2>{form.name}</h2>
      <p>{form.description}</p>
      <form onSubmit={onSubmit}>
        {form.fields.map(field => (
          <div key={field._id} style={{ margin: '1rem 0' }}>
            <label>{field.label}</label>
            <br />
            <input
              type={field.type}
              onChange={e => onChange(field.label, e.target.value)}
              style={{ width: '100%', padding: '8px', marginTop: '4px' }}
            />
          </div>
        ))}
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default FormView;
