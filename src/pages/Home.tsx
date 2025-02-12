import React from 'react';
import { Link } from 'react-router-dom';
import { Lightbulb, Users, Heart, MessageSquare } from 'lucide-react';

interface HomeProps {
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
}

const Home: React.FC<HomeProps> = ({ primaryColor, secondaryColor, accentColor }) => {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="home-hero"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1560264234-b35b70880c30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80')`,
        }}
      >
        <div className="home-hero-content">
          <h1 className="home-hero-title">
            Empowering Your Business with Tailored Benefit Solutions
          </h1>
          <p className="home-hero-subtitle">
            MJDavis Signature Benefit Solutions partners with MedMutual Protect to deliver innovative and
            personalized voluntary benefits that drive employee satisfaction and business success.
          </p>
          <Link
            to="/contact-us"
            className="btn"
          >
            Discover Your Benefit Solutions
          </Link>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="container mx-auto mt-16 p-8 bg-white shadow-xl rounded-lg">
        <h2 className="text-3xl font-semibold mb-8 text-center" style={{ color: secondaryColor }}>
          Comprehensive Services Designed for Your Success
        </h2>
        <div className="home-services-grid">
          {/* Service Card 1 */}
          <div className="home-service-card">
            <Lightbulb size={48} color={accentColor} className="mb-4" />
            <h3 className="text-xl font-semibold mb-2" style={{ color: primaryColor }}>
              Custom Benefit Program Design
            </h3>
            <p className="text-gray-700">
              Tailored benefit programs that align with your company culture and employee needs, maximizing
              engagement and satisfaction.
            </p>
          </div>

          {/* Service Card 2 */}
          <div className="home-service-card">
            <Users size={48} color={accentColor} className="mb-4" />
            <h3 className="text-xl font-semibold mb-2" style={{ color: primaryColor }}>
              Employee Education & Enrollment
            </h3>
            <p className="text-gray-700">
              Comprehensive education sessions and enrollment support to ensure your employees understand and
              appreciate their benefits.
            </p>
          </div>

          {/* Service Card 3 */}
          <div className="home-service-card">
            <Heart size={48} color={accentColor} className="mb-4" />
            <h3 className="text-xl font-semibold mb-2" style={{ color: primaryColor }}>
              Ongoing Support & Administration
            </h3>
            <p className="text-gray-700">
              Dedicated support team to handle all your benefit administration needs, ensuring a seamless and
              stress-free experience.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="container mx-auto mt-16 p-8 bg-blue-100 rounded-lg text-center">
        <h2 className="text-3xl font-semibold mb-6" style={{ color: primaryColor }}>
          Ready to Transform Your Employee Benefits?
        </h2>
        <p className="text-gray-700 text-lg mb-8">
          Contact us today to discover how MJDavis Signature Benefit Solutions can help you create a benefit
          program that attracts, retains, and motivates your workforce.
        </p>
        <Link
          to="/contact-us"
          className="btn"
        >
          Schedule Your Consultation
        </Link>
      </section>
    </div>
  );
};

export default Home;
