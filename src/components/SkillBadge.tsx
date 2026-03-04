import React from 'react';
import { cn } from '@/lib/utils';
import { SkillType } from './SkillType';

interface SkillBadgeProps {
  name: string;
  type: SkillType;
  className?: string;
}

const SkillBadge: React.FC<SkillBadgeProps> = ({ name, type, className }) => {
  const getTypeStyles = () => {
    switch (type) {
      // ========================
      // Core Languages
      // ========================
      case 'javascript':
        return 'bg-tech-javascript/10 text-tech-javascript border-tech-javascript/20';
      case 'typescript':
  return 'bg-tech-typescript/10 text-tech-typescript border-tech-typescript/20';
      case 'html5':
        return 'bg-tech-html5/10 text-tech-html5 border-tech-html5/20';
      case 'css3':
        return 'bg-tech-css3/10 text-tech-css3 border-tech-css3/20';
      case 'python':
        return 'bg-tech-python text-yellow-300 border-tech-python/20';
      case 'sql':
        return 'bg-tech-sql/10 text-tech-sql border-tech-sql/20';

      // ========================
      // MERN Stack
      // ========================
      case 'react':
        return 'bg-tech-react/10 text-tech-react border-tech-react/20';
      case 'node':
        return 'bg-tech-node/10 text-tech-node border-tech-node/20';
      case 'express':
        return 'bg-tech-express/10 text-white border-tech-express/20';
      case 'mongodb':
        return 'bg-tech-mongodb/10 text-tech-mongodb border-tech-mongodb/20';

      // ========================
      // Frontend Frameworks
      // ========================
      case 'bootstrap':
        return 'bg-tech-bootstrap/10 text-tech-bootstrap border-tech-bootstrap/20';
      case 'tailwind':
        return 'bg-tech-tailwind/10 text-tech-tailwind border-tech-tailwind/20';
      case 'flask':
        return 'bg-tech-flask/10 text-tech-flask border-tech-flask/20';
      case 'django':
        return 'bg-tech-django/10 text-green-500 border-green-500/20';
      case 'next':
        return 'bg-tech-next/10 text-white border-tech-next/20';
      

      // ========================
      // Responsive Design & UI/UX
      // ========================
      case 'responsive':
        return 'bg-tech-responsive/10 text-tech-responsive border-tech-responsive/20';
      case 'ajax':
        return 'bg-tech-ajax/10 text-tech-ajax border-tech-ajax/20';
      case 'animations':
        return 'bg-tech-animations/10 text-tech-animations border-tech-animations/20';

      // ========================
      // Databases
      // ========================
      case 'mysql':
        return 'bg-tech-mysql/10 text-tech-mysql border-tech-mysql/20';
      case 'firebase':
        return 'bg-tech-firebase/10 text-tech-firebase border-tech-firebase/20';

      // ========================
      // AI & ML
      // ========================
      case 'ai':
        return 'bg-tech-ai/10 text-tech-ai border-tech-ai/20';
      case 'ml':
        return 'bg-tech-ml/10 text-tech-ml border-tech-ml/20';

      // ========================
      // Tools & Platforms
      // ========================
      case 'git':
        return 'bg-tech-git/10 text-tech-git border-tech-git/20';
      case 'github':
        return 'bg-tech-github/10 text-tech-github border-tech-github/20';
      case 'postman':
        return 'bg-tech-postman/10 text-tech-postman border-tech-postman/20';
      case 'swagger':
        return 'bg-tech-swagger/10 text-tech-swagger border-tech-swagger/20';
      case 'vscode':
        return 'bg-tech-vscode/10 text-tech-vscode border-tech-vscode/20';
      case 'netlify':
        return 'bg-tech-netlify/10 text-tech-netlify border-tech-netlify/20';
      case 'vercel':
        return 'bg-tech-vercel/10 text-tech-vercel border-tech-vercel/20';
      case 'heroku':
        return 'bg-tech-heroku/10 text-tech-heroku border-tech-heroku/20';
      case 'railway':
        return 'bg-tech-railway/10 text-tech-railway border-tech-railway/20';

      // ========================
      // Backend & APIs
      // ========================
      case 'jwt':
        return 'bg-tech-jwt/10 text-tech-jwt border-tech-jwt/20';
      case 'passport':
        return 'bg-tech-passport/10 text-tech-passport border-tech-passport/20';
      case 'restapi':
        return 'bg-tech-restapi/10 text-tech-restapi border-tech-restapi/20';
      case 'mvc':
        return 'bg-tech-mvc/10 text-tech-mvc border-tech-mvc/20';

      // ========================
      // Workflow & Testing
      // ========================
      case 'agile':
        return 'bg-tech-agile/10 text-tech-agile border-tech-agile/20';
      case 'cicd':
        return 'bg-tech-cicd/10 text-tech-cicd border-tech-cicd/20';
      case 'jest':
        return 'bg-red-100/10 text-red-600 border-red-200';
      case 'apiDoc':
        return 'bg-tech-apiDoc/10 text-tech-apiDoc border-tech-apiDoc/20';

      // ========================
      // Fallback
      // ========================
      default:
        return 'bg-secondary/30 text-foreground border-secondary/40';
    }
  };

  return (
    <div
      className={cn(
        'tech-badge inline-flex items-center justify-center border px-3 py-1 rounded-md text-[12px] sm:text-sm font-medium',
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