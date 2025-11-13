'use client'

import { motion } from 'framer-motion'

const criteria = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    title: 'Jóvenes de 16-20 años',
    description: 'Estudiantes de secundaria o universidad que quieren destacar',
    color: 'coral',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: 'Curiosidad e iniciativa',
    description: 'Ganas de aprender y crear, no se requiere experiencia previa',
    color: 'sunrise',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Compromiso de tiempo',
    description: '10-12 horas semanales durante 8 semanas',
    color: 'emerald',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
    title: 'Internet estable',
    description: '100% remoto con sesiones en vivo y trabajo asíncrono',
    color: 'wisdom',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: 'Becas disponibles',
    description: 'No dejes que el costo sea un impedimento, ofrecemos becas',
    color: 'coral',
  },
]

const colorMap: Record<string, { bg: string; border: string; text: string; gradient: string }> = {
  coral: {
    bg: 'bg-coral-50',
    border: 'border-coral-300',
    text: 'text-coral-600',
    gradient: 'from-coral-400 to-coral-600',
  },
  sunrise: {
    bg: 'bg-sunrise-50',
    border: 'border-sunrise-300',
    text: 'text-sunrise-600',
    gradient: 'from-sunrise-400 to-sunrise-600',
  },
  emerald: {
    bg: 'bg-emerald-50',
    border: 'border-emerald-300',
    text: 'text-emerald-600',
    gradient: 'from-emerald-400 to-emerald-600',
  },
  wisdom: {
    bg: 'bg-wisdom-50',
    border: 'border-wisdom-300',
    text: 'text-wisdom-600',
    gradient: 'from-wisdom-400 to-wisdom-600',
  },
}

export function ForWhom() {
  return (
    <section className="section-padding bg-white">
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
            ¿Es ADVANTAGE para{' '}
            <span className="gradient-text bg-gradient-to-r from-coral-400 to-emerald-400 bg-clip-text text-transparent">
              tu hijo?
            </span>
          </h2>
          <p className="text-lg text-gray-600">
            Requisitos diseñados para ser inclusivos y accesibles
          </p>
        </motion.div>

        {/* Criteria Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {criteria.map((item, index) => {
            const colors = colorMap[item.color]

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`p-6 rounded-2xl border-2 ${colors.border} ${colors.bg} hover:shadow-xl transition-all duration-300 group hover:scale-105`}
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${colors.gradient} text-white mb-4`}
                >
                  {item.icon}
                </motion.div>
                <h3 className={`text-xl font-bold ${colors.text} mb-2`}>
                  {item.title}
                </h3>
                <p className="text-gray-700">
                  {item.description}
                </p>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-gradient-to-r from-coral-500 to-emerald-500 text-white rounded-2xl px-8 py-6 shadow-2xl">
            <p className="text-2xl font-bold mb-2">
              No se requiere experiencia técnica previa
            </p>
            <p className="text-lg opacity-90">
              Solo ganas de aprender, crear y destacar
            </p>
          </div>
        </motion.div>

        {/* Scholarship CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-12 text-center bg-midnight-600 text-white rounded-3xl p-8 md:p-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <svg className="w-8 h-8 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="text-2xl md:text-3xl font-bold">
              Programa de Becas
            </h3>
          </div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-6">
            Ofrecemos becas parciales y completas basadas en mérito y necesidad. No dejes que el costo sea una barrera para el futuro de tu hijo.
          </p>
          <button className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-8 py-4 rounded-xl transition-all hover:scale-105">
            Consultar sobre becas
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </motion.div>
      </div>
    </section>
  )
}
