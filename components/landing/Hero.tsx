'use client'

import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { motion } from 'framer-motion'
import Image from 'next/image'

export function Hero() {
  const scrollToApplication = () => {
    const form = document.getElementById('application')
    form?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToProjects = () => {
    const projects = document.getElementById('projects')
    projects?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-midnight-600 via-midnight-700 to-midnight-900">
      {/* Background Video */}
      <div className="absolute inset-0 opacity-20">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/advantagehero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-midnight-900 via-midnight-900/50 to-transparent z-10" />
      </div>

      {/* Floating Badge */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="absolute top-24 md:top-32 left-1/2 -translate-x-1/2 z-20"
      >
        <Badge variant="warning" className="text-sm md:text-base px-4 md:px-6 py-2 md:py-3 backdrop-blur-sm bg-sunrise-500/90 text-white shadow-xl">
          🎯 Solo 40 cupos | Cohort 1 | Cierre: 15 Feb 2026
        </Badge>
      </motion.div>

      {/* Content */}
      <div className="container-custom relative z-10 pt-32 md:pt-20 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-white space-y-8"
          >
            <h1 className="text-hero-mobile md:text-hero font-black leading-tight">
              Tu hijo puede{' '}
              <span className="gradient-text bg-gradient-to-r from-coral-400 via-sunrise-400 to-emerald-400 bg-clip-text text-transparent">
                liderar el futuro
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-2xl">
              En 8 semanas, construye su primer negocio digital con mentoría de{' '}
              <span className="text-emerald-400 font-semibold">CEOs y líderes de empresas top</span>.
              Portfolio real, no teoría.
            </p>

            {/* Trust Bar - Company Logos */}
            <div className="flex flex-wrap items-center gap-6 py-4">
              <span className="text-sm text-gray-400 uppercase tracking-wide">Mentores de:</span>
              <div className="flex flex-wrap items-center gap-4 md:gap-6">
                <div className="h-8 w-24 bg-white/10 rounded flex items-center justify-center text-white text-xs font-semibold backdrop-blur-sm">
                  Prisma
                </div>
                <div className="h-8 w-24 bg-white/10 rounded flex items-center justify-center text-white text-xs font-semibold backdrop-blur-sm">
                  Intercorp
                </div>
                <div className="h-8 w-20 bg-white/10 rounded flex items-center justify-center text-white text-xs font-semibold backdrop-blur-sm">
                  BCP
                </div>
                <div className="h-8 w-24 bg-white/10 rounded flex items-center justify-center text-white text-xs font-semibold backdrop-blur-sm">
                  Alicorp
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                onClick={scrollToApplication}
                size="xl"
                className="group relative overflow-hidden"
              >
                <span className="relative z-10">Aplicar a Cohort Marzo 2026</span>
                <div className="absolute inset-0 bg-gradient-to-r from-coral-600 to-sunrise-600 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Button>

              <Button
                onClick={scrollToProjects}
                variant="secondary"
                size="xl"
                className="backdrop-blur-sm bg-white/5 border-white/30 text-white hover:bg-white/10"
              >
                Ver Proyectos Reales
              </Button>
            </div>

            {/* Social Proof Metrics */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/20">
              <div>
                <div className="text-3xl md:text-4xl font-bold text-emerald-400">85%+</div>
                <div className="text-sm text-gray-400 mt-1">Tasa de completitud</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-emerald-400">100%</div>
                <div className="text-sm text-gray-400 mt-1">Publican su landing</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-emerald-400">50%+</div>
                <div className="text-sm text-gray-400 mt-1">Oportunidad en 3 meses</div>
              </div>
            </div>
          </motion.div>

          {/* Right: Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative hidden lg:block"
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              {/* Placeholder for student working image */}
              <div className="absolute inset-0 bg-gradient-to-br from-coral-500/20 to-emerald-500/20 backdrop-blur-3xl" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-white/40 text-center">
                  <div className="text-6xl mb-4">🚀</div>
                  <div className="text-xl font-semibold">Student Success Story</div>
                  <div className="text-sm mt-2">Video/Image Placeholder</div>
                </div>
              </div>

              {/* Floating Achievement Cards */}
              <div className="absolute top-8 right-8 bg-white rounded-lg p-4 shadow-xl animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-2xl">
                    💰
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">Revenue Generated</div>
                    <div className="text-lg font-bold text-gray-900">S/ 2,400</div>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-8 left-8 bg-white rounded-lg p-4 shadow-xl animate-float" style={{ animationDelay: '1s' }}>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-wisdom-100 flex items-center justify-center text-2xl">
                    👥
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">Page Visitors</div>
                    <div className="text-lg font-bold text-gray-900">1,200+</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="flex flex-col items-center gap-2 text-white/60">
          <span className="text-sm">Descubre más</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2"
          >
            <div className="w-1.5 h-3 bg-white/60 rounded-full" />
          </motion.div>
        </div>
      </motion.div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}
