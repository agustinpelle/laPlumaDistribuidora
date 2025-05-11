import { Button } from '../ui/button.jsx';
import { Link } from 'react-router-dom';
import { ArrowRight, Send } from 'lucide-react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <div
      className="relative hero-pattern bg-hero-pattern bg-no-repeat"
      style={{ backgroundSize: '100%', backgroundPosition: 'center center', minHeight: '700px' }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60 z-10"></div>

      <div className="relative z-20 container mx-auto px-4 py-16 md:py-24">
        <motion.div
          className="space-y-6 max-w-xl"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Ferretería y Repuestos de Calidad
          </h1>
          <p className="text-lg text-gray-300">
            Distribuidora La Pluma ofrece los mejores productos de ferretería y repuestos
            originales para automóviles con atención personalizada.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              asChild
              size="lg"
              className="bg-brand-orange hover:bg-brand-orange/90 transition-transform transform hover:scale-105 hover:shadow-lg"
            >
              <Link to="/productos" className="flex items-center">
                Ver Productos
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="text-black border-white hover:bg-white hover:text-brand-orange transition-transform transform hover:scale-105 hover:shadow-lg"
            >
              <Link to="/contacto" className="flex items-center">
                Contactar
                <Send className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Wavy SVG divider */}
      <svg
        className="absolute bottom-0 left-0 w-full"
        viewBox="0 0 1440 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ height: '100px' }}
      >
        <path
          d="M0 80C360 120 1080 40 1440 80V100H0V80Z"
          fill="#f7f7f7"
        />
      </svg>
    </div>
  );
};

export default HeroSection;
