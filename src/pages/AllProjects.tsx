import React from "react";
import ParticleBackground from "@/components/effects/ParticleBackground";
import { projects } from "@/components/ProjectList";
import ProjectCard from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import { motion } from "framer-motion";
import { motionConfig } from "@/lib/motion";

type FilterType = "all" | "mern" | "ai" | "next";

const filterOptions: Array<{ value: FilterType; label: string }> = [
  { value: "mern", label: "MERN Stack" },
  { value: "ai", label: "AI & ML" },
  { value: "next", label: "Next.js" },
  { value: "all", label: "All Projects" },
];

const AllProjects = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = React.useState<FilterType>("mern");
  const projectGridRef = React.useRef<HTMLDivElement>(null);
  const wheelZoneRef = React.useRef<HTMLDivElement>(null);
  const [isDraggingWheel, setIsDraggingWheel] = React.useState(false);
  const dragStartYRef = React.useRef(0);
  const dragStartPositionRef = React.useRef(0);

  const activeFilterIndex = filterOptions.findIndex(
    (option) => option.value === filter,
  );
  const [wheelPosition, setWheelPosition] = React.useState(activeFilterIndex);

  React.useEffect(() => {
    if (!isDraggingWheel) {
      setWheelPosition(activeFilterIndex);
    }
  }, [activeFilterIndex, isDraggingWheel]);

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

  const handlePageWheel = (event: React.WheelEvent<HTMLDivElement>) => {
    if (
      wheelZoneRef.current &&
      event.target instanceof Node &&
      wheelZoneRef.current.contains(event.target)
    ) {
      return;
    }

    const projectsContainer = projectGridRef.current;

    if (!projectsContainer) {
      return;
    }

    const hasScrollableContent =
      projectsContainer.scrollHeight > projectsContainer.clientHeight;

    if (!hasScrollableContent) {
      return;
    }

    projectsContainer.scrollTop += event.deltaY;
  };

  const handleWheelPointerDown = (
    event: React.PointerEvent<HTMLDivElement>,
  ) => {
    dragStartYRef.current = event.clientY;
    dragStartPositionRef.current = wheelPosition;
    setIsDraggingWheel(true);
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handleWheelPointerMove = (
    event: React.PointerEvent<HTMLDivElement>,
  ) => {
    if (!isDraggingWheel) {
      return;
    }

    const itemStep = 76;
    const deltaY = event.clientY - dragStartYRef.current;
    const nextPosition = Math.max(
      0,
      Math.min(
        filterOptions.length - 1,
        dragStartPositionRef.current - deltaY / itemStep,
      ),
    );
    const nextIndex = Math.round(nextPosition);

    setWheelPosition(nextPosition);
    setFilter(filterOptions[nextIndex].value);
  };

  const handleWheelScroll = (event: React.WheelEvent<HTMLDivElement>) => {
    event.stopPropagation();

    const itemStep = 120;
    const nextPosition = Math.max(
      0,
      Math.min(
        filterOptions.length - 1,
        wheelPosition + event.deltaY / itemStep,
      ),
    );
    const nextIndex = Math.round(nextPosition);

    setWheelPosition(nextPosition);
    setFilter(filterOptions[nextIndex].value);
  };

  const handleWheelPointerUp = (event: React.PointerEvent<HTMLDivElement>) => {
    const snapIndex = Math.round(wheelPosition);

    setWheelPosition(snapIndex);
    setFilter(filterOptions[snapIndex].value);

    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }

    setIsDraggingWheel(false);
  };

  const handleGoBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
      return;
    }

    navigate("/");
  };

  return (
    <div
      className="relative h-screen overflow-hidden select-none"
      onWheel={handlePageWheel}
    >
      <ParticleBackground />
      {/* Heading */}
      <div className="container relative z-10 h-full pt-6 md:pt-10 lg:pt-12 flex flex-col">
        <motion.div 
          className="shrink-0 text-center mb-5 lg:mb-8 xl:mb-10"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={motionConfig.viewport.section}
          transition={{ duration: motionConfig.sectionDuration }}  
        >
          <h1 className="text-xl md:text-4xl font-bold mb-3 lg:mb-6">
            All{" "}
            <span className="relative inline-block before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-primary hover:before:skew-y-6 animate-float before:duration-[2000ms] hover:before:scale-105 before:transition-all">
              <span className="relative text-white dark:text-gray-950">
                Projects
              </span>
            </span>
          </h1>
          <p className="text-sm sm:text-md md:text-lg text-foreground/80 max-w-4xl mx-auto">
            Explore all my projects in one place. From MERN stack applications
            to AI-powered tools, discover the breadth of my work and the
            technologies I've mastered.
          </p>
        </motion.div>
        {/* Static Filter for not 4k screens */}
        <motion.div
          className="flex justify-center mb-5 xl:mb-10 2xl:hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={motionConfig.viewport.section}
          transition={{
            duration: motionConfig.sectionDuration,
            delay: motionConfig.childDelay,
          }}
        >
          <div className="grid grid-cols-2 gap-2 sm:inline-flex rounded-md shadow-sm p-1 bg-background/50 backdrop-blur-sm border border-white/10">
            {filterOptions.map((opt) => (
              <Button
                variant={filter === opt.value ? "default" : "ghost"}
                className={`border-2 sm:border-0 ${filter === opt.value ? "" : "hover:bg-white/10"}`}
                onClick={() => setFilter(opt.value)}
              >
                {opt.label}
              </Button>
            ))}
          </div>
        </motion.div>

        <div className="flex-1 min-h-0 relative">
          {/* Wheel Filter */}
          <div
            ref={wheelZoneRef}
            className="fixed left-0 top-0 h-screen w-72 hidden 2xl:block"
            onWheelCapture={handleWheelScroll}
          >
            <button
              type="button"
              onClick={handleGoBack}
              className="select-none absolute top-8 left-6 translate-x-0 rounded-full border border-white/10 bg-background/40 p-3 text-foreground/70 backdrop-blur-sm hover:border-primary/60 hover:scale-110 hover:animate-pulse-soft transition-all duration-700"
              >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <div className="pointer-events-none select-none absolute bottom-8 left-6 translate-x-0 rounded-full border border-white/10 bg-background/40 px-3 py-1 text-[11px] tracking-wide text-foreground/70 backdrop-blur-sm">
              Scroll / Drag
            </div>

            <div
              className={`absolute  select-none left-0 top-1/2 bottom-auto -translate-x-0 -translate-y-1/2 ${
                isDraggingWheel ? "cursor-grabbing" : "cursor-grab"
              }`}
              onPointerDown={handleWheelPointerDown}
              onPointerMove={handleWheelPointerMove}
              onPointerUp={handleWheelPointerUp}
              onPointerCancel={handleWheelPointerUp}
            >
              <motion.div 
                className="relative h-[520px] w-72 origin-center"
                initial={{ x: -400, y: 400, opacity: 0, rotate: 90}}
                whileInView={{ x: 0, y: 0, opacity: 1, rotate: 0 }}
                animate={{ x: 0, y: 0, opacity: 1, rotate: 0 }}
                viewport={motionConfig.viewport.section}
                transition={{
                  duration: motionConfig.sectionDuration,
                  delay: motionConfig.childDelay,
                }}
              >
                {filterOptions.map((option, index) => {
                  const radius = 160;
                  const itemGap = 70;
                  const relativeIndex = index - wheelPosition;
                  const yOffset = relativeIndex * itemGap;
                  const clampedY = Math.max(-radius, Math.min(radius, yOffset));
                  const xOffset = Math.sqrt(
                    radius * radius - clampedY * clampedY,
                  );
                  const distance = Math.abs(relativeIndex);
                  const isActive = index === Math.round(wheelPosition);
                  const opacity = Math.max(0.6, 1 - distance * 0.25);
                  const blurPx = Math.min(distance * 1, 1.5);

                  return (
                    <button
                      key={option.value}
                      onClick={() => setFilter(option.value)}
                      className="absolute left-0 top-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-background/60 backdrop-blur-sm px-4 py-2 text-base"
                      style={{
                        transform: `translate(${xOffset}px, ${yOffset}px) scale(${isActive ? 1.2 : 0.92})`,
                        opacity,
                        filter: `blur(${blurPx}px)`,
                        zIndex: 30 - distance,
                        transition: isDraggingWheel
                          ? "none"
                          : "transform 220ms ease, filter 220ms ease, opacity 220ms ease",
                      }}
                      aria-pressed={isActive}
                    >
                      <span
                        className={`inline-block ${
                          isActive
                            ? "font-semibold text-primary"
                            : "text-foreground/80"
                        }`}
                      >
                        {option.label}
                      </span>
                    </button>
                  );
                })}
              </motion.div>
            </div>
          </div>

          {/* Project Grid */}
          <div
            ref={projectGridRef}
            className="h-full min-h-0 overflow-y-auto p-5 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          >
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProjects;
