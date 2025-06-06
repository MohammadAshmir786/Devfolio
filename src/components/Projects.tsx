
import React, { useState } from 'react';
import ProjectCard, { ProjectProps } from './ProjectCard';
import { Button } from '@/components/ui/button';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'mern' | 'ai'>('all');
  
  const projects: ProjectProps[] = [
    {
      title: "Intelligent E-Commerce Platform",
      description: "An e-commerce platform with AI-powered recommendation engine and responsive MERN stack architecture.",
      image: "https://source.unsplash.com/random/600x400/?ecommerce",
      githubUrl: "#",
      liveUrl: "#",
      technologies: [
        { name: "MongoDB", type: "mongodb" },
        { name: "Express", type: "express" },
        { name: "React", type: "react" },
        { name: "Node.js", type: "node" },
        { name: "TensorFlow", type: "ai" }
      ]
    },
    {
      title: "Real-time Data Visualization Dashboard",
      description: "A real-time dashboard for monitoring and visualizing data streams with machine learning insights.",
      image: "https://source.unsplash.com/random/600x400/?dashboard",
      githubUrl: "#",
      liveUrl: "#",
      technologies: [
        { name: "MongoDB", type: "mongodb" },
        { name: "Express", type: "express" },
        { name: "React", type: "react" },
        { name: "D3.js", type: "other" },
        { name: "Socket.io", type: "other" }
      ]
    },
    {
      title: "AI Image Recognition App",
      description: "A web application that uses computer vision to identify and analyze objects in uploaded images.",
      image: "https://source.unsplash.com/random/600x400/?ai",
      githubUrl: "#",
      liveUrl: "#",
      technologies: [
        { name: "React", type: "react" },
        { name: "Node.js", type: "node" },
        { name: "TensorFlow", type: "ai" },
        { name: "Computer Vision", type: "ml" }
      ]
    },
    {
      title: "MERN Social Media Platform",
      description: "A full-featured social media platform with real-time notifications and content recommendations.",
      image: "https://source.unsplash.com/random/600x400/?social",
      githubUrl: "#",
      liveUrl: "#",
      technologies: [
        { name: "MongoDB", type: "mongodb" },
        { name: "Express", type: "express" },
        { name: "React", type: "react" },
        { name: "Node.js", type: "node" },
        { name: "Redux", type: "other" }
      ]
    },
    {
      title: "Natural Language Processing Tool",
      description: "A tool for analyzing and processing text data with advanced NLP capabilities.",
      image: "https://source.unsplash.com/random/600x400/?language",
      githubUrl: "#",
      liveUrl: "#",
      technologies: [
        { name: "Python", type: "other" },
        { name: "React", type: "react" },
        { name: "NLP", type: "ml" },
        { name: "FastAPI", type: "other" }
      ]
    },
    {
      title: "Smart Task Management System",
      description: "A task management system with ML-powered prioritization and scheduling suggestions.",
      image: "https://source.unsplash.com/random/600x400/?tasks",
      githubUrl: "#",
      liveUrl: "#",
      technologies: [
        { name: "MongoDB", type: "mongodb" },
        { name: "Express", type: "express" },
        { name: "React", type: "react" },
        { name: "Node.js", type: "node" },
        { name: "Scikit-Learn", type: "ml" }
      ]
    }
  ];
  
  const filteredProjects = projects.filter(project => {
    if (filter === 'all') return true;
    if (filter === 'mern') {
      return project.technologies.some(tech => 
        ['mongodb', 'express', 'react', 'node'].includes(tech.type)
      );
    }
    if (filter === 'ai') {
      return project.technologies.some(tech => 
        ['ai', 'ml'].includes(tech.type)
      );
    }
    return true;
  });
  
  return (
    <section id="projects" className="py-16 md:py-24 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(109,89,165,0.15),transparent_70%)]" />
      
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 relative">
            <span className="inline-block animate-slide-up">
              Featured Projects
            </span>
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-primary"></span>
          </h2>
          
          <div className="text-lg text-foreground/80 animate-fade-in" style={{ animationDelay: '300ms' }}>
            Explore my latest work combining MERN stack development with artificial intelligence and machine learning technologies.
          </div>
        </div>
        
        <div className="flex justify-center mb-10">
          <div className="inline-flex rounded-md shadow-sm p-1 bg-background/50 backdrop-blur-sm border border-white/10">
            <Button
              variant={filter === 'all' ? 'default' : 'ghost'}
              className={filter === 'all' ? '' : 'hover:bg-white/10'}
              onClick={() => setFilter('all')}
            >
              All Projects
            </Button>
            <Button
              variant={filter === 'mern' ? 'default' : 'ghost'}
              className={filter === 'mern' ? '' : 'hover:bg-white/10'}
              onClick={() => setFilter('mern')}
            >
              MERN Stack
            </Button>
            <Button
              variant={filter === 'ai' ? 'default' : 'ghost'}
              className={filter === 'ai' ? '' : 'hover:bg-white/10'}
              onClick={() => setFilter('ai')}
            >
              AI & ML
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <div key={index} className="h-full animate-slide-up" style={{ animationDelay: `${300 + index * 150}ms` }}>
              <ProjectCard 
                title={project.title}
                description={project.description}
                image={project.image}
                githubUrl={project.githubUrl}
                liveUrl={project.liveUrl}
                technologies={project.technologies}
                className="h-full"
              />
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="animate-fade-in" style={{ animationDelay: '900ms' }}>
            <Button 
              variant="outline" 
              className="border-white/20 hover:bg-white/10"
              asChild
            >
              <a href="#" className="inline-flex items-center">
                View All Projects
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
