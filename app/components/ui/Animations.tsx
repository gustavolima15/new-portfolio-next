'use client';

import { useEffect, useRef, useState, ReactNode } from 'react';

interface AnimateOnScrollProps {
  children: ReactNode;
  animation?: 'fadeInUp' | 'fadeInLeft' | 'fadeInRight' | 'fadeIn' | 'slideInUp' | 'scaleIn';
  delay?: number;
  threshold?: number;
  className?: string;
}

export function AnimateOnScroll({ 
  children, 
  animation = 'fadeInUp', 
  delay = 0,
  threshold = 0.1,
  className = ''
}: AnimateOnScrollProps) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }
      },
      { threshold }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [delay, threshold]);

  const animationClasses = {
    fadeInUp: isVisible 
      ? 'opacity-100 translate-y-0' 
      : 'opacity-0 translate-y-8',
    fadeInLeft: isVisible 
      ? 'opacity-100 translate-x-0' 
      : 'opacity-0 -translate-x-8',
    fadeInRight: isVisible 
      ? 'opacity-100 translate-x-0' 
      : 'opacity-0 translate-x-8',
    fadeIn: isVisible 
      ? 'opacity-100' 
      : 'opacity-0',
    slideInUp: isVisible 
      ? 'opacity-100 translate-y-0' 
      : 'opacity-0 translate-y-16',
    scaleIn: isVisible 
      ? 'opacity-100 scale-100' 
      : 'opacity-0 scale-95'
  };

  return (
    <div
      ref={elementRef}
      className={`transition-all duration-700 ease-out ${animationClasses[animation]} ${className}`}
    >
      {children}
    </div>
  );
}

export function StaggeredAnimation({ 
  children, 
  stagger = 100 
}: { 
  children: ReactNode[];
  stagger?: number;
}) {
  return (
    <>
      {children.map((child, index) => (
        <AnimateOnScroll 
          key={index} 
          delay={index * stagger}
          animation="fadeInUp"
        >
          {child}
        </AnimateOnScroll>
      ))}
    </>
  );
}

export function ParallaxElement({ 
  children, 
  speed = 0.5,
  className = ''
}: {
  children: ReactNode;
  speed?: number;
  className?: string;
}) {
  const [offsetY, setOffsetY] = useState(0);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (elementRef.current) {
        const scrolled = window.pageYOffset;
        const parallax = scrolled * speed;
        setOffsetY(parallax);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return (
    <div
      ref={elementRef}
      className={className}
      style={{
        transform: `translateY(${offsetY}px)`
      }}
    >
      {children}
    </div>
  );
}
