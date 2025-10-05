import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    contactNumber: '',
    email: '',
    service: '',
    message: ''
  });

  const services = [
    'Build Now Pay Later',
    'Real Estate',
    'Architectural Design',
    'Civil Engineering Design',
    'Concrete Roads',
    'Construction',
    'Interior Works',
    'Renovation',
    'Swimming Pools',
    'Heavy Equipment Rental'
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      fullName: '',
      contactNumber: '',
      email: '',
      service: '',
      message: ''
    });
    alert('Thank you for your inquiry! We will contact you within 24 hours.');
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-slate-800 mx-auto mb-6"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Ready to start your construction project? Contact us today for a free consultation 
            and quote. We're here to help bring your vision to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-slate-800 mb-8">
              Let's Discuss Your Project
            </h3>

            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="text-slate-700" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-1">Phone Numbers</h4>
                  <p className="text-slate-600">
                    <a href="tel:09323269930" className="hover:text-slate-800 transition-colors">
                      0932 326 9930
                    </a>
                  </p>
                  <p className="text-slate-600">
                    <a href="tel:09618144460" className="hover:text-slate-800 transition-colors">
                      0961 814 4460
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="text-slate-700" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-1">Email</h4>
                  <p className="text-slate-600">
                    <a href="mailto:jb_abadilla@yahoo.com" className="hover:text-slate-800 transition-colors">
                      jb_abadilla@yahoo.com
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-slate-700" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-1">Location</h4>
                  <p className="text-slate-600">
                    Tayabas City, Quezon Province<br />
                    Philippines
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="text-slate-700" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-1">Business Hours</h4>
                  <p className="text-slate-600">
                    Monday - Saturday: 8:00 AM - 6:00 PM<br />
                    Sunday: Available for emergency calls
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="space-y-4">
              <a 
                href="tel:09323269930"
                className="w-full bg-slate-800 hover:bg-slate-900 text-white py-4 px-6 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
              >
                <Phone size={20} />
                <span>Call Now: 0932 326 9930</span>
              </a>
              
              <a 
                href="https://wa.me/639323269930"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-slate-700 hover:bg-slate-800 text-white py-4 px-6 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
              >
                <MessageCircle size={20} />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-slate-800 mb-6">
                Request a Free Quote
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-slate-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-colors"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="contactNumber" className="block text-sm font-medium text-slate-700 mb-2">
                      Contact Number *
                    </label>
                    <input
                      type="tel"
                      id="contactNumber"
                      name="contactNumber"
                      value={formData.contactNumber}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-colors"
                      placeholder="Your phone number"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-slate-700 mb-2">
                    Service Interested In *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-colors"
                  >
                    <option value="">Select a service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                    Project Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-colors"
                    placeholder="Tell us about your project requirements, timeline, and budget..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-slate-800 hover:bg-slate-900 text-white py-4 px-6 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
                >
                  <Send size={20} />
                  <span>Send My Request</span>
                </button>

                <p className="text-sm text-slate-500 text-center">
                  * Required fields. We'll respond within 24 hours.
                </p>
              </form>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="mt-16">
          <div className="bg-gray-100 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-slate-800 mb-4">
              Serving Quezon Province
            </h3>
            <p className="text-slate-600 mb-6 text-center">
              Based in Tayabas City, we proudly serve clients throughout Quezon Province 
              including Lucena City, Sariaya, Candelaria, and surrounding areas.
            </p>
            
            {/* Google Map */}
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120963.95489846515!2d121.5321834137281!3d14.027101507940122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd4d62fbf1fe17%3A0x7e062e94863df200!2sCity%20of%20Tayabas%2C%20Quezon!5e1!3m2!1sen!2sph!4v1749528019660!5m2!1sen!2sph" 
                width="100%" 
                height="400" 
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
                title="Tayabas City, Quezon Province Location"
              />
              <div className="mt-4 text-center">
                <p className="text-slate-700 font-medium">Tayabas City, Quezon Province, Philippines</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;