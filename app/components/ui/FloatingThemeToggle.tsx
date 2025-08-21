'use client';

import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';

export default function FloatingThemeToggle() {
  const { isDark, mounted, toggleTheme } = useTheme();

  if (!mounted) {
    return null;
  }

  return (
    <button
      onClick={toggleTheme}
      className="fixed bottom-24 right-8 w-14 h-14 bg-white dark:bg-gray-800 text-gray-800 dark:text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 z-40 flex items-center justify-center border border-gray-200 dark:border-gray-700 group"
      aria-label={isDark ? 'Alternar para tema claro' : 'Alternar para tema escuro'}
    >
      <div className="relative w-6 h-6">
        {/* Ícone do Sol */}
        <Sun 
          className={`absolute inset-0 text-yellow-500 transition-all duration-300 transform ${
            isDark ? 'rotate-90 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'
          }`}
          size={24}
        />
        
        {/* Ícone da Lua */}
        <Moon 
          className={`absolute inset-0 text-blue-400 transition-all duration-300 transform ${
            isDark ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-0 opacity-0'
          }`}
          size={24}
        />
      </div>

      {/* Tooltip */}
      <span className="absolute right-16 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
        {isDark ? 'Tema claro' : 'Tema escuro'}
      </span>
    </button>
  );
}
