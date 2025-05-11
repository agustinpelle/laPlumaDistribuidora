import { useState } from 'react';
import { Card, CardContent } from "components/ui/card.jsx";
import { Button } from "components/ui/button.jsx";
import { ChevronDown, ChevronUp, FileText, Download } from 'lucide-react';

const ProductCategory = ({ id, title, description, pdfUrl }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div id={id} className="scroll-mt-24">
      <Card className="mb-8">
        <CardContent className="p-6">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold text-brand-blue">{title}</h2>
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => setIsExpanded(!isExpanded)}
              aria-label={isExpanded ? "Colapsar categoría" : "Expandir categoría"}
            >
              {isExpanded ? <ChevronUp /> : <ChevronDown />}
            </Button>
          </div>
          
          <p className="text-gray-600 mt-2">{description}</p>
          
          {isExpanded && (
            <div className="mt-6">
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 flex flex-col items-center">
                <FileText size={48} className="text-brand-blue mb-4" />
                <p className="text-center mb-4">
                  Catálogo de productos en formato PDF.
                </p>
                {pdfUrl ? (
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button asChild className="bg-brand-blue hover:bg-brand-blue/90">
                      <a href={pdfUrl} target="_blank" rel="noopener noreferrer">
                        Ver Catálogo
                      </a>
                    </Button>
                    <Button asChild variant="outline">
                      <a href={pdfUrl} download>
                        <Download className="mr-2 h-4 w-4" />
                        Descargar
                      </a>
                    </Button>
                  </div>
                ) : (
                  <p className="text-gray-500 italic">
                    Catálogo en preparación. Por favor contáctenos para más información.
                  </p>
                )}
              </div>
              
              <div className="mt-6">
                <h3 className="text-lg font-semibold mb-2">Consulta por productos específicos</h3>
                <p className="text-gray-600 mb-4">
                  Si necesitas un producto específico o tienes alguna consulta sobre esta categoría,
                  no dudes en contactarnos por WhatsApp para recibir atención personalizada.
                </p>
                <Button asChild className="bg-brand-orange hover:bg-brand-orange/90">
                  <a href="https://wa.me/+5491100000000" target="_blank" rel="noopener noreferrer">
                    Consultar por WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default ProductCategory;
