import React from 'react';

interface ServicesProps {
  primaryColor: string;
  secondaryColor: string;
}

const Services: React.FC<ServicesProps> = ({ primaryColor, secondaryColor }) => {
  return (
    <div className="container mx-auto mt-8 p-8 bg-white shadow-md rounded-lg">
      <section className="services-top-section">
        <div className="relative overflow-hidden rounded-lg">
          <img
            src="https://images.unsplash.com/photo-1455849318743-b2233052fcff?q=80&w=3538&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Empowering Workforce"
            className="services-top-image"
          />
          <div className="services-top-overlay"></div>
          <div className="services-top-content">
            <div className="services-top-content-box">
              <h1 className="text-3xl font-semibold mb-2 text-white">
                Comprehensive Benefit Solutions for a Thriving Workforce
              </h1>
              <p className="text-lg italic text-white">
                "Investing in your employees' well-being is investing in your company's success."
              </p>
              <p className="text-lg text-white">
                We understand that your employees are your most valuable asset. That's why we offer a wide range
                of services designed to help you attract, retain, and motivate your workforce.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-8" style={{ color: secondaryColor }}>
          Group Voluntary Benefit Programs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
              alt="Group Benefits"
              className="rounded-lg shadow-md object-cover h-full w-full"
            />
            <div className="absolute inset-0 bg-black opacity-20 rounded-lg"></div>
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-gray-800 leading-relaxed mb-4 text-lg">
              Elevate your employee benefits package with our customized group voluntary benefit programs. We
              partner with you to design and implement solutions that drive results and provide peace of mind.
            </p>
            <ul className="list-none mt-4 text-gray-700">
              <li className="mb-3 flex">
                <svg
                  className="w-5 h-5 mr-2 text-blue-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <div>
                  <strong className="text-gray-900 block">Customized benefit plans:</strong>
                  <span className="block">Tailored to your unique needs and budget.</span>
                </div>
              </li>
              <li className="mb-3 flex">
                <svg
                  className="w-5 h-5 mr-2 text-blue-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <div>
                  <strong className="text-gray-900 block">Employee education and enrollment support:</strong>
                  <span className="block">Maximize participation and understanding.</span>
                </div>
              </li>
              <li className="flex">
                <svg
                  className="w-5 h-5 mr-2 text-blue-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <div>
                  <strong className="text-gray-900 block">Ongoing support and administration:</strong>
                  <span className="block">Enjoy a hassle-free experience with our dedicated team.</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mb-8" style={{ color: secondaryColor }}>
          Insurance Products
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          We offer a comprehensive suite of insurance products to protect your employees and their families.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Insurance Product Card */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <h3 className="text-xl font-semibold mb-4" style={{ color: primaryColor }}>
              Short-Term Disability Insurance
            </h3>
            <p className="text-gray-700">
              Provides partial income replacement for employees during illness or injury. Options for benefit
              duration periods and waived premiums during disability.
            </p>
          </div>

          {/* Insurance Product Card */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <h3 className="text-xl font-semibold mb-4" style={{ color: primaryColor }}>
              Accident Indemnity and Expense Insurance
            </h3>
            <p className="text-gray-700">
              Helps with accident-related costs. Two types of coverage available to suit different needs.
            </p>
          </div>

          {/* Insurance Product Card */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <h3 className="text-xl font-semibold mb-4" style={{ color: primaryColor }}>
              Critical Illness Insurance
            </h3>
            <p className="text-gray-700">
              Pays a lump-sum benefit upon diagnosis of a covered critical illness. Comprehensive and flexible
              plan design options.
            </p>
          </div>

          {/* Insurance Product Card */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <h3 className="text-xl font-semibold mb-4" style={{ color: primaryColor }}>
              Cancer Insurance
            </h3>
            <p className="text-gray-700">
              Offers a wide range of benefits for employees and their covered dependents. Includes options for
              first-diagnosis benefits and treatment coverage.
            </p>
          </div>

          {/* Insurance Product Card */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <h3 className="text-xl font-semibold mb-4" style={{ color: primaryColor }}>
              Dental Insurance
            </h3>
            <p className="text-gray-700">
              Covers basic and major dental procedures. Access to a large provider network for convenient care.
            </p>
          </div>

          {/* Insurance Product Card */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <h3 className="text-xl font-semibold mb-4" style={{ color: primaryColor }}>
              Hospital Indemnity Insurance
            </h3>
            <p className="text-gray-700">
              Provides benefits to help with deductibles and out-of-pocket costs from a hospital stay.
            </p>
          </div>

          {/* Insurance Product Card */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <h3 className="text-xl font-semibold mb-4" style={{ color: primaryColor }}>
              Whole Life Insurance
            </h3>
            <p className="text-gray-700">
              Pays beneficiaries a cash benefit for loss of life. Builds tax-deferred cash value over time.
            </p>
          </div>

          {/* Insurance Product Card */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <h3 className="text-xl font-semibold mb-4" style={{ color: primaryColor }}>
              GAP Supplemental Medical Coverage
            </h3>
            <p className="text-gray-700">
              Secondary coverage that provides benefits to offset the costs of inpatient and outpatient
              services.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
