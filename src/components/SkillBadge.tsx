
import React from 'react';
import { cn } from '@/lib/utils';

interface SkillBadgeProps {
  name: string;
  type: 'mongodb' | 'express' | 'react' | 'node' | 'ai' | 'ml' | 'other';
  className?: string;
}

const SkillBadge: React.FC<SkillBadgeProps> = ({ name, type, className }) => {
  const getTypeStyles = () => {
    switch (type) {
      case 'mongodb':
        return 'bg-tech-mongodb/10 text-tech-mongodb border-tech-mongodb/20';
      case 'express':
        return 'bg-tech-express/10 text-white border-tech-express/20';
      case 'react':
        return 'bg-tech-react/10 text-tech-react border-tech-react/20';
      case 'node':
        return 'bg-tech-node/10 text-tech-node border-tech-node/20';
      case 'ai':
        return 'bg-tech-ai/10 text-tech-ai border-tech-ai/20';
      case 'ml':
        return 'bg-tech-ml/10 text-tech-ml border-tech-ml/20';
      default:
        return 'bg-secondary/30 text-foreground border-secondary/40';
    }
  };
  
  return (
    <div 
      className={cn(
        'tech-badge inline-flex items-center justify-center border',
        'animate-float hover:scale-105 transition-transform',
        getTypeStyles(),
        className
      )}
    >
      {name}
    </div>
  );
};

export default SkillBadge;
