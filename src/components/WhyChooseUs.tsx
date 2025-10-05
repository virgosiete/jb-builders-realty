import React from 'react';
import { Shield, Clock, DollarSign, Users, Star, Wrench } from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <Star className="w-8 h-8" />,
      title: "100% Satisfaction Rating",
      description: "Based on 6 Facebook reviews and countless satisfied clients across Quezon Province.",
      color: "bg-gray-100 text-slate-700"
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "End-to-End Service",
      description: "From initial planning and design to final construction and finishing - we handle it all.",
      color: "bg-gray-100 text-slate-700"
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Affordable Plans",
      description: "Flexible payment options including our popular 'Build Now, Pay Later' program.",
      color: "bg-gray-100 text-slate-700"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Local Roots, Global Quality",
      description: "Deep understanding of local regulations with international construction standards.",
      color: "bg-gray-100 text-slate-700"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Licensed & Insured",
      description: "Fully licensed contractors with comprehensive insurance coverage for your peace of mind.",
      color: "bg-gray-100 text-slate-700"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "On-Time Delivery",
      description: "Proven track record of completing projects on schedule without compromising quality.",
      color: "bg-gray-100 text-slate-700"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">
            Why Choose JB Builders & Realty?
          </h2>
          <div className="w-24 h-1 bg-slate-800 mx-auto mb-6"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Seven years of excellence in construction and real estate development has earned us 
            the trust of families and businesses throughout Quezon Province.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {reasons.map((reason, index) => (
            <div 
              key={index}
              className="group p-8 bg-gray-50 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-gray-300"
            >
              <div className={`w-16 h-16 ${reason.color} rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                {reason.icon}
              </div>
              
              <h3 className="text-xl font-semibold text-slate-800 mb-4">
                {reason.title}
              </h3>
              
              <p className="text-slate-600 leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        {/* Statistics */}
        <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl p-12 text-white">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-white mb-2">7+</div>
              <div className="text-slate-300">Years in Business</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">50+</div>
              <div className="text-slate-300">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">100%</div>
              <div className="text-slate-300">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">24/7</div>
              <div className="text-slate-300">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;