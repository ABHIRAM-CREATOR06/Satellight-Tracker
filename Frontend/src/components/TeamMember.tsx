
import React from 'react';

interface TeamMemberProps {
  name: string;
  role: string;
  bio: string;
  imgUrl?: string;
  index: number;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, role, bio, imgUrl, index }) => {
  return (
    <div 
      className="glass-panel rounded-xl overflow-hidden p-6 mb-8 transition-all duration-500 hover:border-futuristic-blue/30"
      style={{ 
        animationDelay: `${index * 0.15}s`,
        animationFillMode: 'forwards',
        opacity: 0
      }}
    >
      <div className="flex flex-col md:flex-row gap-6 items-start">
        {imgUrl && (
          <div className="w-24 h-24 md:w-32 md:h-32 rounded-lg overflow-hidden flex-shrink-0 border border-white/10">
            <img 
              src={imgUrl} 
              alt={name}
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" 
            />
          </div>
        )}
        
        <div className="flex-1">
          <h3 className="text-xl font-semibold mb-1 text-white">
            {name}
          </h3>
          <p className="text-futuristic-blue mb-3 font-medium text-sm">
            {role}
          </p>
          <p className="text-white/80 text-sm md:text-base leading-relaxed">
            {bio}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
