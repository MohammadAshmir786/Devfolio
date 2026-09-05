
import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  color: string;
  opacity: number;
  twinkleSpeed: number;
  twinkleOffset: number;
}

const ParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<Particle[]>([]);
  const animationFrameId = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Function to resize canvas
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };
    
    // Initialize particles
    const initParticles = () => {
      particles.current = [];
      const particleCount = Math.min(Math.floor(window.innerWidth * 0.12), 180);
      
      const colors = ['#ffffff', '#dbeafe', '#bfdbfe', '#e0f2fe', '#c4b5fd'];
      
      for (let i = 0; i < particleCount; i++) {
        particles.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 0.6,
          speedX: (Math.random() - 0.5) * 0.25,
          speedY: (Math.random() - 0.5) * 0.25,
          color: colors[Math.floor(Math.random() * colors.length)],
          opacity: Math.random() * 0.45 + 0.35,
          twinkleSpeed: Math.random() * 2 + 0.5,
          twinkleOffset: Math.random() * Math.PI * 2
        });
      }
    };
    
    // Animate particles
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const time = performance.now() * 0.001;

      const backgroundGradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      backgroundGradient.addColorStop(0, '#020617');
      backgroundGradient.addColorStop(0.55, '#050a1f');
      backgroundGradient.addColorStop(1, '#000000');
      ctx.fillStyle = backgroundGradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles
      particles.current.forEach((particle) => {
        // Update position
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
        // Bounce off walls
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.speedX *= -1;
        }
        
        if (particle.y < 0 || particle.y > canvas.height) {
          particle.speedY *= -1;
        }

        const twinkle = 0.7 + Math.sin(time * particle.twinkleSpeed + particle.twinkleOffset) * 0.3;
        const starSize = particle.size * twinkle;
        const glowRadius = starSize * 5;
        const glowOpacity = particle.opacity * 0.45;

        const glow = ctx.createRadialGradient(
          particle.x,
          particle.y,
          0,
          particle.x,
          particle.y,
          glowRadius
        );
        glow.addColorStop(0, particle.color);
        glow.addColorStop(0.25, particle.color);
        glow.addColorStop(1, 'rgba(255, 255, 255, 0)');

        ctx.globalCompositeOperation = 'lighter';
        ctx.globalAlpha = glowOpacity;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, glowRadius, 0, Math.PI * 2);
        ctx.fillStyle = glow;
        ctx.fill();
        
        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, starSize, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.globalAlpha = particle.opacity;
        ctx.fill();

        ctx.globalAlpha = 1;
        ctx.globalCompositeOperation = 'source-over';
      });
      
      // Connect nearby particles
      connectParticles(ctx);
      
      animationFrameId.current = requestAnimationFrame(animate);
    };
    
    // Connect particles with lines based on distance
    const connectParticles = (ctx: CanvasRenderingContext2D) => {
      const maxDistance = 120;
      
      for (let i = 0; i < particles.current.length; i++) {
        for (let j = i + 1; j < particles.current.length; j++) {
          const dx = particles.current[i].x - particles.current[j].x;
          const dy = particles.current[i].y - particles.current[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < maxDistance) {
            // Opacity based on distance
            const opacity = 0.2 * (1 - distance / maxDistance);
            
            ctx.beginPath();
            ctx.moveTo(particles.current[i].x, particles.current[i].y);
            ctx.lineTo(particles.current[j].x, particles.current[j].y);
            ctx.strokeStyle = `rgba(147, 197, 253, ${opacity})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
    };
    
    // Initialize and start animation
    resizeCanvas();
    animate();
    
    // Handle window resize
    window.addEventListener('resize', resizeCanvas);
    
    // Cleanup on component unmount
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId.current);
    };
  }, []);
  
  return (
    <canvas 
      ref={canvasRef} 
      className="fixed top-0 left-0 w-full h-full -z-10 opacity-75"
    />
  );
};

export default ParticleBackground;
