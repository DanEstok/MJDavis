import React from 'react';

interface ClientTestimonialsProps {
  primaryColor: string;
  secondaryColor: string;
}

const ClientTestimonials: React.FC<ClientTestimonialsProps> = ({ primaryColor, secondaryColor }) => {
  return (
    <div className="container mx-auto mt-8 p-8 bg-white shadow-md rounded-lg">
      <h1 className="text-3xl font-semibold mb-6" style={{ color: primaryColor }}>
        Client Testimonials
      </h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4" style={{ color: secondaryColor }}>
          What Our Clients Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-100 p-4 rounded-lg">
            <p className="text-gray-700 italic">
              "MJDavis Signature Benefit Solutions has been an invaluable partner in helping us design and implement
              a comprehensive benefit program for our employees. Their personalized service and expertise have made
              a significant difference."
            </p>
            <p className="text-gray-600 mt-2">- John Smith, CEO of ABC Company</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg">
            <p className="text-gray-700 italic">
              "We have been working with MJDavis Signature Benefit Solutions for several years and have always been
              impressed with their professionalism and dedication. They truly care about their clients and go above
              and beyond to provide exceptional service."
            </p>
            <p className="text-gray-600 mt-2">- Jane Doe, HR Manager at XYZ Corporation</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4" style={{ color: secondaryColor }}>
          More Success Stories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-100 p-4 rounded-lg">
            <p className="text-gray-700 italic">
              "Thanks to MJDavis Signature Benefit Solutions, we were able to reduce our healthcare costs while
              improving the quality of benefits for our employees. Their expertise in negotiating with insurance
              providers saved us a significant amount of money."
            </p>
            <p className="text-gray-600 mt-2">- Mike Johnson, CFO of 123 Industries</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg">
            <p className="text-gray-700 italic">
              "We highly recommend MJDavis Signature Benefit Solutions to any business looking for a trusted partner
              in insurance and benefits. Their knowledge, experience, and commitment to customer service are
              unmatched."
            </p>
            <p className="text-gray-600 mt-2">- Sarah Williams, Director of Operations at 456 Enterprises</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ClientTestimonials;
