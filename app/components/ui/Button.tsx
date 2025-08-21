'use client';

import { ButtonHTMLAttributes, ReactNode } from 'react';
import { LoadingSpinner } from './Loading';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  children: ReactNode;
  href?: string;
  target?: string;
  rel?: string;
}

export function Button({ 
  variant = 'primary', 
  size = 'md', 
  isLoading = false,
  children,
  href,
  target,
  rel,
  className = '',
  disabled,
  ...props 
}: ButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variantClasses = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-500 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5',
    secondary: 'bg-gray-600 hover:bg-gray-700 text-white focus:ring-gray-500 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5',
    outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white focus:ring-blue-500 transform hover:-translate-y-0.5',
    ghost: 'text-gray-600 hover:text-blue-600 hover:bg-blue-50 dark:text-gray-400 dark:hover:text-blue-400 dark:hover:bg-blue-900/20 focus:ring-blue-500'
  };
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm rounded-md gap-2',
    md: 'px-6 py-3 text-base rounded-lg gap-2',
    lg: 'px-8 py-4 text-lg rounded-xl gap-3'
  };

  const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
  const isDisabled = disabled || isLoading;

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        className={buttonClasses}
        aria-disabled={isDisabled}
      >
        {isLoading && <LoadingSpinner size="sm" color="text-current" />}
        {children}
      </a>
    );
  }

  return (
    <button
      className={buttonClasses}
      disabled={isDisabled}
      {...props}
    >
      {isLoading && <LoadingSpinner size="sm" color="text-current" />}
      {children}
    </button>
  );
}

export function FloatingActionButton({ 
  children, 
  onClick, 
  className = '',
  ariaLabel,
  ...props 
}: ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  ariaLabel?: string;
}) {
  return (
    <button
      onClick={onClick}
      aria-label={ariaLabel}
      className={`fixed bottom-8 right-8 w-14 h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 z-50 flex items-center justify-center ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
