import { 
  SiHtml5, 
  SiCss3, 
  SiJavascript, 
  SiTypescript, 
  SiPython, 
  SiMysql, 
  SiPostgresql, 
  SiGit, 
  SiFigma, 
  SiDocker,
  SiVuedotjs,
  SiReact,
  SiAngular,
  SiNestjs,
  SiNextdotjs,
  SiTailwindcss,
  SiExpress,
  SiNodedotjs,
  SiSpringboot,
  SiExpo
} from 'react-icons/si';
import { TbBrandReactNative } from 'react-icons/tb';
import { GiProcessor } from 'react-icons/gi';
import { FaJava, FaGithub } from 'react-icons/fa';

export default function Technologies() {
  const technologies = [
    { name: 'HTML5', icon: SiHtml5, color: 'text-orange-500' },
    { name: 'CSS3', icon: SiCss3, color: 'text-blue-500' },
    { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-500' },
    { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-600' },
    { name: 'Java', icon: FaJava, color: 'text-red-500' },
    { name: 'Python', icon: SiPython, color: 'text-green-500' },
    { name: 'MySQL', icon: SiMysql, color: 'text-orange-600' },
    { name: 'PostgreSQL', icon: SiPostgresql, color: 'text-blue-700' },
    { name: 'Git', icon: SiGit, color: 'text-red-500' },
    { name: 'GitHub', icon: FaGithub, color: 'text-gray-800 dark:text-gray-300' },
    { name: 'Figma', icon: SiFigma, color: 'text-purple-600' },
    { name: 'Docker', icon: SiDocker, color: 'text-blue-600' },
  ];

  const frameworks = [
    { name: 'Vue.js', icon: SiVuedotjs, color: 'text-green-500' },
    { name: 'React', icon: SiReact, color: 'text-cyan-500' },
    { name: 'Angular', icon: SiAngular, color: 'text-red-600' },
    { name: 'Nest.js', icon: SiNestjs, color: 'text-red-500' },
    { name: 'Next.js', icon: SiNextdotjs, color: 'text-black dark:text-white' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-cyan-400' },
    { name: 'Express', icon: SiExpress, color: 'text-gray-600' },
    { name: 'Node.js', icon: SiNodedotjs, color: 'text-green-500' },
    { name: 'Spring Boot', icon: SiSpringboot, color: 'text-green-600' },
    { name: 'React Native', icon: TbBrandReactNative, color: 'text-blue-500' },
    { name: 'Expo', icon: SiExpo, color: 'text-purple-500' },
    { name: 'ESP32', icon: GiProcessor, color: 'text-gray-600' },
  ];

  return (
    <section id="technologies" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Tecnologias
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Ferramentas e tecnologias que utilizo para criar soluções incríveis
          </p>
        </div>

        <div className="space-y-12">
          {/* Linguagens e Tecnologias Base */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 text-center">
              Linguagens & Tecnologias
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {technologies.map((tech) => (
                <div
                  key={tech.name}
                  className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-2 group"
                >
                  <div className="text-center">
                    <div className={`flex items-center justify-center h-16 mb-3 ${tech.color} group-hover:scale-110 transition-transform duration-300`}>
                      <tech.icon size={48} />
                    </div>
                    <h4 className="font-semibold text-gray-900 dark:text-white text-sm">
                      {tech.name}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Frameworks */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 text-center">
              Frameworks & Bibliotecas
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {frameworks.map((framework) => (
                <div
                  key={framework.name}
                  className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-2 group"
                >
                  <div className="text-center">
                    <div className={`flex items-center justify-center h-16 mb-3 ${framework.color} group-hover:scale-110 transition-transform duration-300`}>
                      <framework.icon size={48} />
                    </div>
                    <h4 className="font-semibold text-gray-900 dark:text-white text-sm">
                      {framework.name}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Seção de especialidades */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-md">
              <div className="text-3xl mb-4">🌐</div>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Frontend Development
              </h4>
              <p className="text-gray-600 dark:text-gray-300">
                Desenvolvimento de interfaces modernas e responsivas com Angular, Vue.js e React
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-md">
              <div className="text-3xl mb-4">⚙️</div>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Backend Development
              </h4>
              <p className="text-gray-600 dark:text-gray-300">
                Criação de APIs robustas e escaláveis com Node.js, Express, Nest.js e Spring Boot
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-md">
              <div className="text-3xl mb-4">🗄️</div>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Database Management
              </h4>
              <p className="text-gray-600 dark:text-gray-300">
                Gestão e otimização de bancos de dados MySQL e PostgreSQL
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
