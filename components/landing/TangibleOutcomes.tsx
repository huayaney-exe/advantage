'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'

const outcomes = [
  {
    id: 1,
    title: 'Landing Page Profesional',
    description: 'Tu hijo construye una página web completa con diseño profesional, optimizada para conversión.',
    badge: 'Semana 1-3',
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    color: 'from-coral-400 to-sunrise-400',
    bgColor: 'bg-coral-50',
    borderColor: 'border-coral-200',
  },
  {
    id: 2,
    title: 'Primera Campaña de Marketing',
    description: 'Lanza una estrategia de marketing digital real con presupuesto asignado y métricas verificables.',
    badge: 'Semana 4-6',
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
      </svg>
    ),
    color: 'from-sunrise-400 to-emerald-400',
    bgColor: 'bg-sunrise-50',
    borderColor: 'border-sunrise-200',
  },
  {
    id: 3,
    title: 'Portfolio Verificable',
    description: 'Portafolio público con proyectos reales, testimonios de mentores y métricas de impacto.',
    badge: 'Semana 7-8',
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    color: 'from-emerald-400 to-wisdom-400',
    bgColor: 'bg-emerald-50',
    borderColor: 'border-emerald-200',
  },
]

export function TangibleOutcomes() {
  return (
    <section className="section-padding bg-gradient-to-b from-white to-gray-50">
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
            Resultados{' '}
            <span className="gradient-text bg-gradient-to-r from-coral-400 to-emerald-400 bg-clip-text text-transparent">
              tangibles
            </span>
            {' '}en 8 semanas
          </h2>
          <p className="text-lg text-gray-600">
            No es teoría. Tu hijo termina el programa con proyectos reales que puede mostrar a universidades y empresas.
          </p>
        </motion.div>

        {/* Outcomes Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {outcomes.map((outcome, index) => (
            <motion.div
              key={outcome.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <Card
                hover
                className={`h-full border-2 ${outcome.borderColor} ${outcome.bgColor} transition-all duration-300`}
              >
                <CardHeader>
                  <div className="mb-4">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                      className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${outcome.color} text-white`}
                    >
                      {outcome.icon}
                    </motion.div>
                  </div>
                  <div className="mb-3">
                    <Badge variant="default" className="text-xs">
                      {outcome.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-2xl text-midnight-600">
                    {outcome.title}
                  </CardTitle>
                  <CardDescription className="text-base text-gray-700 mt-2">
                    {outcome.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.2 }}
                    className={`h-1 rounded-full bg-gradient-to-r ${outcome.color}`}
                  />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center bg-midnight-600 text-white rounded-3xl p-8 md:p-12"
        >
          <p className="text-2xl md:text-3xl font-bold mb-4">
            Todos los proyectos son{' '}
            <span className="gradient-text bg-gradient-to-r from-coral-400 to-emerald-400 bg-clip-text text-transparent">
              100% del estudiante
            </span>
          </p>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            No son simulaciones ni ejercicios. Son negocios digitales reales que generan tráfico, conversiones y aprendizajes verificables.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
