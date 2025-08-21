'use client';

import { ExternalLink, Github, Star } from 'lucide-react';
import { ImageWithFallback } from './ui/Loading';
import { Button } from './ui/Button';
import { AnimateOnScroll } from './ui/Animations';
import { useState } from 'react';

export default function Projects() {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "Balandro Mobile",
      description: "Aplicativo mobile desenvolvido para facilitar o gerenciamento e controle de embarcações. Interface moderna e intuitiva com funcionalidades completas.",
      image: "/project-balandro.jpg",
      technologies: ["React Native", "TypeScript", "Firebase"],
      liveUrl: "https://balandro-app.com",
      githubUrl: "https://github.com/gustavo-lima/balandro-mobile",
      featured: true,
      category: "mobile",
      stars: 45
    },
    {
      id: 2,
      title: "DATEN",
      description: "Sistema de análise de dados e dashboard interativo. Processamento de grandes volumes de dados com visualizações em tempo real.",
      image: "/project-daten.jpg",
      technologies: ["Next.js", "Python", "PostgreSQL", "Chart.js"],
      liveUrl: "https://daten-analytics.com",
      githubUrl: "https://github.com/gustavo-lima/daten",
      featured: true,
      category: "web",
      stars: 67
    },
    {
      id: 3,
      title: "Amara NEO",
      description: "Plataforma de e-commerce moderna com foco em performance e experiência do usuário. Sistema completo de gestão de produtos e vendas.",
      image: "/project-amara.jpg",
      technologies: ["Vue.js", "Laravel", "MySQL", "Tailwind CSS"],
      liveUrl: "https://amara-neo.com",
      githubUrl: "https://github.com/gustavo-lima/amara-neo",
      featured: true,
      category: "web",
      stars: 89
    },
    {
      id: 4,
      title: "Portfolio Dashboard",
      description: "Dashboard administrativo para gerenciamento de portfólio pessoal com métricas de performance e analytics.",
      image: "/project-dashboard.jpg",
      technologies: ["React", "Node.js", "MongoDB"],
      liveUrl: "https://portfolio-dashboard.com",
      githubUrl: "https://github.com/gustavo-lima/portfolio-dashboard",
      featured: false,
      category: "web",
      stars: 23
    },
    {
      id: 5,
      title: "API Gateway",
      description: "Sistema de gateway de APIs com autenticação, rate limiting e monitoramento em tempo real.",
      image: "/project-api.jpg",
      technologies: [".NET", "Redis", "Docker"],
      liveUrl: "https://api-gateway.com",
      githubUrl: "https://github.com/gustavo-lima/api-gateway",
      featured: false,
      category: "backend",
      stars: 34
    },
    {
      id: 6,
      title: "Chat Application",
      description: "Aplicação de chat em tempo real com suporte a múltiplas salas e compartilhamento de arquivos.",
      image: "/project-chat.jpg",
      technologies: ["Socket.io", "Express", "React"],
      liveUrl: "https://chat-app.com",
      githubUrl: "https://github.com/gustavo-lima/chat-app",
      featured: false,
      category: "web",
      stars: 56
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const filteredProjects = filter === 'all' 
    ? projects.filter(project => !project.featured)
    : projects.filter(project => !project.featured && project.category === filter);

  const categories = [
    { id: 'all', label: 'Todos' },
    { id: 'web', label: 'Web' },
    { id: 'mobile', label: 'Mobile' },
    { id: 'backend', label: 'Backend' }
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll animation="fadeInUp">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Projetos
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Alguns dos meus projetos mais recentes e relevantes
            </p>
          </div>
        </AnimateOnScroll>

        {/* Projetos em Destaque */}
        <div className="mb-16">
          <AnimateOnScroll animation="fadeInUp" delay={200}>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 text-center">
              Projetos em Destaque
            </h3>
          </AnimateOnScroll>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <AnimateOnScroll key={project.id} animation="fadeInUp" delay={300 + index * 100}>
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
                  <div className="relative h-48 overflow-hidden">
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full group-hover:scale-110 transition-transform duration-300"
                      fill
                    />
                    <div className="absolute top-4 right-4 bg-black/70 text-white px-2 py-1 rounded-full text-xs flex items-center gap-1">
                      <Star size={12} />
                      {project.stars}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                      {project.title}
                    </h4>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full hover:scale-105 transition-transform duration-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex gap-3">
                      <Button
                        href={project.liveUrl}
                        variant="primary"
                        size="sm"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1"
                      >
                        <ExternalLink size={16} />
                        Ver projeto
                      </Button>
                      <Button
                        href={project.githubUrl}
                        variant="outline"
                        size="sm"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1"
                      >
                        <Github size={16} />
                        Código
                      </Button>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>

        {/* Filtros */}
        <AnimateOnScroll animation="fadeInUp">
          <div className="flex justify-center mb-8">
            <div className="bg-gray-100 dark:bg-gray-800 rounded-full p-1 flex gap-1">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setFilter(category.id)}
                  className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                    filter === category.id
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>
        </AnimateOnScroll>

        {/* Outros Projetos */}
        <div>
          <AnimateOnScroll animation="fadeInUp">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 text-center">
              Outros Projetos
            </h3>
          </AnimateOnScroll>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <AnimateOnScroll key={project.id} animation="fadeInUp" delay={index * 100}>
                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                      {project.title}
                    </h4>
                    <div className="flex items-center gap-1 text-gray-500 text-xs">
                      <Star size={12} />
                      {project.stars}
                    </div>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded hover:scale-105 transition-transform duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    <Button
                      href={project.liveUrl}
                      variant="ghost"
                      size="sm"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={14} />
                      Demo
                    </Button>
                    <Button
                      href={project.githubUrl}
                      variant="ghost"
                      size="sm"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={14} />
                      Code
                    </Button>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <AnimateOnScroll animation="fadeInUp" delay={400}>
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-purple-600/90"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4">Interessado em trabalhar comigo?</h3>
                <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                  Estou sempre aberto a novos desafios e oportunidades de colaboração. 
                  Vamos conversar sobre como posso ajudar no seu próximo projeto!
                </p>
                <Button
                  href="#contact"
                  variant="secondary"
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-gray-100"
                >
                  Entrar em Contato
                </Button>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
