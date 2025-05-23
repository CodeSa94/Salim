
import React, { useEffect, useRef } from 'react';
import { Code, Database, Settings, Server, Triangle, BarChart3 } from 'lucide-react';

const SkillCategory = ({ 
  title, 
  skills, 
  icon, 
  color, 
  delay 
}: { 
  title: string; 
  skills: string[]; 
  icon: React.ReactNode; 
  color: string; 
  delay: string;
}) => {
  return (
    <div 
      className="neon-card animate-on-scroll opacity-0" 
      style={{ transitionDelay: delay }}
    >
      <div className="flex items-center gap-3 mb-4">
        <div className={`w-10 h-10 rounded-md flex items-center justify-center ${color}`}>
          {icon}
        </div>
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      
      <div className="space-y-2">
        {skills.map((skill, index) => (
          <div key={index} className="flex items-center gap-2">
            <div className={`w-1.5 h-1.5 rounded-full ${color.replace('bg-', 'bg-').replace('/10', '/40')}`}></div>
            <span className="text-white/80">{skill}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
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
  
  const categories = [
    {
      title: "Languages & Frameworks",
      icon: <Code className="text-white" size={20} />,
      color: "bg-neon-blue/10",
      skills: ["Python", "JavaScript", "React", "Next.js", "HTML", "CSS", "Tailwind CSS"],
      delay: "0.2s"
    },
    {
      title: "AI/ML Tools",
      icon: <BarChart3 className="text-white" size={20} />,
      color: "bg-neon-purple/10",
      skills: ["TensorFlow", "PyTorch", "OpenCV", "Scikit-learn"],
      delay: "0.4s"
    },
    {
      title: "DevOps & Tools",
      icon: <Settings className="text-white" size={20} />,
      color: "bg-neon-violet/10",
      skills: ["Firebase", "Git", "GitHub", "Docker", "REST APIs"],
      delay: "0.6s"
    },
  ];
  
  return (
    <section id="skills" className="py-20 bg-dark relative" ref={sectionRef}>
      {/* Decorative elements */}
      <div className="absolute top-1/3 right-0 w-72 h-72 rounded-full bg-neon-violet/10 blur-[100px]"></div>
      <div className="absolute bottom-1/4 left-0 w-64 h-64 rounded-full bg-neon-blue/10 blur-[80px]"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-on-scroll opacity-0">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="neon-text">Skills & Expertise</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-neon-blue to-neon-purple rounded mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <SkillCategory
              key={index}
              title={category.title}
              skills={category.skills}
              icon={category.icon}
              color={category.color}
              delay={category.delay}
            />
          ))}
        </div>
        
        {/* Progress bars section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="animate-on-scroll opacity-0" style={{ transitionDelay: '0.3s' }}>
            <h3 className="text-xl font-bold mb-6 text-white/90">Core Competencies</h3>
            
            <div className="space-y-5">
              {[
                { name: "AI Development", level: 90 },
                { name: "Full Stack Development", level: 85 },
                { name: "Computer Vision", level: 80 },
              ].map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-white/80">{skill.name}</span>
                    <span className="text-neon-blue">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-dark-lighter rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-neon-blue to-neon-purple rounded-full"
                      style={{ width: `${skill.level}%`, transition: 'width 1.5s ease' }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="animate-on-scroll opacity-0" style={{ transitionDelay: '0.5s' }}>
            <h3 className="text-xl font-bold mb-6 text-white/90">Areas of Focus</h3>
            
            <div className="grid grid-cols-2 gap-4">
              {[
                { name: "Healthcare AI", icon: <HeartPulseIcon />, color: "from-neon-purple to-neon-blue" },
                { name: "ML Engineering", icon: <ServerIcon />, color: "from-neon-blue to-neon-violet" },
                { name: "Data Analysis", icon: <DatabaseIcon />, color: "from-neon-violet to-neon-purple" },
                { name: "UX/UI Design", icon: <TriangleIcon />, color: "from-neon-blue to-neon-purple" }
              ].map((item, index) => (
                <div 
                  key={index}
                  className="neon-card group flex flex-col items-center justify-center p-4 text-center h-32"
                >
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center bg-gradient-to-br ${item.color} mb-3 group-hover:scale-110 transition-transform duration-300`}>
                    {item.icon}
                  </div>
                  <span className="font-medium">{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Icon components
const HeartPulseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
    <path d="M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27"></path>
  </svg>
);

const ServerIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
    <rect width="20" height="8" x="2" y="2" rx="2"></rect>
    <rect width="20" height="8" x="2" y="14" rx="2"></rect>
    <line x1="6" x2="6.01" y1="6" y2="6"></line>
    <line x1="6" x2="6.01" y1="18" y2="18"></line>
  </svg>
);

const DatabaseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
    <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
    <path d="M3 5V19A9 3 0 0 0 21 19V5"></path>
    <path d="M3 12A9 3 0 0 0 21 12"></path>
  </svg>
);

const TriangleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
    <path d="M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path>
  </svg>
);

export default Skills;
