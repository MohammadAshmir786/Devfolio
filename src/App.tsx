import { useCallback, useState, useEffect } from "react";
import IntroScreen from "@/components/IntroScreen.tsx";
import  scrollSoundSrc from "/scroll.mp3";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AllProjects from "./pages/AllProjects";

const queryClient = new QueryClient();

const App = () => {
  const [showIntro, setShowIntro] = useState(true);
  const [isAppVisible, setIsAppVisible] = useState(false);

  const handleIntroComplete = useCallback(() => {
    setShowIntro(false);
    window.requestAnimationFrame(() => {
      setIsAppVisible(true);
    });
  }, []);

  // useEffect(() => {
  //   const scrollSound = new Audio(scrollSoundSrc);

  //   const onScroll = () => {
  //     scrollSound.currentTime = 0;
  //     scrollSound.play().catch(() => {});
  //   };

  //   window.addEventListener("scroll", onScroll);
  //   return () => window.removeEventListener("scroll", onScroll);
  // }, []);

  if (showIntro) {
    return <IntroScreen onComplete={handleIntroComplete} />;
  }

  return (
    <div
      className={`min-h-screen transition-opacity duration-700 ease-out ${
        isAppVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter basename="/Devfolio/">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/projects" element={<AllProjects />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </div>
  );
};

export default App;
