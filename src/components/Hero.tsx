
import React, { useEffect, useRef } from 'react';
import { ArrowRightCircle } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { clientX, clientY } = e;
      const { width, height } = heroRef.current.getBoundingClientRect();
      
      const x = (clientX / width) - 0.5;
      const y = (clientY / height) - 0.5;
      
      const elements = heroRef.current.querySelectorAll('.parallax-element');
      elements.forEach((el) => {
        const speed = parseFloat((el as HTMLElement).dataset.speed || '0');
        const xShift = x * 20 * speed;
        const yShift = y * 20 * speed;
        (el as HTMLElement).style.transform = `translate(${xShift}px, ${yShift}px)`;
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section 
      id="home"
      ref={heroRef}
      className="h-screen w-full flex items-center justify-center relative overflow-hidden bg-dark"
    >
      {/* Background grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-30"></div>
      
      {/* Animated background elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-neon-purple/20 blur-[100px] parallax-element" data-speed="-0.2"></div>
      <div className="absolute bottom-1/3 right-1/4 w-72 h-72 rounded-full bg-neon-blue/20 blur-[120px] parallax-element" data-speed="0.3"></div>
      <div className="absolute top-2/3 left-1/3 w-48 h-48 rounded-full bg-neon-violet/20 blur-[80px] parallax-element" data-speed="0.1"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-20 w-8 h-8 rounded-full border border-neon-blue animate-pulse-glow parallax-element" data-speed="0.6"></div>
      <div className="absolute bottom-32 right-48 w-6 h-6 rounded-full border border-neon-purple animate-pulse-glow parallax-element" data-speed="0.4"></div>
      <div className="absolute top-1/2 right-20 w-10 h-10 rounded-full border border-neon-violet animate-pulse-glow parallax-element" data-speed="0.5"></div>
      
      {/* Main content */}
      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 parallax-element" data-speed="0.2">
            <span className="neon-text">Salim</span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-heading text-white/90 mb-6 parallax-element" data-speed="0.15">
            AI Developer & Creative Technologist
          </h2>
          
          <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto parallax-element" data-speed="0.1">
            Building intelligent interfaces to make healthcare smarter.
          </p>
          
          <a 
            href="#projects" 
            className="inline-flex items-center gap-2 bg-gradient-to-r from-neon-blue to-neon-violet 
                      text-dark font-medium px-8 py-3 rounded-full transition-all duration-300
                      hover:shadow-[0_0_15px_rgba(0,240,255,0.7)] hover:scale-105 parallax-element" 
            data-speed="0.05"
          >
            View My Work
            <ArrowRightCircle size={18} />
          </a>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <span className="text-white/50 text-sm mb-2">Scroll Down</span>
        <div className="w-0.5 h-10 bg-gradient-to-b from-white/50 to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;
