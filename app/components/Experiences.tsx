import { Calendar, MapPin } from 'lucide-react';

export default function Experiences() {
  const experiences = [
    {
      id: 1,
      position: "Desenvolvedor Full Stack",
      company: "Seção Judiciária da Bahia (SJBA)",
      location: "Salvador, BA",
      period: "Ago 2024 - Jul 2025",
      type: "full-time",
      description: "Desenvolvimento de aplicações utilizando Node.js, Express, Puppeteer, Jest, Vue.js com foco em arquitetura em camadas e boas práticas de codificação.",
      technologies: ["HTML5", "CSS3", "JavaScript", "TypeScript", "Vue.js", "Node.js", "Express", "Docker", "Git", "Gitlab", "Jest", "Puppeteer"]
    },
    {
      id: 2,
      position: "Desenvolvedor JavaScript",
      company: "Tech Girls",
      location: "Remoto",
      period: "Fev 2024 - Jul 2024",
      type: "remote",
      description: "Desenvolvedor na plataforma educacional da Tech Girls, implementando uma funcionalidade de registro de presença de alunos em um ambiente WordPress.",
      technologies: ["HTML5", "CSS3", "JavaScript", "WordPress", "Figma"]
    },
    {
      id: 3,
      position: "Residente Mobile",
      company: "CEPEDI",
      location: "Salvador, BA",
      period: "Jul 2024 - Dez 2024",
      type: "internship",
      description: "Participação como Residente na trilha de Desenvolvimento Mobile (Node + React Native) do Programa de Capacitação Residência em TIC 36 - Empreendedorismo + Bahia + Tecnologia",
      technologies: ["HTML5", "CSS3", "JavaScript", "React Native", "Node.js", "Express", "Git"]
    },
    {
      id: 4,
      position: "Desenvolvedor Full Stack - Empresa Júnior (UFBA)",
      company: "TITAN JR",
      location: "Remoto",
      period: "Mar 2024 - Jul 2024",
      type: "internship",
      description: "Participação como membro da equipe de desenvolvimento da TITAN JR, atuando em projetos de desenvolvimento web utilizando tecnologias modernas.",
      technologies: ["HTML5", "CSS3", "JavaScript", "TypeScript", "Figma", "Github", "Git", "Node.js", "Express", "Jest", "ORMPrisma"]
    },
    {
      id: 5,
      position: "Desenvolvedor Full Stack",
      company: "Freelancer",
      location: "Remoto",
      period: "Jul 2023 - Jan 2024",
      type: "freelance",
      description: "Desenvolvimento de aplicações web e mobile para clientes diversos, utilizando tecnologias como React, Node.js e Express.",
      technologies: ["HTML5", "CSS3", "JavaScript", "React Native", "React", "Angular", "Node.js", "Express", "Nest.js", "Java", "Spring Boot", "Git"]
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'remote':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'full-time':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'freelance':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200';
      case 'internship':
        return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200';
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
      case 'freelance':
        return 'Freelancer';
      case 'internship':
        return 'Estágio';
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
              <div className="text-3xl font-bold text-blue-600 mb-2">2+</div>
              <div className="text-gray-600 dark:text-gray-300 font-medium">Anos de Experiência</div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">10+</div>
              <div className="text-gray-600 dark:text-gray-300 font-medium">Tecnologias Dominadas</div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
              <div className="text-gray-600 dark:text-gray-300 font-medium">Projetos Concluídos</div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">4+</div>
              <div className="text-gray-600 dark:text-gray-300 font-medium">Empresas Atendidas</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <a
            href="/Curriculo_Gustavo_Lima.pdf"
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
