'use client'

import { motion } from 'framer-motion'
import { XMarkIcon, CheckIcon } from '@heroicons/react/24/outline'

const problems = [
  'Memorizar fechas y fórmulas',
  'Exámenes estandarizados',
  'Teoría sin aplicación',
  'Aprendizaje pasivo',
  'Sin contacto empresarial',
]

const solutions = [
  'Resolver problemas reales de clientes',
  'Construir productos digitales funcionales',
  'Aprender haciendo, con mentores',
  'Tomar decisiones empresariales',
  'Networking con CEOs y ejecutivos',
]

export function ProblemSolution() {
  return (
    <section className="section-padding relative overflow-hidden">
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
            El problema con la educación tradicional
          </h2>
          <p className="text-lg text-gray-600">
            Existe una brecha enorme entre lo que se enseña y lo que el mercado necesita
          </p>
        </motion.div>

        {/* Split Screen Layout */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-0 relative">
          {/* Problem Side (Left) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gray-100 rounded-3xl lg:rounded-r-none p-8 md:p-12 relative"
            style={{ filter: 'grayscale(50%) opacity(0.9)' }}
          >
            <div className="space-y-6">
              <div className="inline-block bg-gray-300 text-gray-700 px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wide">
                Lo que las escuelas enseñan
              </div>

              <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
                Preparación para exámenes, no para la vida
              </h3>

              <ul className="space-y-4">
                {problems.map((problem, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start gap-3 text-gray-700"
                  >
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gray-400 flex items-center justify-center mt-1">
                      <XMarkIcon className="w-4 h-4 text-white" strokeWidth={2.5} />
                    </div>
                    <span className="text-lg line-through decoration-2 decoration-gray-400">
                      {problem}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Solution Side (Right) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-3xl lg:rounded-l-none p-8 md:p-12 relative border-4 border-coral-500 shadow-xl"
          >
            <div className="space-y-6">
              <div className="inline-block bg-gradient-to-r from-coral-500 to-sunrise-500 text-white px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wide">
                Lo que ADVANTAGE enseña
              </div>

              <h3 className="text-3xl md:text-4xl font-bold text-midnight-600 mb-8">
                Habilidades que las empresas{' '}
                <span className="gradient-text bg-gradient-to-r from-coral-400 to-emerald-400 bg-clip-text text-transparent">
                  realmente buscan
                </span>
              </h3>

              <ul className="space-y-4">
                {solutions.map((solution, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start gap-3 text-midnight-600"
                  >
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center mt-1">
                      <CheckIcon className="w-4 h-4 text-white" strokeWidth={2.5} />
                    </div>
                    <span className="text-lg font-medium">{solution}</span>
                  </motion.li>
                ))}
              </ul>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="pt-6 mt-6 border-t-2 border-coral-200"
              >
                <p className="text-coral-600 font-semibold text-lg">
                  Resultado: Tu hijo construye un negocio digital real en 8 semanas
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Bridge Connector (Desktop only) */}
          <div className="hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="w-16 h-16 rounded-full bg-gradient-to-r from-coral-500 to-emerald-500 flex items-center justify-center shadow-2xl"
            >
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
