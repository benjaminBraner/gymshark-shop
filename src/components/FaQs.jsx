import React, { useState } from 'react';
import plusIcon from '../assets/plus.svg';
import lessIcon from '../assets/less.svg';
import '../styles/components/FaQs.css';
import { faqs } from '../data/faqs';

export const FaQs = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  // Función para manejar el cambio de icono y el estado de la FAQ activa
  const handleClick = (index) => {
    setActiveFaq(prev => (prev === index ? null : index));
  };

 ;

  return (
    <section className="faqs" id="faqs">
      <h2 className="faqs-title">FAQs</h2>

      {faqs.map((faq, index) => (
        <div className={`faq ${activeFaq === index ? 'active' : ''}`} key={index}>
          <div className="question" onClick={() => handleClick(index)}>
            <h3>{faq.question}</h3>
            <img className="faq-img" src={activeFaq === index ? lessIcon : plusIcon} alt="Plus icon" />
          </div>
          <div className="answer">
            <p>{faq.answer}</p>
          </div>
        </div>
      ))}
    </section>
  );
};
