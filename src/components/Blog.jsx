import React, { useState } from "react";

function FAQ() {
  const faqs = [
    {
      question: "What is React?",
      answer: "A JavaScript library for building UIs.",
    },
    {
      question: "What is useState?",
      answer: "A hook that lets you use state in functional components.",
    },
    { question: "Is React easy?", answer: "Yes, with practice!" },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>FAQ</h2>
      {faqs.map((faq, index) => (
        <div key={index} style={{ marginBottom: "10px" }}>
          <p
            onClick={() => toggleFAQ(index)}
            style={{ cursor: "pointer", fontWeight: "bold" }}
          >
            {faq.question}
          </p>
          {openIndex === index && <p>{faq.answer}</p>}
        </div>
      ))}
    </div>
  );
}

export default FAQ;
