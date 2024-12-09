import { Mail, Phone, MapPin } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import GradientBackground from '../components/GradientBackground';
import ParallaxSection from '../components/ParallaxSection';

export default function Contact() {
  return (
    <GradientBackground>
      {/* Content */}
      <ParallaxSection className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 sm:mb-8">
                Get in Touch
              </h1>
              <p className="text-gray-600 mb-8">
                Have questions about our AI solutions? We're here to help. Fill out the form
                and our team will get back to you shortly.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Mail className="w-6 h-6 text-blue-600" />
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-gray-600">sales@bombaslo.cloud</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <MapPin className="w-6 h-6 text-blue-600" />
                  <div>
                    <h3 className="font-semibold">Location</h3>
                    <p className="text-gray-600">Africa & ME</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="w-full max-w-2xl mx-auto lg:max-w-none">
              <ContactForm />
            </div>
          </div>
        </div>
      </ParallaxSection>
    </GradientBackground>
  );
}