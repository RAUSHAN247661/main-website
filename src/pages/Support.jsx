import React from 'react';
import { Accordion, AccordionItem } from "@heroui/react";

const Support = () => {
  const faqs = [
    { question: "What topics do you cover in your content?", answer: "We cover a wide range of topics including education, science, technology, and general awareness. Our goal is to provide informative and engaging content that helps our audience learn and stay updated on important subjects." },
    { question: "How often do you post new content?", answer: "We aim to post new content regularly across our platforms. Typically, we release new videos on YouTube weekly, update our Facebook page daily, and share content on Instagram several times a week. However, this may vary depending on the complexity of the topics we're covering." },
    { question: "Can I suggest topics for future content?", answer: "Absolutely! We love hearing from our audience. You can suggest topics by leaving comments on our videos, sending us a message on social media, or using the contact form on our website. We review all suggestions and try to incorporate popular requests into our content planning." },
    { question: "Do you offer any educational resources beyond videos?", answer: "Yes, we do! In addition to our video content, we offer downloadable resources such as e-books, infographics, and study guides on various topics. These are available in our shop, with some free resources for our subscribers." },
    { question: "How can I support your work?", answer: "There are several ways to support us: subscribing to our YouTube channel, following us on social media, sharing our content with others, and purchasing items from our shop. Your support helps us continue creating high-quality educational content." },
  ];

  return (
    <div className="max-w-3xl mx-auto mt-8 px-4 sm:px-6 md:px-8">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6">Support & FAQ</h1>
      <Accordion className="pb-6">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} aria-label={faq.question} title={faq.question}>
            <p>{faq.answer}</p>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default Support;


