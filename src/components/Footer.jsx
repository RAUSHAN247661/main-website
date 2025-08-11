import React from 'react';
import { Icon } from '@iconify/react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 mt-12">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">About Us</h3>
            <p className="text-gray-600">
              We provide high-quality educational resources and technology solutions for students and educators.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a 
                href="https://www.facebook.com/profile.php?id=61554199612938" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-600 hover:text-primary"
              >
                <Icon icon="mdi:facebook" className="text-2xl" />
              </a>
              <a 
                href="https://www.instagram.com/qfact_2025/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-600 hover:text-primary"
              >
                <Icon icon="mdi:instagram" className="text-2xl" />
              </a>
              <a 
                href="https://www.youtube.com/@q-fact2024" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-600 hover:text-primary"
              >
                <Icon icon="mdi:youtube" className="text-2xl" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t mt-8 pt-8 text-center text-gray-600">
          <p>&copy; 2025 Educational Store. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


