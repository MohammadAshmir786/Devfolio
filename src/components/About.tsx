import React from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import SkillBadge from "./SkillBadge";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import profileImage from "@/assets/images/profile.png";
import { motionConfig } from "@/lib/motion";
import bg from "@/assets/images/bg1.png";
import Earth from "@/components/3d/Earth";

const About: React.FC = () => {
  const { scrollY } = useScroll();
  const earthScale = useTransform(scrollY, [500, 900], [0.3, 0.7]);
  // const earthOpacity = useTransform(scrollY, [950, 1200], [1, 0]);
  const earthY = useTransform(
    scrollY,
    [500, 900],
    [-100, -70]
  );
  const skills = [
    // ================================
    // 🚀 Core MERN Stack (Primary Focus)
    // ================================
    { name: "MongoDB", type: "mongodb" as const },
    { name: "Express", type: "express" as const },
    { name: "React", type: "react" as const },
    { name: "Node.js", type: "node" as const },

    // ================================
    // 🎨 Frontend Ecosystem
    // ================================
    { name: "Next.js", type: "react" as const },
    { name: "Redux", type: "react" as const },
    { name: "TypeScript", type: "typescript" as const },
    { name: "JavaScript", type: "javascript" as const },
    { name: "Tailwind CSS", type: "tailwind" as const },
    { name: "Bootstrap", type: "bootstrap" as const },
    { name: "Three.js", type: "animations" as const },
    { name: "motion", type: "animations" as const },

    // ================================
    // 🔧 Backend & APIs
    // ================================
    { name: "GraphQL", type: "other" as const },
    { name: "Jest", type: "jest" as const },

    // ================================
    // 🗄 Databases
    // ================================
    { name: "PostgreSQL", type: "sql" as const },
    { name: "MySQL", type: "sql" as const },

    // ================================
    // 🤖 AI / ML (Secondary Focus)
    // ================================
    { name: "Python", type: "python" as const },
    { name: "Numpy", type: "ai" as const },
    { name: "Pandas", type: "ai" as const },
    { name: "Scikit-Learn", type: "ml" as const },
    { name: "TensorFlow", type: "ai" as const },
    { name: "PyTorch", type: "ai" as const },
    { name: "Keras", type: "ai" as const },
    { name: "Matplotlib", type: "ai" as const },
    { name: "OpenCV", type: "ml" as const },
    { name: "YOLO", type: "ml" as const },
    { name: "Pillow", type: "ml" as const },
    { name: "Computer Vision", type: "ml" as const },
    { name: "NLP", type: "ml" as const },
    { name: "Jupyter Notebook", type: "other" as const },
    { name: "Google Colab", type: "other" as const },

    // ================================
    // ☁ Cloud & DevOps
    // ================================
    { name: "Docker", type: "other" as const },
    { name: "AWS", type: "other" as const },
  ];

  return (
    <>
      {/* <motion.div className="h-screen w-full -z-10  sticky top-0 origin-bottom" style={{backgroundImage:`url(${bg})`, backgroundSize: "cover", backgroundPosition: "center", scale: earthScale, opacity: earthOpacity}}>
      </motion.div> */}
    <Earth
      scale={earthScale}
      y={earthY}
    />
    <section id="about" className="py-16 md:py-24">

      <div className="container px-4 mx-auto">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={motionConfig.viewport.section}
          transition={{ duration: motionConfig.sectionDuration }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 relative">
            <span className="inline-block">About Me</span>
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-primary"></span>
          </h2>

          <div className="text-lg text-foreground/80">
            I'm <strong>Mohammad Ashmir Abbasi</strong>, a MERN Stack Developer
            and AI/ML enthusiast. I build scalable, responsive web applications
            and enjoy leveraging emerging technologies to solve real-world
            problems. I actively learn and work on personal projects to sharpen
            my skills and stay updated with industry trends.
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 items-center mb-16 max-w-4xl mx-auto">
          <motion.div
            className="order-2 pl-2.5 md:order-1 space-y-4"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={motionConfig.viewport.section}
            transition={{
              duration: motionConfig.sectionDuration,
              delay: motionConfig.childDelay,
            }}
          >
            <div className="prose prose-invert max-w-none">
              <strong>Technical Proficiency:</strong> MERN stack (MongoDB,
              Express.js, React.js, Node.js), HTML, CSS, JavaScript, Python.
            </div>

            <div className="prose prose-invert max-w-none">
              <strong>Project Experience:</strong> Developed AI-powered web
              applications, secure password managers, and responsive UI
              dashboards as personal and academic projects.
            </div>

            <div className="prose prose-invert max-w-none">
              <strong>Core Strengths:</strong> Problem-solving, clean and
              maintainable code, performance optimization, and collaborative
              development in Agile workflows.
            </div>

            <div className="prose prose-invert max-w-none">
              I am eager to contribute to a dynamic team, continuously learn new
              technologies, and deliver high-quality solutions that create value
              for users and businesses.
            </div>
          </motion.div>

          <motion.div
            className="order-1 md:order-2 flex flex-col gap-8 mb-16 md:mb-0"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={motionConfig.viewport.section}
            transition={{
              duration: motionConfig.sectionDuration,
              delay: motionConfig.panelDelay,
            }}
          >
            <div className="relative ml-auto w-full max-w-sm overflow-hidden">
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-tech-ai rounded-2xl blur opacity-40 group-hover:opacity-70 transition duration-1000"></div>
                <div className="relative bg-black/30 backdrop-blur-md rounded-xl p-2 border border-white/10">
                  <AspectRatio ratio={1 / 1} className="rounded-lg">
                    <img
                      src={profileImage}
                      alt="Professional headshot of Mohammad Ashmir Abbasi"
                      className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
                    />
                  </AspectRatio>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={motionConfig.viewport.card}
          transition={{ duration: motionConfig.sectionDuration }}
        >
          <div className="bg-black/30 backdrop-blur-md rounded-xl p-8 border border-white/10">
            <h3 className="text-xl font-bold mb-6">
              <span className="inline-block">Technical Skills</span>
            </h3>

            <div className="flex flex-wrap gap-3 justify-center">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={motionConfig.viewport.card}
                  transition={{
                    duration: motionConfig.badgeDuration,
                    delay: index * motionConfig.badgeStagger,
                  }}
                >
                  <SkillBadge name={skill.name} type={skill.type} />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
    </>
  );
};

export default About;
