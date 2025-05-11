import { MapPin, Phone, Mail, Clock } from "lucide-react";

const ContactInfo = () => {
  return (
    
    <div className="space-y-6 text-white">
      <div>
        <h3 className="text-lg font-semibold text-white mb-2">Información de contacto</h3>
        <p className="text-gray-100">
          Puedes contactarnos a través de los siguientes medios o completando el formulario.
        </p>
      </div>
      
      <div className="space-y-4">
        <div className="flex items-start gap-2">
          <Phone className="h-6 w-6 text-brand-orange mt-0.5" />
          <div>
            <p className="font-medium">WhatsApp</p>
            <p className="text-gray-100">+54 9 11 3145-7280</p>
          </div>
        </div>
        
        <div className="flex items-start gap-2">
          <Mail className="h-6 w-6 text-brand-orange mt-0.5" />
          <div>
            <p className="font-medium">Correo electrónico</p>
            <p className="text-gray-100">info@distribuidoralapluma.com</p>
          </div>
        </div>
        
        <div className="flex items-start gap-2">
          <MapPin className="h-6 w-6 text-brand-orange mt-0.5" />
          <div>
            <p className="font-medium">Ubicación</p>
            <p className="text-gray-100">Buenos Aires, Argentina</p>
          </div>
        </div>
        
        <div className="flex items-start gap-2">
          <Clock className="h-6 w-6 text-brand-orange mt-0.5" />
          <div>
            <p className="font-medium">Horario de atención</p>
            <p className="text-gray-100">Lunes a Viernes: 9:00 - 18:00</p>
            <p className="text-gray-100">Sábados: 9:00 - 13:00</p>
          </div>
        </div>
      </div>
      
      <div className="pt-4">
        <h3 className="text-lg font-semibold text-white mb-2">Atención personalizada</h3>
        <p className="text-gray-100">
          Para consultas sobre productos específicos o repuestos de automóviles, contáctanos 
          directamente por WhatsApp para recibir atención personalizada.
        </p>
      </div>
      <div className="mt-6">
        <a href="https://wa.me/5491131457280" className="inline-block bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors">
          📞 Hablar por WhatsApp
        </a>
      </div>
    </div>
  );
};

export default ContactInfo;
