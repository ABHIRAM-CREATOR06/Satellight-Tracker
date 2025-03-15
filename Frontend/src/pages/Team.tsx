
import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import TeamMember from '../components/TeamMember';

const Team: React.FC = () => {
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimated(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  const teamMembers = [
    {
      name: "Alex Chen",
      role: "Lead Designer",
      bio: "Alex leads our design team with over a decade of experience in creating intuitive user interfaces. Specializing in futuristic UI concepts, Alex ensures our platform remains visually stunning and functionally elegant.",
      imgUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
    },
    {
      name: "Samantha Wilson",
      role: "Senior Developer",
      bio: "Samantha brings her expertise in front-end development to create seamless, responsive experiences. With a background in both design and engineering, she bridges the gap between aesthetics and functionality.",
      imgUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
    },
    {
      name: "Michael Rodriguez",
      role: "Product Manager",
      bio: "Michael oversees the product roadmap, ensuring our platform meets user needs while pushing technological boundaries. His strategic vision has been instrumental in guiding our platform's evolution.",
      imgUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
    },
    {
      name: "Emily Zhang",
      role: "UX Researcher",
      bio: "Emily's deep understanding of user psychology and behavior helps shape our platform's intuitive experience. Through rigorous research and testing, she ensures our interface aligns perfectly with user expectations.",
      imgUrl: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
    }
  ];

  return (
    <>
      <Navbar />
      <div className="page-container">
        {/* Background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute top-[15%] right-[15%] w-72 h-72 rounded-full bg-futuristic-blue/5 blur-[80px]" />
          <div className="absolute bottom-[10%] left-[10%] w-80 h-80 rounded-full bg-futuristic-blue/5 blur-[90px]" />
        </div>
        
        <div className="section-container">
          <div 
            className={`mb-12 text-center ${isAnimated ? 'animate-blur-in' : 'opacity-0'}`}
            style={{ animationDelay: '0.1s' }}
          >
            <span className="inline-block px-3 py-1 text-xs font-medium text-futuristic-blue bg-futuristic-blue/10 rounded-full border border-futuristic-blue/20 mb-2">
              The Innovators
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Team</h1>
            <p className="text-white/80 max-w-2xl mx-auto">
              Meet the visionaries behind our futuristic platform, each bringing unique expertise to the project.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            {teamMembers.map((member, index) => (
              <div 
                key={index}
                className={isAnimated ? 'animate-slide-in' : 'opacity-0'}
                style={{ animationDelay: `${0.2 + index * 0.15}s` }}
              >
                <TeamMember 
                  name={member.name}
                  role={member.role}
                  bio={member.bio}
                  imgUrl={member.imgUrl}
                  index={index}
                />
              </div>
            ))}
          </div>
          
          {/* Team principles section */}
          <div 
            className={`max-w-4xl mx-auto mt-12 glass-panel rounded-xl p-8
                      ${isAnimated ? 'animate-blur-in' : 'opacity-0'}`}
            style={{ animationDelay: '0.8s' }}
          >
            <h2 className="text-2xl font-bold text-white mb-4">Our Principles</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="glass-blur rounded-lg p-5">
                <h3 className="text-lg font-medium text-futuristic-blue mb-2">Innovation</h3>
                <p className="text-white/80 text-sm">We constantly push boundaries to create experiences that feel like they're from the future.</p>
              </div>
              <div className="glass-blur rounded-lg p-5">
                <h3 className="text-lg font-medium text-futuristic-blue mb-2">Simplicity</h3>
                <p className="text-white/80 text-sm">Despite complex technology, we strive for interfaces that feel intuitive and effortless.</p>
              </div>
              <div className="glass-blur rounded-lg p-5">
                <h3 className="text-lg font-medium text-futuristic-blue mb-2">Detail</h3>
                <p className="text-white/80 text-sm">We believe the most meaningful experiences emerge from careful attention to the smallest details.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
