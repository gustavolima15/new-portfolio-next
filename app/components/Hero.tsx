import { Github, Linkedin, MessageCircle, ArrowDown } from 'lucide-react';
import { ImageWithFallback } from './ui/Loading';
import { Button } from './ui/Button';
import { AnimateOnScroll, ParallaxElement } from './ui/Animations';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 pt-20 relative overflow-hidden">
      {/* Elementos decorativos de fundo */}
      <ParallaxElement speed={0.2} className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </ParallaxElement>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Conteúdo de texto */}
          <div className="flex-1 text-center lg:text-left">
            <AnimateOnScroll animation="fadeInLeft">
              <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">
                <span className="text-2xl animate-bounce">👋</span>
                <span className="text-xl font-semibold text-gray-600 dark:text-gray-400">Oi</span>
              </div>
            </AnimateOnScroll>
            
            <AnimateOnScroll animation="fadeInUp" delay={200}>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
                Meu nome é<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 animate-gradient">
                  Gustavo Lima Mendes
                </span>
              </h1>
            </AnimateOnScroll>
            
            <AnimateOnScroll animation="fadeInUp" delay={400}>
              <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl">
                Eu construo soluções digitais inovadoras e impactantes, unindo design e desenvolvimento para criar experiências únicas.
              </p>
            </AnimateOnScroll>
            
            {/* Botões de ação */}
            <AnimateOnScroll animation="fadeInUp" delay={600}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <Button
                  href="#projects"
                  variant="primary"
                  size="lg"
                  className="group"
                >
                  Ver Projetos
                  <ArrowDown className="ml-2 group-hover:translate-y-1 transition-transform duration-200" size={20} />
                </Button>
                <Button
                  href="#about"
                  variant="outline"
                  size="lg"
                >
                  Sobre Mim
                </Button>
              </div>
            </AnimateOnScroll>
            
            {/* Links sociais */}
            <AnimateOnScroll animation="fadeInUp" delay={800}>
              <div className="flex items-center justify-center lg:justify-start gap-6">
                <a
                  href="https://github.com/gustavolima15"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
                  aria-label="GitHub"
                >
                  <Github className="text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200" size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/gustavo-lima15/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200" size={24} />
                </a>
                <a
                  href="mailto:gustavo.lima.dev@gmail.com"
                  className="group p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
                  aria-label="Email"
                >
                  <MessageCircle className="text-gray-600 dark:text-gray-400 group-hover:text-green-500 dark:group-hover:text-green-400 transition-colors duration-200" size={24} />
                </a>
              </div>
            </AnimateOnScroll>
          </div>
          
          {/* Foto do perfil */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <AnimateOnScroll animation="fadeInRight" delay={300}>
              <div className="relative group">
                <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-700 shadow-2xl group-hover:shadow-3xl transition-all duration-300 group-hover:scale-105">
                  <ImageWithFallback
                    src="/profile-photo.png"
                    alt="Gustavo Lima Mendes"
                    width={320}
                    height={320}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Elementos decorativos sutis */}
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-500 rounded-full opacity-10 animate-pulse group-hover:opacity-20 transition-opacity duration-300"></div>
                <div className="absolute -bottom-2 -left-2 w-10 h-10 bg-blue-500 rounded-full opacity-10 animate-pulse delay-1000 group-hover:opacity-20 transition-opacity duration-300"></div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
        
        {/* Seta indicativa para scroll */}
        <AnimateOnScroll animation="fadeIn" delay={1000}>
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <a
              href="#about"
              className="flex flex-col items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 group"
              aria-label="Rolar para próxima seção"
            >
              <span className="text-sm mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">Role para baixo</span>
              <ArrowDown className="animate-bounce" size={24} />
            </a>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
