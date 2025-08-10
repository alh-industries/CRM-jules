import React from 'react';
import { mockFaqs } from '../mockData';

const FAQ = () => {
  const faqs = mockFaqs;

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
