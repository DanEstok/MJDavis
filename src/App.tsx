import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import WhyChooseUs from './pages/WhyChooseUs';
import ClientTestimonials from './pages/ClientTestimonials';
import ContactUs from './pages/ContactUs';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import Footer from './components/Footer';
import './global.css';
import { Lightbulb, Users, Heart, MessageSquare, Book, Phone, Shield } from 'lucide-react';

function App() {
  const primaryColor = '#004A99';
  const secondaryColor = '#0077CC';
  const accentColor = '#FFC42E';
  return (
    <Router>
      <div className="font-sans antialiased bg-gray-50 text-gray-900">
        <header className="bg-white shadow-md">
          <div className="container mx-auto py-6 px-4">
            <div className="flex items-center justify-between">
              <Link to="/" className="text-2xl font-bold text-gray-800" style={{ color: primaryColor }}>
                MJDavis Signature Benefit Solutions
              </Link>
              <nav className="space-x-6">
                <Link to="/about-us" className="hover:text-gray-500">About Us</Link>
                <Link to="/services" className="hover:text-gray-500">Services</Link>
                <Link to="/why-choose-us" className="hover:text-gray-500">Why Choose Us</Link>
                <Link to="/contact-us" className="hover:text-gray-500">Contact Us</Link>
              </nav>
            </div>
          </div>
        </header>

        <main className="container mx-auto py-12 px-4">
          <Routes>
            <Route path="/" element={<Home primaryColor={primaryColor} secondaryColor={secondaryColor} accentColor={accentColor} />} />
            <Route path="/about-us" element={<AboutUs primaryColor={primaryColor} secondaryColor={secondaryColor} />} />
            <Route path="/services" element={<Services primaryColor={primaryColor} secondaryColor={secondaryColor} />} />
            <Route path="/why-choose-us" element={<WhyChooseUs primaryColor={primaryColor} secondaryColor={secondaryColor} accentColor={accentColor} />} />
            <Route path="/client-testimonials" element={<ClientTestimonials primaryColor={primaryColor} secondaryColor={secondaryColor} />} />
            <Route path="/contact-us" element={<ContactUs primaryColor={primaryColor} secondaryColor={secondaryColor} />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy primaryColor={primaryColor} secondaryColor={secondaryColor} />} />
            <Route path="/terms-of-service" element={<TermsOfService primaryColor={primaryColor} secondaryColor={secondaryColor} />} />
          </Routes>
        </main>

        <Footer primaryColor={primaryColor} />
      </div>
    </Router>
  );
}

export default App;
