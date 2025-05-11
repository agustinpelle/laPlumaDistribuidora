import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Layout from "../components/layout/Layout";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: Usuario intentó acceder a una ruta inexistente:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="min-h-[60vh] flex items-center justify-center bg-gray-50">
        <div className="text-center px-4">
          <h1 className="text-6xl font-bold text-brand-blue mb-4">404</h1>
          <p className="text-xl text-gray-600 mb-6">
            Lo sentimos, la página que estás buscando no existe.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild variant="default">
              <Link to="/">
                <Home className="mr-2 h-4 w-4" />
                Ir al Inicio
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="#" onClick={() => window.history.back()}>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Volver Atrás
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
