import React from 'react';
import { Link } from 'react-router-dom';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaArrowRight } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="flex flex-col">
                <span className="text-xl font-bold text-light">Crystal Black</span>
                <span className="text-sm font-mono text-primary">Realtors</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Shaping the future of real estate through innovation, 
              excellence, and exceptional service.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <FaFacebook size={16} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <FaTwitter size={16} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <FaInstagram size={16} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <FaLinkedin size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-light mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/properties" className="text-gray-400 hover:text-primary text-sm transition-colors flex items-center group">
                  <FaArrowRight size={12} className="mr-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Properties
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-primary text-sm transition-colors flex items-center group">
                  <FaArrowRight size={12} className="mr-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-primary text-sm transition-colors flex items-center group">
                  <FaArrowRight size={12} className="mr-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-primary text-sm transition-colors flex items-center group">
                  <FaArrowRight size={12} className="mr-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold text-light mb-6">Services</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/services#development" className="text-gray-400 hover:text-primary text-sm transition-colors">
                  Property Development
                </Link>
              </li>
              <li>
                <Link to="/services#management" className="text-gray-400 hover:text-primary text-sm transition-colors">
                  Property Management
                </Link>
              </li>
              <li>
                <Link to="/services#investment" className="text-gray-400 hover:text-primary text-sm transition-colors">
                  Investment Consulting
                </Link>
              </li>
              <li>
                <Link to="/services#luxury" className="text-gray-400 hover:text-primary text-sm transition-colors">
                  Luxury Real Estate
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h3 className="text-lg font-bold text-light mb-6">Stay Updated</h3>
            <p className="text-gray-400 text-sm mb-6">
              Subscribe to our newsletter for the latest property listings and market insights.
            </p>
            
            <div className="mb-8">
              <div className="flex bg-gray-800 rounded-lg overflow-hidden">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 bg-transparent px-4 py-3 text-light text-sm focus:outline-none"
                />
                <button className="bg-primary text-white px-4 py-3 text-sm font-bold hover:bg-primary/90 transition-colors">
                  <FaArrowRight />
                </button>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <FaPhone className="text-primary" size={14} />
                <span className="text-gray-400 text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-primary" size={14} />
                <span className="text-gray-400 text-sm">info@primeestates.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaMapMarkerAlt className="text-primary" size={14} />
                <span className="text-gray-400 text-sm">123 Business Ave, NY 10001</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              © {currentYear} PrimeEstates. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-gray-500 hover:text-primary text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-500 hover:text-primary text-sm transition-colors">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-gray-500 hover:text-primary text-sm transition-colors">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;