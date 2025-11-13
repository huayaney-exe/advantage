import { Navigation } from '@/components/shared/Navigation'
import { PromoBanner } from '@/components/shared/PromoBanner'
import { Hero } from '@/components/landing/Hero'
import { ProblemSolution } from '@/components/landing/ProblemSolution'
import { TangibleOutcomes } from '@/components/landing/TangibleOutcomes'
import { HowItWorks } from '@/components/landing/HowItWorks'
import { Mentors } from '@/components/landing/Mentors'
import { ForWhom } from '@/components/landing/ForWhom'
import { ProjectShowcase } from '@/components/landing/ProjectShowcase'
import { Testimonials } from '@/components/landing/Testimonials'
import { FAQ } from '@/components/landing/FAQ'
import { FinalCTA } from '@/components/landing/FinalCTA'
import { Footer } from '@/components/shared/Footer'

export default function LandingPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <PromoBanner />
      <Hero />
      <ProblemSolution />
      <TangibleOutcomes />
      <HowItWorks />
      <Mentors />
      <ForWhom />
      <ProjectShowcase />
      <Testimonials />
      <FAQ />
      <FinalCTA />

      {/* Application Form - Placeholder for now */}
      <section id="application" className="section-padding bg-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold text-midnight-600 mb-4">Formulario de aplicación</h2>
          <p className="text-gray-600">Próximamente: Formulario de aplicación completo</p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
