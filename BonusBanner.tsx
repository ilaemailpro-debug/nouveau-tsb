import React from 'react';
import { ExternalLink, Gift, Send } from 'lucide-react';

interface BonusBannerProps {
  title: string;
  description: string;
  link: string;
  isPrimary?: boolean;
}

const BonusBanner: React.FC<BonusBannerProps> = ({ 
  title, 
  description, 
  link,
  isPrimary = false
}) => {
  const gradientClass = isPrimary 
    ? "from-blue-400 to-pink-400 hover:from-blue-300 hover:to-pink-300" 
    : "from-[#0088cc] to-[#0088cc] hover:from-[#0077b3] hover:to-[#0077b3]";

  return (
    <a 
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        w-full max-w-md mx-auto mb-6 rounded-xl overflow-hidden 
        bg-gradient-to-r ${gradientClass} transform transition-all duration-300
        hover:scale-[1.02] hover:shadow-xl ${!isPrimary && 'py-1 max-w-[200px]'} ${isPrimary && 'animate-pulse'}
      `}
    >
      {isPrimary && <img 
        src="https://i.ibb.co/Y7gyFqhq/1.png" 
        alt="Casino Bonus" 
        className="w-full h-auto animate-pulse"
      />}
      <div className={`${isPrimary ? 'p-5' : 'px-4'} flex items-center`}>
        <div className={`bg-white/20 rounded-full p-2 ${isPrimary ? 'mr-3' : 'mr-2'}`}>
          {isPrimary ? (
            <Gift size={20} className="text-white" />
          ) : (
            <Send size={16} className="text-white" />
          )}
        </div>
        <div className={`flex-1 ${!isPrimary && 'mr-2'}`}>
          <h3 className="text-base font-bold text-white tracking-tight">{title}</h3>
          <p className={`text-white/90 ${isPrimary ? 'text-sm' : 'text-xs'} font-medium`}>{isPrimary ? 
            `🎮 Mini jeux dépot doublé - Clique ici pour commencer ! 💰`
            : description
          }</p>
        </div>
        {isPrimary && <ExternalLink size={14} className="text-white/80" />}
      </div>
    </a>
  );
};

export default BonusBanner;