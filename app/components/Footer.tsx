import { Github, Linkedin, MessageCircle, Mail, Phone } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/gustavo-lima',
      color: 'hover:text-gray-700 dark:hover:text-gray-300'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://linkedin.com/in/gustavo-lima',
      color: 'hover:text-blue-600'
    },
    {
      name: 'WhatsApp',
      icon: MessageCircle,
      url: 'https://wa.me/5511999999999',
      color: 'hover:text-green-500'
    }
  ];

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Sobre */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Gustavo Lima Mendes</h3>
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              Desenvolvedor Full-stack apaixonado por criar soluções inovadoras e 
              interfaces que conectam pessoas e simplificam processos.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => {
                const IconComponent = link.icon;
                return (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-gray-400 ${link.color} transition-colors duration-200`}
                    aria-label={link.name}
                  >
                    <IconComponent size={24} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Sobre mim
                </a>
              </li>
              <li>
                <a href="#technologies" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Tecnologias
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Projetos
                </a>
              </li>
              <li>
                <a href="#experiences" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Experiências
                </a>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-blue-400" />
                <a 
                  href="mailto:gustavo@email.com" 
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  gustavo@email.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-green-400" />
                <a 
                  href="tel:+5511999999999" 
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  +55 (11) 99999-9999
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Linha divisória */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Gustavo Lima Mendes. Todos os direitos reservados.
            </p>
            <p className="text-gray-400 text-sm mt-2 md:mt-0">
              Desenvolvido com ❤️ usando Next.js e Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
