'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'

export function FinalCTA() {
  const scrollToApplication = () => {
    const element = document.getElementById('application')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="section-padding bg-gradient-to-br from-midnight-900 via-midnight-700 to-midnight-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-coral-500 to-sunrise-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-emerald-500 to-wisdom-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Urgency Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <Badge variant="default" className="bg-gradient-to-r from-coral-500 to-sunrise-500 text-white border-0 px-6 py-3 text-base font-bold shadow-2xl">
              ⚡ Cohort Marzo 2026 • Solo 40 cupos disponibles
            </Badge>
          </motion.div>

          {/* Main Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight"
          >
            Tu hijo puede{' '}
            <span className="gradient-text bg-gradient-to-r from-coral-400 via-sunrise-400 to-emerald-400 bg-clip-text text-transparent">
              liderar el futuro
            </span>
          </motion.h2>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto"
          >
            En solo 8 semanas, construirá un negocio digital real, aprenderá de CEOs y ejecutivos, y tendrá un portfolio que lo diferenciará del resto
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <Button
              size="xl"
              onClick={scrollToApplication}
              className="w-full sm:w-auto bg-gradient-to-r from-coral-500 to-sunrise-500 hover:from-coral-600 hover:to-sunrise-600 shadow-2xl"
            >
              Aplicar a Cohort Marzo 2026
            </Button>
            <button
              className="w-full sm:w-auto px-8 py-4 rounded-xl border-2 border-white text-white hover:bg-white hover:text-midnight-600 font-bold transition-all text-lg"
            >
              Consultar sobre becas
            </button>
          </motion.div>

          {/* Trust Signals */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto"
          >
            <div className="flex flex-col items-center gap-2 text-white">
              <div className="flex items-center gap-1 mb-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-sunrise-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <div className="text-2xl font-black text-coral-400">4.9/5</div>
              <div className="text-sm text-gray-400">Satisfacción de padres</div>
            </div>

            <div className="flex flex-col items-center gap-2 text-white">
              <svg className="w-10 h-10 text-emerald-400 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div className="text-2xl font-black text-emerald-400">85%+</div>
              <div className="text-sm text-gray-400">Tasa de completitud</div>
            </div>

            <div className="flex flex-col items-center gap-2 text-white">
              <svg className="w-10 h-10 text-wisdom-400 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <div className="text-2xl font-black text-wisdom-400">50%+</div>
              <div className="text-sm text-gray-400">Consigue oportunidad laboral</div>
            </div>
          </motion.div>

          {/* Deadline Warning */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20"
          >
            <div className="flex items-center justify-center gap-3 text-white">
              <svg className="w-6 h-6 text-coral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-lg font-semibold">
                Aplicaciones cierran el <span className="text-coral-400 font-black">15 de Febrero 2026</span> o hasta llenar los cupos
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
