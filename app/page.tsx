import { Hero } from '@/components/landing/Hero'

export default function LandingPage() {
  return (
    <main className="min-h-screen">
      <Hero />

      {/* Temporary placeholder sections */}
      <section id="problem-solution" className="section-padding bg-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-4">Problem & Solution</h2>
          <p className="text-gray-600">Coming soon...</p>
        </div>
      </section>

      <section id="outcomes" className="section-padding bg-gray-50">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-4">What They'll Build</h2>
          <p className="text-gray-600">Coming soon...</p>
        </div>
      </section>

      <section id="how-it-works" className="section-padding bg-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-gray-600">Coming soon...</p>
        </div>
      </section>

      <section id="mentors" className="section-padding bg-gray-50">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-4">Meet The Mentors</h2>
          <p className="text-gray-600">Coming soon...</p>
        </div>
      </section>

      <section id="projects" className="section-padding bg-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-4">Real Projects</h2>
          <p className="text-gray-600">Coming soon...</p>
        </div>
      </section>

      <section id="testimonials" className="section-padding bg-gray-50">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-4">What People Say</h2>
          <p className="text-gray-600">Coming soon...</p>
        </div>
      </section>

      <section id="faq" className="section-padding bg-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-4">FAQ</h2>
          <p className="text-gray-600">Coming soon...</p>
        </div>
      </section>

      <section id="application" className="section-padding bg-midnight-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-4">Apply Now</h2>
          <p>Coming soon...</p>
        </div>
      </section>
    </main>
  )
}
