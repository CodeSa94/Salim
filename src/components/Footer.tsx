
import React from 'react';
import { ChevronUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  return (
    <footer className="bg-dark-lighter py-10 relative">
      {/* Top border effect */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-blue to-transparent"></div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div>
            <a href="#home" className="text-2xl font-heading font-bold">
              <span className="neon-text">Salim.</span>
            </a>
            <p className="text-white/50 mt-2 text-sm">
              AI Developer & Creative Technologist
            </p>
          </div>
          
          <div className="mt-6 md:mt-0">
            <button 
              onClick={scrollToTop}
              className="flex items-center justify-center w-10 h-10 rounded-full border border-neon-blue text-neon-blue hover:bg-neon-blue/10 transition-colors duration-300"
            >
              <ChevronUp size={20} />
            </button>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-white/50 text-sm">
            © {new Date().getFullYear()} Salim. All rights reserved.
          </div>
          
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-white/50 hover:text-neon-blue transition-colors duration-300 text-sm">Privacy Policy</a>
            <a href="#" className="text-white/50 hover:text-neon-blue transition-colors duration-300 text-sm">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
