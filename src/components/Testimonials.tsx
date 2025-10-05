import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Maria Santos",
      location: "Lucena City, Quezon",
      image: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      rating: 5,
      text: "JB Builders turned our vision into a dream home. The quality of work exceeded our expectations, and they completed everything on time. Highly recommended!",
      project: "Custom Family Home"
    },
    {
      name: "Carlos Rodriguez",
      location: "Tayabas City, Quezon",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      rating: 5,
      text: "Professional service from start to finish. JB Abadilla and his team are honest, reliable, and deliver exceptional results. Our office building looks amazing!",
      project: "Commercial Building"
    },
    {
      name: "Ana Dela Cruz",
      location: "Sariaya, Quezon",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      rating: 5,
      text: "The Build Now Pay Later option made our dream home possible. The construction quality is top-notch and the team was very accommodating throughout the process.",
      project: "Residential Construction"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        size={16} 
        className={i < rating ? "text-yellow-400 fill-current" : "text-gray-300"} 
      />
    ));
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">
            What Our Clients Say
          </h2>
          <div className="w-24 h-1 bg-slate-800 mx-auto mb-6"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our satisfied clients have to say 
            about their experience working with JB Builders & Realty.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow relative"
            >
              <div className="absolute top-6 right-6 text-blue-200">
                <Quote size={32} />
              </div>
              
              <div className="flex items-center mb-6">
                <img 
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-slate-800">{testimonial.name}</h4>
                  <p className="text-slate-600 text-sm">{testimonial.location}</p>
                  <div className="flex space-x-1 mt-1">
                    {renderStars(testimonial.rating)}
                  </div>
                </div>
              </div>
              
              <p className="text-slate-600 mb-4 leading-relaxed italic">
                "{testimonial.text}"
              </p>
              
              <div className="pt-4 border-t border-gray-100">
                <span className="text-slate-700 text-sm font-medium">
                  Project: {testimonial.project}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Overall Rating */}
        <div className="text-center bg-white p-8 rounded-xl shadow-sm">
          <div className="flex justify-center items-center space-x-2 mb-4">
            <div className="flex space-x-1">
              {renderStars(5)}
            </div>
            <span className="text-2xl font-bold text-slate-800">5.0</span>
          </div>
          <p className="text-slate-600 mb-2">
            <strong>100% Satisfaction Rating</strong> based on 6 Facebook reviews
          </p>
          <p className="text-sm text-slate-500">
            All clients recommend our services to friends and family
          </p>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-lg text-slate-600 mb-6">
            Ready to join our list of satisfied clients?
          </p>
          <button 
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-slate-800 hover:bg-slate-900 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Get Your Free Quote Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;