import React from 'react';
import { Home, MapPin, DraftingCompass as Drafting, Ruler, Truck, Hammer, Palette, RefreshCw, Waves, CreditCard, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: "Build Now Pay Later",
      description: "Flexible payment options to start your dream project today without upfront costs.",
      color: "bg-gray-100 text-slate-700"
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Real Estate",
      description: "Prime property development and real estate services throughout Quezon Province.",
      color: "bg-gray-100 text-slate-700"
    },
    {
      icon: <Drafting className="w-8 h-8" />,
      title: "Architectural Design",
      description: "Custom architectural plans that blend functionality with aesthetic appeal.",
      color: "bg-gray-100 text-slate-700"
    },
    {
      icon: <Ruler className="w-8 h-8" />,
      title: "Civil Engineering Design",
      description: "Professional structural engineering and site development solutions.",
      color: "bg-gray-100 text-slate-700"
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Concrete Roads",
      description: "Durable concrete road construction for residential and commercial developments.",
      color: "bg-gray-100 text-slate-700"
    },
    {
      icon: <Home className="w-8 h-8" />,
      title: "Construction",
      description: "Complete residential and commercial construction from foundation to finish.",
      color: "bg-gray-100 text-slate-700"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Interior Works",
      description: "Professional interior finishing and design services for modern living spaces.",
      color: "bg-gray-100 text-slate-700"
    },
    {
      icon: <RefreshCw className="w-8 h-8" />,
      title: "Renovation",
      description: "Transform existing spaces with quality renovation and remodeling services.",
      color: "bg-gray-100 text-slate-700"
    },
    {
      icon: <Waves className="w-8 h-8" />,
      title: "Swimming Pools",
      description: "Custom swimming pool design and construction for luxury homes and resorts.",
      color: "bg-gray-100 text-slate-700"
    },
    {
      icon: <Hammer className="w-8 h-8" />,
      title: "Heavy Equipment Rental",
      description: "Professional-grade construction equipment rental for all project sizes.",
      color: "bg-gray-100 text-slate-700"
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">
            Comprehensive Construction Services
          </h2>
          <div className="w-24 h-1 bg-slate-800 mx-auto mb-6"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            From initial planning to final delivery, we offer complete construction solutions 
            tailored to your specific needs and budget.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group p-8 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-gray-300"
            >
              <div className={`w-16 h-16 ${service.color} rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                {service.icon}
              </div>
              
              <h3 className="text-xl font-semibold text-slate-800 mb-4 group-hover:text-slate-900 transition-colors">
                {service.title}
              </h3>
              
              <p className="text-slate-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <button 
                onClick={scrollToContact}
                className="text-slate-700 font-medium hover:text-slate-900 transition-colors flex items-center space-x-2 group-hover:translate-x-1 transition-transform"
              >
                <span>Inquire Now</span>
                <ArrowRight size={16} />
              </button>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">
            Ready to Start Your Project?
          </h3>
          <p className="text-xl mb-8 text-slate-300">
            Get a free consultation and quote for your construction needs today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={scrollToContact}
              className="bg-white text-slate-800 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Free Quote
            </button>
            <a 
              href="tel:09323269930"
              className="border-2 border-white text-white hover:bg-white hover:text-slate-800 px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              Call Now: 0932 326 9930
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;