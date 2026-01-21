import React from 'react';
import { SEO } from '../components/SEO';
import { Breadcrumbs, Card } from '../components/UIComponents';
import { Mail, MessageCircle, Phone } from 'lucide-react';

const Contact = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "mainEntity": {
      "@type": "Organization",
      "name": "NursingOfficerExams.com",
      "email": "contact@nursingofficerexams.com",
      "telephone": "+91-6377639169",
      "url": "https://nursingofficerexams.com"
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <SEO 
        title="Contact Us - Nursing Officer Exams"
        description="Get in touch with the NursingOfficerExams.com team. Call us at +91 6377 6391 69 or email for queries regarding exam notifications and study materials."
        canonical="/contact"
        schema={schema}
      />
      
      <Breadcrumbs items={[{ label: 'Contact Us' }]} />

      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">Get in Touch</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="flex flex-col items-center text-center p-6">
            <div className="bg-brand-100 p-4 rounded-full mb-4">
              <Mail className="text-brand-600" size={28} />
            </div>
            <h2 className="text-lg font-bold text-gray-900 mb-2">Email Us</h2>
            <p className="text-gray-600 mb-4 text-sm">For general queries & feedback</p>
            <a href="mailto:contact@nursingofficerexams.com" className="text-brand-600 font-semibold hover:underline text-sm break-all">
              contact@nursingofficerexams.com
            </a>
          </Card>

          <Card className="flex flex-col items-center text-center p-6">
            <div className="bg-green-100 p-4 rounded-full mb-4">
              <MessageCircle className="text-green-600" size={28} />
            </div>
            <h2 className="text-lg font-bold text-gray-900 mb-2">Support</h2>
            <p className="text-gray-600 mb-4 text-sm">Help with mock tests & downloads</p>
            <a href="mailto:support@nursingofficerexams.com" className="text-green-600 font-semibold hover:underline text-sm break-all">
              support@nursingofficerexams.com
            </a>
          </Card>

          <Card className="flex flex-col items-center text-center p-6">
            <div className="bg-purple-100 p-4 rounded-full mb-4">
              <Phone className="text-purple-600" size={28} />
            </div>
            <h2 className="text-lg font-bold text-gray-900 mb-2">Call / WhatsApp</h2>
            <p className="text-gray-600 mb-4 text-sm">Mon-Sat, 10 AM - 6 PM</p>
            <a href="tel:+916377639169" className="text-purple-600 font-semibold hover:underline text-sm">
              +91 6377 6391 69
            </a>
          </Card>
        </div>

        <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 max-w-3xl mx-auto">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Send us a message</h2>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-brand-500 focus:border-brand-500" placeholder="Your Name" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-brand-500 focus:border-brand-500" placeholder="your@email.com" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone (Optional)</label>
              <input type="tel" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-brand-500 focus:border-brand-500" placeholder="+91..." />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-brand-500 focus:border-brand-500" placeholder="How can we help you?"></textarea>
            </div>
            <button type="button" className="bg-brand-600 text-white px-6 py-2 rounded-md font-medium hover:bg-brand-700 transition-colors w-full md:w-auto">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
