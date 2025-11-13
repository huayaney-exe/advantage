'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { testimonials } from '@/lib/data/testimonials'

const roleLabels = {
  parent: 'Padre/Madre',
  student: 'Estudiante',
  mentor: 'Mentor',
}

const roleColors = {
  parent: 'from-coral-400 to-coral-600',
  student: 'from-emerald-400 to-emerald-600',
  mentor: 'from-wisdom-400 to-wisdom-600',
}

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  // Auto-rotate testimonials every 5 seconds
  useEffect(() => {
    if (isPaused) return

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isPaused])

  const activeTestimonial = testimonials[activeIndex]

  const goToPrevious = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

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
            Lo que dicen{' '}
            <span className="gradient-text bg-gradient-to-r from-coral-400 to-emerald-400 bg-clip-text text-transparent">
              nuestras familias
            </span>
          </h2>
          <p className="text-lg text-gray-600">
            Historias reales de padres, estudiantes y mentores
          </p>
        </motion.div>

        {/* Main Carousel */}
        <div
          className="relative max-w-5xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 md:p-12 shadow-2xl border-2 border-gray-100"
            >
              {/* Role Badge */}
              <div className="flex items-center justify-center mb-6">
                <div className={`inline-flex px-4 py-2 rounded-full bg-gradient-to-r ${roleColors[activeTestimonial.role]} text-white font-semibold text-sm uppercase tracking-wide`}>
                  {roleLabels[activeTestimonial.role]}
                  {activeTestimonial.age && ` • ${activeTestimonial.age} años`}
                </div>
              </div>

              {/* Rating Stars */}
              <div className="flex items-center justify-center gap-1 mb-6">
                {Array.from({ length: activeTestimonial.rating }).map((_, i) => (
                  <svg
                    key={i}
                    className="w-6 h-6 text-sunrise-500"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <div className="text-center mb-8">
                <p className="text-2xl md:text-3xl font-bold text-midnight-600 leading-relaxed mb-4">
                  "{activeTestimonial.longQuote || activeTestimonial.quote}"
                </p>
              </div>

              {/* Profile */}
              <div className="flex flex-col items-center">
                {/* Photo placeholder */}
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-coral-300 to-emerald-300 flex items-center justify-center mb-4 border-4 border-white shadow-lg">
                  <span className="text-2xl font-black text-midnight-600">
                    {activeTestimonial.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-midnight-600 mb-1">
                  {activeTestimonial.name}
                </h3>

                {/* Outcome */}
                {activeTestimonial.outcome && (
                  <p className="text-sm text-emerald-600 font-semibold">
                    ✓ {activeTestimonial.outcome}
                  </p>
                )}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-16 w-12 h-12 rounded-full bg-white shadow-xl border-2 border-gray-200 flex items-center justify-center text-midnight-600 hover:bg-coral-50 hover:border-coral-300 transition-all"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-16 w-12 h-12 rounded-full bg-white shadow-xl border-2 border-gray-200 flex items-center justify-center text-midnight-600 hover:bg-coral-50 hover:border-coral-300 transition-all"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Dots Navigation */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? 'bg-gradient-to-r from-coral-500 to-emerald-500 w-8'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid md:grid-cols-3 gap-8 text-center"
        >
          <div className="p-6 rounded-2xl bg-gradient-to-br from-coral-50 to-coral-100 border-2 border-coral-200">
            <div className="text-4xl font-black text-coral-600 mb-2">4.9/5</div>
            <div className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
              Satisfacción de padres
            </div>
          </div>
          <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-50 to-emerald-100 border-2 border-emerald-200">
            <div className="text-4xl font-black text-emerald-600 mb-2">95%</div>
            <div className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
              Recomendarían el programa
            </div>
          </div>
          <div className="p-6 rounded-2xl bg-gradient-to-br from-wisdom-50 to-wisdom-100 border-2 border-wisdom-200">
            <div className="text-4xl font-black text-wisdom-600 mb-2">200+</div>
            <div className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
              Estudiantes graduados
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
