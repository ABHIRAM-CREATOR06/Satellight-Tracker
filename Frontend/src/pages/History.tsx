
import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';

const History: React.FC = () => {
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimated(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  const timelineEvents = [
      {
        year: "2025",
        title: "Development of Dedicated App",
        description: "App-Dev"
      },
      {
        year: "2025",
        title: "Product Optimization on Linux",
        description: "Optimisation of product on Linux services making it accurate upto 90%."
      },
      {
        year: "2025",
        title: "Enterprise Oriented Development",
        description: "Completely revamped the user experience with simplicity, minimalistic and optisation upto 95% on Windows operating systems"
      },
      {
        year: "2025",
        title: "Product Prototype Development",
        description: "The product prototype developed which lead to further development of other modifications"
      }
  ];

  return (
    <>
      <Navbar />
      <div className="page-container">
        {/* Background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute top-[25%] left-[20%] w-72 h-72 rounded-full bg-futuristic-blue/5 blur-[80px]" />
          <div className="absolute bottom-[15%] right-[20%] w-80 h-80 rounded-full bg-futuristic-blue/5 blur-[90px]" />
        </div>
        
        <div className="section-container">
          <div 
            className={`mb-12 text-center ${isAnimated ? 'animate-blur-in' : 'opacity-0'}`}
            style={{ animationDelay: '0.1s' }}
          >
            <span className="inline-block px-3 py-1 text-xs font-medium text-futuristic-blue bg-futuristic-blue/10 rounded-full border border-futuristic-blue/20 mb-2">
              Our Journey
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Project History</h1>
            <p className="text-white/80 max-w-2xl mx-auto">
              Explore the evolution of our platform from concept to cutting-edge reality.
            </p>
          </div>
          
          {/* Timeline */}
          <div className="max-w-4xl mx-auto relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:translate-x-[-50%] top-0 bottom-0 w-0.5 bg-gradient-to-b from-futuristic-blue/50 via-futuristic-blue/30 to-futuristic-blue/10"></div>
            
            {/* Timeline events */}
            {timelineEvents.map((event, index) => (
              <div 
                key={index}
                className={`relative mb-12 md:mb-24 ${isAnimated ? 'animate-blur-in' : 'opacity-0'}`}
                style={{ 
                  animationDelay: `${0.2 + index * 0.1}s`,
                }}
              >
                <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Year bubble */}
                  <div className="md:w-1/2 flex items-center justify-center md:justify-end relative z-10">
                    <div className={`
                      w-14 h-14 rounded-full bg-futuristic-blue/20 border border-futuristic-blue/50 
                      flex items-center justify-center text-futuristic-blue font-bold
                      shadow-[0_0_15px_rgba(14,165,233,0.3)] md:mx-8
                      ${index % 2 === 0 ? 'mb-4 md:mb-0' : 'mb-4 md:mb-0'}
                    `}>
                      {event.year}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="md:w-1/2">
                    <div className={`
                      glass-panel rounded-xl p-6 
                      ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}
                    `}>
                      <h3 className="text-xl font-bold text-white mb-2">
                        {event.title}
                      </h3>
                      <p className="text-white/80">
                        {event.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Vision section */}
          <div 
            className={`max-w-4xl mx-auto mt-16 glass-panel rounded-xl p-8
                      ${isAnimated ? 'animate-blur-in' : 'opacity-0'}`}
            style={{ animationDelay: '0.6s' }}
          >
            <h2 className="text-2xl font-bold text-white mb-4">Our Vision</h2>
            <p className="text-white/80 mb-4 leading-relaxed">
              From the beginning, our vision has been to create the most intuitive and advanced digital platform that pushes the boundaries of what's possible. We've remained committed to principles of elegant design, powerful functionality, and user-centric experiences.
            </p>
            <p className="text-white/80 leading-relaxed">
              Looking ahead, we continue to innovate at the intersection of design and technology, bringing futuristic concepts into today's reality. Our journey is guided by a relentless pursuit of excellence and a desire to empower users with tools that feel both magical and effortless.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default History;
