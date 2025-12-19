
import React from 'react';

const Hero: React.FC = () => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-[10000ms] hover:scale-110"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-legal-navy via-legal-navy/85 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white w-full">
        <div className="max-w-2xl fade-in">
          <span className="inline-block text-legal-gold font-sans font-semibold tracking-widest uppercase text-xs sm:text-sm mb-4 border-b-2 border-legal-gold pb-1">
            Excelencia Jurídica E Innovación
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold leading-[1.1] mb-6 drop-shadow-lg">
            Estudio Jurídico <br />
            <span className="text-white">Paredes Benedetti</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 font-sans leading-relaxed mb-10 max-w-xl">
            Comprometidos con la seguridad jurídica, la solvencia técnica y la vanguardia tecnológica en cada solución legal.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5">
            <a 
              href="#reserva"
              onClick={(e) => scrollToSection(e, 'reserva')}
              className="inline-flex items-center justify-center px-10 py-4 bg-gradient-to-br from-legal-gold to-[#a6823e] text-legal-navy font-bold rounded-sm transition-all duration-300 hover:shadow-[0_10px_30px_rgba(197,160,89,0.4)] hover:-translate-y-1 group active:scale-95 shadow-xl"
            >
              Reservar Turno
            </a>
            <a 
              href="#servicios"
              onClick={(e) => scrollToSection(e, 'servicios')}
              className="inline-flex items-center justify-center px-10 py-4 border-2 border-white/30 text-white font-bold rounded-sm transition-all duration-300 hover:bg-white hover:text-legal-navy active:scale-95"
            >
              Nuestros Servicios
            </a>
          </div>
        </div>
      </div>

      {/* Subtle Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
        <div className="w-px h-12 bg-gradient-to-b from-white to-transparent mx-auto"></div>
      </div>
    </section>
  );
};

export default Hero;
