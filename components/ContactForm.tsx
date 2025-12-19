
import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { ContactFormData } from '../types';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      // Usamos FormSubmit con AJAX para enviar el correo sin recargar la página
      const response = await fetch("https://formsubmit.co/ajax/iparedesbenedetti@gmail.com", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          Nombre: formData.name,
          Email: formData.email,
          Mensaje: formData.message,
          "_subject": `Nueva consulta web: ${formData.name}`,
          "_template": "table",
          "_captcha": "false" // Desactivado para mejorar UX en AJAX
        })
      });

      const result = await response.json();

      if (response.ok && result.success === "true") {
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Response error');
      }
    } catch (err) {
      setError('Hubo un error al enviar su consulta. Por favor, intente nuevamente o contáctenos vía WhatsApp.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contacto" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-legal-gold/5 rounded-full blur-3xl opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          <div className="lg:sticky lg:top-32">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-legal-navy mb-6 leading-tight">
              Inicie su Consulta Profesional
            </h2>
            <p className="text-lg text-slate-600 mb-10 font-sans leading-relaxed">
              Nuestro equipo analizará su caso con la mayor celeridad y reserva. El primer paso hacia la resolución de su conflicto legal comienza con un asesoramiento íntegro.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-center group">
                <div className="flex-shrink-0 p-4 bg-legal-navy text-white rounded-sm transition-all duration-300 group-hover:bg-legal-gold group-hover:rotate-12 shadow-lg">
                  <Send className="h-6 w-6" />
                </div>
                <div className="ml-5">
                  <h4 className="text-xl font-serif font-bold text-legal-navy">Atención Directa</h4>
                  <p className="text-slate-500 font-medium select-all cursor-pointer hover:text-legal-gold transition-colors">iparedesbenedetti@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-legal-soft p-8 md:p-12 rounded-sm shadow-2xl border border-slate-100 relative">
            {submitted ? (
              <div className="text-center py-12 fade-in">
                <div className="inline-flex items-center justify-center w-24 h-24 bg-green-100 text-green-600 rounded-full mb-6">
                  <CheckCircle2 className="h-12 w-12" />
                </div>
                <h3 className="text-3xl font-serif font-bold text-legal-navy mb-3">Consulta Enviada</h3>
                <p className="text-slate-600 font-sans mb-8 leading-relaxed">
                  Gracias por confiar en Paredes Benedetti. Hemos recibido su mensaje y un profesional se pondrá en contacto con usted a la brevedad.
                </p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="text-legal-gold font-bold uppercase tracking-[0.2em] text-xs hover:text-legal-navy transition-colors pb-1 border-b-2 border-legal-gold/30 hover:border-legal-navy"
                >
                  Enviar otra consulta
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="group">
                  <label htmlFor="name" className="block text-xs font-bold text-legal-navy uppercase tracking-[0.2em] mb-3 transition-colors group-focus-within:text-legal-gold">
                    Nombre Completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-5 py-4 bg-white border border-slate-200 rounded-sm focus:ring-1 focus:ring-legal-gold focus:border-legal-gold transition-all outline-none font-sans placeholder:text-slate-300 shadow-sm text-legal-navy"
                    placeholder="Ej: Juan Pérez"
                  />
                </div>
                
                <div className="group">
                  <label htmlFor="email" className="block text-xs font-bold text-legal-navy uppercase tracking-[0.2em] mb-3 transition-colors group-focus-within:text-legal-gold">
                    Correo Electrónico
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-5 py-4 bg-white border border-slate-200 rounded-sm focus:ring-1 focus:ring-legal-gold focus:border-legal-gold transition-all outline-none font-sans placeholder:text-slate-300 shadow-sm text-legal-navy"
                    placeholder="ejemplo@email.com"
                  />
                </div>
                
                <div className="group">
                  <label htmlFor="message" className="block text-xs font-bold text-legal-navy uppercase tracking-[0.2em] mb-3 transition-colors group-focus-within:text-legal-gold">
                    Consulta / Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-5 py-4 bg-white border border-slate-200 rounded-sm focus:ring-1 focus:ring-legal-gold focus:border-legal-gold transition-all outline-none font-sans resize-none placeholder:text-slate-300 shadow-sm text-legal-navy"
                    placeholder="Describa brevemente su situación..."
                  ></textarea>
                </div>

                {error && (
                  <div className="flex items-center gap-3 text-red-600 text-sm font-medium bg-red-50 p-4 rounded-sm border border-red-100 fade-in">
                    <AlertCircle className="h-5 w-5 flex-shrink-0" />
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`relative overflow-hidden w-full py-5 px-8 bg-gradient-to-r from-legal-navy to-[#1e293b] text-white font-bold rounded-sm uppercase tracking-[0.2em] text-sm transition-all duration-300 shadow-xl ${
                    isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:from-legal-gold hover:to-[#a6823e] hover:text-legal-navy hover:-translate-y-1 active:scale-[0.98]'
                  } flex items-center justify-center gap-3 group`}
                >
                  <span className="relative z-10">{isSubmitting ? 'Enviando...' : 'Enviar Consulta'}</span>
                  {!isSubmitting && (
                    <Send className="relative z-10 h-4 w-4 transition-all duration-500 transform group-hover:translate-x-2 group-hover:-translate-y-1 group-hover:rotate-12" />
                  )}
                  <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactForm;
