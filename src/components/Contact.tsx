import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, Mail } from "lucide-react";
import { FiGithub, FiLinkedin, FiDownload } from "react-icons/fi";
import { useToast } from "@/hooks/use-toast";
import emailjs from "emailjs-com";

const Contact: React.FC = () => {
	const { toast } = useToast();
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		subject: "",
		message: "",
	});
	const [isSubmitting, setIsSubmitting] = useState(false);

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setIsSubmitting(true);

		// Simulate form submission
		setTimeout(() => {
			setIsSubmitting(false);
			emailjs
				.sendForm(
					"service_xzn1ii8",
					"template_39qy6d5",
					e.target as HTMLFormElement,
					"970JOu3RLHX0W1JSE"
				)
				.then(
					(result) => {
						toast({
							title: "Message sent!",
							description: `Thank you for your message. I'll get back to you as soon as possible. ${result.text}.`,
							duration: 5000,
						});
					},
					(error) => {
						toast({
							title: "Message not sent!",
							description: `Error sending message: ${error.text}.`,
							duration: 5000,
						});
					}
				);

			// Reset form
			setFormData({
				name: "",
				email: "",
				subject: "",
				message: "",
			});
		}, 1500);
	};

	return (
		<section id="contact" className="py-16 md:py-24 relative">
			<div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(97,218,251,0.15),transparent_70%)]" />

			<div className="container px-4 mx-auto">
				<div className="max-w-3xl mx-auto text-center mb-16">
					<h2 className="text-3xl md:text-4xl font-bold mb-6 relative">
						<span className="inline-block animate-slide-up">
							Let's Connect
						</span>
						<span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-primary"></span>
					</h2>

					<div
						className="text-lg text-foreground/80 animate-fade-in"
						style={{ animationDelay: "300ms" }}
					>
						Have a project in mind or want to discuss opportunities?
						I'm just a message away!
					</div>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
					<div
						className="bg-black/30 backdrop-blur-md rounded-xl p-8 border border-white/10 h-full animate-slide-right"
						style={{ animationDelay: "600ms" }}
					>
						<h3 className="text-xl font-bold mb-4">
							Contact Information
						</h3>
						<p className="text-foreground/80 mb-6">
							I’m always open to connecting for collaboration,
							exciting projects, career opportunities, or even
							brainstorming creative ideas. Don’t hesitate to drop
							a message!
						</p>

						<div className="pt-0">
							<div className="mb-6">
								<h4 className="text-sm uppercase tracking-wider mb-3 text-foreground/60">
									Mail To
								</h4>
								<div className="flex items-center ">
									<Mail className="w-5 h-5 mr-3 text-primary" />
									<a
										href="mailto:moashmir7003@gmail.com"
										className="text-foreground/80 hover:text-foreground transition-colors"
										target="_blank"
									>
										moashmir7003@gmail.com
									</a>
								</div>
							</div>

							<div className="mb-6">
								<h4 className="text-sm uppercase tracking-wider mb-3 text-foreground/60">
									Follow Me
								</h4>
								<div className="flex space-x-4">
									<a
										href="https://github.com/MohammadAshmir786/"
										aria-label="Visit my GitHub profile"
										className="text-foreground/60 hover:text-foreground transition-colors"
										target="_blank"
									>
										<FiGithub className="w-5 h-5" />
									</a>
									<a
										href="https://www.linkedin.com/in/mohammad-ashmir-abbasi/"
										aria-label="Visit my LinkedIn profile"
										className="text-foreground/60 hover:text-foreground transition-colors"
										target="_blank"
									>
										<FiLinkedin className="w-5 h-5" />
									</a>
								</div>
							</div>

							<div className="resume">
								<h4 className="text-sm uppercase tracking-wider mb-3 text-foreground/60">
									Resume
								</h4>

								<Button
									className="bg-primary hover:bg-primary/90 text-primary-foreground w-full"
									asChild
								>
									<a
										href="/resume.pdf"
										className="flex items-center text-foreground/60 hover:text-foreground transition-colors"
										download="Mohammad_Ashmir_Abbasi_Resume.pdf"
									>
										<FiDownload className="w-5 h-5 mr-2" />
										Download My Resume
									</a>
								</Button>
							</div>
						</div>
					</div>

					<div
						className="bg-black/30 backdrop-blur-md rounded-xl p-8 border border-white/10 animate-slide-left"
						style={{ animationDelay: "900ms" }}
					>
						<h3 className="text-xl font-bold mb-4">
							Send a Message
						</h3>

						<form onSubmit={handleSubmit} className="space-y-4">
							<div className="grid grid-cols-1 gap-4">
								<div>
									<Input
										name="name"
										value={formData.name}
										onChange={handleChange}
										placeholder="Your Name"
										required
										className="bg-white/5 border-white/10 focus:border-primary"
									/>
								</div>

								<div>
									<Input
										name="email"
										type="email"
										value={formData.email}
										onChange={handleChange}
										placeholder="Your Email"
										required
										className="bg-white/5 border-white/10 focus:border-primary"
									/>
								</div>

								<div>
									<Input
										name="subject"
										value={formData.subject}
										onChange={handleChange}
										placeholder="Subject"
										required
										className="bg-white/5 border-white/10 focus:border-primary"
									/>
								</div>

								<div>
									<Textarea
										name="message"
										value={formData.message}
										onChange={handleChange}
										placeholder="Your Message"
										required
										className="min-h-[120px] bg-white/5 border-white/10 focus:border-primary"
									/>
								</div>
							</div>

							<Button
								type="submit"
								className="w-full bg-primary hover:bg-primary/90"
								disabled={isSubmitting}
							>
								{isSubmitting ? (
									<span className="flex items-center">
										<svg
											className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
										>
											<circle
												className="opacity-25"
												cx="12"
												cy="12"
												r="10"
												stroke="currentColor"
												strokeWidth="4"
											></circle>
											<path
												className="opacity-75"
												fill="currentColor"
												d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
											></path>
										</svg>
										Sending...
									</span>
								) : (
									<span className="flex items-center">
										<Send className="w-4 h-4 mr-2" />
										Send Message
									</span>
								)}
							</Button>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
