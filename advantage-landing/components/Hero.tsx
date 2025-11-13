"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-black overflow-hidden">
      {/* Subtle Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#F59E0B] opacity-10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#47FFBF] opacity-10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-32">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8">
              <span className="text-lg">🎯</span>
              <span className="text-sm font-medium text-gray-300">Programa de 8 Semanas · 40 Cupos</span>
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight leading-tight"
          >
            Transforma a tu hijo<br />en un{" "}
            <span className="bg-gradient-to-r from-[#F59E0B] to-[#FF8C42] bg-clip-text text-transparent">
              líder con mentalidad CEO
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            8 semanas de mentoría con CEOs reales. Construirá un negocio digital,
            generará sus primeros ingresos y desarrollará habilidades de liderazgo.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <a
              href="#aplicar"
              className="group px-8 py-4 bg-[#47FFBF] text-black font-semibold rounded-lg hover:bg-white transition-all duration-300 inline-flex items-center justify-center gap-2"
            >
              Aplica Ahora
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
            <a
              href="#programa"
              className="px-8 py-4 bg-white/5 text-white font-semibold rounded-lg hover:bg-white/10 border border-white/10 transition-all duration-300 inline-flex items-center justify-center gap-2"
            >
              Ver Programa
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-3 gap-8 pt-12 border-t border-white/10"
          >
            {[
              { value: "85%", label: "Tasa de finalización" },
              { value: "40", label: "Cupos disponibles" },
              { value: "S/400", label: "Ingresos promedio" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl font-bold text-[#F59E0B] mb-2 font-mono">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
