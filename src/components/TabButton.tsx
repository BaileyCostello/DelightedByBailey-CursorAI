'use client';

import { type ButtonHTMLAttributes } from 'react';

export type TabButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  selected: boolean;
};

/**
 * Shared tab styling: 6px vertical padding, min-width 56px, 8px corners.
 * Selected: gray-900 bg, gray-50 text. Unselected: transparent bg, pink-800 text + border.
 */
export default function TabButton({ selected, className = '', children, type = 'button', ...props }: TabButtonProps) {
  return (
    <button
      type={type}
      className={`inline-flex items-center justify-center py-1.5 min-w-[56px] px-4 rounded-lg text-base font-normal transition-colors ${
        selected
          ? 'bg-gray-900 text-gray-50 border border-transparent'
          : 'bg-transparent text-pink-800 border border-pink-800'
      } ${className}`.trim()}
      {...props}
    >
      {children}
    </button>
  );
}
