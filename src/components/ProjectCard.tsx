
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ExternalLink } from 'lucide-react';
import { FiGithub } from 'react-icons/fi';
import { cn } from '@/lib/utils';
import SkillBadge from './SkillBadge';

export interface ProjectProps {
  title: string;
  description: string;
  image?: string;
  githubUrl?: string;
  liveUrl?: string;
  technologies: {
    name: string;
    type: 'mongodb' | 'express' | 'react' | 'node' | 'ai' | 'ml' | 'other';
  }[];
  className?: string;
}

const ProjectCard: React.FC<ProjectProps> = ({
  title,
  description,
  image,
  githubUrl,
  liveUrl,
  technologies,
  className
}) => {
  return (
    <Card 
      className={cn(
        'card-hover overflow-hidden backdrop-blur-sm bg-black/40 border-white/10',
        className
      )}
    >
      {image && (
        <div className="relative w-full h-56 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110" 
          />
        </div>
      )}
      
      <CardHeader>
        <CardTitle className="text-xl font-bold">{title}</CardTitle>
        <CardDescription className="line-clamp-2">{description}</CardDescription>
      </CardHeader>
      
      <CardContent>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <SkillBadge 
              key={index} 
              name={tech.name} 
              type={tech.type} 
            />
          ))}
        </div>
      </CardContent>
      
      <CardFooter className="flex justify-between">
        {githubUrl && (
          <a 
            href={githubUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-foreground/80 hover:text-foreground transition-colors"
            aria-label="View source code on GitHub"
          >
            <FiGithub className="w-5 h-5" />
          </a>
        )}
        
        {liveUrl && (
          <a 
            href={liveUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-foreground/80 hover:text-foreground transition-colors"
            aria-label="View live project"
          >
            <ExternalLink className="w-5 h-5" />
          </a>
        )}
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
