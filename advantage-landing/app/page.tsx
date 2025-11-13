import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import ApplicationForm from "@/components/ApplicationForm";

export default function Home() {
  return (
    <main className="min-h-screen bg-prisma-black text-prisma-white">
      {/* Hero Section */}
      <Hero />

      {/* Problem/Solution Section */}
      <section className="py-24 bg-prisma-black" id="problema">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Del <span className="text-gray-500 line-through">miedo</span> al{" "}
              <span className="text-advantage-gold">liderazgo</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Muchos jóvenes tienen potencial, pero carecen de dirección, experiencia real y mentoría que los prepare para el futuro profesional.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Before */}
            <div className="glass rounded-2xl p-8 border-2 border-red-900/30">
              <div className="text-3xl mb-4">😰</div>
              <h3 className="text-2xl font-bold mb-4 text-red-400">Antes</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start gap-3">
                  <span className="text-red-500 flex-shrink-0">✗</span>
                  <span>Ideas sin estructura ni dirección clara</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 flex-shrink-0">✗</span>
                  <span>Solo teoría, sin experiencia práctica</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 flex-shrink-0">✗</span>
                  <span>Falta de confianza para tomar decisiones</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 flex-shrink-0">✗</span>
                  <span>Sin mentoría ni contacto con el mundo real</span>
                </li>
              </ul>
            </div>

            {/* After */}
            <div className="glass rounded-2xl p-8 border-2 border-advantage-gold/30">
              <div className="text-3xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold mb-4 text-advantage-gold">Después</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-advantage-gold flex-shrink-0">✓</span>
                  <span>Negocio digital real y funcionando</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-advantage-gold flex-shrink-0">✓</span>
                  <span>Experiencia práctica construyendo proyectos</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-advantage-gold flex-shrink-0">✓</span>
                  <span>Mentalidad CEO: toma decisiones con confianza</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-advantage-gold flex-shrink-0">✓</span>
                  <span>Mentoría directa de CEOs exitosos</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What They Build Section */}
      <section className="py-24 bg-gray-900" id="programa">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Lo que tu hijo <span className="text-advantage-gold">construirá</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Resultados tangibles que demuestran su nueva capacidad
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="glass rounded-2xl p-8 text-center hover:scale-105 transition-standard">
              <div className="text-5xl mb-4">💼</div>
              <h3 className="text-xl font-bold mb-3">Negocio Digital</h3>
              <p className="text-gray-400">
                Un proyecto real que genera ingresos desde la primera semana
              </p>
            </div>

            <div className="glass rounded-2xl p-8 text-center hover:scale-105 transition-standard">
              <div className="text-5xl mb-4">🎨</div>
              <h3 className="text-xl font-bold mb-3">Portafolio Profesional</h3>
              <p className="text-gray-400">
                Landing page personal mostrando sus proyectos y habilidades
              </p>
            </div>

            <div className="glass rounded-2xl p-8 text-center hover:scale-105 transition-standard">
              <div className="text-5xl mb-4">📊</div>
              <h3 className="text-xl font-bold mb-3">Primeros Ingresos</h3>
              <p className="text-gray-400">
                Promedio de <span className="metric-text text-advantage-gold font-bold">S/400</span> generados durante el programa
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-prisma-black" id="como-funciona">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Cómo funciona el <span className="text-advantage-gold">programa</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              8 semanas de transformación con mentoría real
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {[
              {
                week: "Semanas 1-2",
                title: "Fundamentos & Mentalidad",
                description: "Desarrollo de mentalidad CEO, identificación de oportunidades y validación de ideas de negocio.",
                icon: "🎯",
              },
              {
                week: "Semanas 3-4",
                title: "Construcción & Lanzamiento",
                description: "Creación del negocio digital, desarrollo de portafolio y primeras ventas con mentoría constante.",
                icon: "🚀",
              },
              {
                week: "Semanas 5-6",
                title: "Crecimiento & Optimización",
                description: "Estrategias de marketing, gestión de operaciones y escalamiento del negocio.",
                icon: "📈",
              },
              {
                week: "Semanas 7-8",
                title: "Consolidación & Futuro",
                description: "Refinamiento de habilidades, networking con mentores y presentación final de proyectos.",
                icon: "🏆",
              },
            ].map((phase, index) => (
              <div
                key={index}
                className="glass rounded-2xl p-8 flex items-start gap-6 hover:border-advantage-gold/30 transition-colors"
              >
                <div className="text-5xl flex-shrink-0">{phase.icon}</div>
                <div className="flex-1">
                  <div className="text-sm text-advantage-gold font-semibold mb-2">
                    {phase.week}
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{phase.title}</h3>
                  <p className="text-gray-400 leading-relaxed">
                    {phase.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-500 text-sm">
              Incluye: Sesiones semanales con CEOs + Workshops prácticos + Comunidad privada + Recursos digitales
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* FAQ */}
      <FAQ />

      {/* Application Form Section */}
      <section className="py-24 bg-prisma-black" id="aplicar">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Únete al próximo <span className="text-advantage-gold">cohorte</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
              Solo <span className="metric-text text-advantage-gold font-bold">40 cupos</span> disponibles. Aplica ahora y recibe una llamada en 24 horas.
            </p>
          </div>

          <ApplicationForm />
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-b from-gray-900 to-prisma-black">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              El momento de actuar es <span className="text-advantage-gold">ahora</span>
            </h2>
            <p className="text-xl text-gray-400 mb-12">
              Cada cohorte tiene cupos limitados. No dejes que tu hijo pierda esta oportunidad de transformar su futuro.
            </p>
            <a
              href="#aplicar"
              className="btn-cta px-12 py-5 rounded-lg font-semibold text-xl touch-target inline-flex items-center gap-3 hover:scale-105 transition-standard"
            >
              Aplicar al Programa
              <span className="text-2xl">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">
                ADVANTAGE <span className="text-advantage-gold">by Prisma</span>
              </h3>
              <p className="text-gray-500 text-sm">
                Transformando jóvenes en líderes con mentalidad CEO
              </p>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-500 text-sm">
                © 2024 Prisma. Todos los derechos reservados.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
