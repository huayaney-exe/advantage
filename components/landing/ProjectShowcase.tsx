'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { projects, projectCategories } from '@/lib/data/projects'
import { Badge } from '@/components/ui/Badge'

export function ProjectShowcase() {
  const [activeCategory, setActiveCategory] = useState('all')

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(p => p.category === activeCategory)

  return (
    <section id="projects" className="section-padding bg-gradient-to-b from-white to-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-section-mobile md:text-section font-black text-midnight-600 mb-4">
            Proyectos{' '}
            <span className="gradient-text bg-gradient-to-r from-coral-400 to-emerald-400 bg-clip-text text-transparent">
              reales
            </span>
            {' '}de estudiantes
          </h2>
          <p className="text-lg text-gray-600">
            Negocios digitales funcionales creados en 8 semanas
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {projectCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-coral-500 to-sunrise-500 text-white shadow-lg scale-105'
                  : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-coral-300 hover:shadow-md'
              }`}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white rounded-3xl overflow-hidden shadow-lg border-2 border-gray-100 hover:border-coral-300 transition-all duration-300 hover:shadow-2xl hover:scale-105">
                  {/* Project Screenshot */}
                  <div className="relative h-48 bg-gradient-to-br from-coral-100 to-emerald-100 overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center p-6">
                        <div className="w-16 h-16 mx-auto mb-3 rounded-2xl bg-gradient-to-br from-coral-400 to-emerald-400 flex items-center justify-center">
                          <span className="text-2xl font-black text-white">
                            {project.name.slice(0, 2).toUpperCase()}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 font-medium">
                          {project.category}
                        </p>
                      </div>
                    </div>
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-midnight-900/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6">
                      <div className="text-center text-white">
                        <p className="text-sm mb-2 opacity-90">
                          "{project.description}"
                        </p>
                        <p className="text-xs font-semibold text-coral-300">
                          - {project.studentName}, {project.studentAge} años
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-xl font-bold text-midnight-600 mb-1">
                          {project.name}
                        </h3>
                        <p className="text-sm text-gray-600">
                          por {project.studentName}
                        </p>
                      </div>
                      <Badge variant="default" className="text-xs">
                        {project.studentAge} años
                      </Badge>
                    </div>

                    {/* Metrics */}
                    {project.metrics && (
                      <div className="grid grid-cols-3 gap-3 pt-4 border-t-2 border-gray-100">
                        <div className="text-center">
                          <div className="text-lg font-black text-coral-600">
                            {project.metrics.visitors ? (project.metrics.visitors / 1000).toFixed(1) + 'K' : '-'}
                          </div>
                          <div className="text-xs text-gray-600 font-medium">
                            Visitas
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-black text-emerald-600">
                            {project.metrics.conversions || '-'}
                          </div>
                          <div className="text-xs text-gray-600 font-medium">
                            Conversiones
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-black text-sunrise-600">
                            {project.metrics.revenue ? project.metrics.revenue.replace('S/ ', '') : '-'}
                          </div>
                          <div className="text-xs text-gray-600 font-medium">
                            Ingresos
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center bg-midnight-600 text-white rounded-3xl p-8 md:p-12"
        >
          <p className="text-2xl md:text-3xl font-bold mb-4">
            Tu hijo puede crear el{' '}
            <span className="gradient-text bg-gradient-to-r from-coral-400 to-emerald-400 bg-clip-text text-transparent">
              próximo proyecto destacado
            </span>
          </p>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-6">
            Cada cohort produce entre 30-40 proyectos digitales funcionales con métricas reales
          </p>
          <div className="flex items-center justify-center gap-8 text-sm">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Proyectos verificables</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-coral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span>Métricas reales</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
