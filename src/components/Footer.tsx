import { Bot, Mail, MapPin, Facebook, Twitter, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Footer() {
  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' }
  ];

  const handleEmailClick = () => {
    window.location.href = 'mailto:sales@bombaslo.cloud';
  };

  return (
    <footer className="relative bg-gray-900 text-white mt-auto">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/50 pointer-events-none" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center space-x-2 group">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <Bot className="h-6 w-6 sm:h-8 sm:w-8 text-blue-400 group-hover:text-blue-300" />
              </motion.div>
              <span className="font-bold text-lg sm:text-xl group-hover:text-blue-300 transition-colors">
                Bombaslo Tech
              </span>
            </Link>
            <p className="mt-4 text-gray-400">
              Empowering businesses with intelligent AI solutions for a smarter future.
            </p>
            <div className="mt-6 flex space-x-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                  aria-label={label}
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-400 hover:text-blue-400 transition-colors">
                  AI Products
                </Link>
              </li>
              <li>
                <Link to="/cloud-solutions" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Cloud Solutions
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-gray-400 hover:text-blue-400 transition-colors">
                  AI Pricing
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Solutions</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/products" className="text-gray-400 hover:text-blue-400 transition-colors">
                  AI Tenders Evaluation
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-400 hover:text-blue-400 transition-colors">
                  AI CRM Agent
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-400 hover:text-blue-400 transition-colors">
                  AI Invoice Assistant
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-400 hover:text-blue-400 transition-colors">
                  AI HR Manager
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-400 hover:text-blue-400 transition-colors">
                  AI Hospital Appointment Manager
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-400 hover:text-blue-400 transition-colors">
                  AI Chatbot
                </Link>
              </li>
              <li>
                <Link to="/cloud-solutions" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Asset Manager System
                </Link>
              </li>
              <li>
                <Link to="/cloud-solutions" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Odoo ERP
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400" />
                <button
                  onClick={handleEmailClick}
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  sales@bombaslo.cloud
                </button>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-blue-400" />
                <span className="text-gray-400">Africa & ME</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Bombaslo Tech. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}