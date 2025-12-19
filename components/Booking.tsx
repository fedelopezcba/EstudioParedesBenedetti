
import React, { useEffect, useRef } from 'react';
import { ExternalLink } from 'lucide-react';

declare global {
  interface Window {
    Calendly: any;
  }
}

const Booking: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadCalendly = () => {
      if (window.Calendly && containerRef.current) {
        // Limpiamos el contenedor para evitar duplicidad
        containerRef.current.innerHTML = '';
        window.Calendly.initInlineWidget({
          // Se añade &hide_event_type_details=1 para ocultar el nombre del evento interno de Calendly
          url: 'https://calendly.com/iparedesbenedetti?hide_landing_page_details=1&hide_gdpr_banner=1&primary_color=c5a059&hide_event_type_details=1',
          parentElement: containerRef.current,
          prefill: {},
          utm: {}
        });
      }
    };

    const existingScript = document.getElementById('calendly-script');
    if (!existingScript) {
      const script = document.createElement('script');
      script.id = 'calendly-script';
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      script.onload = loadCalendly;
      document.body.appendChild(script);
    } else {
      loadCalendly();
    }

    const handleCalendlyEvent = (e: MessageEvent) => {
      if (e.data.event && e.data.event === 'calendly.event_scheduled') {
        setTimeout(() => {
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
        }, 2500);
      }
    };

    window.addEventListener('message', handleCalendlyEvent);
    
    return () => {
      window.removeEventListener('message', handleCalendlyEvent);
    };
  }, []);

  return (
    <section id="reserva" className="py-24 bg-white overflow-hidden min-h-[950px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-legal-navy mb-4">
            Consultas disponibles
          </h2>
          <div className="w-24 h-1 bg-legal-gold mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-slate-600 font-sans text-lg leading-relaxed">
            Seleccione el día y horario que mejor se adapte a su disponibilidad para una reunión profesional. 
          </p>
        </div>

        {/* Contenedor del Widget con altura optimizada */}
        <div 
          ref={containerRef}
          className="w-full rounded-sm shadow-2xl border border-slate-100 overflow-hidden bg-white mb-12" 
          style={{ minWidth: '320px', height: '750px' }}
        >
          <div className="flex items-center justify-center h-full text-slate-400 font-sans italic">
            Cargando agenda de consultas...
          </div>
        </div>

        {/* Botón de Aranceles */}
        <div className="flex justify-center mt-8">
          <a 
            href="https://www.abogado.org.ar/aranceles.php" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-8 py-5 border-2 border-legal-navy text-legal-navy font-bold rounded-sm uppercase tracking-widest text-sm transition-all duration-300 hover:bg-legal-navy hover:text-white group active:scale-95 shadow-lg"
          >
            ARANCELES COLEGIO DE ABOGADOS DE CÓRDOBA
            <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Booking;
