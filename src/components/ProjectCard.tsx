import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import { FiGithub } from "react-icons/fi";
import { cn } from "@/lib/utils";
import SkillBadge from "./SkillBadge";
import { SkillType } from "./SkillType";

export interface ProjectProps {
  title: string;
  description: string;
  image?: string;
  githubUrl?: string;
  liveUrl?: string;
  technologies: {
    name: string;
    type: SkillType;
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
  className,
}) => {
  return (
    <Card
      className={cn(
        "card-hover overflow-hidden backdrop-blur-sm bg-black/40 border-white/10",
        className,
      )}
    >
      {image && (
        <div className="relative w-full h-48 sm:max-md:h-80 xl:h-56 overflow-hidden transform transition-transform duration-500 hover:scale-105 origin-top group">
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
          <img src={image} alt={title} className="w-full h-full object-cover" />
          <div className="hidden md:flex items-center justify-center gap-4 absolute inset-0 bg-black/20 transform translate-y-full transition-transform duration-500 ease-in-out group-hover:translate-y-0 p-4 backdrop-blur-sm">
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/80 hover:text-foreground transition-colors"
                aria-label="View source code on GitHub"
                title="Github repo"
              >
                <FiGithub className="w-8 h-8" />
              </a>
            )}
            <span>|</span>
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="live preview"
                className="text-foreground/80 hover:text-foreground transition-colors"
                aria-label="View live project"
              >
                <ExternalLink className="w-8 h-8" />
              </a>
            )}
          </div>
        </div>
      )}

      <CardHeader>
        <CardTitle className="text-md sm:text-xl font-bold">{title}</CardTitle>
        <CardDescription className="line-clamp-2">
          {description}
        </CardDescription>
      </CardHeader>

      <CardContent>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <SkillBadge key={index} name={tech.name} type={tech.type} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
