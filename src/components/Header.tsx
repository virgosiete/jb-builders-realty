import React, { useState } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img 
              src="https://xh9zcyg5ay.ufs.sh/f/YCJDCam3SQ2LjY3bL0h1briGPQquIt8B526mTLkyoUedfN3C"
              alt="JB Builders & Realty Logo"
              className="w-10 h-10 rounded-lg object-cover"
            />
            <div>
              <h1 className="font-bold text-slate-800 text-lg">JB Builders & Realty</h1>
              <p className="text-xs text-slate-600">Since 2017</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-slate-700 hover:text-slate-900 font-medium transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-slate-700 hover:text-slate-900 font-medium transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-slate-700 hover:text-slate-900 font-medium transition-colors"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-slate-700 hover:text-slate-900 font-medium transition-colors"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-slate-700 hover:text-slate-900 font-medium transition-colors"
            >
              Contact
            </button>
          </nav>

          {/* Contact Info & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:09323269930" className="flex items-center space-x-1 text-slate-600 hover:text-slate-800 transition-colors">
              <Phone size={16} />
              <span className="text-sm">0932 326 9930</span>
            </a>
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-slate-800 text-white px-4 py-2 rounded-lg hover:bg-slate-900 transition-colors font-medium"
            >
              Get Quote
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-slate-700"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t py-4">
            <nav className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-left text-slate-700 hover:text-slate-900 font-medium transition-colors"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-left text-slate-700 hover:text-slate-900 font-medium transition-colors"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-left text-slate-700 hover:text-slate-900 font-medium transition-colors"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className="text-left text-slate-700 hover:text-slate-900 font-medium transition-colors"
              >
                Projects
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-left text-slate-700 hover:text-slate-900 font-medium transition-colors"
              >
                Contact
              </button>
              <div className="flex flex-col space-y-2 pt-4 border-t">
                <a href="tel:09323269930" className="flex items-center space-x-2 text-slate-600">
                  <Phone size={16} />
                  <span>0932 326 9930</span>
                </a>
                <a href="mailto:jb_abadilla@yahoo.com" className="flex items-center space-x-2 text-slate-600">
                  <Mail size={16} />
                  <span>jb_abadilla@yahoo.com</span>
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;