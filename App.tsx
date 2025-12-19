
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Booking from './components/Booking';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-legal-gold selection:text-white">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        
        {/* Trust Banner */}
        <div className="bg-white py-12 border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
              <div className="flex flex-col items-center">
                <span className="text-2xl font-serif font-bold text-legal-navy">PROFESIONALISMO</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-2xl font-serif font-bold text-legal-navy">CONFIANZA</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-2xl font-serif font-bold text-legal-navy">TRANSPARENCIA</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-2xl font-serif font-bold text-legal-navy">INNOVACIÓN</span>
              </div>
            </div>
          </div>
        </div>

        <Services />

        <Booking />
        
        {/* Special Tech Feature Section */}
        <section className="py-20 bg-legal-navy text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-block p-4 bg-white/5 rounded-full mb-8 border border-white/10">
                <div className="px-4 py-1 bg-legal-gold rounded-full text-xs font-bold uppercase tracking-widest text-legal-navy animate-pulse">
                  Exclusivo
                </div>
              </div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Blockchain Legal</h2>
              <p className="text-xl text-slate-300 font-sans leading-relaxed mb-8">
                Somos pioneros en la integración de tecnología Blockchain para la seguridad jurídica, ofreciendo servicios de certificación inmutable y contratos inteligentes para garantizar la trazabilidad total de sus activos y derechos.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                <div className="p-6 border border-white/10 rounded-sm bg-white/5">
                  <h4 className="font-serif text-xl font-bold text-legal-gold mb-2">Seguridad 3.0</h4>
                  <p className="text-slate-400 text-sm">Protección de activos digitales y físicos con respaldo criptográfico.</p>
                </div>
                <div className="p-6 border border-white/10 rounded-sm bg-white/5">
                  <h4 className="font-serif text-xl font-bold text-legal-gold mb-2">Auditoría Smart</h4>
                  <p className="text-slate-400 text-sm">Verificación de títulos y documentos mediante registros distribuidos.</p>
                </div>
                <div className="p-6 border border-white/10 rounded-sm bg-white/5">
                  <h4 className="font-serif text-xl font-bold text-legal-gold mb-2">Eficiencia</h4>
                  <p className="text-slate-400 text-sm">Reducción de tiempos en la certificación de autenticidad documental.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      
      {/* WhatsApp Button - Right Side */}
      <a
        href="https://wa.me/5493513060524"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 p-4 bg-[#25D366] text-white rounded-full shadow-2xl z-50 hover:scale-110 transition-transform flex items-center justify-center border border-white/20"
        aria-label="Contactar por WhatsApp"
      >
        <svg 
          viewBox="0 0 24 24" 
          width="24" 
          height="24" 
          stroke="currentColor" 
          strokeWidth="0" 
          fill="currentColor"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.938 3.659 1.434 5.63 1.434h.004c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
      </a>

      {/* Scroll to Top floating button */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-24 right-6 p-4 bg-legal-navy/80 text-white rounded-full shadow-2xl z-40 hover:bg-legal-gold transition-all border border-white/10 backdrop-blur-sm flex items-center justify-center group"
        aria-label="Volver arriba"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 transition-transform group-hover:-translate-y-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </div>
  );
}

export default App;
