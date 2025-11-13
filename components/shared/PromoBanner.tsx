'use client'

export function PromoBanner() {
  return (
    <div className="fixed top-20 left-0 right-0 z-40 bg-gradient-to-r from-coral-500 to-sunrise-500 text-white shadow-lg">
      <div className="container-custom">
        <div className="flex items-center justify-center gap-2 py-3 md:py-3.5">
          <span className="text-lg md:text-xl">⚡</span>
          <p className="text-sm md:text-base font-bold text-center">
            Solo 40 cupos | Cohort 1 | Cierre: 15 Feb 2026
          </p>
        </div>
      </div>
    </div>
  )
}
