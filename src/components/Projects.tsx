import React, { useState } from "react";
import { motion } from "framer-motion";
import { projects } from "./ProjectList";
import ProjectCard from "./ProjectCard";
import { Button } from "@/components/ui/button";
import { motionConfig } from "@/lib/motion";
import { Link } from "react-router-dom";

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<"all" | "mern" | "ai" | "next">("all");

  const filteredProjects = projects.filter((project) => {
    if (filter === "all") return true;
    if (filter === "mern") {
      return project.technologies.some((tech) =>
        ["mongodb", "express", "react", "node"].includes(tech.type),
      );
    }
    if (filter === "ai") {
      return project.technologies.some((tech) =>
        ["ai", "ml"].includes(tech.type),
      );
    }
    if (filter === "next") {
      return project.technologies.some((tech) => ["next"].includes(tech.type));
    }
    return true;
  });

  return (
    <section id="projects" className="py-16 md:py-24 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(109,89,165,0.15),transparent_70%)] -z-10" />

      <div className="container px-4 mx-auto">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-12"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={motionConfig.viewport.section}
          transition={{ duration: motionConfig.sectionDuration }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 relative">
            <span className="inline-block">Featured Projects</span>
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-primary"></span>
          </h2>

          <div className="text-lg text-foreground/80">
            Explore my latest work combining MERN stack development with
            artificial intelligence and machine learning technologies.
          </div>
        </motion.div>

        <motion.div
          className="flex justify-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={motionConfig.viewport.section}
          transition={{
            duration: motionConfig.sectionDuration,
            delay: motionConfig.childDelay,
          }}
        >
          <div className="inline-flex rounded-md shadow-sm p-1 bg-background/50 backdrop-blur-sm border border-white/10">
            <Button
              variant={filter === "all" ? "default" : "ghost"}
              className={filter === "all" ? "" : "hover:bg-white/10"}
              onClick={() => setFilter("all")}
            >
              All Projects
            </Button>
            <Button
              variant={filter === "mern" ? "default" : "ghost"}
              className={filter === "mern" ? "" : "hover:bg-white/10"}
              onClick={() => setFilter("mern")}
            >
              MERN Stack
            </Button>
            <Button
              variant={filter === "ai" ? "default" : "ghost"}
              className={filter === "ai" ? "" : "hover:bg-white/10"}
              onClick={() => setFilter("ai")}
            >
              AI & ML
            </Button>
            <Button
              variant={filter === "next" ? "default" : "ghost"}
              className={filter === "next" ? "" : "hover:bg-white/10"}
              onClick={() => setFilter("next")}
            >
              Next.js
            </Button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.length > 0 ? (
            filteredProjects.slice(0, 6).map((project, index) => (
              <motion.div
                key={index}
                className="h-full"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={motionConfig.viewport.card}
                transition={{
                  duration: motionConfig.sectionDuration,
                  delay: index * motionConfig.cardStagger,
                }}
              >
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  githubUrl={project.githubUrl}
                  liveUrl={project.liveUrl}
                  technologies={project.technologies}
                  className="h-full"
                />
              </motion.div>
            ))
          ) : (
            <motion.div
              className="col-span-full text-center text-foreground/80 py-10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={motionConfig.viewport.subtle}
              transition={{ duration: motionConfig.sectionDuration }}
            >
              Projects with selected filter will be added soon.
            </motion.div>
          )}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={motionConfig.viewport.section}
          transition={{
            duration: motionConfig.sectionDuration,
            delay: motionConfig.childDelay,
          }}
        >
          <div>
            <Button
              variant="outline"
              className="border-white/20 hover:bg-white/10"
              asChild
            >
              <Link to="/projects" className="inline-flex items-center">
                View All Projects
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
