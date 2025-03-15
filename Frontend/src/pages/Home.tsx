
import React, { useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
import DownloadButton from '../components/DownloadButton';

const Home: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Add animation class after component mounts
  useEffect(() => {
    const elements = containerRef.current?.querySelectorAll('.animate-item');
    elements?.forEach((el, index) => {
      setTimeout(() => {
        (el as HTMLElement).style.animation = 'fade-in 0.8s ease-out forwards, slide-in 0.8s ease-out forwards';
      }, index * 200);
    });
  }, []);

  return (
    <>
      <Navbar />
      <div ref={containerRef} className="page-container flex flex-col items-center justify-center">
        {/* Background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute top-[20%] left-[10%] w-72 h-72 rounded-full bg-futuristic-blue/5 blur-[80px]" />
          <div className="absolute bottom-[20%] right-[10%] w-96 h-96 rounded-full bg-futuristic-blue/5 blur-[100px]" />
        </div>

        <div className="max-w-4xl mx-auto text-center z-10 px-4">
          <div 
            className="animate-item mb-4"
            style={{ opacity: 0 }}
          >
            <span className="inline-block px-3 py-1 text-xs font-medium text-futuristic-blue bg-futuristic-blue/10 rounded-full border border-futuristic-blue/20 mb-2">
              EST - 2025
            </span>
          </div>
          
          <h1 
            className="animate-item text-4xl md:text-6xl font-bold mb-6 text-white tracking-tight"
            style={{ opacity: 0 }}
          >
            <span className="text-glow text-futuristic-blue">SAT-NAV</span>
          </h1>
          
          <p 
            className="animate-item text-xl md:text-xl text-white/80 mb-10 font-semibold"
            style={{ opacity: 0 }}
          >
            NAVIGATE YOUR WORLD WITH PRECISION
          </p>
          
          <div 
            className="animate-item"
            style={{ opacity: 0 }}
          >
            <DownloadButton className="mx-auto text-lg" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
