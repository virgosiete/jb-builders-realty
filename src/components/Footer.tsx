import React from 'react';
import { Phone, Mail, MapPin, Facebook, Clock } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <img 
                src="https://xh9zcyg5ay.ufs.sh/f/YCJDCam3SQ2LjY3bL0h1briGPQquIt8B526mTLkyoUedfN3C"
                alt="JB Builders & Realty Logo"
                className="w-12 h-12 rounded-lg object-cover"
              />
              <div>
                <h3 className="font-bold text-xl">JB Builders & Realty</h3>
                <p className="text-gray-400 text-sm">J. Abadilla Land Development and Construction</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Since 2017, we've been transforming visions into reality with quality construction 
              services throughout Quezon Province. Build your home the way you want with our 
              experienced team of professionals.
            </p>
            <div className="flex items-center space-x-4">
              <a 
                href="https://facebook.com/jbbuilders"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-700 rounded-full flex items-center justify-center hover:bg-slate-800 transition-colors"
              >
                <Facebook size={18} />
              </a>
              <span className="text-gray-400 text-sm">Follow us for project updates</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3 text-gray-300">
              <li>
                <button 
                  onClick={() => scrollToSection('home')}
                  className="hover:text-slate-300 transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="hover:text-slate-300 transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="hover:text-slate-300 transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('projects')}
                  className="hover:text-slate-300 transition-colors"
                >
                  Projects
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="hover:text-slate-300 transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Contact Info</h4>
            <div className="space-y-4 text-gray-300">
              <div className="flex items-start space-x-3">
                <Phone size={18} className="mt-1 text-slate-400" />
                <div>
                  <a href="tel:09323269930" className="hover:text-slate-300 transition-colors block">
                    0932 326 9930
                  </a>
                  <a href="tel:09618144460" className="hover:text-slate-300 transition-colors block">
                    0961 814 4460
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Mail size={18} className="mt-1 text-slate-400" />
                <a href="mailto:jb_abadilla@yahoo.com" className="hover:text-slate-300 transition-colors">
                  jb_abadilla@yahoo.com
                </a>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="mt-1 text-slate-400" />
                <div>
                  <p>Tayabas City</p>
                  <p>Quezon Province, Philippines</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Clock size={18} className="mt-1 text-slate-400" />
                <div>
                  <p>Mon-Sat: 8:00 AM - 6:00 PM</p>
                  <p className="text-sm text-gray-400">Emergency calls accepted</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="border-t border-gray-700 pt-8 mb-8">
          <h4 className="font-semibold text-lg mb-4 text-center">Our Services</h4>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-sm text-gray-400">
            <div>Build Now Pay Later</div>
            <div>Real Estate</div>
            <div>Architectural Design</div>
            <div>Civil Engineering</div>
            <div>Concrete Roads</div>
            <div>Construction</div>
            <div>Interior Works</div>
            <div>Renovation</div>
            <div>Swimming Pools</div>
            <div>Equipment Rental</div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <div className="mb-4 md:mb-0">
            <p>&copy; 2024 J. Abadilla Land Development and Construction. All rights reserved.</p>
          </div>
          <div className="flex space-x-6">
            <span>Licensed & Insured</span>
            <span>•</span>
            <span>Established 2017</span>
            <span>•</span>
            <span>100% Satisfaction Rating</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;