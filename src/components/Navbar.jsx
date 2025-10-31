import React, { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { Button } from './ui/button';

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? darkMode
            ? 'bg-black/80 backdrop-blur-md shadow-lg'
            : 'bg-white/80 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection('hero')}
              className={`text-2xl font-bold transition-colors ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}
            >
              TEMU<span className="text-cyan-400">IN</span>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('about')}
              className={`transition-colors hover:text-cyan-400 ${
                darkMode ? 'text-gray-300' : 'text-gray-700'
              }`}
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className={`transition-colors hover:text-cyan-400 ${
                darkMode ? 'text-gray-300' : 'text-gray-700'
              }`}
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              className={`transition-colors hover:text-cyan-400 ${
                darkMode ? 'text-gray-300' : 'text-gray-700'
              }`}
            >
              Pricing
            </button>
            <button
              onClick={() => scrollToSection('portfolio')}
              className={`transition-colors hover:text-cyan-400 ${
                darkMode ? 'text-gray-300' : 'text-gray-700'
              }`}
            >
              Portfolio
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className={`transition-colors hover:text-cyan-400 ${
                darkMode ? 'text-gray-300' : 'text-gray-700'
              }`}
            >
              Contact
            </button>
          </div>

          {/* Right side buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleDarkMode}
              className="rounded-full"
            >
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <Button
              onClick={() => scrollToSection('contact')}
              className="bg-cyan-500 hover:bg-cyan-600 text-white rounded-full px-6"
            >
              Start Project
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleDarkMode}
              className="rounded-full"
            >
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div
          className={`md:hidden ${
            darkMode ? 'bg-black/95 backdrop-blur-md' : 'bg-white/95 backdrop-blur-md'
          }`}
        >
          <div className="px-4 pt-2 pb-4 space-y-2">
            <button
              onClick={() => scrollToSection('about')}
              className={`block w-full text-left px-3 py-2 rounded-md transition-colors ${
                darkMode
                  ? 'text-gray-300 hover:bg-gray-800 hover:text-cyan-400'
                  : 'text-gray-700 hover:bg-gray-100 hover:text-cyan-600'
              }`}
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className={`block w-full text-left px-3 py-2 rounded-md transition-colors ${
                darkMode
                  ? 'text-gray-300 hover:bg-gray-800 hover:text-cyan-400'
                  : 'text-gray-700 hover:bg-gray-100 hover:text-cyan-600'
              }`}
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              className={`block w-full text-left px-3 py-2 rounded-md transition-colors ${
                darkMode
                  ? 'text-gray-300 hover:bg-gray-800 hover:text-cyan-400'
                  : 'text-gray-700 hover:bg-gray-100 hover:text-cyan-600'
              }`}
            >
              Pricing
            </button>
            <button
              onClick={() => scrollToSection('portfolio')}
              className={`block w-full text-left px-3 py-2 rounded-md transition-colors ${
                darkMode
                  ? 'text-gray-300 hover:bg-gray-800 hover:text-cyan-400'
                  : 'text-gray-700 hover:bg-gray-100 hover:text-cyan-600'
              }`}
            >
              Portfolio
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className={`block w-full text-left px-3 py-2 rounded-md transition-colors ${
                darkMode
                  ? 'text-gray-300 hover:bg-gray-800 hover:text-cyan-400'
                  : 'text-gray-700 hover:bg-gray-100 hover:text-cyan-600'
              }`}
            >
              Contact
            </button>
            <Button
              onClick={() => scrollToSection('contact')}
              className="w-full bg-cyan-500 hover:bg-cyan-600 text-white rounded-full mt-2"
            >
              Start Project
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
