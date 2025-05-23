
import React, { useState, useEffect, useRef } from 'react';
import { Send, Github, Linkedin, Twitter } from 'lucide-react';

const Contact = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  
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
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulating form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
      setFormState({ name: '', email: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setFormSubmitted(false);
      }, 5000);
    }, 1500);
  };
  
  return (
    <section id="contact" className="py-20 bg-dark relative" ref={sectionRef}>
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-dark-lighter to-transparent"></div>
      <div className="absolute top-1/3 left-0 w-64 h-64 rounded-full bg-neon-blue/10 blur-[80px]"></div>
      <div className="absolute bottom-1/4 right-0 w-80 h-80 rounded-full bg-neon-violet/10 blur-[100px]"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-on-scroll opacity-0">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="neon-text">Get In Touch</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-neon-blue to-neon-purple rounded mx-auto"></div>
          <p className="mt-4 text-white/70 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="animate-on-scroll opacity-0" style={{ transitionDelay: '0.2s' }}>
            <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
            <p className="text-white/70 mb-8">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part 
              of your vision. Feel free to reach out using the form or through my social profiles.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-neon-blue/10">
                  <Github className="text-neon-blue" size={18} />
                </div>
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-neon-blue transition-colors duration-300"
                >
                  github.com/salim
                </a>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-neon-purple/10">
                  <Linkedin className="text-neon-purple" size={18} />
                </div>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-neon-purple transition-colors duration-300"
                >
                  linkedin.com/in/salim
                </a>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-neon-violet/10">
                  <Twitter className="text-neon-violet" size={18} />
                </div>
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-neon-violet transition-colors duration-300"
                >
                  twitter.com/salim
                </a>
              </div>
            </div>
          </div>
          
          <div className="animate-on-scroll opacity-0" style={{ transitionDelay: '0.4s' }}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <div className="relative">
                  <input 
                    type="text" 
                    name="name" 
                    id="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-dark-lighter rounded-lg border border-white/10 px-4 py-3 text-white placeholder:text-white/50 focus:outline-none focus:border-neon-blue transition-all duration-300"
                    placeholder="Your Name"
                  />
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-neon-blue to-neon-purple group-focus-within:w-full transition-all duration-500"></div>
                </div>
              </div>
              
              <div>
                <div className="relative">
                  <input 
                    type="email" 
                    name="email" 
                    id="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-dark-lighter rounded-lg border border-white/10 px-4 py-3 text-white placeholder:text-white/50 focus:outline-none focus:border-neon-blue transition-all duration-300"
                    placeholder="Your Email"
                  />
                </div>
              </div>
              
              <div>
                <div className="relative">
                  <textarea 
                    name="message" 
                    id="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full bg-dark-lighter rounded-lg border border-white/10 px-4 py-3 text-white placeholder:text-white/50 focus:outline-none focus:border-neon-blue transition-all duration-300 resize-none"
                    placeholder="Your Message"
                  ></textarea>
                </div>
              </div>
              
              <button 
                type="submit" 
                disabled={isSubmitting}
                className={`flex items-center justify-center gap-2 w-full bg-gradient-to-r from-neon-blue to-neon-violet text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,240,255,0.5)] ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? (
                  <>
                    <span className="animate-spin h-4 w-4 border-2 border-white/60 border-t-white rounded-full mr-2"></span>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={16} />
                  </>
                )}
              </button>
              
              {formSubmitted && (
                <div className="p-4 bg-neon-blue/20 border border-neon-blue text-white rounded-lg animate-fade-in-up">
                  Thank you! Your message has been sent successfully.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
