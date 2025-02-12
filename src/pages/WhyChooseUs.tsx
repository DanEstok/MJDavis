import React from 'react';
import { Lightbulb, Users, Heart, ShieldCheck, Award, Handshake } from 'lucide-react';

interface WhyChooseUsProps {
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
}

const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ primaryColor, secondaryColor, accentColor }) => {
  return (
    <div className="container mx-auto mt-8 p-8 bg-white shadow-md rounded-lg">
      <section className="why-choose-us-top-section">
        <div className="relative overflow-hidden rounded-lg">
          <img
            src="https://images.unsplash.com/photo-1498661694102-0a3793edbe74?q=80&w=3408&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Why Choose Us"
            className="why-choose-us-top-image"
          />
          <div className="why-choose-us-top-overlay"></div>
          <div className="why-choose-us-top-content">
            <div className="why-choose-us-top-content-box">
              <h1 className="text-3xl font-semibold mb-2 text-white">
                <strong style={{ fontWeight: 'bold' }}>Why Choose MJDavis Signature Benefit Solutions?</strong>
              </h1>
              <p className="text-lg italic text-white">
                "Your Partner in Building a Healthier, Happier, and More Productive Workforce."
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-8" style={{ color: secondaryColor }}>
          Our Core Values
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Personalized Service */}
          <div className="why-choose-us-core-values-card">
            <Users size={48} color={accentColor} className="mb-4" />
            <h3 className="text-xl font-semibold mb-2" style={{ color: primaryColor }}>
              Personalized Service
            </h3>
            <p className="text-gray-700">
              We understand that every client is unique. That's why we provide dedicated support tailored to
              your specific needs. We take the time to understand your business, your employees, and your
              goals.
            </p>
          </div>

          {/* Expertise */}
          <div className="why-choose-us-core-values-card">
            <Lightbulb size={48} color={accentColor} className="mb-4" />
            <h3 className="text-xl font-semibold mb-2" style={{ color: primaryColor }}>
              Expertise
            </h3>
            <p className="text-gray-700">
              Our team is comprised of experienced professionals with a deep understanding of the insurance and
              benefits industry. We stay up-to-date on the latest trends and regulations to provide you with
              the best possible advice.
            </p>
          </div>

          {/* Partnership with MedMutual Protect */}
          <div className="why-choose-us-core-values-card">
            <Heart size={48} color={accentColor} className="mb-4" />
            <h3 className="text-xl font-semibold mb-2" style={{ color: primaryColor }}>
              Partnership with MedMutual Protect
            </h3>
            <p className="text-gray-700">
              As a proud partner of MedMutual Protect, we offer access to a wide range of innovative and
              hassle-free voluntary benefits, ensuring your employees have access to the coverage they need.
            </p>
          </div>

          {/* Integrity */}
          <div className="why-choose-us-core-values-card">
            <Handshake size={48} color={accentColor} className="mb-4" />
            <h3 className="text-xl font-semibold mb-2" style={{ color: primaryColor }}>
              Integrity
            </h3>
            <p className="text-gray-700">
              We operate with the highest ethical standards, ensuring transparency and trust in all our
              interactions. You can rely on us to always act in your best interest.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-8" style={{ color: secondaryColor }}>
          What Sets Us Apart
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Client-Centric Approach */}
          <div>
            <h3 className="text-xl font-semibold mb-4" style={{ color: primaryColor }}>
              Client-Centric Approach
            </h3>
            <p className="text-gray-700 leading-relaxed">
              We put our clients first, always. Our dedicated team is committed to providing exceptional
              service and building long-term relationships based on trust and mutual success.
            </p>
          </div>

          {/* Comprehensive Solutions */}
          <div>
            <h3 className="text-xl font-semibold mb-4" style={{ color: primaryColor }}>
              Comprehensive Solutions
            </h3>
            <p className="text-gray-700 leading-relaxed">
              From group voluntary benefits to a wide range of insurance products, we offer comprehensive
              solutions to meet all your employee benefit needs.
            </p>
          </div>
        </div>
        <ul className="list-none mt-4 text-gray-700">
          <li className="mb-3 flex">
            <ShieldCheck
              className="w-5 h-5 mr-2 text-blue-500"
            />
            <div>
              <strong className="text-gray-900 block">Compliance Expertise:</strong>
              <span className="block">
                We ensure your benefit programs are fully compliant with all applicable regulations, minimizing
                your risk and maximizing your peace of mind.
              </span>
            </div>
          </li>
          <li className="mb-3 flex">
            <Award
              className="w-5 h-5 mr-2 text-blue-500"
            />
            <div>
              <strong className="text-gray-900 block">Proven Track Record:</strong>
              <span className="block">
                With years of experience and a long list of satisfied clients, we have a proven track record of
                helping businesses achieve their benefit goals.
              </span>
            </div>
          </li>
        </ul>
      </section>

      {/* Testimonials Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-8" style={{ color: secondaryColor }}>
          What Our Clients Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Testimonial 1 */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <p className="text-gray-700 italic">
              "MJDavis Signature Benefit Solutions has been an invaluable partner in helping us design and
              implement a comprehensive benefit program for our employees. Their expertise and personalized
              service are unmatched."
            </p>
            <p className="mt-2 text-gray-600">- John Smith, CEO of ABC Company</p>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <p className="text-gray-700 italic">
              "We have been working with MJDavis Signature Benefit Solutions for several years and have always
              been impressed with their professionalism and dedication. They truly care about their clients and
              go above and beyond to provide exceptional service."
            </p>
            <p className="mt-2 text-gray-600">- Jane Doe, HR Manager at XYZ Corporation</p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="text-center">
        <h2 className="text-3xl font-semibold mb-6" style={{ color: primaryColor }}>
          Ready to Elevate Your Employee Benefits?
        </h2>
        <p className="text-gray-700 leading-relaxed mb-8">
          Contact us today to learn more about how MJDavis Signature Benefit Solutions can help you create a
          benefit program that attracts, retains, and motivates your workforce.
        </p>
        <a
          href="/contact-us"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full inline-block"
        >
          Get Started Today
        </a>
      </section>
    </div>
  );
};

export default WhyChooseUs;
