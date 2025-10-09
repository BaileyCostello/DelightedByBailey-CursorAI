'use client';

import { useState } from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium';
  background?: 'light' | 'dark';
  disabled?: boolean;
  onClick?: () => void;
  href?: string;
  className?: string;
  trailingIcon?: boolean;
}

export default function Button({
  children,
  variant = 'primary',
  size = 'medium',
  background = 'light',
  disabled = false,
  onClick,
  href,
  className = '',
  trailingIcon = false,
}: ButtonProps) {
  const [isPressed, setIsPressed] = useState(false);

  const handleMouseDown = () => {
    if (!disabled) {
      setIsPressed(true);
    }
  };

  const handleMouseUp = () => {
    setIsPressed(false);
  };

  const handleMouseLeave = () => {
    setIsPressed(false);
  };

  // Base classes
  const baseClasses = 'group inline-flex items-center justify-center font-semibold text-base leading-6 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 whitespace-nowrap';
  
  // Size classes
  const sizeClasses = {
    small: 'px-4 py-2 text-sm',
    medium: 'px-6 py-3 text-base',
  };

  // Variant and background combinations
  const getVariantClasses = () => {
    if (disabled) {
      return {
        primary: background === 'dark' 
          ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
          : 'bg-gray-200 text-gray-400 cursor-not-allowed',
        secondary: background === 'dark'
          ? 'bg-gray-700 text-gray-400 cursor-not-allowed'
          : 'bg-gray-200 text-gray-400 cursor-not-allowed',
        outline: background === 'dark'
          ? 'border border-gray-600 text-gray-400 cursor-not-allowed'
          : 'border border-gray-300 text-gray-400 cursor-not-allowed',
      };
    }

    if (isPressed) {
      return {
        primary: background === 'dark'
          ? 'bg-pink-800 text-pink-100 shadow-inner'
          : 'bg-yellow-500 text-pink-700 shadow-inner',
        secondary: background === 'dark'
          ? 'bg-pink-800 text-white shadow-inner'
          : 'bg-pink-800 text-white shadow-inner',
        outline: background === 'dark'
          ? 'border border-pink-500 text-pink-100 bg-white/20'
          : 'border border-pink-500 text-pink-700 bg-white/30',
      };
    }

    // Hover states
    const hoverClasses = {
      primary: background === 'dark'
        ? 'hover:bg-pink-700 hover:text-pink-50 hover:shadow-lg'
        : 'hover:bg-yellow-400 hover:text-pink-700 hover:shadow-lg',
      secondary: background === 'dark'
        ? 'hover:bg-pink-900 hover:text-white hover:shadow-lg'
        : 'hover:bg-pink-900 hover:text-white hover:shadow-lg',
      outline: background === 'dark'
        ? 'hover:border-pink-400 hover:text-pink-100 hover:bg-white/10'
        : 'hover:border-pink-400 hover:text-pink-600 hover:bg-white/20',
    };

    // Rest states
    const restClasses = {
      primary: background === 'dark'
        ? 'bg-pink-900 text-pink-100 shadow-md'
        : 'bg-yellow-300 text-pink-700 shadow-md',
      secondary: background === 'dark'
        ? 'bg-gray-900 text-white shadow-md'
        : 'bg-gray-900 text-white shadow-md',
      outline: background === 'dark'
        ? 'border border-pink-600 text-pink-100'
        : 'border border-pink-500 text-pink-700',
    };

    return {
      primary: `${restClasses.primary} ${hoverClasses.primary}`,
      secondary: `${restClasses.secondary} ${hoverClasses.secondary}`,
      outline: `${restClasses.outline} ${hoverClasses.outline}`,
    };
  };

  const variantClasses = getVariantClasses()[variant];
  const roundedClasses = 'rounded-full';

  const buttonClasses = `${baseClasses} ${sizeClasses[size]} ${variantClasses} ${roundedClasses} ${className}`;

  // Arrow icon for trailing icon (only shows on hover with width animation)
  const ArrowIcon = () => (
    <div className="overflow-hidden transition-all duration-200 group-hover:w-8 w-0">
      <svg 
        className="w-6 h-6 ml-2" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="M17 8l4 4m0 0l-4 4m4-4H3" 
        />
      </svg>
    </div>
  );

  const buttonContent = (
    <>
      {children}
      {trailingIcon && <ArrowIcon />}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className={buttonClasses}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
      >
        {buttonContent}
      </a>
    );
  }

  return (
    <button
      type="button"
      className={buttonClasses}
      disabled={disabled}
      onClick={onClick}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
    >
      {buttonContent}
    </button>
  );
}
