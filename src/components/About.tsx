
import React, { useEffect, useRef } from 'react';
import { Brain, HeartPulse, Code } from 'lucide-react';

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));
    
    return () => {
      elements?.forEach((el) => observer.unobserve(el));
    };
  }, []);
  
  return (
    <section id="about" className="py-20 bg-dark-lighter relative" ref={sectionRef}>
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-dark to-transparent"></div>
      <div className="absolute right-0 bottom-0 w-64 h-64 rounded-full bg-neon-blue/10 blur-[80px]"></div>
      <div className="absolute left-0 top-1/4 w-96 h-96 rounded-full bg-neon-purple/10 blur-[100px]"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-on-scroll opacity-0">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="neon-text">About Me</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-neon-blue to-neon-purple rounded mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="animate-on-scroll opacity-0" style={{ transitionDelay: '0.2s' }}>
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-neon-blue to-neon-purple rounded-lg blur-sm opacity-70 group-hover:opacity-100 transition duration-500"></div>
              <div className="relative">
                <img
                  src="/lovable-uploads/3b64d372-0d04-4756-a8c6-a5d4a768f9b4.png"
                  alt="Salim with colleagues"
                  className="rounded-lg w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
          
          <div className="space-y-6 animate-on-scroll opacity-0" style={{ transitionDelay: '0.4s' }}>
            <p className="text-lg text-white/80 leading-relaxed">
              I'm Salim, an AI developer passionate about building intelligent systems that improve 
              lives—especially in healthcare. With a strong foundation in machine learning, computer 
              vision, and full-stack development, I love turning complex ideas into real-world solutions.
            </p>
            <p className="text-lg text-white/80 leading-relaxed">
              My flagship project, SaDoc, showcases my ability to blend cutting-edge AI with user-centric 
              design to make diagnostics faster, smarter, and more accessible.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6">
              <div className="neon-card group flex flex-col items-center p-5">
                <div className="w-12 h-12 rounded-full flex items-center justify-center bg-neon-blue/10 mb-4 group-hover:bg-neon-blue/20 transition-all duration-300">
                  <Brain className="text-neon-blue" />
                </div>
                <h3 className="font-bold">AI & ML</h3>
              </div>
              
              <div className="neon-card group flex flex-col items-center p-5">
                <div className="w-12 h-12 rounded-full flex items-center justify-center bg-neon-purple/10 mb-4 group-hover:bg-neon-purple/20 transition-all duration-300">
                  <HeartPulse className="text-neon-purple" />
                </div>
                <h3 className="font-bold">Healthcare</h3>
              </div>
              
              <div className="neon-card group flex flex-col items-center p-5">
                <div className="w-12 h-12 rounded-full flex items-center justify-center bg-neon-violet/10 mb-4 group-hover:bg-neon-violet/20 transition-all duration-300">
                  <Code className="text-neon-violet" />
                </div>
                <h3 className="font-bold">Creative Code</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
