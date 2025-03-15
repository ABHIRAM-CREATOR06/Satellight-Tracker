
import { useNavigate } from 'react-router-dom';
import { Download } from 'lucide-react';

interface DownloadButtonProps {
  text?: string;
  className?: string;
  isAnimated?: boolean;
}

const DownloadButton: React.FC<DownloadButtonProps> = ({ 
  text = "Click to Download", 
  className = "", 
  isAnimated = true 
}) => {
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate('/download');
  };

  return (
    <button
      onClick={handleClick}
      className={`
        relative overflow-hidden group flex items-center justify-center px-8 py-4 
        bg-futuristic-blue bg-opacity-20 hover:bg-opacity-30
        border border-futuristic-blue/30 hover:border-futuristic-blue/60
        rounded-lg transition-all duration-300 ease-out
        ${isAnimated ? 'animate-pulse-glow' : 'futuristic-shadow'}
        ${className}
      `}
    >
      {/* Background light effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-futuristic-blue/0 via-futuristic-blue/20 to-futuristic-blue/0 
           opacity-0 group-hover:opacity-100 transform translate-x-[-100%] group-hover:translate-x-[100%] 
           transition-all duration-1000 ease-out" />
      
      {/* Button text and icon */}
      <span className="relative flex items-center justify-center gap-2 text-white font-medium">
        {text}
        <Download className="w-5 h-5 transition-transform duration-300 group-hover:translate-y-0.5" />
      </span>
    </button>
  );
};

export default DownloadButton;
