import { Check } from 'lucide-react';

interface PricingCardProps {
  title: string;
  price: number;
  features: string[];
}

export default function PricingCard({ title, price, features }: PricingCardProps) {
  const handleContactSales = () => {
    const subject = encodeURIComponent(`Inquiry about ${title}`);
    const body = encodeURIComponent(`I'm interested in learning more about ${title}. Please provide additional information about pricing and features.`);
    window.location.href = `mailto:pmo@bombaslo.cloud?subject=${subject}&body=${body}`;
  };

  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl w-full max-w-sm mx-auto">
      <div className="p-8">
        <h2 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
          {title}
        </h2>
        <div className="flex items-baseline mb-8 relative">
          <span className="text-3xl sm:text-4xl font-bold text-gray-900">
            ${price.toLocaleString()}
          </span>
          <span className="ml-2 text-gray-600">USD</span>
          <div className="absolute -right-4 -top-4 w-24 h-24 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 rounded-full blur-xl" />
        </div>
        
        <ul className="space-y-4 relative">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-gray-700">
              <Check className="w-5 h-5 text-green-500 mr-3" />
              {feature}
            </li>
          ))}
        </ul>
      </div>
      
      <div className="p-8 bg-gradient-to-b from-transparent to-blue-50/50 border-t border-blue-100">
        <button 
          onClick={handleContactSales}
          className="w-full bg-blue-600 text-white rounded-lg py-3 px-6 hover:bg-blue-700 transition-colors"
        >
          Contact Sales
        </button>
      </div>
    </div>
  );
}