import Link from 'next/link';
import { useState } from 'react';
import { ThemeToggle } from './ThemeToggle';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  
  return (
    <header className="bg-white dark:bg-darkbg shadow-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link href="/">
              <a className="text-2xl font-bold text-primary">ScalaUai</a>
            </Link>
          </div>
          <nav className="hidden md:flex space-x-6">
            <Link href="/">
              <a className="text-textmain dark:text-white hover:text-primary transition-colors">Planos</a>
            </Link>
            <Link href="/institucional">
              <a className="text-textmain dark:text-white hover:text-primary transition-colors">Sobre</a>
            </Link>
            <Link href="/contato">
              <a className="text-textmain dark:text-white hover:text-primary transition-colors">Contato</a>
            </Link>
          </nav>
          <div className="flex items-center">
            <ThemeToggle />
            <button 
              className="md:hidden ml-4 relative"
              aria-label="Menu"
              title="Menu"
              onClick={toggleMenu}
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Abrir menu</span>
              <div className={`w-6 h-0.5 bg-gray-600 dark:bg-gray-300 mb-1.5 transition-all ${isMenuOpen ? 'transform rotate-45 translate-y-2' : ''}`}></div>
              <div className={`w-6 h-0.5 bg-gray-600 dark:bg-gray-300 mb-1.5 transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></div>
              <div className={`w-6 h-0.5 bg-gray-600 dark:bg-gray-300 transition-all ${isMenuOpen ? 'transform -rotate-45 -translate-y-2' : ''}`}></div>
            </button>
          </div>
        </div>
      </div>
      
      {/* Menu mobile */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 inset-x-0 z-50 bg-white dark:bg-gray-800 shadow-lg">
          <nav className="flex flex-col py-2">
            <Link href="/">
              <a 
                className="px-4 py-3 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                onClick={closeMenu}
              >
                Planos
              </a>
            </Link>
            <Link href="/institucional">
              <a 
                className="px-4 py-3 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                onClick={closeMenu}
              >
                Sobre
              </a>
            </Link>
            <Link href="/contato">
              <a 
                className="px-4 py-3 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                onClick={closeMenu}
              >
                Contato
              </a>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};
