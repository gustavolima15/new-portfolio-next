import { AnimateOnScroll } from './ui/Animations';
import { Award, Code, Users } from 'lucide-react';

export default function About() {
  const stats = [
    {
      icon: Code,
      number: "8+",
      label: "Anos de Experiência",
      color: "text-blue-600"
    },
    {
      icon: Award,
      number: "50+",
      label: "Projetos Concluídos",
      color: "text-green-600"
    },
    {
      icon: Users,
      number: "15+",
      label: "Tecnologias",
      color: "text-purple-600"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll animation="fadeInUp">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Sobre mim
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>
        </AnimateOnScroll>

        <div className="max-w-4xl mx-auto">
          <AnimateOnScroll animation="fadeInUp" delay={200}>
            <div className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed space-y-6">
              <p className="text-center lg:text-left">
                Sou formado em Sistemas de Informação e tenho um MBA em Gestão de Projetos. Sempre fui 
                apaixonado por tecnologia e as coisas que existe por aí me atraem muito. No curso de 
                informática, descobri a área de desenvolvimento de software, especialmente na área de Front-end.
              </p>
              
              <p className="text-center lg:text-left">
                Com mais de 8 anos de experiência trabalhando com tecnologias como PHP, Laravel, Vue, React, 
                .Net, Solidity e outras. Sempre busquei me manter em integração das mais diversas áreas da 
                programação. Em sistemas no qual possibilitar agilidade e segurança, como também suas 
                integrações para uso e monitoramento, criação de soluções inteligentes e inovadoras, sempre 
                buscando criar aplicações que sejam intuitivas, eficientes e de alto valor agregado.
              </p>
              
              <p className="text-center lg:text-left">
                Acredito que a tecnologia deve conectar pessoas, e é isso que me motiva a continuar 
                aprendendo e entregando novas soluções todos os dias.
              </p>
            </div>
          </AnimateOnScroll>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <AnimateOnScroll key={stat.label} animation="fadeInUp" delay={400 + index * 100}>
                  <div className="text-center group">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className={`${stat.color} group-hover:scale-110 transition-transform duration-300`} size={32} />
                    </div>
                    <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                      {stat.number}
                    </div>
                    <div className="text-gray-600 dark:text-gray-400 font-medium">
                      {stat.label}
                    </div>
                  </div>
                </AnimateOnScroll>
              );
            })}
          </div>

          {/* Seção de valores/princípios */}
          <AnimateOnScroll animation="fadeInUp" delay={800}>
            <div className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
                Meus Princípios
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="text-center md:text-left">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    💡 Inovação Constante
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Sempre buscando novas tecnologias e metodologias para criar soluções mais eficientes.
                  </p>
                </div>
                
                <div className="text-center md:text-left">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    🎯 Foco na Qualidade
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Código limpo, testado e documentado para garantir a manutenibilidade dos projetos.
                  </p>
                </div>
                
                <div className="text-center md:text-left">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    🤝 Colaboração
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Trabalho em equipe e comunicação clara são fundamentais para o sucesso dos projetos.
                  </p>
                </div>
                
                <div className="text-center md:text-left">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    📚 Aprendizado Contínuo
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    O mundo da tecnologia evolui rapidamente, e eu evoluo junto com ele.
                  </p>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
