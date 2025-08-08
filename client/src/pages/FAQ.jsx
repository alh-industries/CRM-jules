import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FAQ = () => {
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/faqs');
        setFaqs(res.data);
      } catch (err) {
        console.error(err.response.data);
      }
    };

    fetchFaqs();
  }, []);

  return (
    <div>
      <h2>Frequently Asked Questions</h2>
      {faqs.map(faq => (
        <div key={faq._id}>
          <h4>{faq.question}</h4>
          <p>{faq.answer}</p>
        </div>
      ))}
    </div>
  );
};

export default FAQ;
