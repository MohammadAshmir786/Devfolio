import React from "react";
import { Mail } from "lucide-react";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import logo from "@/assets/images/logo.png";

const Footer: React.FC = () => {
	return (
		<footer className="bg-black/50 backdrop-blur-sm border-t border-white/10 py-8">
			<div className="container px-4">
				<div className="flex flex-col md:flex-row justify-between items-center gap-6">
					<div className="text-center md:text-left">
						<h3 className="text-xl font-bold mb-2 flex align-middle">
							<span className="inline-block">
								<img
									src={logo}
									alt="logo"
									width="30"
									height="24"
								/>
							</span>
							<span className="animate-slide-up bg-clip-text bg-gradient-to-r from-primary inline-block text-transparent to-tech-ai">
								SHMIR
							</span>
						</h3>
						<p className="text-sm text-muted-foreground">
							MERN Stack & AI/ML Developer Portfolio
						</p>
					</div>

					<div className="flex space-x-4">
						<a
							href="https://github.com/MohammadAshmir786"
							className="text-foreground/60 hover:text-foreground transition-colors"
							target="_blank"
							aria-label="GitHub"
						>
							<FiGithub className="w-5 h-5" />
						</a>
						<a
							href="https://linkedin.com/in/mohammad-ashmir-abbasi/"
							className="text-foreground/60 hover:text-foreground transition-colors"
							target="_blank"
							aria-label="LinkedIn"
						>
							<FiLinkedin className="w-5 h-5" />
						</a>
						<a
							href="mailto:moashmir7003@gmail.com"
							className="text-foreground/60 hover:text-foreground transition-colors"
							target="_blank"
							aria-label="Email"
						>
							<Mail className="w-5 h-5" />
						</a>
					</div>
				</div>

				<div className="border-t border-white/10 mt-6 pt-6 text-center">
					<p className="text-sm text-muted-foreground">
						© {new Date().getFullYear()} Mohammad Ashmir Abbasi. All
						rights reserved.
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
