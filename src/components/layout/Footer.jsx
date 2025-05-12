import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import CustomFeatherLogo from '../ui/CustomFeatherLogo.jsx';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gradient-to-t from-[#1b368f] to-[#2746a1] text-white/90 mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="mb-4 sm:mb-0">
            <div className="flex items-center space-x-2 mb-4">
              <CustomFeatherLogo size={24} className="text-white filter drop-shadow-[0_0_1px_black]" />
              <div>
                <h3 className="text-lg font-semibold tracking-wide uppercase">Distribuidora La Pluma</h3>
                <p className="text-sm">Ferretería y Repuestos</p>
              </div>
            </div>
            <p className="mb-4">
              Distribuidora La Pluma ofrece productos de ferretería de las mejores marcas 
              del mercado y consigue repuestos de autos originales usados con atención personalizada.
            </p>
          </div>
          
          <div className="mb-4 sm:mb-0">
            <h3 className="text-lg font-semibold tracking-wide uppercase mb-4">Enlaces</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-brand-orange transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/productos" className="hover:text-brand-orange transition-colors">
                  Productos
                </Link>
              </li>
              <li>
                <Link to="/contacto" className="hover:text-brand-orange transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="mb-4 sm:mb-0">
            <h3 className="text-lg font-semibold tracking-wide uppercase mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Phone size={24} className="mt-0.5 shrink-0 opacity-80 hover:opacity-100 transition-opacity" />
                <span>WhatsApp: +54 9 11 3145-7280</span>
              </li>
              <li className="flex items-start space-x-3">
                <Mail size={24} className="mt-0.5 shrink-0 opacity-80 hover:opacity-100 transition-opacity" />
                <span>info@distribuidoralapluma.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin size={24} className="mt-0.5 shrink-0 opacity-80 hover:opacity-100 transition-opacity" />
                <span>Buenos Aires, Argentina</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-6 pt-4 text-center">
          <p className="text-white/70 text-sm">
            © {currentYear} Distribuidora La Pluma. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
