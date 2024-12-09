import { Link, useLocation } from 'react-router-dom';
import { Bot } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-sm text-white shadow-lg"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2 group">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <Bot className="h-8 w-8 text-blue-400 group-hover:text-blue-300 transition-colors" />
            </motion.div>
            <span className="font-bold text-xl group-hover:text-blue-300 transition-colors">Bombaslo Tech</span>
          </Link>
          
          <div className="hidden md:flex space-x-8">
            {[
              { path: '/', label: 'Home' },
              { path: '/products', label: 'AI Products' },
              { path: '/cloud-solutions', label: 'Cloud Solutions' },
              { path: '/pricing', label: 'AI Pricing' },
              { path: '/contact', label: 'Contact' }
            ].map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                className={`relative px-3 py-2 transition-colors ${
                  isActive(path) ? 'text-blue-400' : 'hover:text-blue-400'
                }`}
              >
                {label}
                {isActive(path) && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-400"
                    initial={false}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 rounded-lg hover:bg-gray-800">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden">
        <div className="px-2 pt-2 pb-3 space-y-1">
          {[
            { path: '/', label: 'Home' },
            { path: '/products', label: 'AI Products' },
            { path: '/cloud-solutions', label: 'Cloud Solutions' },
            { path: '/pricing', label: 'AI Pricing' },
            { path: '/contact', label: 'Contact' }
          ].map(({ path, label }) => (
            <Link
              key={path}
              to={path}
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActive(path)
                  ? 'bg-gray-800 text-blue-400'
                  : 'hover:bg-gray-800 hover:text-blue-400'
              }`}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}