import PricingCard from '../components/PricingCard';
import GradientBackground from '../components/GradientBackground';
import ParallaxSection from '../components/ParallaxSection';

const plans = [
  {
    title: 'AI Tenders Evaluation',
    price: 15000,
    features: [
      'Automated bid analysis',
      'Compliance checking',
      'Risk assessment',
      'Document verification',
      'Vendor evaluation',
      'Custom scoring models',
      'Audit trail',
      'Integration capabilities'
    ]
  },
  {
    title: 'AI CRM Agent',
    price: 10000,
    features: [
      'Advanced customer management',
      'Real-time analytics',
      'Multi-channel support',
      'Custom workflows',
      'API integration',
      'Priority support',
      '24/7 availability',
      'Regular updates'
    ]
  },
  {
    title: 'AI Invoice Assistant',
    price: 5700,
    features: [
      'Automated invoice generation',
      'Data extraction',
      'Payment tracking',
      'Error detection',
      'Accounting integration',
      'Custom templates',
      'Batch processing',
      'Export capabilities'
    ]
  },
  {
    title: 'AI HR Manager',
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
    ]
  },
  {
    title: 'AI Hospital Appointment Manager',
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
    ]
  },
  {
    title: 'AI Chatbot',
    price: 3500,
    features: [
      'Natural language processing',
      'Knowledge base integration',
      'Multi-language support',
      'Custom responses',
      'Analytics dashboard',
      'Easy deployment',
      'Regular updates',
      'Basic support'
    ]
  }
];

export default function Pricing() {
  return (
    <GradientBackground>
      <div className="relative py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              AI Solutions Pricing
            </h1>
            <p className="text-xl text-gray-600">
              Choose the perfect AI solution for your business
            </p>
          </div>

          <ParallaxSection>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {plans.map((plan, index) => (
                <PricingCard
                  key={index}
                  title={plan.title}
                  price={plan.price}
                  features={plan.features}
                />
              ))}
            </div>
          </ParallaxSection>
        </div>
      </div>
    </GradientBackground>
  );
}