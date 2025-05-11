import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '../ui/button.jsx';
import CustomFeatherLogo from '../ui/CustomFeatherLogo.jsx';
import { motion } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2" aria-label="Home">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="logo-container"
            >
              <CustomFeatherLogo size={32} className="text-brand-blue" />
            </motion.div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-brand-blue">Distribuidora</span>
              <span className="text-sm text-brand-gray -mt-1">La Pluma</span>
            </div>
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-brand-blue hover:text-brand-orange font-medium transition-colors">
              Inicio
            </Link>
            <Link to="/productos" className="text-brand-blue hover:text-brand-orange font-medium transition-colors">
              Productos
            </Link>
            <Link to="/contacto" className="text-brand-blue hover:text-brand-orange font-medium transition-colors">
              Contacto
            </Link>
            <a
              href="https://wa.me/+5491131457280"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2 rounded-full transition-colors"
            >
              <img
                src="https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/whatsapp.svg"
                alt="WhatsApp"
                className="w-5 h-5 invert"
                style={{ filter: 'brightness(0) invert(1)' }}
              />
              WhatsApp
            </a>
          </nav>

          {/* Mobile menu toggle */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-2">
            <nav className="flex flex-col space-y-3" role="menu">
              <Link
                to="/"
                className="text-brand-blue hover:text-brand-orange font-medium transition-colors py-2"
                onClick={closeMenu}
                role="menuitem"
              >
                Inicio
              </Link>
              <Link
                to="/productos"
                className="text-brand-blue hover:text-brand-orange font-medium transition-colors py-2"
                onClick={closeMenu}
                role="menuitem"
              >
                Productos
              </Link>
              <Link
                to="/contacto"
                className="text-brand-blue hover:text-brand-orange font-medium transition-colors py-2"
                onClick={closeMenu}
                role="menuitem"
              >
                Contacto
              </Link>
              <a
                href="https://wa.me/+5491100000000"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2 rounded-full transition-colors"
              >
                <img
                  src="https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/whatsapp.svg"
                  alt="WhatsApp"
                  className="w-5 h-5 invert"
                  style={{ filter: 'brightness(0) invert(1)' }}
                />
                WhatsApp
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
