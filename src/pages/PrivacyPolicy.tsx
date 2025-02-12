import React from 'react';

interface PrivacyPolicyProps {
  primaryColor: string;
  secondaryColor: string;
}

const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ primaryColor, secondaryColor }) => {
  return (
    <div className="container mx-auto mt-8 p-8 bg-white shadow-md rounded-lg">
      <h1 className="text-3xl font-semibold mb-6" style={{ color: primaryColor }}>
        Privacy Policy
      </h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4" style={{ color: secondaryColor }}>
          Introduction
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Your privacy is important to us. This Privacy Policy explains how MJDavis Signature Benefit Solutions
          collects, uses, and protects your personal information when you use our website and services.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4" style={{ color: secondaryColor }}>
          Information We Collect
        </h2>
        <p className="text-gray-700 leading-relaxed">
          We may collect the following types of personal information:
        </p>
        <ul className="list-disc list-inside mt-4 text-gray-700">
          <li>Contact information (e.g., name, email address, phone number)</li>
          <li>Demographic information (e.g., age, gender, location)</li>
          <li>Business information (e.g., company name, industry)</li>
          <li>Usage data (e.g., website activity, IP address)</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4" style={{ color: secondaryColor }}>
          How We Use Your Information
        </h2>
        <p className="text-gray-700 leading-relaxed">
          We may use your personal information for the following purposes:
        </p>
        <ul className="list-disc list-inside mt-4 text-gray-700">
          <li>To provide and improve our services</li>
          <li>To communicate with you</li>
          <li>To personalize your experience</li>
          <li>To analyze website usage</li>
          <li>To comply with legal obligations</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4" style={{ color: secondaryColor }}>
          Data Security
        </h2>
        <p className="text-gray-700 leading-relaxed">
          We take reasonable measures to protect your personal information from unauthorized access, use, or
          disclosure. However, no method of transmission over the internet or electronic storage is completely
          secure.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4" style={{ color: secondaryColor }}>
          Changes to This Privacy Policy
        </h2>
        <p className="text-gray-700 leading-relaxed">
          We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new
          Privacy Policy on our website.
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
