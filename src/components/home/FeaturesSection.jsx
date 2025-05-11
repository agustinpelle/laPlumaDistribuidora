import {
  Construction,
  Car,
  ShieldCheck,
  Headphones
} from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: <Construction className="h-12 w-12 text-orange-500" />,
    title: "Ferretería de Calidad",
    description: "Ofrecemos productos de ferretería de las mejores marcas del mercado, con garantía y al mejor precio."
  },
  {
    icon: <Car className="h-12 w-12 text-orange-500" />,
    title: "Repuestos Originales",
    description: "Conseguimos repuestos de autos originales usados: motores, periféricos, chapas, trompas y más."
  },
  {
    icon: <ShieldCheck className="h-12 w-12 text-orange-500" />,
    title: "Garantía de Calidad",
    description: "Todos nuestros productos cuentan con garantía de calidad y precios competitivos."
  },
  {
    icon: <Headphones className="h-12 w-12 text-orange-500" />,
    title: "Atención Personalizada",
    description: "Brindamos atención personalizada para encontrar exactamente lo que necesitas."
  }
];

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 }
};

const FeaturesSection = () => {
  return (
    <section className="py-16 bg-slate-50 mt-20">
      <div className="container mx-auto px-4 text-base leading-relaxed">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-brand-blue">
            Nuestros Servicios
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            En Distribuidora La Pluma nos especializamos en ofrecer productos de alta calidad y un servicio excepcional.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-all hover:scale-105 cursor-pointer"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center text-orange-500 mx-auto mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
