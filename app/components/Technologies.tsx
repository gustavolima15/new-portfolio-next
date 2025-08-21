export default function Technologies() {
  const technologies = [
    { name: 'HTML5', icon: '🌐', color: 'text-orange-500' },
    { name: 'CSS3', icon: '🎨', color: 'text-blue-500' },
    { name: 'JavaScript', icon: '💛', color: 'text-yellow-500' },
    { name: 'TypeScript', icon: '📘', color: 'text-blue-600' },
    { name: 'Python', icon: '🐍', color: 'text-green-500' },
    { name: 'PHP', icon: '🐘', color: 'text-purple-500' },
    { name: 'Pandas', icon: '🐼', color: 'text-blue-400' },
    { name: 'PostgreSQL', icon: '🐘', color: 'text-blue-700' },
    { name: 'MySQL', icon: '🗄️', color: 'text-orange-600' },
    { name: 'Git', icon: '📊', color: 'text-red-500' },
    { name: 'GitHub', icon: '🐙', color: 'text-gray-700' },
    { name: 'VS Code', icon: '💙', color: 'text-blue-500' },
  ];

  const frameworks = [
    { name: 'React', icon: '⚛️', color: 'text-cyan-500' },
    { name: 'Next.js', icon: '▲', color: 'text-black dark:text-white' },
    { name: 'Vue.js', icon: '💚', color: 'text-green-500' },
    { name: 'Laravel', icon: '🔴', color: 'text-red-500' },
    { name: '.NET', icon: '🟣', color: 'text-purple-600' },
    { name: 'Tailwind CSS', icon: '💨', color: 'text-cyan-400' },
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
                    <div className={`text-4xl mb-3 ${tech.color} group-hover:scale-110 transition-transform duration-300`}>
                      {tech.icon}
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
                    <div className={`text-4xl mb-3 ${framework.color} group-hover:scale-110 transition-transform duration-300`}>
                      {framework.icon}
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
                Desenvolvimento de interfaces modernas e responsivas com React, Vue.js e Next.js
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-md">
              <div className="text-3xl mb-4">⚙️</div>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Backend Development
              </h4>
              <p className="text-gray-600 dark:text-gray-300">
                Criação de APIs robustas e escaláveis com PHP, Laravel, Python e .NET
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-md">
              <div className="text-3xl mb-4">🗄️</div>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Database Management
              </h4>
              <p className="text-gray-600 dark:text-gray-300">
                Gestão e otimização de bancos de dados PostgreSQL e MySQL
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
