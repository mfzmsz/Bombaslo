import { searchProducts, findProductById, getProductFeatures, getProductStats, getProductPrice } from './productService';
import { useNavigate } from 'react-router-dom';

function formatPrice(price: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(price);
}

function formatProductInfo(id: string): string {
  const product = findProductById(id);
  if (!product) return '';

  const price = formatPrice(product.price);
  const stats = getProductStats(id)
    .map(stat => `${stat.label}: ${stat.value}`)
    .join('\n');

  return `${product.name} - ${price}\n\n${product.fullDescription}\n\nKey Statistics:\n${stats}\n\nTo learn more about specific features and get personalized assistance, let's connect you with our sales team. Click the button below to reach out.`;
}

function formatFeatures(id: string): string {
  const product = findProductById(id);
  if (!product) return '';

  const features = getProductFeatures(id)
    .map(feature => `- ${feature}`)
    .join('\n');

  return `${product.name} features:\n${features}\n\nFor detailed pricing and implementation information, our sales team would be happy to assist you. Click the button below to get in touch.`;
}

export function getBotResponse(userInput: string): string {
  const input = userInput.toLowerCase();
  
  // Handle greetings
  if (input.match(/^(hi|hello|hey|greetings)/i)) {
    return "Hello! I'm here to help you learn about our AI solutions:\n\n" +
           "- AI Tenders Evaluation\n" +
           "- AI CRM Agent\n" +
           "- AI Invoice Assistant\n" +
           "- AI Chatbot\n" +
           "- Asset Manager System\n" +
           "- Odoo ERP\n\n" +
           "What would you like to know about these solutions?";
  }

  // Handle pricing inquiries
  if (input.includes('price') || input.includes('cost') || input.includes('pricing')) {
    const products = searchProducts(input);
    if (products.length === 1) {
      const price = formatPrice(products[0].price);
      return `${products[0].name} is priced at ${price}. Would you like to know more about its features?`;
    }
    
    return "Here are our solution prices:\n\n" +
           searchProducts('')
             .map(product => `${product.name}: ${formatPrice(product.price)}`)
             .join('\n') +
           "\n\nWhich solution would you like to know more about?";
  }

  // Handle feature inquiries
  if (input.includes('feature') || input.includes('capability') || input.includes('what') || input.includes('can')) {
    const products = searchProducts(input);
    if (products.length === 1) {      
      return `${formatFeatures(products[0].id)}\n\n[Contact Sales Button]`;
    }
  }

  // Handle specific product inquiries
  const products = searchProducts(input);
  if (products.length === 1) {
    return `${formatProductInfo(products[0].id)}\n\n[Contact Sales Button]`;
  }

  // Handle comparison requests
  if (input.includes('compare') || input.includes('difference')) {
    const products = searchProducts(input);
    if (products.length >= 2) {
      return products
        .map(product => `${product.name}:\n- ${product.shortDescription}\n- Price: ${formatPrice(product.price)}`)
        .join('\n\n') + 
        '\n\nFor detailed information about any of these solutions, our sales team would be happy to help. Click below to connect with them.';
    }
  }

  // Handle contact/support inquiries
  if (input.includes('contact') || input.includes('support') || input.includes('help')) {
    return "You can reach our support team at:\n" +
           "- Email: sales@bombaslo.cloud\n" +
           "- Location: Africa & ME\n\n" +
           "Would you like to know more about any specific product?";
  }

  // Handle cloud solutions inquiries
  if (input.includes('cloud') || input.includes('erp') || input.includes('asset') || input.includes('odoo')) {
    const cloudProducts = products.filter(p => p.category === 'Cloud Solutions');
    return "Here are our cloud solutions:\n\n" +
           cloudProducts
             .map(product => `${product.name}:\n${product.shortDescription}\nPrice: ${formatPrice(product.price)}`)
             .join('\n\n') +
           "\n\nWould you like to know more about any specific solution?";
  }

  // Default response with search results
  const searchResults = searchProducts(input);
  if (searchResults.length > 0) {
    return "Here are the relevant solutions I found:\n\n" +
           searchResults
             .map(product => `${product.name}:\n${product.shortDescription}`)
             .join('\n\n') +
           "\n\nWhat specific information would you like to know about these solutions?";
  }

  // Fallback response
  return "I can help you with information about our AI solutions:\n" +
         "- AI Tenders Evaluation\n" +
         "- AI CRM Agent\n" +
         "- AI Invoice Assistant\n" +
         "- AI Chatbot\n" +
         "- Asset Manager System\n" +
         "- Odoo ERP\n\n" +
         "You can ask about:\n" +
         "- Pricing\n" +
         "- Features\n" +
         "- Specific solutions\n" +
         "- Comparisons\n\n" +
         "What would you like to know?";
}