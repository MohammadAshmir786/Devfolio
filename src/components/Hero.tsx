import { motion, useReducedMotion } from "framer-motion";
import type { Variants } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motionConfig } from "@/lib/motion";
import BillboardParticles from "./effects/BillboardParticles";

const Hero: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: shouldReduceMotion
        ? { duration: motionConfig.reducedDuration }
        : {
            duration: motionConfig.sectionDuration,
            staggerChildren: motionConfig.childStagger,
            delayChildren: motionConfig.childDelay,
          },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: shouldReduceMotion
        ? { duration: motionConfig.reducedDuration }
        : { duration: motionConfig.sectionDuration },
    },
  };

  return (
    <>
      <BillboardParticles />
      <section
        id="hero"
        className="min-h-screen flex items-center relative pt-16"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.15),transparent_60%)]" />

        <div className="container px-4 py-16 md:py-24 mx-auto">
          <motion.div
            className="flex flex-col items-center text-center relative z-10 pointer-events-none"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              className="mb-6 relative inline-block"
              variants={itemVariants}
            >
              <span className="text-sm md:text-base uppercase tracking-wider text-foreground/80">
                MERN Stack & AI/ML Developer
              </span>
            </motion.div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              <motion.span variants={itemVariants} className="inline-block">
                Mohammad
              </motion.span>{" "}
              <motion.span
                className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-primary to-tech-ai"
                variants={itemVariants}
              >
                Ashmir
              </motion.span>{" "}
              <motion.span className="inline-block" variants={itemVariants}>
                Abbasi
              </motion.span>
            </h1>

            <motion.p
              className="max-w-2xl text-lg md:text-xl text-foreground/80 mb-10"
              variants={itemVariants}
            >
              I'm a full-stack developer specializing in MERN stack development
              and AI/ML integration, creating intelligent and responsive web
              applications.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 pointer-events-auto"
              variants={itemVariants}
            >
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
                asChild
              >
                <a href="#projects">View My Work</a>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-white/20 hover:bg-white/10"
                asChild
              >
                <a href="#contact">Contact Me</a>
              </Button>
            </motion.div>
          </motion.div>
        </div>

        <motion.a
          href="#about"
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-foreground/60 hover:text-foreground transition-colors pointer-events-auto"
          aria-label="Scroll down"
          animate={
            shouldReduceMotion
              ? { opacity: 1 }
              : { y: [0, 8, 0], opacity: [0.8, 1, 0.8] }
          }
          transition={
            shouldReduceMotion
              ? { duration: motionConfig.reducedDuration }
              : {
                  duration: motionConfig.loopDuration,
                  repeat: Infinity,
                  repeatType: "loop",
                }
          }
        >
          <ChevronDown size={32} />
        </motion.a>
      </section>
    </>
  );
};

export default Hero;
