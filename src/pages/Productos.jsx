import { useState, useEffect } from 'react';
import Layout from '../components/layout/Layout.jsx';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs.jsx';
import { FileText, Download, Car, X } from 'lucide-react';
import { Button } from '../components/ui/button.jsx';
import { Card, CardContent } from '../components/ui/card.jsx';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

const catalogos = [
  {
    id: "catalogo-general",
    title: "Catálogo La Pluma",
    description: "Catálogo completo con todos nuestros productos de ferretería",
    pdfUrl: "/catalogos/Catalogo La Pluma 2024.pdf",
    image: "/catalogos/icons/la pluma.png"
  },
  {
    id: "lista-pegalo",
    title: "Lista Pegalo LA PLUMA",
    description: "Productos adhesivos y pegamentos para diferentes usos y materiales",
    pdfUrl: "/catalogos/lista-pegalo-la-pluma.pdf",
    image: "/catalogos/icons/pegalo_logo.png"
  },
  {
    id: "lista-hamilton",
    title: "Lista Hamilton LA PLUMA",
    description: "Herramientas y accesorios de la marca Hamilton",
    pdfUrl: "/catalogos/lista-hamilton-la-pluma.pdf",
    image: "/catalogos/icons/hamilton.png"
  },
  {
    id: "lista-aliafor",
    title: "Lista Aliafor LA PLUMA",
    description: "Productos especializados de la marca Aliafor",
    pdfUrl: "/catalogos/lista-aliafor-la-pluma.pdf",
    image: "/catalogos/icons/Aliafor.png"
  }
];

const Productos = () => {
  const [activeTab, setActiveTab] = useState('todos');
  const [pdfViewerUrl, setPdfViewerUrl] = useState(null);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash && catalogos.some(c => c.id === hash)) {
        setActiveTab(hash);

        setTimeout(() => {
          const element = document.querySelector(`[data-value="${hash}"]`);
          if (element) {
            const yOffset = -150; // Ajusta este valor según el tamaño del header/tabs
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
          }
        }, 100);
      } else {
        setActiveTab('todos');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleTabChange = (value) => {
    setActiveTab(value);
    if (value === 'todos') {
      window.history.replaceState(null, null, window.location.pathname);
    } else {
      window.location.hash = value;
    }
    setPdfViewerUrl(null); // Cerrar visor PDF cuando cambias de pestaña
  };

  const openPdfViewer = (url) => {
    setPdfViewerUrl(url);
  };

  const closePdfViewer = () => {
    setPdfViewerUrl(null); // Aquí cierras el visor
  };

  const getFilteredCatalogos = () => {
    return activeTab === 'todos'
      ? catalogos
      : catalogos.filter(catalogo => catalogo.id === activeTab);
  };

  return (
    <Layout>
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-brand-blue">
              Nuestros Productos
            </h1>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              En Distribuidora La Pluma ofrecemos una amplia gama de productos de ferretería
              de las mejores marcas del mercado. Explora nuestros catálogos para encontrar
              lo que necesitas.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6 md:p-8 mb-8">
            <h2 className="text-xl font-semibold text-brand-blue mb-4">
              Catálogos Disponibles
            </h2>
            <p className="text-gray-600 mb-4">
              Nuestros catálogos están disponibles en formato PDF para una fácil visualización. 
              Puedes consultarlos online o descargarlos para verlos cuando lo necesites.
            </p>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-gray-700">
              <strong>Nota:</strong> Para productos específicos, 
              te recomendamos contactarnos directamente por WhatsApp para verificar disponibilidad y recibir 
              atención personalizada.
            </div>
          </div>

          <div className="mb-10">
            <Tabs value={activeTab} className="w-full">
              <TabsList className="grid grid-cols-1 md:grid-cols-5 mb-6 bg-transparent gap-2">
                <TabsTrigger 
                  value="todos"
                  onClick={() => handleTabChange("todos")}
                  data-state={activeTab === "todos" ? "active" : "inactive"}
                  className="data-[state=active]:bg-brand-blue data-[state=active]:text-white"
                >
                  Todos los catálogos
                </TabsTrigger>
                {catalogos.map((catalogo) => (
                  <TabsTrigger 
                    key={catalogo.id}
                    value={catalogo.id}
                    onClick={() => handleTabChange(catalogo.id)}
                    data-state={activeTab === catalogo.id ? "active" : "inactive"}
                    className="data-[state=active]:bg-brand-blue data-[state=active]:text-white"
                  >
                    {catalogo.title.includes("LA PLUMA") 
                      ? catalogo.title.split(" LA PLUMA")[0] 
                      : catalogo.title}
                  </TabsTrigger>
                ))}
              </TabsList>

              <TabsContent value={activeTab} className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {getFilteredCatalogos().map((catalogo) => (
                    <CatalogCard 
                      key={catalogo.id} 
                      catalogo={catalogo} 
                      isFull={activeTab !== 'todos'} 
                      openPdfViewer={openPdfViewer}
                    />
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {pdfViewerUrl && (
            <div className="fixed inset-0 bg-black bg-opacity-75 flex flex-col items-center justify-center z-50 p-4">
              <div className="relative w-full max-w-5xl h-[80vh] bg-white rounded-lg shadow-lg">
              <button
                onClick={closePdfViewer}
                clasName="absolute top-4 right-4 bg-gray-200 rounded-full p-2 hover:bg-gray-300 transition"
                aria-label="Cerrar visor PDF"
              >
                <X size={24} />
              </button>
                <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
                  <Viewer fileUrl={pdfViewerUrl} />
                </Worker>
              </div>
            </div>
          )}

          <div className="bg-white rounded-lg shadow-sm p-6 md:p-8 mb-8">
            <div className="flex items-start gap-4">
              <div className="hidden md:block bg-gray-50 p-4 rounded-full">
                <Car className="h-12 w-12 text-brand-blue" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-brand-blue mb-3">
                  Repuestos de Automóviles
                </h2>
                <p className="text-gray-600 mb-3">
                  Además de productos de ferretería, también conseguimos repuestos originales para automóviles:
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mb-4 list-disc list-inside text-gray-600">
                  <li>Motores con 04</li>
                  <li>Periféricos</li>
                  <li>Chapa</li>
                  <li>Trompas completas</li>
                  <li>Accesorios</li>
                  <li>Y más</li>
                </ul>
                <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 text-amber-700">
                  <strong>Importante:</strong> Los repuestos de automóviles están disponibles solo con consulta previa.
                </div>
                <div className="mt-4">
                  <Button asChild className="bg-brand-orange hover:bg-brand-orange/90">
                    <a href="https://wa.me/+5491131457280" target="_blank" rel="noopener noreferrer">
                      Consultar disponibilidad
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </Layout>
  );
};

const CatalogCard = ({ catalogo, isFull = false, openPdfViewer }) => {
  return (
    <Card className={`overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 ${isFull ? 'md:max-w-3xl mx-auto' : ''}`}>
      <CardContent>
        <div className="flex flex-col md:flex-row items-center gap-6">
          <img 
            src={catalogo.image} 
            alt={catalogo.title} 
            className="max-w-[100px] h-auto object-contain" 
            style={catalogo.id === "lista-pegalo" || catalogo.id === "catalogo-general" ? { filter: "brightness(0) saturate(100%)" } : {}}
          />
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-brand-blue">{catalogo.title}</h3>
            <p className="text-sm text-gray-600 mt-1">{catalogo.description}</p>
            <div className="mt-2 flex gap-2">
              <button 
                onClick={() => openPdfViewer(catalogo.pdfUrl)} 
                className="bg-brand-blue text-white px-4 py-2 rounded-md flex items-center gap-2 hover:bg-brand-blue/90 transition"
                aria-label={`Ver PDF de ${catalogo.title}`}
              >
                <FileText className="h-4 w-4" />
                Ver PDF
              </button>
              <a 
                href={catalogo.pdfUrl} 
                download 
                className="bg-gray-100 hover:bg-gray-200 text-sm px-4 py-2 rounded-md flex items-center gap-2"
                aria-label={`Descargar PDF de ${catalogo.title}`}
              >
                <Download className="h-4 w-4" />
                Descargar
              </a>
            </div>
          </div>
          {isFull && (
            <div className="md:w-1/3 flex flex-col gap-4 mt-4 md:mt-0">
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                <h4 className="font-medium mb-2">¿No encuentras lo que buscas?</h4>
                <p className="text-sm text-gray-600">
                  Contamos con muchos más productos. Consúltanos directamente.
                </p>
                <Button asChild className="w-full mt-3 bg-brand-orange hover:bg-brand-orange/90">
                  <a href="https://wa.me/+5491131457280" target="_blank" rel="noopener noreferrer">
                    Consultar por WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default Productos;
