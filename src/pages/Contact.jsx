import React from 'react';
import { Card, CardBody, Input, Textarea, Button } from "@heroui/react";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted');
  };

  return (
    <div className="max-w-2xl mx-auto mt-8 px-4 sm:px-6 md:px-8">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6">Contact Us</h1>
      <Card>
        <CardBody className="p-4 sm:p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input label="Name" placeholder="Enter your name" required />
            <Input type="email" label="Email" placeholder="Enter your email" required />
            <Input label="Subject" placeholder="Enter the subject" required />
            <Textarea label="Message" placeholder="Enter your message" required />
            <Button type="submit" color="primary">Send Message</Button>
          </form>
        </CardBody>
      </Card>
    </div>
  );
};

export default Contact;


