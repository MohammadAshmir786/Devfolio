import React, { useEffect, useMemo, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import logo from "@/assets/images/logo.png";

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const navigationItems = useMemo(
    () => [
      { title: "Home", href: "#hero" },
      { title: "About", href: "#about" },
      { title: "Projects", href: "#projects" },
      { title: "Experience", href: "#experience" },
      { title: "Contact", href: "#contact" },
    ],
    [],
  );

  useEffect(() => {
    const sectionElements = navigationItems
      .map((item) => document.querySelector(item.href))
      .filter((section): section is Element => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: "-35% 0px -55% 0px",
        threshold: 0,
      },
    );

    sectionElements.forEach((section) => observer.observe(section));

    return () => {
      sectionElements.forEach((section) => observer.unobserve(section));
      observer.disconnect();
    };
  }, [navigationItems]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 border-b border-white/10 transition-all duration-300",
        "py-2 bg-background/50 backdrop-blur-sm",
      )}
    >
      <div className="container flex items-center justify-between">
        <a
          href="#hero"
          className="text-xl font-bold text-foreground flex items-center"
        >
          <span className="inline-block">
            <img src={logo} alt="logo" width="30" height="24" />
          </span>
          <span className="animate-slide-up bg-clip-text bg-gradient-to-r from-primary inline-block text-transparent to-tech-ai">
            SHMIR
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-2 rounded-full border border-white/15 bg-black/30 px-2 py-1 backdrop-blur-md">
          {navigationItems.map((item) => (
            <a
              key={item.title}
              href={item.href}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                activeSection === item.href.slice(1)
                  ? "bg-primary text-primary-foreground"
                  : "text-foreground/75 hover:text-foreground",
              )}
              aria-current={
                activeSection === item.href.slice(1) ? "page" : undefined
              }
            >
              {item.title}
            </a>
          ))}
        </nav>

        <button
          className="md:hidden rounded-full border border-white/20 bg-black/30 p-2 text-foreground transition-colors hover:bg-black/50"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <div
        id="mobile-navigation"
        className={cn(
          "md:hidden absolute top-full left-0 w-full overflow-hidden border-b border-white/10 bg-background/95 backdrop-blur-lg transition-all duration-300",
          isOpen
            ? "max-h-96 opacity-100"
            : "max-h-0 opacity-0 pointer-events-none",
        )}
      >
        <nav className="container flex flex-col gap-2 py-4">
          {navigationItems.map((item) => (
            <a
              key={item.title}
              href={item.href}
              className={cn(
                "rounded-lg px-4 py-2 text-sm font-medium transition-colors",
                activeSection === item.href.slice(1)
                  ? "bg-primary text-primary-foreground"
                  : "text-foreground/80 hover:bg-white/5 hover:text-foreground",
              )}
              onClick={() => setIsOpen(false)}
              aria-current={
                activeSection === item.href.slice(1) ? "page" : undefined
              }
            >
              {item.title}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navigation;
