import { ProjectProps } from './ProjectCard';
import PricePulseAi_preview from '../assets/images/PricePulseAI_preview.png';
import SyncHomes_preview from '../assets/images/SyncHomes_preview.png';
import QuirkyRoomie_preview from '../assets/images/QuirkyRoomie_preview.png';
import NexKey_preview from '../assets/images/NexKey_preview.png';
import MGW_Capital_preview from '../assets/images/MGW-Capital_preview.png';
import NLP_preview from '../assets/images/NLP_preview.png';
import STMS_preview from '../assets/images/STMS_preview.png';

export const projects: ProjectProps[] = [
    {
      title: "PricePulseAI - Intelligent E-Commerce Platform",
      description: "An e-commerce platform with AI-powered recommendation engine and responsive MERN stack architecture.",
      image: PricePulseAi_preview,
      githubUrl: "https://github.com/MohammadAshmir786/PricePulseAI",
      liveUrl: "https://pricepulse-ai.vercel.app/",
      technologies: [
        { name: "MongoDB", type: "mongodb" },
        { name: "Express", type: "express" },
        { name: "React", type: "react" },
        { name: "Node.js", type: "node" },
        { name: "Tailwind CSS", type: "tailwind" },
        { name: "Three.js", type: "animations" },
        { name: "TensorFlow", type: "ai" },
        { name: "Flask", type: "flask" },
      ]
    },
    {
      title: "SyncHomes - Full-Stack Landing Page & Admin Dashboard",
      description: "A full-stack MERN project for the SyncHomes marketing site and admin dashboard, with React + TypeScript frontend and Node.js + Express backend, featuring JWT authentication and responsive design.",
      image: SyncHomes_preview, // replace with your imported preview image
      githubUrl: "https://github.com/MohammadAshmir786/SyncHomes_Landing_Page",
      liveUrl: "https://sync-homes.vercel.app/",
      technologies: [
        { name: "React", type: "react" },
        { name: "TypeScript", type: "typescript" },
        { name: "Tailwind CSS", type: "tailwind" },
        { name: "Node.js", type: "node" },
        { name: "Express", type: "express" },
        { name: "MongoDB", type: "mongodb" },
        { name: "JWT Authentication", type: "jwt" },
        { name: "Recharts", type: "other" }
      ]
    },
    {
      title: "QuirkyRoomie - Flatmate Conflict Management",
      description: "A web application for managing conflicts and communication between flatmates.",
      image: QuirkyRoomie_preview,
      githubUrl: "https://github.com/MohammadAshmir786/QuirkyRoomie",
      liveUrl: "https://quirkyroomie-app.vercel.app/",
      technologies: [
        { name: "React", type: "react" },
        { name: "TypeScript", type: "typescript" },
        { name: "Tailwind CSS", type: "tailwind" },
        { name: "Node.js", type: "node" },
        { name: "Express", type: "express" },
        { name: "MongoDB", type: "mongodb" },
        { name: "JWT Authentication", type: "jwt" }
      ]
    },
    {
      title: "AI Image Recognition App",
      description: "A web application that uses computer vision to identify and analyze objects  through a live webcam feed.",
      image: "https://source.unsplash.com/random/600x400/?ai",
      githubUrl: "https://github.com/MohammadAshmir786/Object_Detection_with_YOLO",
      liveUrl: "#",
      technologies: [
        { name: "React", type: "react" },
        { name: "Node.js", type: "node" },
        { name: "TensorFlow", type: "ai" },
        { name: "Computer Vision", type: "ml" },
        { name: "Bootstrap", type: "bootstrap" },
        { name: "OpenCV", type: "ml" },
        { name: "YOLO", type: "ml" },
        { name: "Pillow", type: "ml" }
      ]
    },
    {
      title: "NexKey - Your Own Password Manager",
      description: "A secure and visually appealing password manager built with a sleek design, animated icons, and seamless database connectivity.",
      image: NexKey_preview,
      githubUrl: "https://github.com/MohammadAshmir786/NexKey",
      liveUrl: "https://nex-key.vercel.app/",
      technologies: [
        { name: "MongoDB", type: "mongodb" },
        { name: "Express", type: "express" },
        { name: "React", type: "react" },
        { name: "Node", type: "node"},
        { name: "Tailwind CSS", type: "tailwind" },
        { name: "JWT-authentication", type: "jwt" },
        { name: "Lordicon", type: "other" }
      ]
    },

    {
      title: "MGW-Capital - Fintech Template",
      description: "A Fintech website template crafted for immersive experience. Elegant design, robust functionality, seamless across devices.",
      image: MGW_Capital_preview,
      githubUrl: "https://github.com/MohammadAshmir786/MGW-Capital",
      liveUrl: "https://mohammadashmir786.github.io/MGW-Capital/",
      technologies: [
        { name: "HTML", type: "html5" },
        { name: "CSS", type: "css3" },
        { name: "JavaScript", type: "javascript" },
        { name: "Bootstrap", type: "bootstrap" }
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
      image: NLP_preview,
      githubUrl: "#",
      liveUrl: "#",
      technologies: [
        { name: "Python", type: "other" },
        { name: "React", type: "react" },
        { name: "NLP", type: "ml" },
        { name: "FastAPI", type: "other" },
        { name: "The Tool is Under Development ⚙️", type: "animations" }
      ]
    },
    {
      title: "Smart Task Management System",
      description: "A task management system with ML-powered prioritization and scheduling suggestions.",
      image: STMS_preview,
      githubUrl: "#",
      liveUrl: "#",
      technologies: [
        { name: "MongoDB", type: "mongodb" },
        { name: "Express", type: "express" },
        { name: "React", type: "react" },
        { name: "Node.js", type: "node" },
        { name: "Scikit-Learn", type: "ml" },
        { name: "The Tool is Under Development ⚙️", type: "animations" }
      ]
    }
  ];