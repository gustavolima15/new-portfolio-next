import { Calendar, MapPin } from 'lucide-react';

export default function Experiences() {
  const experiences = [
    {
      id: 1,
      position: "Full-stack Developer",
      company: "Tech Solutions Ltd",
      location: "São Paulo, SP",
      period: "Jul 2023 - Dez 2023",
      type: "full-time",
      description: "Desenvolvimento de aplicações web completas utilizando React, Node.js e PostgreSQL. Responsável pela arquitetura e implementação de APIs RESTful e integração com serviços externos.",
      technologies: ["React", "Node.js", "PostgreSQL", "Docker", "AWS"]
    },
    {
      id: 2,
      position: "Full-stack Developer",
      company: "Digital Innovation Hub",
      location: "Remote",
      period: "Jan 2022 - Jun 2023",
      type: "remote",
      description: "Criação de soluções web escaláveis com foco em performance e experiência do usuário. Trabalhei com equipes ágeis no desenvolvimento de plataformas de e-commerce e sistemas de gestão.",
      technologies: ["Vue.js", "Laravel", "MySQL", "Redis", "Kubernetes"]
    },
    {
      id: 3,
      position: "Frontend Developer",
      company: "StartupTech",
      location: "São Paulo, SP",
      period: "Mar 2021 - Dez 2021",
      type: "full-time",
      description: "Desenvolvimento de interfaces responsivas e modernas para aplicações web. Colaboração estreita com designers para implementação de UI/UX de alta qualidade.",
      technologies: ["React", "TypeScript", "Styled Components", "Jest", "Storybook"]
    },
    {
      id: 4,
      position: "Junior Developer",
      company: "WebCorp Solutions",
      location: "Santos, SP",
      period: "Ago 2020 - Feb 2021",
      type: "full-time",
      description: "Início da carreira com foco em desenvolvimento web. Participação em projetos de manutenção e criação de novas funcionalidades para sistemas corporativos.",
      technologies: ["PHP", "JavaScript", "MySQL", "Bootstrap", "jQuery"]
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'remote':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'full-time':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'remote':
        return 'Remoto';
      case 'full-time':
        return 'Presencial';
      default:
        return type;
    }
  };

  return (
    <section id="experiences" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Experiências
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Minha jornada profissional e as experiências que me moldaram como desenvolvedor
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200 dark:bg-blue-800 hidden md:block"></div>

            <div className="space-y-8">
              {experiences.map((experience) => (
                <div key={experience.id} className="relative">
                  {/* Timeline dot */}
                  <div className="absolute left-6 w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-gray-800 hidden md:block"></div>

                  {/* Experience card */}
                  <div className="md:ml-16 bg-white dark:bg-gray-700 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                          {experience.position}
                        </h3>
                        <h4 className="text-lg font-medium text-blue-600 dark:text-blue-400 mb-2">
                          {experience.company}
                        </h4>
                        
                        <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mb-3">
                          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                            <Calendar size={16} />
                            <span className="text-sm">{experience.period}</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                            <MapPin size={16} />
                            <span className="text-sm">{experience.location}</span>
                          </div>
                          <span className={`px-3 py-1 rounded-full text-xs font-medium w-fit ${getTypeColor(experience.type)}`}>
                            {getTypeLabel(experience.type)}
                          </span>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                      {experience.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300 text-sm rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Skills Summary */}
        <div className="mt-16 bg-white dark:bg-gray-700 rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
            Resumo das Competências
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">4+</div>
              <div className="text-gray-600 dark:text-gray-300 font-medium">Anos de Experiência</div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
              <div className="text-gray-600 dark:text-gray-300 font-medium">Tecnologias Dominadas</div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-600 dark:text-gray-300 font-medium">Projetos Concluídos</div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">5+</div>
              <div className="text-gray-600 dark:text-gray-300 font-medium">Empresas Atendidas</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}
