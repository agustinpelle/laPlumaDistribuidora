import { Button } from '../ui/button.jsx';
import { Link } from "react-router-dom";
import { Phone } from 'lucide-react';

const ContactCta = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="bg-brand-blue rounded-lg p-8 md:p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">
            ¿Necesitas ayuda para encontrar un producto?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            En Distribuidora La Pluma ofrecemos atención personalizada para ayudarte
            a encontrar exactamente lo que necesitas. Contáctanos por WhatsApp o 
            completa nuestro formulario.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="flex items-center gap-2 bg-green-500 hover:bg-green-600 hover:shadow-lg text-white font-semibold px-4 py-2 rounded-full transition-colors transition-transform duration-200">
              <a href="https://wa.me/+5491131457280" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <Phone className="w-6 h-6" />
                Contactar por WhatsApp
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="flex items-center gap-2 border border-black text-black hover:bg-gray-100 font-semibold px-4 py-2 rounded-full transition-colors">
              <Link to="/contacto">
                Formulario de Contacto
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCta;
