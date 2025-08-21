import { AnimateOnScroll } from './ui/Animations';
import { GraduationCap, Globe, Calendar, MapPin } from 'lucide-react';

export default function Education() {
  const education = [
    {
      degree: "Pós-Graduação - Especialização em Engenharia de Software",
      institution: "Universidade Federal da Bahia (UFBA)",
      period: "2025",
      status: "Concluído",
      type: "Especialização",
      icon: GraduationCap,
      color: "text-purple-600",
      bgColor: "bg-purple-100 dark:bg-purple-900/20"
    },
    {
      degree: "Bacharel em Sistemas de Informação",
      institution: "Universidade Federal da Bahia (UFBA)",
      period: "2027",
      status: "Em andamento",
      type: "Graduação",
      icon: GraduationCap,
      color: "text-purple-600",
      bgColor: "bg-purple-100 dark:bg-purple-900/20"
    },
    {
      degree: "Bacharel em Ciência e Tecnologia",
      institution: "Universidade Federal da Bahia (UFBA)",
      period: "2023",
      status: "Concluído",
      type: "Graduação",
      icon: GraduationCap,
      color: "text-blue-600",
      bgColor: "bg-blue-100 dark:bg-blue-900/20"
    }
  ];

  const languages = [
    {
      language: "Português",
      level: "Nativo",
      flag: "🇧🇷",
      color: "text-green-600"
    },
    {
      language: "Inglês",
      level: "Intermediário",
      flag: "🇺🇸",
      color: "text-blue-600"
    },
    {
      language: "Espanhol",
      level: "Intermediário",
      flag: "🇪🇸",
      color: "text-blue-600"
    }
  ];

  return (
    <section id="education" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll animation="fadeInUp">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Formação & Idiomas
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Minha trajetória acadêmica e competências linguísticas
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Formação Acadêmica */}
          <div className="lg:col-span-2">
            <AnimateOnScroll animation="fadeInLeft">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 flex items-center">
                <GraduationCap className="text-blue-600 mr-3" size={28} />
                Formação Acadêmica
              </h3>
            </AnimateOnScroll>

            <div className="space-y-6">
              {education.map((edu, index) => {
                const IconComponent = edu.icon;
                return (
                  <AnimateOnScroll key={index} animation="fadeInUp" delay={200 + index * 100}>
                    <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 hover:shadow-lg transition-all duration-300 border-l-4 border-blue-600">
                      <div className="flex items-start space-x-4">
                        <div className={`${edu.bgColor} p-3 rounded-full flex-shrink-0`}>
                          <IconComponent className={edu.color} size={24} />
                        </div>
                        
                        <div className="flex-1">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                            <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                              {edu.degree}
                            </h4>
                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium mt-2 sm:mt-0 ${
                              edu.status === 'Concluído' 
                                ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400' 
                                : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400'
                            }`}>
                              {edu.status}
                            </span>
                          </div>
                          
                          <div className="flex items-center text-gray-600 dark:text-gray-300 mb-2">
                            <MapPin size={16} className="mr-2" />
                            <span className="font-medium">{edu.institution}</span>
                          </div>
                          
                          <div className="flex items-center text-gray-500 dark:text-gray-400">
                            <Calendar size={16} className="mr-2" />
                            <span>{edu.period}</span>
                            <span className="mx-2">•</span>
                            <span className="text-sm">{edu.type}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </AnimateOnScroll>
                );
              })}
            </div>
          </div>

          {/* Idiomas */}
          <div>
            <AnimateOnScroll animation="fadeInRight">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 flex items-center">
                <Globe className="text-blue-600 mr-3" size={28} />
                Idiomas
              </h3>
            </AnimateOnScroll>

            <div className="space-y-4">
              {languages.map((lang, index) => (
                <AnimateOnScroll key={index} animation="fadeInUp" delay={400 + index * 100}>
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 hover:shadow-lg transition-all duration-300 group">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl group-hover:scale-110 transition-transform duration-300">
                          {lang.flag}
                        </span>
                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-white">
                            {lang.language}
                          </h4>
                          <p className={`text-sm font-medium ${lang.color}`}>
                            {lang.level}
                          </p>
                        </div>
                      </div>
                      
                      <div className="text-right">
                        <div className="flex space-x-1">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <div
                              key={star}
                              className={`w-2 h-2 rounded-full ${
                                (lang.level === 'Nativo' && star <= 5) ||
                                (lang.level === 'Intermediário' && star <= 3)
                                  ? 'bg-blue-500'
                                  : 'bg-gray-300 dark:bg-gray-600'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>

            {/* Certificações futuras */}
            <AnimateOnScroll animation="fadeInUp" delay={700}>
              <div className="mt-8 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-xl p-6">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                  🎯 Próximos Objetivos
                </h4>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    Certificações em Cloud Computing
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    Inglês Avançado/Fluente
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    Especialização em DevOps
                  </li>
                </ul>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
