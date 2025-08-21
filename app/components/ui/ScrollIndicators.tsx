'use client';

import { useEffect, useState } from 'react';
import { ChevronUp } from 'lucide-react';
import { FloatingActionButton } from './Button';

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setProgress(scrollPercent);
    };

    window.addEventListener('scroll', updateProgress);
    return () => window.removeEventListener('scroll', updateProgress);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 dark:bg-gray-700 z-50">
      <div
        className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-150 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!isVisible) {
    return null;
  }

  return (
    <FloatingActionButton
      onClick={scrollToTop}
      ariaLabel="Voltar ao topo"
      className="animate-bounce bottom-40" // Ajustado para não sobrepor o theme toggle
    >
      <ChevronUp size={24} />
    </FloatingActionButton>
  );
}

export function SectionIndicator() {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const sections = ['home', 'about', 'technologies', 'projects', 'experiences'];
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  const sections = [
    { id: 'home', label: 'Início' },
    { id: 'about', label: 'Sobre' },
    { id: 'technologies', label: 'Tech' },
    { id: 'projects', label: 'Projetos' },
    { id: 'experiences', label: 'Exp' }
  ];

  return (
    <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
      <div className="flex flex-col space-y-3">
        {sections.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className={`group relative flex items-center justify-center w-3 h-3 rounded-full transition-all duration-300 ${
              activeSection === section.id
                ? 'bg-blue-600 scale-125'
                : 'bg-gray-300 dark:bg-gray-600 hover:bg-blue-400'
            }`}
            aria-label={`Ir para ${section.label}`}
          >
            <span className="absolute right-6 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
              {section.label}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
