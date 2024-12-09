import { Bot, FileText, Users, ArrowRight, Scale, UserCog, Stethoscope } from 'lucide-react';
import { motion } from 'framer-motion';
import AnimatedSection from '../components/AnimatedSection';
import GradientBackground from '../components/GradientBackground';
import ParallaxSection from '../components/ParallaxSection';

const products = [
  {
    icon: Scale,
    title: 'AI Tenders Evaluation',
    description: 'Revolutionize your tender evaluation process with our AI-powered solution. Automatically analyze bids, assess risks, and ensure compliance with complete transparency and accuracy.',
    features: [
      'Automated bid analysis',
      'Risk assessment engine',
      'Compliance verification',
      'Document processing',
      'Vendor evaluation'
    ],
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1000',
    stats: [
      { label: 'Time Saved', value: '75%' },
      { label: 'Accuracy', value: '99.9%' },
      { label: 'Cost Reduction', value: '50%' }
    ]
  },
  {
    icon: Users,
    title: 'AI CRM Agent',
    description: 'Transform your customer relationship management with our intelligent AI agent. Handle customer inquiries, manage relationships, and provide exceptional support automatically.',
    features: [
      'Automated customer support',
      'Smart lead qualification',
      'Sentiment analysis',
      'Real-time customer insights',
      '24/7 availability'
    ],
    image: 'https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&q=80&w=1000',
    stats: [
      { label: 'Customer Satisfaction', value: '98%' },
      { label: 'Response Time', value: '< 1min' },
      { label: 'Lead Conversion', value: '+45%' }
    ]
  },
  {
    icon: FileText,
    title: 'AI Invoice Assistant',
    description: 'Streamline your invoice processing with our AI-powered solution. Automatically create, process, and manage invoices with high accuracy and efficiency.',
    features: [
      'Automated invoice generation',
      'Data extraction & validation',
      'Payment tracking',
      'Error detection',
      'Integration with accounting software'
    ],
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=1000',
    stats: [
      { label: 'Processing Speed', value: '< 30s' },
      { label: 'Accuracy Rate', value: '99.9%' },
      { label: 'Cost Reduction', value: '60%' }
    ]
  },
  {
    icon: Bot,
    title: 'AI Chatbot',
    description: 'Deploy an intelligent chatbot that understands your products and services. Provide instant responses to customer inquiries and support requests.',
    features: [
      'Natural language processing',
      'Product knowledge base',
      'Multi-language support',
      'Customizable responses',
      'Analytics dashboard'
    ],
    image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&q=80&w=1000',
    stats: [
      { label: 'Available Languages', value: '20+' },
      { label: 'Query Resolution', value: '95%' },
      { label: 'User Satisfaction', value: '4.8/5' }
    ]
  },
  {
    icon: UserCog,
    title: 'AI HR Manager',
    description: 'Transform your HR operations with AI-powered automation. From recruitment to employee management, make data-driven decisions and improve workforce efficiency.',
    features: [
      'Automated recruitment screening',
      'Employee performance analytics',
      'Leave management automation',
      'Training needs assessment',
      'Sentiment analysis'
    ],
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1000',
    stats: [
      { label: 'Hiring Time', value: '-60%' },
      { label: 'HR Efficiency', value: '+75%' },
      { label: 'Employee Satisfaction', value: '4.7/5' }
    ]
  },
  {
    icon: Stethoscope,
    title: 'AI Hospital Appointment Manager',
    description: 'Streamline hospital appointments and patient scheduling with AI-powered automation. Optimize resource allocation and improve patient experience.',
    features: [
      'Smart appointment scheduling',
      'Resource optimization',
      'Patient reminders',
      'Wait time prediction',
      'Emergency slot management'
    ],
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1000',
    stats: [
      { label: 'Wait Time', value: '-70%' },
      { label: 'Resource Utilization', value: '+85%' },
      { label: 'Patient Satisfaction', value: '4.9/5' }
    ]
  }
];

export default function Products() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const handleContactSales = (productTitle: string) => {
    const subject = encodeURIComponent(`Inquiry about ${productTitle}`);
    const body = encodeURIComponent(`I'm interested in learning more about ${productTitle}. Please provide additional information about pricing and features.`);
    window.location.href = `mailto:sales@bombaslo.cloud?subject=${subject}&body=${body}`;
  };

  return (
    <GradientBackground>
      <div className="relative py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our AI Solutions
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our cutting-edge AI products designed to transform your business operations
              and drive exceptional results.
            </p>
          </AnimatedSection>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-32"
          >
            {products.map((product, index) => (
              <ParallaxSection
                key={index}
                offset={75}
                className={`relative ${index % 2 === 0 ? 'lg:translate-x-12' : 'lg:-translate-x-12'}`}
              >
                <AnimatedSection delay={index * 0.2}>
                  {index > 0 && (
                    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
                  )}
                
                  <div className={`flex flex-col lg:flex-row items-center gap-12 py-12 ${
                    index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                  }`}>
                    <div className="w-full lg:w-1/2">
                      <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-bl-full" />
                        
                        <product.icon className="w-16 h-16 text-blue-600 mb-6 relative z-10" />
                        
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                          {product.title}
                        </h2>
                        
                        <p className="text-gray-600 mb-8">
                          {product.description}
                        </p>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                          {product.stats.map((stat, idx) => (
                            <div key={idx} className="text-center p-4 bg-white/50 backdrop-blur-sm rounded-lg">
                              <div className="text-xl sm:text-2xl font-bold text-blue-600">
                                {stat.value}
                              </div>
                              <div className="text-sm text-gray-600">
                                {stat.label}
                              </div>
                            </div>
                          ))}
                        </div>
                        
                        <ul className="space-y-3 mb-8">
                          {product.features.map((feature, fIndex) => (
                            <li key={fIndex} className="flex items-center text-gray-700">
                              <ArrowRight className="w-5 h-5 text-blue-600 mr-3" />
                              {feature}
                            </li>
                          ))}
                        </ul>

                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => handleContactSales(product.title)}
                          className="w-full bg-blue-600 text-white rounded-lg py-3 px-6 hover:bg-blue-700 transition-colors"
                        >
                          Contact Sales
                        </motion.button>
                      </div>
                    </div>
                    
                    <div className="w-full lg:w-1/2">
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="bg-gradient-to-br from-blue-600 to-purple-600 p-1 rounded-2xl"
                      >
                        <div className="bg-white rounded-xl p-2 h-full">
                          <img
                            src={product.image}
                            alt={product.title}
                            className="w-full h-[250px] sm:h-[300px] lg:h-[400px] object-cover rounded-lg"
                          />
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </AnimatedSection>
              </ParallaxSection>
            ))}
          </motion.div>
        </div>
      </div>
    </GradientBackground>
  );
}