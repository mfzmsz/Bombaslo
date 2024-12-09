import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import GradientBackground from '../components/GradientBackground';
import AnimatedSection from '../components/AnimatedSection';
import ParallaxSection from '../components/ParallaxSection';

const solutions = [
  {
    title: 'Asset Manager System',
    description: 'A comprehensive solution for managing your organization\'s assets throughout their lifecycle.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000',
    features: [
      'Real-time asset tracking and monitoring',
      'Preventive maintenance scheduling',
      'Asset lifecycle management',
      'Compliance and audit management',
      'Mobile accessibility',
      'Customizable reporting',
      'Integration with existing systems',
      'Barcode and QR code scanning'
    ]
  },
  {
    title: 'Odoo ERP',
    description: 'An all-in-one business management software that streamlines your operations.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1000',
    features: [
      'Sales & CRM management',
      'Inventory control',
      'Manufacturing management',
      'Financial accounting',
      'Human resources',
      'Project management',
      'E-commerce integration',
      'Business intelligence & reporting'
    ]
  }
];

export default function CloudSolutions() {
  return (
    <GradientBackground>
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Cloud Solutions
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Empower your business with our enterprise-grade cloud solutions
            </p>
          </AnimatedSection>

          <div className="space-y-24">
            {solutions.map((solution, index) => (
              <ParallaxSection key={index} offset={50}>
                <AnimatedSection delay={index * 0.2}>
                  <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="relative h-64 md:h-full min-h-[400px]">
                        <img
                          src={solution.image}
                          alt={solution.title}
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20" />
                      </div>
                      
                      <div className="p-8">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                          {solution.title}
                        </h2>
                        <p className="text-gray-600 mb-6">
                          {solution.description}
                        </p>
                        
                        <div className="space-y-4 mb-8">
                          <h3 className="text-xl font-semibold text-gray-900">
                            Key Features
                          </h3>
                          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {solution.features.map((feature, idx) => (
                              <li key={idx} className="flex items-center text-gray-600">
                                <svg className="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <Link to="/contact">
                          <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg px-8 py-3 font-semibold hover:from-blue-700 hover:to-purple-700 transition-all"
                          >
                            Request for Demo
                          </motion.button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              </ParallaxSection>
            ))}
          </div>
        </div>
      </div>
    </GradientBackground>
  );
}