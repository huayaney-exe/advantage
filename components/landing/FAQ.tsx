'use client'

import { motion } from 'framer-motion'
import { Accordion } from '@/components/ui/Accordion'
import { faqItems } from '@/lib/data/faq'

export function FAQ() {
  return (
    <section id="faq" className="section-padding bg-gradient-to-b from-gray-50 to-white">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-section-mobile md:text-section font-black text-midnight-600 mb-4">
            Preguntas{' '}
            <span className="gradient-text bg-gradient-to-r from-coral-400 to-emerald-400 bg-clip-text text-transparent">
              frecuentes
            </span>
          </h2>
          <p className="text-lg text-gray-600">
            Todo lo que necesitas saber sobre ADVANTAGE
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <Accordion items={faqItems} />
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center bg-midnight-600 text-white rounded-3xl p-8 md:p-12"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            ¿Tienes más preguntas?
          </h3>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-6">
            Agenda una llamada de 15 minutos con nuestro equipo y resuelve todas tus dudas
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="inline-flex items-center gap-2 bg-gradient-to-r from-coral-500 to-sunrise-500 hover:from-coral-600 hover:to-sunrise-600 text-white font-bold px-8 py-4 rounded-xl transition-all hover:scale-105 shadow-lg">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              Agendar llamada informativa
            </button>
            <a
              href="mailto:info@advantage.com"
              className="inline-flex items-center gap-2 border-2 border-white text-white hover:bg-white hover:text-midnight-600 font-bold px-8 py-4 rounded-xl transition-all"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Enviar email
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
