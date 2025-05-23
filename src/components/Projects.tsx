
import React, { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github?: string;
  demo?: string;
}

const Projects = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeProject, setActiveProject] = useState<string | null>(null);
  
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

  const projects: Project[] = [
    {
      id: "sadoc",
      title: "SaDoc",
      description: "An AI-driven medical assistant that analyzes X-rays to detect illness, prescribes medication, books doctor appointments, and includes a conversational assistant.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      technologies: ["Python", "TensorFlow", "OpenCV", "Firebase"],
      github: "#",
      demo: "#"
    },
    {
      id: "project-2",
      title: "HealthTracker",
      description: "Coming Soon - A personal health analytics platform with ML-powered insights.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      technologies: ["React", "TensorFlow.js", "Firebase"],
    },
    {
      id: "project-3",
      title: "MedVision",
      description: "Coming Soon - Real-time diagnostic imaging analysis tool for clinicians.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      technologies: ["Python", "PyTorch", "React", "WebGL"],
    }
  ];
  
  return (
    <section id="projects" className="py-20 bg-dark-lighter relative" ref={sectionRef}>
      {/* Background decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-dark to-transparent"></div>
      <div className="absolute top-1/4 right-0 w-80 h-80 rounded-full bg-neon-purple/10 blur-[100px]"></div>
      <div className="absolute bottom-1/3 left-0 w-96 h-96 rounded-full bg-neon-blue/10 blur-[120px]"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-on-scroll opacity-0">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="neon-text">Featured Projects</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-neon-blue to-neon-purple rounded mx-auto"></div>
          <p className="mt-4 text-white/70 max-w-2xl mx-auto">
            Explore my latest work that combines AI innovation with practical solutions for healthcare.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className={`animate-on-scroll opacity-0 group relative`}
              style={{ transitionDelay: `${0.2 + index * 0.2}s` }}
              onMouseEnter={() => setActiveProject(project.id)}
              onMouseLeave={() => setActiveProject(null)}
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-neon-blue to-neon-purple rounded-lg opacity-0 group-hover:opacity-80 transition duration-300 blur-sm"></div>
              <div className="relative bg-dark-lighter rounded-lg overflow-hidden h-full flex flex-col">
                <div 
                  className="h-48 bg-cover bg-center" 
                  style={{ backgroundImage: `url(${project.image})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-lighter to-transparent opacity-80"></div>
                </div>
                
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                  <p className="text-white/70 mb-4 flex-grow">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.technologies.map((tech, i) => (
                      <span 
                        key={i} 
                        className="px-2 py-1 bg-dark rounded text-xs text-white/80"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="flex gap-2">
                      {project.github && (
                        <a 
                          href={project.github} 
                          className="w-10 h-10 rounded-full flex items-center justify-center bg-dark hover:bg-neon-blue/20 transition-all duration-300"
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          <Github size={18} />
                        </a>
                      )}
                      
                      {project.demo && (
                        <a 
                          href={project.demo} 
                          className="w-10 h-10 rounded-full flex items-center justify-center bg-dark hover:bg-neon-blue/20 transition-all duration-300"
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          <ExternalLink size={18} />
                        </a>
                      )}
                    </div>
                    
                    {project.github && project.demo && (
                      <a 
                        href={project.demo} 
                        className="flex items-center text-neon-blue hover:text-white transition-colors duration-300"
                      >
                        <span className="mr-2">View Project</span>
                        <ArrowRight size={16} />
                      </a>
                    )}
                    
                    {!project.github && !project.demo && (
                      <div className="inline-flex items-center px-3 py-1 rounded-full bg-neon-purple/20 text-neon-purple text-xs font-medium">
                        Coming Soon
                      </div>
                    )}
                  </div>
                </div>
                
                {/* Project hover effect */}
                <div 
                  className={`absolute inset-0 flex items-center justify-center bg-dark-lighter/90 backdrop-blur-sm opacity-0 transition-opacity duration-300 ${activeProject === project.id && project.demo ? 'sm:opacity-100' : ''}`}
                  style={{ pointerEvents: activeProject === project.id ? 'auto' : 'none' }}
                >
                  {project.demo && (
                    <a 
                      href={project.demo}
                      className="px-6 py-3 bg-gradient-to-r from-neon-blue to-neon-violet rounded-full text-white font-medium transform hover:scale-105 transition-all duration-300"
                    >
                      View Project
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center animate-on-scroll opacity-0" style={{ transitionDelay: '0.8s' }}>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 border border-neon-blue px-6 py-3 rounded-full hover:bg-neon-blue/10 transition-all duration-300"
          >
            <span>Get in Touch</span>
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
