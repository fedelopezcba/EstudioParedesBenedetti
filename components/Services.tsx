
import React from 'react';
import { SERVICES, getIcon } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="servicios" className="py-24 bg-legal-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-legal-navy mb-4">
            Especialidades Jurídicas
          </h2>
          <div className="w-20 h-1 bg-legal-gold mx-auto"></div>
          <p className="mt-6 text-slate-600 max-w-2xl mx-auto font-sans">
            Brindamos soluciones integrales con un enfoque especializado en derechos reales, sucesiones y nuevas tecnologías aplicadas al ámbito legal.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div 
              key={service.id}
              className={`group p-8 bg-white border border-slate-100 rounded-sm shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl relative overflow-hidden ${
                service.special ? 'border-legal-gold/40 bg-gradient-to-br from-white to-legal-gold/5' : ''
              }`}
            >
              <div className={`inline-flex items-center justify-center p-4 rounded-sm mb-6 transition-all duration-500 transform ${
                service.special 
                  ? 'bg-legal-gold text-white group-hover:scale-110 group-hover:rotate-6' 
                  : 'bg-slate-50 text-legal-gold group-hover:bg-legal-navy group-hover:text-white group-hover:scale-110 group-hover:-rotate-3'
              }`}>
                {getIcon(service.icon, "h-8 w-8")}
              </div>
              <h3 className="text-2xl font-serif font-bold text-legal-navy mb-3 group-hover:text-legal-gold transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-slate-600 leading-relaxed font-sans transition-colors group-hover:text-slate-900">
                {service.description}
              </p>
              {service.special && (
                <div className="mt-4 inline-block px-3 py-1 bg-legal-gold text-white text-[10px] font-bold uppercase tracking-widest rounded-full shadow-sm">
                  Innovación Tecnológica
                </div>
              )}
              {/* Subtle accent border on hover */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-legal-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
