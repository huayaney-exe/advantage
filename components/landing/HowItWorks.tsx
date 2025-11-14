'use client'

import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/Badge'

const weeks = [
  {
    week: 1,
    title: 'Fundamentos y Orientación',
    description: 'Introducción a emprendimiento digital, identificación de oportunidades, y primera sesión con tu mentor.',
    milestone: 'Idea de negocio validada',
    color: 'coral',
  },
  {
    week: 2,
    title: 'Investigación de Mercado',
    description: 'Análisis de competencia, entrevistas a usuarios potenciales, y definición de propuesta de valor única.',
    milestone: 'Propuesta de valor definida',
    color: 'sunrise',
  },
  {
    week: 3,
    title: 'Diseño y Prototipo',
    description: 'Wireframes, diseño UI/UX, y desarrollo de landing page con herramientas no-code/low-code.',
    milestone: 'Landing page publicada',
    color: 'coral',
  },
  {
    week: 4,
    title: 'Desarrollo Técnico',
    description: 'Implementación de funcionalidades, integración de herramientas, y testing de usabilidad.',
    milestone: 'Producto funcional',
    color: 'emerald',
  },
  {
    week: 5,
    title: 'Estrategia de Marketing',
    description: 'Construcción de marca, contenido para redes sociales, y planificación de campaña digital.',
    milestone: 'Estrategia de marketing completa',
    color: 'sunrise',
  },
  {
    week: 6,
    title: 'Lanzamiento y Adquisición',
    description: 'Lanzamiento oficial, ejecución de campaña de marketing, y primeras conversiones.',
    milestone: 'Primeros usuarios reales',
    color: 'emerald',
  },
  {
    week: 7,
    title: 'Optimización y Escala',
    description: 'Análisis de métricas, optimización de conversión, y estrategias de crecimiento.',
    milestone: 'Métricas optimizadas',
    color: 'wisdom',
  },
  {
    week: 8,
    title: 'Presentación Final',
    description: 'Pitch deck profesional, presentación ante panel de ejecutivos, y construcción de portfolio.',
    milestone: 'Demo Day y Portfolio',
    color: 'coral',
  },
]

const colorMap: Record<string, { bg: string; text: string; border: string; gradient: string }> = {
  coral: {
    bg: 'bg-coral-100',
    text: 'text-coral-600',
    border: 'border-coral-500',
    gradient: 'from-coral-400 to-coral-600',
  },
  sunrise: {
    bg: 'bg-sunrise-100',
    text: 'text-sunrise-600',
    border: 'border-sunrise-500',
    gradient: 'from-sunrise-400 to-sunrise-600',
  },
  emerald: {
    bg: 'bg-emerald-100',
    text: 'text-emerald-600',
    border: 'border-emerald-500',
    gradient: 'from-emerald-400 to-emerald-600',
  },
  wisdom: {
    bg: 'bg-wisdom-100',
    text: 'text-wisdom-600',
    border: 'border-wisdom-500',
    gradient: 'from-wisdom-400 to-wisdom-600',
  },
}

export function HowItWorks() {
  return (
    <section id="how-it-works" className="section-padding bg-white">
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
            8 semanas que{' '}
            <span className="gradient-text bg-gradient-to-r from-coral-400 to-emerald-400 bg-clip-text text-transparent">
              transforman el futuro
            </span>
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Un programa intensivo diseñado por expertos en educación y emprendimiento
          </p>
          <div className="flex items-center justify-center gap-6 text-sm text-gray-700">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-coral-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="font-semibold">10-12 hrs/semana</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span className="font-semibold">100% remoto</span>
            </div>
          </div>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto relative">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-coral-300 via-emerald-300 to-wisdom-300 transform md:-translate-x-1/2" />

          {/* Week items */}
          <div className="space-y-12">
            {weeks.map((item, index) => {
              const colors = colorMap[item.color]
              const isEven = index % 2 === 0

              return (
                <motion.div
                  key={item.week}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex items-center ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  } flex-col md:gap-8`}
                >
                  {/* Content */}
                  <div className={`flex-1 ${isEven ? 'md:text-right' : 'md:text-left'} ml-32 md:ml-0`}>
                    <div className={`inline-block ${isEven ? 'md:float-right' : 'md:float-left'} max-w-md`}>
                      <Badge variant="default" className="mb-2">
                        Semana {item.week}
                      </Badge>
                      <h3 className={`text-2xl font-bold ${colors.text} mb-2`}>
                        {item.title}
                      </h3>
                      <p className="text-gray-700 mb-3">
                        {item.description}
                      </p>
                      <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full ${colors.bg} ${colors.text} text-sm font-semibold`}>
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {item.milestone}
                      </div>
                    </div>
                  </div>

                  {/* Timeline dot */}
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className={`absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-16 h-16 rounded-full bg-gradient-to-br ${colors.gradient} flex items-center justify-center text-white font-black text-xl shadow-lg z-10 border-4 border-white`}
                  >
                    {item.week}
                  </motion.div>

                  {/* Spacer for alignment */}
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 grid md:grid-cols-3 gap-8 text-center"
        >
          <div className="p-6 rounded-2xl bg-gradient-to-br from-coral-50 to-coral-100 border-2 border-coral-200">
            <div className="text-4xl font-black text-coral-600 mb-2">8</div>
            <div className="text-sm font-semibold text-gray-700 uppercase tracking-wide">Semanas intensivas</div>
          </div>
          <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-50 to-emerald-100 border-2 border-emerald-200">
            <div className="text-4xl font-black text-emerald-600 mb-2">1:5</div>
            <div className="text-sm font-semibold text-gray-700 uppercase tracking-wide">Ratio mentor-estudiante</div>
          </div>
          <div className="p-6 rounded-2xl bg-gradient-to-br from-wisdom-50 to-wisdom-100 border-2 border-wisdom-200">
            <div className="text-4xl font-black text-wisdom-600 mb-2">100%</div>
            <div className="text-sm font-semibold text-gray-700 uppercase tracking-wide">Proyectos reales</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
