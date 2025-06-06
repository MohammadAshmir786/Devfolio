import React, { useEffect, useRef } from "react";
import { ChevronDown, Database, Server, Brain, Code2, GitMerge} from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero: React.FC = () => {
	const iconContainerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (!iconContainerRef.current) return;

		// Animation for floating icons
		const icons = iconContainerRef.current.querySelectorAll(".tech-icon");

		icons.forEach((icon, index) => {
			// Set initial position
			const delay = index * 0.3;
			const element = icon as HTMLElement;

			element.style.animationDelay = `${delay}s`;
		});
	}, []);

	return (
		<section
			id="hero"
			className="min-h-screen flex items-center relative pt-16"
		>
			<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.15),transparent_60%)]" />

			<div className="container px-4 py-16 md:py-24 mx-auto">
				<div className="flex flex-col items-center text-center relative z-10">
					<div className="mb-6 relative inline-block">
						<div
							ref={iconContainerRef}
							className="absolute -inset-10 md:-inset-20"
						>
							<Database className="tech-icon absolute top-full left-0 text-tech-mongodb animate-float opacity-80" />
							<Server className="tech-icon absolute top-1/4 right-0 text-tech-ml animate-float opacity-80" />
							<Brain className="tech-icon absolute bottom-1/4 right-1/4 text-tech-ai animate-float opacity-80" />
							<Code2 className="tech-icon absolute bottom-full left-1/2 text-tech-node animate-float opacity-80" />
							<GitMerge className="tech-icon absolute top-1/4 left-0 text-tech-git animate-float opacity-80" />
							
						</div>

						<span className="text-sm md:text-base uppercase tracking-wider text-foreground/80">
							MERN Stack & AI/ML Developer
						</span>
					</div>

					<h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
						<span
							className="inline-block animate-slide-down"
							style={{ animationDelay: "300ms" }}
						>
							Mohammad
						</span>{" "}
						<span
							className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-primary to-tech-ai animate-slide-up"
							style={{ animationDelay: "600ms" }}
						>
							Ashmir
						</span>{" "}
						<span
							className="inline-block animate-slide-down"
							style={{ animationDelay: "900ms" }}
						>
							Abbasi
						</span>
					</h1>

					<div
						className="max-w-2xl text-lg md:text-xl text-foreground/80 mb-10 animate-fade-in"
						style={{ animationDelay: "1200ms" }}
					>
						I'm a full-stack developer specializing in MERN stack
						development and AI/ML integration, creating intelligent
						and responsive web applications.
					</div>

					<div className="flex flex-col sm:flex-row gap-4">
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
					</div>
				</div>
			</div>

			<a
				href="#about"
				className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-foreground/60 hover:text-foreground transition-colors animate-bounce"
				aria-label="Scroll down"
			>
				<ChevronDown size={32} />
			</a>
		</section>
	);
};

export default Hero;
