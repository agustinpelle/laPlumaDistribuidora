import Layout from "../components/layout/Layout.jsx";
import ContactForm from "../components/contact/ContactForm.jsx";
import ContactInfo from "../components/contact/ContactInfo.jsx";

const Contacto = () => {
  return (
    <Layout>
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-brand-blue">
              Contáctanos
            </h1>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Estamos aquí para ayudarte. Completa el formulario a continuación o 
              contáctanos directamente por WhatsApp para recibir atención personalizada.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-5">
              <div className="md:col-span-2 bg-gradient-to-br from-brand-blue to-blue-800 p-6 md:p-8 text-white">
                <ContactInfo />
              </div>
              <div className="md:col-span-3 p-6 md:p-8">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contacto;
