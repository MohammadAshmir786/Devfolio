import React from "react";
import { CalendarIcon, Building2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface ExperienceItemProps {
	title: string;
	company: string;
	period: string;
	description: string;
	skills: string[];
	index: number;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({
	title,
	company,
	period,
	description,
	skills,
	index,
}) => {
	return (
		<div
			className="relative pl-8 pb-12 group animate-slide-left"
			style={{ animationDelay: `${300 * index}ms` }}
		>
			<div className="absolute top-0 left-0 w-0.5 h-full bg-primary/20 group-last:bg-gradient-to-b group-last:from-primary/20 group-last:to-transparent"></div>

			<div className="absolute top-0 left-0 transform -translate-x-1/2 w-6 h-6 rounded-full border-2 border-primary bg-background"></div>

			<div className="bg-black/30 backdrop-blur-md p-6 rounded-lg border border-white/10 hover:border-primary/50 transition-colors">
				<div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
					<h3 className="text-xl font-bold">{title}</h3>
					<div className="flex items-center text-sm text-foreground/60">
						<CalendarIcon className="w-4 h-4 mr-1" />
						<span>{period}</span>
					</div>
				</div>

				<div className="flex items-center mb-4 text-foreground/80">
					<Building2 className="w-4 h-4 mr-2 text-primary" />
					<span className="font-medium">{company}</span>
				</div>

				<p className="mb-4 text-foreground/80">{description}</p>

				<div className="flex flex-wrap gap-2">
					{skills.map((skill, idx) => (
						<span
							key={idx}
							className="px-2 py-1 text-xs rounded-full bg-white/10 text-foreground/80"
						>
							{skill}
						</span>
					))}
				</div>
			</div>
		</div>
	);
};

const Experience: React.FC = () => {
	const experiences = [
		{
			title: "AI/ML Intern",
			company: "UnizzTech",
			period: "10/2024 - 11/2024",
			description:
				"Worked closely with a skilled team and participated in projects to gain hands-on experience in advanced AI and ML technologies, contributing to innovative projects and enhancing technical expertise by 25%.",
			skills: [
				"Python",
				"Machine Learning",
				"Artificial Intelligence",
				"Team Collaboration",
			],
		},
		{
			title: "Web Development Intern",
			company: "Tech Alpha",
			period: "04/2024 - 05/2024",
			description:
				"Implemented a secure password generator using advanced cryptographic algorithms, a jQuery-based task management system with real-time updates, and an intuitive age calculator in modern JavaScript.",
			skills: [
				"JavaScript",
				"jQuery",
				"AJAX",
				"HTML5",
				"CSS3",
				"Cryptography",
			],
		},
    {
      title: "Mathematics Instructor",
      company: "SGM Kids College & Play School",
      period: "06/2022 - 08/2022",
      description:
        "Taught mathematics with real-world examples to boost engagement, collaborated with colleagues on effective teaching strategies, maintained communication with students and parents, and prepared students for competitions while developing valuable study habits for their further education.",
      skills: [
        "Teaching",
        "Communication",
        "Curriculum Development",
        "Student Engagement",
        "Educational Strategy",
      ],
    },
		{
			title: "Full Stack Web Developer",
			company: "CodersHub InfoTech",
			period: "10/2021 - 04/2022",
			description:
				"Designed responsive web applications using JavaScript, Bootstrap 5, and PHP. Implemented user authentication and optimized performance to achieve 25% faster load times.",
			skills: [
				"JavaScript",
				"Bootstrap 5",
				"PHP",
				"Responsive Design",
				"Authentication",
				"Performance Optimization",
			],
		},
	];

	return (
		<section id="experience" className="py-16 md:py-24 relative">
			<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(77,179,61,0.1),transparent_70%)]" />

			<div className="container px-4 mx-auto">
				<div className="max-w-3xl mx-auto text-center mb-16">
					<h2 className="text-3xl md:text-4xl font-bold mb-6 relative">
						<span className="inline-block animate-slide-up">
							Professional Experience
						</span>
						<span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-primary"></span>
					</h2>

					<div
						className="text-lg text-foreground/80 animate-fade-in"
						style={{ animationDelay: "300ms" }}
					>
						My professional journey in web development and AI/ML
						integration.
					</div>
				</div>

				<div className="max-w-3xl mx-auto">
					{experiences.map((exp, index) => (
						<ExperienceItem key={index} {...exp} index={index} />
					))}
				</div>
			</div>
		</section>
	);
};

export default Experience;
