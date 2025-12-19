
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-legal-navy text-white py-16 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-2xl font-serif font-bold mb-6">
              Paredes <span className="text-legal-gold">Benedetti</span>
            </h3>
            <p className="text-slate-400 font-sans text-sm leading-relaxed max-w-xs">
              Estudio jurídico de vanguardia especializado en la protección patrimonial y soluciones legales integrales para el mundo contemporáneo.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-legal-gold mb-6">Navegación</h4>
            <ul className="space-y-4 font-sans text-slate-400">
              <li><a href="#" className="hover:text-white transition-colors">Inicio</a></li>
              <li><a href="#servicios" className="hover:text-white transition-colors">Nuestros Servicios</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-legal-gold mb-6">Legal</h4>
            <p className="text-slate-400 text-xs font-sans mb-4">
              © {new Date().getFullYear()} Estudio Jurídico Paredes Benedetti. <br />
              Todos los derechos reservados.
            </p>
            <p className="text-slate-500 text-[10px] leading-tight">
              La información contenida en este sitio es meramente informativa y no constituye asesoramiento legal vinculante hasta la formalización de la relación profesional.
            </p>
          </div>

        </div>
        
        <div className="pt-8 border-t border-white/10 text-center">
          <p className="text-slate-500 text-xs tracking-widest uppercase">
            Sólida experiencia • Transparencia • Innovación
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
