import React from 'react';

interface TermsOfServiceProps {
  primaryColor: string;
  secondaryColor: string;
}

const TermsOfService: React.FC<TermsOfServiceProps> = ({ primaryColor, secondaryColor }) => {
  return (
    <div className="container mx-auto mt-8 p-8 bg-white shadow-md rounded-lg">
      <h1 className="text-3xl font-semibold mb-6" style={{ color: primaryColor }}>
        Terms of Service
      </h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4" style={{ color: secondaryColor }}>
          Acceptance of Terms
        </h2>
        <p className="text-gray-700 leading-relaxed">
          By accessing and using the MJDavis Signature Benefit Solutions website, you agree to be bound by these
          Terms of Service. If you do not agree to these terms, please do not use our website.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4" style={{ color: secondaryColor }}>
          Use of Website
        </h2>
        <p className="text-gray-700 leading-relaxed">
          You may use our website for lawful purposes only. You may not use our website in any way that
          violates applicable laws or regulations.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4" style={{ color: secondaryColor }}>
          Intellectual Property
        </h2>
        <p className="text-gray-700 leading-relaxed">
          The content on our website, including text, graphics, logos, and images, is protected by copyright and
          other intellectual property laws. You may not use our content without our express written permission.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4" style={{ color: secondaryColor }}>
          Disclaimer of Warranties
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Our website is provided on an "as is" and "as available" basis. We make no warranties, express or
          implied, regarding the operation of our website or the content, information, or services provided
          therein.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4" style={{ color: secondaryColor }}>
          Limitation of Liability
        </h2>
        <p className="text-gray-700 leading-relaxed">
          In no event shall MJDavis Signature Benefit Solutions be liable for any damages arising out of or in
          connection with your use of our website or services.
        </p>
      </section>
    </div>
  );
};

export default TermsOfService;
