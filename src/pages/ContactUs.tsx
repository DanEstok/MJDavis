import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

interface ContactUsProps {
  primaryColor: string;
  secondaryColor: string;
}

const ContactUs: React.FC<ContactUsProps> = ({ primaryColor, secondaryColor }) => {
  return (
    <div className="container mx-auto mt-8 p-8 bg-white shadow-md rounded-lg">
      <h1 className="text-3xl font-semibold mb-6" style={{ color: primaryColor }}>
        Contact Us
      </h1>

      <div className="contact-us-container">
        {/* Contact Form */}
        <section className="contact-us-form-section">
          <h2 className="text-2xl font-semibold mb-4" style={{ color: secondaryColor }}>
            Send us a Message
          </h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="contact-us-form-label">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="contact-us-form-input"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label htmlFor="email" className="contact-us-form-label">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="contact-us-form-input"
                placeholder="Your Email"
              />
            </div>
            <div>
              <label htmlFor="message" className="contact-us-form-label">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="contact-us-form-textarea"
                placeholder="Your Message"
              />
            </div>
            <div>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Send Message
              </button>
            </div>
          </form>
        </section>

        {/* Contact Information */}
        <section className="contact-us-info-section">
          <h2 className="text-2xl font-semibold mb-4" style={{ color: secondaryColor }}>
            Contact Information
          </h2>
          <div className="contact-us-info-card">
            <MapPin className="text-blue-500 inline-block mr-2" size={20} />
            <strong>Address:</strong> Ohio Valley Region, OH
          </div>
          <div className="contact-us-info-card">
            <Phone className="text-blue-500 inline-block mr-2" size={20} />
            <strong>Phone:</strong> (740) 298-5118
          </div>
          <div className="contact-us-info-card">
            <Mail className="text-blue-500 inline-block mr-2" size={20} />
            <strong>Email:</strong> mistyjo.davis@mjdavissignaturebenefitsolutions.com
          </div>
        </section>
      </div>

      {/* Map Section */}
      <section className="contact-us-map-section mt-8">
        <h2 className="text-2xl font-semibold mb-4" style={{ color: secondaryColor }}>
          Our Location
        </h2>
        {/* Static Map Image of Belmont County, OH */}
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/3/3d/Map_of_Belmont_County_Ohio_With_Municipal_and_Township_Labels.PNG"
          alt="Belmont County, OH Map"
          className="rounded-lg"
        />
      </section>
    </div>
  );
};

export default ContactUs;
