import React from 'react';
import { Building, Users, Award, Target } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">
            From Vision to Reality
          </h2>
          <div className="w-24 h-1 bg-slate-800 mx-auto mb-6"></div>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Since 2017, J. Abadilla Land Development and Construction (JB Builders & Realty) has helped 
            families and businesses turn blueprints into beautiful realities. Backed by years of experience 
            in civil engineering, architecture, and real estate development, we bring a holistic approach 
            to every project.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img 
              src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
              alt="Construction team at work"
              className="rounded-lg shadow-lg w-full h-96 object-cover"
            />
          </div>
          
          <div>
            <h3 className="text-3xl font-bold text-slate-800 mb-6">
              Your Trusted Construction Partner
            </h3>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Led by JB Abadilla, our team combines traditional craftsmanship with modern construction 
              techniques. We understand that building a home or commercial space is one of life's biggest 
              investments, and we're committed to delivering exceptional results that exceed expectations.
            </p>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              From initial consultation to final walkthrough, we handle every aspect of your project 
              with professionalism, transparency, and attention to detail that sets us apart in 
              Tayabas City and throughout Quezon Province.
            </p>
            
            <div className="flex items-center space-x-4">
              <img 
                src="https://xh9zcyg5ay.ufs.sh/f/YCJDCam3SQ2L0TSVpWIyWXH6OeGK84kZSQdNuC5nxlwIchBz"
                alt="JB Abadilla"
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold text-slate-800">JB Abadilla</p>
                <p className="text-slate-600">Founder & Lead Engineer</p>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="grid md:grid-cols-4 gap-8">
          <div className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Building className="text-slate-700" size={32} />
            </div>
            <h4 className="text-xl font-semibold text-slate-800 mb-2">Quality Craftsmanship</h4>
            <p className="text-slate-600">Every project built to last with premium materials and skilled workmanship.</p>
          </div>

          <div className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="text-slate-700" size={32} />
            </div>
            <h4 className="text-xl font-semibold text-slate-800 mb-2">Client-Focused</h4>
            <p className="text-slate-600">Your vision guides every decision we make throughout the construction process.</p>
          </div>

          <div className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="text-slate-700" size={32} />
            </div>
            <h4 className="text-xl font-semibold text-slate-800 mb-2">Proven Excellence</h4>
            <p className="text-slate-600">100% satisfaction rating from our clients with 7+ years of experience.</p>
          </div>

          <div className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="text-slate-700" size={32} />
            </div>
            <h4 className="text-xl font-semibold text-slate-800 mb-2">On-Time Delivery</h4>
            <p className="text-slate-600">Committed to completing projects on schedule without compromising quality.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;