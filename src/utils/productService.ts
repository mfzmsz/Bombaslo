import { ProductInfo, Feature, Stat } from './types';

export const products: ProductInfo[] = [
  {
    id: 'tenders',
    name: 'AI Tenders Evaluation',
    shortDescription: 'Revolutionize your tender evaluation process with our AI-powered solution.',
    fullDescription: 'Revolutionize your tender evaluation process with our AI-powered solution. Automatically analyze bids, assess risks, and ensure compliance with complete transparency and accuracy.',
    price: 15000,
    features: [
      'Automated bid analysis',
      'Risk assessment engine',
      'Compliance verification',
      'Document processing',
      'Vendor evaluation',
      'Custom scoring models',
      'Audit trail',
      'Integration capabilities'
    ],
    detailedFeatures: [
      {
        name: 'Automated bid analysis',
        description: 'Process and analyze multiple bids simultaneously with high accuracy'
      },
      {
        name: 'Risk assessment engine',
        description: 'Advanced AI algorithms to identify and evaluate potential risks'
      },
      {
        name: 'Compliance verification',
        description: 'Automatic checking against regulatory requirements and standards'
      }
    ],
    stats: [
      { label: 'Time Saved', value: '75%' },
      { label: 'Accuracy', value: '99.9%' },
      { label: 'Cost Reduction', value: '50%' }
    ],
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1000',
    category: 'ai'
  },
  {
    id: 'crm',
    name: 'AI CRM Agent',
    shortDescription: 'Transform your customer relationship management with our intelligent AI agent.',
    fullDescription: 'Transform your customer relationship management with our intelligent AI agent. Handle customer inquiries, manage relationships, and provide exceptional support automatically.',
    price: 10000,
    features: [
      'Automated customer support',
      'Smart lead qualification',
      'Sentiment analysis',
      'Real-time customer insights',
      '24/7 availability',
      'Multi-channel support',
      'Custom workflows',
      'API integration'
    ],
    detailedFeatures: [
      {
        name: 'Automated customer support',
        description: 'AI-powered responses to common customer inquiries'
      },
      {
        name: 'Smart lead qualification',
        description: 'Intelligent scoring and routing of potential leads'
      }
    ],
    stats: [
      { label: 'Customer Satisfaction', value: '98%' },
      { label: 'Response Time', value: '< 1min' },
      { label: 'Lead Conversion', value: '+45%' }
    ],
    image: 'https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&q=80&w=1000',
    category: 'ai'
  },
  {
    id: 'invoice',
    name: 'AI Invoice Assistant',
    shortDescription: 'Streamline your invoice processing with our AI-powered solution.',
    fullDescription: 'Streamline your invoice processing with our AI-powered solution. Automatically create, process, and manage invoices with high accuracy and efficiency.',
    price: 5700,
    features: [
      'Automated invoice generation',
      'Data extraction & validation',
      'Payment tracking',
      'Error detection',
      'Integration with accounting software',
      'Custom templates',
      'Batch processing',
      'Export capabilities'
    ],
    detailedFeatures: [
      {
        name: 'Automated invoice generation',
        description: 'Create professional invoices automatically from various data sources'
      },
      {
        name: 'Data extraction & validation',
        description: 'Intelligent extraction of key information with accuracy checks'
      }
    ],
    stats: [
      { label: 'Processing Speed', value: '< 30s' },
      { label: 'Accuracy Rate', value: '99.9%' },
      { label: 'Cost Reduction', value: '60%' }
    ],
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=1000',
    category: 'ai'
  },
  {
    id: 'hr-manager',
    name: 'AI HR Manager',
    shortDescription: 'Transform your HR operations with AI-powered automation.',
    fullDescription: 'Transform your HR operations with AI-powered automation. From recruitment to employee management, make data-driven decisions and improve workforce efficiency.',
    price: 8000,
    features: [
      'Automated recruitment screening',
      'Employee performance analytics',
      'Leave management automation',
      'Training needs assessment',
      'Sentiment analysis',
      'Compliance monitoring',
      'Payroll integration',
      'Employee engagement tracking'
    ],
    detailedFeatures: [
      {
        name: 'Automated recruitment',
        description: 'AI-powered candidate screening and matching'
      },
      {
        name: 'Performance analytics',
        description: 'Advanced analytics for employee performance tracking'
      }
    ],
    stats: [
      { label: 'Hiring Time', value: '-60%' },
      { label: 'HR Efficiency', value: '+75%' },
      { label: 'Employee Satisfaction', value: '4.7/5' }
    ],
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1000',
    category: 'ai'
  },
  {
    id: 'hospital-manager',
    name: 'AI Hospital Appointment Manager',
    shortDescription: 'Streamline hospital appointments and patient scheduling with AI-powered automation.',
    fullDescription: 'Transform hospital appointment management with intelligent scheduling, resource optimization, and improved patient experience. Reduce wait times and maximize healthcare resource utilization.',
    price: 9000,
    features: [
      'Smart appointment scheduling',
      'Resource optimization',
      'Patient reminders',
      'Wait time prediction',
      'Emergency slot management',
      'Department coordination',
      'Analytics dashboard',
      'Integration capabilities'
    ],
    detailedFeatures: [
      {
        name: 'Smart scheduling',
        description: 'AI-powered appointment scheduling based on multiple factors'
      },
      {
        name: 'Resource management',
        description: 'Optimal allocation of medical staff and facilities'
      }
    ],
    stats: [
      { label: 'Wait Time', value: '-70%' },
      { label: 'Resource Utilization', value: '+85%' },
      { label: 'Patient Satisfaction', value: '4.9/5' }
    ],
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1000',
    category: 'ai'
  },
  {
    id: 'chatbot',
    name: 'AI Chatbot',
    shortDescription: 'Deploy an intelligent chatbot that understands your products and services.',
    fullDescription: 'Deploy an intelligent chatbot that understands your products and services. Provide instant responses to customer inquiries and support requests.',
    price: 3500,
    features: [
      'Natural language processing',
      'Product knowledge base',
      'Multi-language support',
      'Customizable responses',
      'Analytics dashboard',
      'Easy deployment',
      'Regular updates',
      'Basic support'
    ],
    detailedFeatures: [
      {
        name: 'Natural language processing',
        description: 'Advanced understanding of user queries in natural language'
      },
      {
        name: 'Multi-language support',
        description: 'Support for multiple languages with accurate translations'
      }
    ],
    stats: [
      { label: 'Available Languages', value: '20+' },
      { label: 'Query Resolution', value: '95%' },
      { label: 'User Satisfaction', value: '4.8/5' }
    ],
    image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&q=80&w=1000',
    category: 'ai'
  }
];

export function findProductById(id: string): ProductInfo | undefined {
  return products.find(product => product.id === id);
}

export function findProductsByCategory(category: string): ProductInfo[] {
  return products.filter(product => product.category === category);
}

export function searchProducts(query: string): ProductInfo[] {
  const searchTerm = query.toLowerCase();
  return products.filter(product => 
    product.name.toLowerCase().includes(searchTerm) ||
    product.shortDescription.toLowerCase().includes(searchTerm) ||
    product.fullDescription.toLowerCase().includes(searchTerm) ||
    product.features.some(feature => feature.toLowerCase().includes(searchTerm)) ||
    product.detailedFeatures.some(feature => 
      feature.name.toLowerCase().includes(searchTerm) ||
      feature.description.toLowerCase().includes(searchTerm)
    )
  );
}

export function getProductFeatures(id: string): string[] {
  const product = findProductById(id);
  return product ? product.features : [];
}

export function getProductStats(id: string): Stat[] {
  const product = findProductById(id);
  return product ? product.stats : [];
}

export function getProductPrice(id: string): number | undefined {
  const product = findProductById(id);
  return product?.price;
}

export function getDetailedFeatures(id: string): Feature[] {
  const product = findProductById(id);
  return product ? product.detailedFeatures : [];
}