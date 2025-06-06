import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import logo from "@/assets/images/logo.png";

const Navigation: React.FC = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 10);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const navigationItems = [
		{ title: "Home", href: "#hero" },
		{ title: "About", href: "#about" },
		{ title: "Projects", href: "#projects" },
		{ title: "Experience", href: "#experience" },
		{ title: "Contact", href: "#contact" },
	];

	return (
		<header
			className={cn(
				"fixed top-0 left-0 right-0 z-50 transition-all duration-300",
				scrolled ? "py-2 bg-background/80 backdrop-blur-md" : "py-4",
				"border-b border-white/10"
			)}
		>
			<div className="container flex items-center justify-between">
				<a
					href="#hero"
					className="text-xl font-bold text-foreground flex align-middle"
				>
					<span className="inline-block">
						<img src={logo} alt="logo" width="30" height="24" />
					</span>
					<span className="animate-slide-up bg-clip-text bg-gradient-to-r from-primary inline-block text-transparent to-tech-ai">
						SHMIR
					</span>
				</a>

				{/* Desktop Navigation */}
				<nav className="hidden md:flex space-x-8">
					{navigationItems.map((item) => (
						<a
							key={item.title}
							href={item.href}
							className="link-hover text-foreground/80 hover:text-foreground transition-colors"
						>
							{item.title}
						</a>
					))}
				</nav>

				{/* Mobile Menu Button */}
				<button
					className="md:hidden text-foreground p-2"
					onClick={() => setIsOpen(!isOpen)}
					aria-label={isOpen ? "Close menu" : "Open menu"}
				>
					{isOpen ? <X size={24} /> : <Menu size={24} />}
				</button>
			</div>

			{/* Mobile Navigation */}
			{isOpen && (
				<div className="md:hidden absolute top-full left-0 w-full bg-background/95 backdrop-blur-md border-b border-white/10">
					<nav className="container py-4 flex flex-col space-y-4">
						{navigationItems.map((item) => (
							<a
								key={item.title}
								href={item.href}
								className="text-foreground/80 hover:text-foreground transition-colors px-4 py-2"
								onClick={() => setIsOpen(false)}
							>
								{item.title}
							</a>
						))}
					</nav>
				</div>
			)}
		</header>
	);
};

export default Navigation;
