import React from 'react';

interface AboutUsProps {
  primaryColor: string;
  secondaryColor: string;
}

const AboutUs: React.FC<AboutUsProps> = ({ primaryColor, secondaryColor }) => {
  return (
    <div className="container mx-auto mt-8 p-8 bg-white shadow-md rounded-lg">
      <section className="about-us-section">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-semibold" style={{ color: primaryColor }}>
            About Us
          </h1>
          <img
            src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
            alt="Company History"
            className="w-48 h-48 rounded-full object-cover shadow-md"
          />
        </div>
        <h2 className="text-2xl font-semibold mb-4" style={{ color: secondaryColor }}>
          Company History
        </h2>
        <p className="text-gray-700 leading-relaxed">
          MJDavis Signature Benefit Solutions was founded with a vision to provide personalized and comprehensive
          benefit solutions to businesses of all sizes. With years of experience in the insurance industry, our
          founders recognized the need for a more client-focused approach.
        </p>
        <p className="text-gray-700 leading-relaxed mt-4">
          We started as a small team of dedicated professionals, committed to understanding the unique needs of
          each client. Over the years, we have grown and evolved, but our core values remain the same: integrity,
          personalized service, and a commitment to excellence.
        </p>
      </section>

      <section className="about-us-section">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold" style={{ color: secondaryColor }}>
            Mission and Values
          </h2>
          <img
            src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
            alt="Mission and Values"
            className="w-48 h-48 rounded-full object-cover shadow-md"
          />
        </div>
        <p className="text-gray-700 leading-relaxed">
          Our mission is to empower businesses and individuals with the knowledge and resources they need to make
          informed decisions about their benefit programs. We strive to deliver innovative solutions that drive
          results and provide peace of mind.
        </p>
        <ul className="list-disc list-inside mt-4 text-gray-700">
          <li>
            <strong>Integrity:</strong> We conduct our business with the highest ethical standards.
          </li>
          <li>
            <strong>Personalized Service:</strong> We tailor our solutions to meet the unique needs of each client.
          </li>
          <li>
            <strong>Excellence:</strong> We are committed to delivering the highest quality service and support.
          </li>
          <li>
            <strong>Innovation:</strong> We continuously seek new and better ways to serve our clients.
          </li>
        </ul>
      </section>

      <section className="about-us-section">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold" style={{ color: secondaryColor }}>
            Our Team
          </h2>
          <img
            src="https://images.unsplash.com/photo-1502980426475-b83966705988?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
            alt="Our Team"
            className="w-48 h-48 rounded-full object-cover shadow-md"
          />
        </div>
        <p className="text-gray-700 leading-relaxed">
          Our team is comprised of experienced professionals with a deep understanding of the insurance and
          benefits industry. We are passionate about helping our clients achieve their goals and are dedicated to
          providing exceptional service.
        </p>
        <div className="about-us-team-grid">
          <div className="about-us-team-card">
            <h3 className="text-xl font-semibold mb-2">John Doe</h3>
            <p className="text-gray-600">CEO</p>
            <p className="text-gray-700">
              John has over 20 years of experience in the insurance industry and is a recognized leader in the
              field.
            </p>
          </div>
          <div className="about-us-team-card">
            <h3 className="text-xl font-semibold mb-2">Jane Smith</h3>
            <p className="text-gray-600">Director of Benefits</p>
            <p className="text-gray-700">
              Jane is an expert in designing and implementing customized benefit programs for businesses.
            </p>
          </div>
          <div className="about-us-team-card">
            <h3 className="text-xl font-semibold mb-2">Mike Johnson</h3>
            <p className="text-gray-600">Senior Consultant</p>
            <p className="text-gray-700">
              Mike provides strategic guidance and support to our clients, helping them navigate the complex world
              of insurance and benefits.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
