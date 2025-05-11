import { Card, CardContent } from '../ui/card.jsx';
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from 'framer-motion';

const categories = [
  {
    id: "catalogo-general",
    title: "Catálogo La Pluma",
    description: "Catálogo completo con todos nuestros productos de ferretería",
    image: "/catalogos/icons/la pluma.png"
  },
  {
    id: "lista-pegalo",
    title: "Lista Pegalo LA PLUMA",
    description: "Productos adhesivos y pegamentos para diferentes usos y materiales",
    image: "/catalogos/icons/pegalo_logo.png"
  },
  {
    id: "lista-hamilton",
    title: "Lista Hamilton LA PLUMA",
    description: "Herramientas y accesorios de la marca Hamilton",
    image: "/catalogos/icons/hamilton.png"
  },
  {
    id: "lista-aliafor",
    title: "Lista Aliafor LA PLUMA",
    description: "Productos especializados de la marca Aliafor",
    image: "/catalogos/icons/Aliafor.png"
  }
];

const CategorySection = () => {
  return (
    <motion.section 
      className="py-16 bg-gradient-to-b from-gray-100 to-white relative"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-[#1e3a8a]">
            Nuestros Catálogos
          </h2>
          <p className="mt-6 text-gray-700 max-w-2xl mx-auto text-base leading-relaxed">
            Explora nuestra amplia variedad de productos organizados en catálogos detallados.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => (
            <Card 
              key={category.id} 
              className="overflow-hidden rounded-xl shadow-md transition-shadow duration-300 p-6 flex flex-col items-center text-center hover:shadow-xl hover:scale-105"
            >
              <Link to={`/productos#${category.id}`} className="w-full">
                <div className="h-40 flex items-center justify-center w-full">
                  <img 
                    src={category.image} 
                    alt={category.title} 
                    className="max-h-12 mx-auto object-contain mb-4 border-gray-100 pb-4 w-full"
                    style={category.id === "lista-pegalo" || category.id === "catalogo-general" ? { filter: "brightness(0) saturate(100%)" } : {}}
                  />
                </div>
                <CardContent className="p-0">
                  <h3 className="text-lg font-semibold text-[#2563eb] mb-2">
                    {category.title}
                  </h3>
                  <p className="text-gray-800 mb-4 text-base leading-relaxed">
                    {category.description}
                  </p>
                  <div className="flex items-center text-brand-orange font-medium text-sm justify-center gap-1">
                    Ver catálogo 
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </CardContent>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default CategorySection;
