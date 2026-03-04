
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedTextProps {
  text: string;
  className?: string;
  once?: string;
  delay?: number;
  animation?: 'fade' | 'slide-up' | 'slide-down' | 'slide-left' | 'slide-right';
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ 
  text, 
  className = '', 
  once = "true", 
  delay = 0,
  animation = 'fade'
}) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const animatedRef = useRef(false);
  
  const getAnimationClass = () => {
    switch (animation) {
      case 'slide-up': return 'animate-slide-up';
      case 'slide-down': return 'animate-slide-down';
      case 'slide-left': return 'animate-slide-left';
      case 'slide-right': return 'animate-slide-right';
      default: return 'animate-fade-in';
    }
  };
  
  useEffect(() => {
    if (!elementRef.current) return;
    
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting && (!once || !animatedRef.current)) {
          setTimeout(() => {
            if (elementRef.current) {
              elementRef.current.classList.add(getAnimationClass());
              elementRef.current.style.opacity = '1';
              animatedRef.current = true;
            }
          }, delay);
        } else if (!entry.isIntersecting && !once) {
          if (elementRef.current) {
            elementRef.current.classList.remove(getAnimationClass());
            elementRef.current.style.opacity = '0';
            animatedRef.current = false;
          }
        }
      });
    }, {
      threshold: 0.2
    });
    
    observer.observe(elementRef.current);
    
    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [once, delay, animation]);
  
  return (
    <div 
      ref={elementRef} 
      className={cn(className, 'opacity-0')}
      style={{ animationDelay: `${delay}ms` }}
    >
      {text}
    </div>
  );
};

export default AnimatedText;
