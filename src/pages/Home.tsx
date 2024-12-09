import { Bot } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Slider from '../components/Slider';
import AnimatedSection from '../components/AnimatedSection';
import GradientBackground from '../components/GradientBackground';
import ParallaxSection from '../components/ParallaxSection';

const slides = [
  {
    title: 'AI Tenders Evaluation',
    description: 'Automate your tender evaluation process with advanced AI analysis and risk assessment.',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1000',
    category: 'ai',
  },
  {
    title: 'AI CRM Agent',
    description: 'Handle customer inquiries and support with our advanced AI CRM solution.',
    image: 'https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&q=80&w=1000',
    category: 'ai',
  },
  {
    title: 'AI Invoice Assistant',
    description: 'Automate your invoice processing with our intelligent AI agent. Save time and reduce errors.',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=1000',
    category: 'ai',
  },
  {
    title: 'AI HR Manager',
    description: 'Transform your HR operations with AI-powered automation and insights.',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1000',
    category: 'ai',
  },
  {
    title: 'Asset Manager System',
    description: 'A comprehensive cloud-based solution for managing your organization\'s assets throughout their lifecycle.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000',
    category: 'cloud',
  },
  {
    title: 'Odoo ERP',
    description: 'An all-in-one business management software that streamlines your operations.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1000',
    category: 'cloud',
  },
];

const features = [
  {
    title: 'Advanced AI Technology',
    description: 'Powered by cutting-edge artificial intelligence and machine learning algorithms.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1000',
  },
  {
    title: 'Seamless Integration',
    description: 'Easily integrate with your existing systems and workflows.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000',
  },
  {
    title: '24/7 Support',
    description: 'Round-the-clock assistance and monitoring for your peace of mind.',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=1000',
  },
];

export default function Home() {
  return (
    <GradientBackground className="flex flex-col">
      <div className="relative bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-indigo-900/90 to-purple-900/90 mix-blend-multiply" />
          <img
            src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=1000"
            alt="AI Background"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="w-full md:w-1/2 space-y-6 text-center md:text-left"
            >
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight">
                Welcome to the Future of AI and Cloud Solutions
              </h1>
              <p className="text-lg sm:text-xl text-gray-300">
                Empower your business with intelligent AI agents that transform how you work.
              </p>
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
                  className="bg-blue-600 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg text-base sm:text-lg font-semibold hover:bg-blue-700 transition-colors inline-block"
                >
                  Contact Sales
                </motion.button>
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="md:w-1/2 mt-8 md:mt-0"
            >
              <div className="relative">
                <motion.div
                  animate={{
                    y: [0, -20, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <Bot className="w-32 h-32 sm:w-48 sm:h-48 text-blue-400" />
                </motion.div>
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="absolute -bottom-4 left-1/2 transform -translate-x-1/2"
                >
                  <div className="bg-white text-gray-900 rounded-lg p-4 shadow-lg">
                    <p className="text-lg font-medium">How can I help you today?</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <ParallaxSection offset={100}>
        <AnimatedSection className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Slider slides={slides} />
          </div>
        </AnimatedSection>
      </ParallaxSection>

      <ParallaxSection offset={50} className="py-24 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.1),transparent)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Bombaslo Tech?
            </h2>
            <p className="text-xl text-gray-600">
              Experience the power of next-generation AI solutions
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {features.map((feature, index) => (
              <AnimatedSection key={index} delay={index * 0.2}>
                <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden transform transition-all hover:scale-105">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </ParallaxSection>
    </GradientBackground>
  );
}