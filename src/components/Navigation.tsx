'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show navbar when at the top
      if (currentScrollY < 10) {
        setIsVisible(true);
      }
      // Hide when scrolling down, show when scrolling up
      else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
        // Close mobile menu when hiding navbar
        setIsOpen(false);
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'My Work', href: '/work' },
    { name: 'About', href: '/about' },
  ];

  return (
    <motion.nav 
      initial={{ y: 0 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200"
    >
             <div className="max-w-7xl mx-auto px-6 lg:px-8">
               <div className="flex justify-between items-center h-18">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <img 
              src="/assets/Logo-Light.png"
              alt="Delighted By Bailey Logo"
              className="h-8 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10 pr-6">
            {navItems.map((item) => {
              const isActive = pathname === item.href || pathname === item.href + '/';
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-9 py-6 text-base font-normal transition-all duration-200 border-b-2 ${
                    isActive 
                      ? 'text-gray-700 font-semibold border-pink-500' 
                      : 'text-gray-700 hover:bg-yellow-50 border-transparent hover:border-yellow-200'
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
            <Link
              href="/contact"
              className="bg-black text-yellow-50 px-4 py-3 text-base font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-200"
            >
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-6">
            <Link
              href="/contact"
              className="bg-black text-yellow-50 px-4 py-3 text-base font-semibold rounded-full shadow-lg"
            >
              Contact
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200"
            >
              <svg
                className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0 }}
        className="md:hidden overflow-hidden bg-white"
      >
        <div className="px-6 py-6 space-y-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href || pathname === item.href + '/';
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`block px-6 py-4 text-base font-normal transition-all duration-200 border-l-4 ${
                  isActive 
                    ? 'text-gray-700 font-semibold border-pink-500' 
                    : 'text-gray-700 hover:bg-yellow-50 border-transparent hover:border-yellow-200'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="block px-6 py-4 text-base font-normal transition-all duration-200 border-b-2 text-gray-700 hover:bg-yellow-50 border-transparent hover:border-yellow-200"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </div>
      </motion.div>
    </motion.nav>
  );
}
