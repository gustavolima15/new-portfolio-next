'use client';

import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

export default function ThemeToggle() {
  const { isDark, mounted, toggleTheme } = useTheme();

  // Evita hydration mismatch
  if (!mounted) {
    return (
      <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 animate-pulse"></div>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className="relative p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 group"
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
      <span className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
        {isDark ? 'Tema claro' : 'Tema escuro'}
      </span>
    </button>
  );
}

// Componente de toggle mais compacto para o header
export function CompactThemeToggle() {
  const { isDark, mounted, toggleTheme } = useTheme();

  if (!mounted) {
    return (
      <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 animate-pulse"></div>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      aria-label={isDark ? 'Alternar para tema claro' : 'Alternar para tema escuro'}
    >
      {isDark ? (
        <Sun className="text-yellow-500 hover:text-yellow-400 transition-colors duration-200" size={20} />
      ) : (
        <Moon className="text-gray-600 hover:text-blue-600 transition-colors duration-200" size={20} />
      )}
    </button>
  );
}
