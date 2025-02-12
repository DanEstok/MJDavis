import React from 'react';

interface FooterProps {
  primaryColor: string;
}

const Footer: React.FC<FooterProps> = ({ primaryColor }) => {
  return (
    <footer className="bg-gray-100 py-6 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <p className="text-sm text-gray-600">
            &copy; {new Date().getFullYear()} MJDavis Signature Benefit Solutions. All rights reserved.
          </p>
          <div className="space-x-4">
            <a href="/privacy-policy" className="text-sm text-gray-600 hover:text-gray-800">
              Privacy Policy
            </a>
            <a href="/terms-of-service" className="text-sm text-gray-600 hover:text-gray-800">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
