import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const FormBuilder = () => {
  const [formName, setFormName] = useState('');
  const [formDescription, setFormDescription] = useState('');
  const [fields, setFields] = useState([]);
  const navigate = useNavigate();

  const addField = () => {
    setFields([...fields, { label: '', type: 'text', options: [] }]);
  };

  const handleFieldChange = (index, event) => {
    const newFields = [...fields];
    newFields[index][event.target.name] = event.target.value;
    setFields(newFields);
  };

  const handleOptionChange = (fieldIndex, optionIndex, event) => {
    const newFields = [...fields];
    newFields[fieldIndex].options[optionIndex] = event.target.value;
    setFields(newFields);
  };

  const addOption = (fieldIndex) => {
    const newFields = [...fields];
    newFields[fieldIndex].options.push('');
    setFields(newFields);
  };

  const onSubmit = async e => {
    e.preventDefault();
    const newForm = {
      name: formName,
      description: formDescription,
      fields,
    };
    try {
      const token = localStorage.getItem('token');
      const config = {
        headers: {
          'Content-Type': 'application/json',
          'x-auth-token': token,
        },
      };
      await axios.post('http://localhost:5000/api/forms', newForm, config);
      navigate('/forms'); // Redirect to a new page that will list all forms
    } catch (err) {
      console.error(err.response.data);
    }
  };

  return (
    <div>
      <h2>Form Builder</h2>
      <form onSubmit={onSubmit}>
        <div>
          <label>Form Name</label>
          <input
            type="text"
            value={formName}
            onChange={e => setFormName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Form Description</label>
          <textarea
            value={formDescription}
            onChange={e => setFormDescription(e.target.value)}
          />
        </div>

        <h3>Form Fields</h3>
        {fields.map((field, index) => (
          <div key={index}>
            <input
              type="text"
              name="label"
              placeholder="Field Label"
              value={field.label}
              onChange={e => handleFieldChange(index, e)}
            />
            <select name="type" value={field.type} onChange={e => handleFieldChange(index, e)}>
              <option value="text">Text</option>
              <option value="textarea">Textarea</option>
              <option value="checkbox">Checkbox</option>
              <option value="radio">Radio</option>
              <option value="select">Select</option>
            </select>
            {['radio', 'select'].includes(field.type) && (
              <div>
                {field.options.map((option, optionIndex) => (
                  <input
                    key={optionIndex}
                    type="text"
                    placeholder={`Option ${optionIndex + 1}`}
                    value={option}
                    onChange={e => handleOptionChange(index, optionIndex, e)}
                  />
                ))}
                <button type="button" onClick={() => addOption(index)}>Add Option</button>
              </div>
            )}
          </div>
        ))}
        <button type="button" onClick={addField}>Add Field</button>
        <hr />
        <input type="submit" value="Save Form" />
      </form>
    </div>
  );
};

export default FormBuilder;
