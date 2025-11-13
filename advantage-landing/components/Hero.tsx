"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-prisma-black pt-20">
      {/* Background Gradient */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-advantage-gold/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-prisma-cyan/10 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 text-center px-6">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-advantage-gold/10 border border-advantage-gold/30 rounded-full px-6 py-2 mb-8"
        >
          <span className="text-2xl">🎯</span>
          <span className="text-sm font-medium text-advantage-gold">
            Programa de 8 Semanas
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
        >
          Transforma a tu hijo en un{" "}
          <span className="text-advantage-gold">líder con mentalidad CEO</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12"
        >
          8 semanas de mentoría con CEOs reales. Tu hijo construirá un negocio
          digital desde cero, generará sus primeros ingresos y desarrollará
          habilidades que lo prepararán para el futuro.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <a
            href="#aplicar"
            className="btn-cta px-8 py-4 rounded-lg font-semibold text-lg touch-target inline-flex items-center justify-center gap-2 hover:scale-105 transition-standard"
          >
            Aplica Ahora
            <span className="text-xl">→</span>
          </a>
          <a
            href="#programa"
            className="bg-transparent border-2 border-gray-700 text-prisma-white px-8 py-4 rounded-lg font-semibold text-lg touch-target inline-flex items-center justify-center gap-2 hover:border-advantage-gold hover:text-advantage-gold transition-standard"
          >
            Ver Programa
            <span className="text-xl">↓</span>
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto"
        >
          <div className="text-center">
            <div className="metric-text text-4xl md:text-5xl font-bold text-advantage-gold mb-2">
              85%
            </div>
            <p className="text-gray-500">Tasa de finalización</p>
          </div>
          <div className="text-center">
            <div className="metric-text text-4xl md:text-5xl font-bold text-advantage-gold mb-2">
              40
            </div>
            <p className="text-gray-500">Cupos por cohorte</p>
          </div>
          <div className="text-center">
            <div className="metric-text text-4xl md:text-5xl font-bold text-advantage-gold mb-2">
              S/400
            </div>
            <p className="text-gray-500">Ingresos promedio generados</p>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2 text-gray-600">
          <span className="text-sm">Conoce más</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-2xl"
          >
            ↓
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
