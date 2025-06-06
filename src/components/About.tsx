import React from "react";
import SkillBadge from "./SkillBadge";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import profileImage from "@/assets/images/profile.png";

const About: React.FC = () => {
	const skills = [
		// Full Stack Development (MERN Stack)
		{ name: "MongoDB", type: "mongodb" as const },
		{ name: "Express", type: "express" as const },
		{ name: "React", type: "react" as const },
		{ name: "Node.js", type: "node" as const },
		{ name: "Next.js", type: "react" as const },
		{ name: "Redux", type: "react" as const },
	
		// Artificial Intelligence & Machine Learning
		{ name: "Numpy", type: "ai" as const },
		{ name: "Pandas", type: "ai" as const },
		{ name: "Keras", type: "ai" as const },
		{ name: "Matplotlib", type: "ai" as const },
		{ name: "TensorFlow", type: "ai" as const },
		{ name: "PyTorch", type: "ai" as const },
		{ name: "Scikit-Learn", type: "ml" as const },
		{ name: "OpenCV", type: "ml" as const },
		{ name: "Computer Vision", type: "ml" as const },
		{ name: "NLP", type: "ml" as const },
	
		// Programming Languages (For Full Stack Development & AI/ML)
		{ name: "JavaScript", type: "other" as const },
		{ name: "Python", type: "other" as const },
		{ name: "TypeScript", type: "other" as const },

		// Additional Tools & Technologies (MERN Stack & AI/ML)
		{ name: "Redux", type: "react" as const },
		{ name: "Bootstrap", type: "other" as const },
		{ name: "Tailwind CSS", type: "other" as const },
		{ name: "PostgreSQL", type: "other" as const },
		{ name: "GraphQL", type: "other" as const },
		{ name: "Jest", type: "other" as const },
	
		// Web Development Frameworks (MERN & AI/ML Backends)
		{ name: "Flask", type: "other" as const },
		{ name: "Django", type: "other" as const },
	
		// AI/ML Tools & Libraries
		{ name: "Jupyter Notebook", type: "other" as const },
		{ name: "Google Colab", type: "other" as const },
	
		// Cloud Computing & DevOps Tools
		{ name: "Docker", type: "other" as const },
		{ name: "AWS", type: "other" as const },
	
	];
	

	return (
		<section id="about" className="py-16 md:py-24 relative">
			<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,111,97,0.15),transparent_70%)]" />

			<div className="container px-4 mx-auto">
				<div className="max-w-3xl mx-auto text-center mb-16">
					<h2 className="text-3xl md:text-4xl font-bold mb-6 relative">
						<span
							className="inline-block animate-slide-up"
							style={{ animationDelay: "0ms" }}
						>
							About Me
						</span>
						<span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-primary"></span>
					</h2>

					<div
						className="text-lg text-foreground/80 animate-fade-in"
						style={{ animationDelay: "300ms" }}
					>
						I'm a passionate MERN stack developer with expertise in
						AI and machine learning integration. My goal is to build
						intelligent, scalable, and responsive web applications
						that provide exceptional user experiences.
					</div>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 items-center mb-16 max-w-4xl mx-auto">
					<div className="order-2 pl-2.5 md:order-1 space-y-4">
						<div
							className="prose prose-invert max-w-none animate-slide-right"
							style={{ animationDelay: "600ms" }}
						>
							With over 1.5 years of experience in full-stack
							development, I've specialized in building modern web
							applications using the MERN stack (MongoDB, Express,
							React, Node.js).
						</div>

						<div
							className="prose prose-invert max-w-none animate-slide-right"
							style={{ animationDelay: "700ms" }}
						>
							My passion for artificial intelligence and machine
							learning has led me to integrate these technologies
							into web applications, creating intelligent systems
							that solve real-world problems.
						</div>

						<div
							className="prose prose-invert max-w-none animate-slide-right"
							style={{ animationDelay: "800ms" }}
						>
							I take pride in writing clean, maintainable code and
							staying up-to-date with the latest technologies and
							best practices in both web development and AI/ML
							fields.
						</div>

						<div
							className="prose prose-invert max-w-none animate-slide-right"
							style={{ animationDelay: "900ms" }}
						>
							When I'm not coding, you can find me exploring new
							technologies, contributing to open-source projects,
							or sharing my knowledge through blog posts and
							community involvement.
						</div>
					</div>

					<div className="order-1 md:order-2 flex flex-col gap-8">
						<div className="relative ml-auto w-full max-w-sm overflow-hidden">
							<div className="relative group">
								<div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-tech-ai rounded-2xl blur opacity-40 group-hover:opacity-70 transition duration-1000"></div>
								<div className="relative bg-black/30 backdrop-blur-md rounded-xl p-2 border border-white/10">
									<AspectRatio
										ratio={1 / 1}
										className="rounded-lg"
									>
										<img
											src={profileImage}
											alt="A professional headshot of Mohammad Ashmir Abbasi"
											className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
										/>
									</AspectRatio>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="max-w-4xl mx-auto text-center">
					<div className="bg-black/30 backdrop-blur-md rounded-xl p-8 border border-white/10">
						<h3 className="text-xl font-bold mb-6">
							<span
								className="inline-block animate-slide-left"
								style={{ animationDelay: "900ms" }}
							>
								Technical Skills
							</span>
						</h3>

						<div className="flex flex-wrap gap-3 justify-center">
							{skills.map((skill, index) => (
								<div
									key={index}
									className="animate-fade-in"
									style={{
										animationDelay: `${
											1200 + index * 100
										}ms`,
									}}
								>
									<SkillBadge
										name={skill.name}
										type={skill.type}
									/>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
