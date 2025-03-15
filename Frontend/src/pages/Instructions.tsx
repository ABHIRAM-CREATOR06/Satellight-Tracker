
import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import { Check } from 'lucide-react';

const Instructions: React.FC = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimated(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  const instructions = [
    {
      title: "Getting Started",
      content: "Begin by downloading the application from the homepage. Click the download button to be redirected to the download page with a customizable Google Drive link."
    },
    {
      title: "Customizing Your Link",
      content: "On the download page, you can customize your Google Drive link. Simply click the 'Edit Link' button, enter your preferred Google Drive URL, and click 'Save Link'."
    },
    {
      title: "Accessing Features",
      content: "Navigate through the application using the dropdown menu in the top right corner. Here you can access Instructions, History, and Team information pages."
    },
    {
      title: "Support & Help",
      content: "If you encounter any issues or need assistance, please refer to our documentation or contact our support team for help with installation or usage."
    }
  ];

  return (
    <>
      <Navbar />
      <div className="page-container">
        {/* Background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute top-[20%] right-[10%] w-64 h-64 rounded-full bg-futuristic-blue/5 blur-[70px]" />
          <div className="absolute bottom-[30%] left-[10%] w-80 h-80 rounded-full bg-futuristic-blue/5 blur-[90px]" />
        </div>
        
        <div className="section-container">
          <div 
            className={`mb-12 text-center
                      ${isAnimated ? 'animate-blur-in' : 'opacity-0'}`}
            style={{ animationDelay: '0.1s' }}
          >
            <span className="inline-block px-3 py-1 text-xs font-medium text-futuristic-blue bg-futuristic-blue/10 rounded-full border border-futuristic-blue/20 mb-2">
              User Guide
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Instructions</h1>
            <p className="text-white/80 max-w-2xl mx-auto">
              Follow these detailed steps to make the most of your futuristic experience.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {/* Sidebar navigation */}
            <div className="md:col-span-1">
              <div 
                className={`glass-panel rounded-xl p-4 sticky top-24 
                          ${isAnimated ? 'animate-blur-in' : 'opacity-0'}`}
                style={{ animationDelay: '0.2s' }}
              >
                <ul className="space-y-2">
                  {instructions.map((item, index) => (
                    <li key={index}>
                      <button
                        onClick={() => setActiveSection(index)}
                        className={`w-full text-left px-4 py-3 rounded-lg text-sm transition-colors duration-300
                                  ${activeSection === index 
                                    ? 'bg-futuristic-blue/20 text-white border-l-2 border-futuristic-blue' 
                                    : 'text-white/70 hover:text-white hover:bg-white/5'}`}
                      >
                        {item.title}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            {/* Main content */}
            <div className="md:col-span-3">
              <div 
                className={`glass-panel rounded-xl p-6 md:p-8 
                          ${isAnimated ? 'animate-blur-in' : 'opacity-0'}`}
                style={{ animationDelay: '0.3s' }}
              >
                <h2 className="text-xl md:text-2xl font-bold mb-6 text-white">
                  {instructions[activeSection].title}
                </h2>
                
                <div className="prose prose-invert max-w-none">
                  <p className="text-white/80 mb-6 leading-relaxed">
                    {instructions[activeSection].content}
                  </p>
                  
                  <div className="mt-8 space-y-3">
                    <h3 className="text-lg font-medium text-white">Key Points:</h3>
                    <ul className="space-y-2">
                      {[...Array(3)].map((_, i) => (
                        <li key={i} className="flex items-start">
                          <span className="flex-shrink-0 w-5 h-5 rounded-full bg-futuristic-blue/20 flex items-center justify-center mt-0.5 mr-3">
                            <Check className="w-3 h-3 text-futuristic-blue" />
                          </span>
                          <span className="text-white/80">
                            {activeSection === 0 && i === 0 && "The download button on the homepage provides instant access."}
                            {activeSection === 0 && i === 1 && "All downloads are secure and verified for your protection."}
                            {activeSection === 0 && i === 2 && "The download page offers customization options for your convenience."}
                            
                            {activeSection === 1 && i === 0 && "Your custom link will be saved for future sessions."}
                            {activeSection === 1 && i === 1 && "You can copy the link to your clipboard with a single click."}
                            {activeSection === 1 && i === 2 && "The link can be updated at any time from the download page."}
                            
                            {activeSection === 2 && i === 0 && "The dropdown menu provides quick access to all main sections."}
                            {activeSection === 2 && i === 1 && "Each page is optimized for both desktop and mobile viewing."}
                            {activeSection === 2 && i === 2 && "Interactive elements enhance your browsing experience."}
                            
                            {activeSection === 3 && i === 0 && "Technical support is available 24/7 for any issues."}
                            {activeSection === 3 && i === 1 && "Our documentation covers all features in detail."}
                            {activeSection === 3 && i === 2 && "Regular updates improve functionality and security."}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Instructions;
