'use client'

import { motion } from 'framer-motion'
import { mentors } from '@/lib/data/mentors'
import Image from 'next/image'

export function Mentors() {
  return (
    <section id="mentors" className="section-padding bg-gradient-to-b from-gray-50 to-white">
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
            Aprende de los{' '}
            <span className="gradient-text bg-gradient-to-r from-coral-400 to-emerald-400 bg-clip-text text-transparent">
              mejores
            </span>
          </h2>
          <p className="text-lg text-gray-600">
            Mentores que lideran en las empresas más importantes del Perú
          </p>
        </motion.div>

        {/* Mentors Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mentors.map((mentor, index) => (
            <motion.div
              key={mentor.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-3xl p-6 shadow-lg border-2 border-gray-100 hover:border-coral-300 transition-all duration-300 hover:shadow-2xl hover:scale-105">
                {/* Mentor Photo */}
                <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-coral-200 group-hover:border-coral-400 transition-colors">
                  <div className="w-full h-full bg-gradient-to-br from-coral-200 to-emerald-200 flex items-center justify-center">
                    <span className="text-4xl font-black text-midnight-600">
                      {mentor.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                </div>

                {/* Mentor Info */}
                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold text-midnight-600 mb-1">
                    {mentor.name}
                  </h3>
                  <p className="text-sm text-coral-600 font-semibold mb-2">
                    {mentor.title}
                  </p>
                  <div className="flex items-center justify-center gap-2 text-gray-600">
                    <div className="w-6 h-6 bg-gray-200 rounded flex items-center justify-center">
                      <span className="text-xs font-bold">
                        {mentor.company.slice(0, 1)}
                      </span>
                    </div>
                    <span className="text-sm font-medium">{mentor.company}</span>
                  </div>
                </div>

                {/* Quote (if available) */}
                {mentor.quote && (
                  <div className="border-t-2 border-gray-100 pt-4">
                    <p className="text-sm text-gray-700 italic line-clamp-3">
                      "{mentor.quote}"
                    </p>
                  </div>
                )}

                {/* LinkedIn Link (if available) */}
                {mentor.linkedin && (
                  <div className="mt-4 text-center">
                    <a
                      href={mentor.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-coral-600 hover:text-coral-700 font-semibold transition-colors"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                      Ver perfil
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center bg-midnight-600 text-white rounded-3xl p-8 md:p-12"
        >
          <p className="text-2xl md:text-3xl font-bold mb-4">
            Cada estudiante tiene un{' '}
            <span className="gradient-text bg-gradient-to-r from-coral-400 to-emerald-400 bg-clip-text text-transparent">
              mentor dedicado
            </span>
          </p>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Ratio 1:5 mentor-estudiante para garantizar atención personalizada y seguimiento semanal
          </p>
        </motion.div>
      </div>
    </section>
  )
}
