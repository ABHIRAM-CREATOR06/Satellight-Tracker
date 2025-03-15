
import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import { Copy, CheckCircle, ExternalLink } from 'lucide-react';
import { toast } from 'sonner';

const Download: React.FC = () => {
  const [driveLink, setDriveLink] = useState('https://drive.google.com/file/d/1y1UolJIkqKM1CW6R-5ORw-FUFv1jERV2/view?usp=drive_link');
  const [isEditing, setIsEditing] = useState(false);
  const [copied, setCopied] = useState(false);
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimated(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
    toast.success('Your download link has been updated');
  };

  const handleCopyClick = () => {
    navigator.clipboard.writeText(driveLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
    toast.success('Link copied to clipboard');
  };

  return (
    <>
      <Navbar />
      <div className="page-container flex flex-col items-center justify-center">
        {/* Background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute top-[30%] left-[15%] w-80 h-80 rounded-full bg-futuristic-blue/5 blur-[80px]" />
          <div className="absolute bottom-[10%] right-[15%] w-96 h-96 rounded-full bg-futuristic-blue/5 blur-[100px]" />
        </div>
        
        <div 
          className={`max-w-3xl mx-auto z-10 glass-panel rounded-xl p-8 md:p-10 w-full md:w-auto
                     ${isAnimated ? 'animate-blur-in' : 'opacity-0'}`}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white text-center">Download Center</h2>
          
          <div className="mb-8">
            <p className="text-white/80 mb-2 text-sm md:text-base">
              Your customizable Google Drive link is ready. Click to download or edit the link below.
            </p>
            
            <div className="glass-blur rounded-lg p-6 mb-4">
              <label className="block text-futuristic-blue text-sm font-medium mb-2">Google Drive Link</label>
              
              {isEditing ? (
                <div className="mb-4">
                  <input
                    type="text"
                    value={driveLink}
                    onChange={(e) => setDriveLink(e.target.value)}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-md 
                               text-white focus:border-futuristic-blue focus:outline-none focus:ring-1 focus:ring-futuristic-blue"
                  />
                </div>
              ) : (
                <div className="flex items-center mb-4">
                  <div className="flex-1 truncate text-white/90 px-4 py-3 bg-white/5 border border-white/10 rounded-md">
                    {driveLink}
                  </div>
                  
                  <button
                    onClick={handleCopyClick}
                    className="ml-2 p-2 bg-white/5 hover:bg-white/10 rounded-md transition-colors duration-300"
                    aria-label="Copy link"
                  >
                    {copied ? <CheckCircle className="w-5 h-5 text-green-500" /> : <Copy className="w-5 h-5 text-white" />}
                  </button>
                </div>
              )}
              
              <div className="flex flex-col sm:flex-row gap-3">
                {isEditing ? (
                  <button
                    onClick={handleSaveClick}
                    className="flex-1 px-4 py-3 bg-futuristic-blue/20 hover:bg-futuristic-blue/30 
                            border border-futuristic-blue/50 rounded-md text-white 
                            transition-colors duration-300"
                  >
                    Save Link
                  </button>
                ) : (
                  <button
                    onClick={handleEditClick}
                    className="flex-1 px-4 py-3 bg-white/5 hover:bg-white/10 
                             border border-white/10 rounded-md text-white 
                             transition-colors duration-300"
                  >
                    Edit Link
                  </button>
                )}
                
                <a
                  href={driveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center px-4 py-3 bg-futuristic-blue/20 hover:bg-futuristic-blue/30 
                           border border-futuristic-blue/50 rounded-md text-white 
                           transition-colors duration-300"
                >
                  Download Now <ExternalLink className="ml-2 w-4 h-4" />
                </a>
              </div>
            </div>
            
            <p className="text-white/60 text-sm">
              Note: Make sure you have the necessary permissions to access the Google Drive link.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Download;
