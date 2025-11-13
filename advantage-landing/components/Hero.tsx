"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-32 pb-20">
      {/* Background Gradient */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#F59E0B] rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#47FFBF] rounded-full blur-[150px]" />
      </div>

      <div className="container relative z-10 text-center px-6 max-w-6xl mx-auto">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-[#F59E0B]/10 border border-[#F59E0B]/30 rounded-full px-6 py-3 mb-12"
        >
          <span className="text-2xl">🎯</span>
          <span className="text-base font-medium text-[#F59E0B] font-inter">
            Programa de 8 Semanas
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-[1.1] font-inter"
          style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}
        >
          Transforma a tu hijo en un{" "}
          <span className="text-[#F59E0B]">líder con mentalidad CEO</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-400 max-w-4xl mx-auto mb-16 leading-relaxed font-inter"
          style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}
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
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20"
        >
          <a
            href="#aplicar"
            className="w-full sm:w-auto bg-[#47FFBF] text-black px-10 py-5 rounded-xl font-semibold text-lg inline-flex items-center justify-center gap-3 hover:bg-white hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-[0_0_40px_rgba(71,255,191,0.3)] min-h-[64px]"
            style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}
          >
            Aplica Ahora
            <span className="text-xl">→</span>
          </a>
          <a
            href="#programa"
            className="w-full sm:w-auto bg-transparent border-2 border-gray-700 text-white px-10 py-5 rounded-xl font-semibold text-lg inline-flex items-center justify-center gap-3 hover:border-[#F59E0B] hover:text-[#F59E0B] transition-all duration-300 min-h-[64px]"
            style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}
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
          className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl mx-auto"
        >
          <div className="text-center">
            <div
              className="text-5xl md:text-6xl font-bold text-[#F59E0B] mb-3"
              style={{ fontFamily: 'var(--font-jetbrains-mono), monospace' }}
            >
              85%
            </div>
            <p className="text-gray-500 text-lg font-inter">Tasa de finalización</p>
          </div>
          <div className="text-center">
            <div
              className="text-5xl md:text-6xl font-bold text-[#F59E0B] mb-3"
              style={{ fontFamily: 'var(--font-jetbrains-mono), monospace' }}
            >
              40
            </div>
            <p className="text-gray-500 text-lg font-inter">Cupos por cohorte</p>
          </div>
          <div className="text-center">
            <div
              className="text-5xl md:text-6xl font-bold text-[#F59E0B] mb-3"
              style={{ fontFamily: 'var(--font-jetbrains-mono), monospace' }}
            >
              S/400
            </div>
            <p className="text-gray-500 text-lg font-inter">Ingresos promedio generados</p>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-3 text-gray-600">
          <span className="text-sm font-inter">Conoce más</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-3xl"
          >
            ↓
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
