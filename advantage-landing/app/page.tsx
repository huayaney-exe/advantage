import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import ApplicationForm from "@/components/ApplicationForm";

export default function Home() {
  return (
    <main className="bg-black text-white">
      <Hero />

      {/* Problem/Solution */}
      <section className="py-24 bg-zinc-950" id="problema">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Del <span className="text-gray-600 line-through">potencial sin dirección</span>{" "}
              al <span className="text-[#F59E0B]">liderazgo real</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              La mayoría de jóvenes tienen ideas, pero les falta experiencia práctica y mentoría real
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-white/5 border border-red-900/20 rounded-2xl p-8">
              <div className="text-4xl mb-4">😰</div>
              <h3 className="text-2xl font-bold mb-6">Antes</h3>
              <ul className="space-y-4 text-gray-400">
                {[
                  "Solo teoría, sin práctica real",
                  "Ideas sin estructura ni rumbo",
                  "Falta de confianza para ejecutar",
                  "Sin mentoría de experiencia real",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-red-500 mt-1">✕</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white/5 border border-[#F59E0B]/20 rounded-2xl p-8">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold mb-6 text-[#F59E0B]">Después</h3>
              <ul className="space-y-4">
                {[
                  "Negocio digital real funcionando",
                  "Estructura y método de trabajo",
                  "Mentalidad CEO con confianza",
                  "Mentoría de CEOs exitosos",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-[#47FFBF] mt-1">✓</span>
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What They Build */}
      <section className="py-24 bg-black" id="programa">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Lo que <span className="text-[#F59E0B]">construirá</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Resultados tangibles que demuestran sus nuevas capacidades
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: "💼",
                title: "Negocio Digital",
                desc: "Un proyecto real que genera ingresos desde la primera semana",
              },
              {
                icon: "🎨",
                title: "Portafolio Profesional",
                desc: "Landing page mostrando sus proyectos y habilidades",
              },
              {
                icon: "💰",
                title: "Primeros Ingresos",
                desc: (
                  <>
                    Promedio de{" "}
                    <span className="font-mono font-bold text-[#F59E0B]">
                      S/400
                    </span>{" "}
                    generados
                  </>
                ),
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center hover:border-[#F59E0B]/30 transition-colors"
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-zinc-950" id="como-funciona">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              <span className="text-[#F59E0B]">8 semanas</span> de transformación
            </h2>
            <p className="text-xl text-gray-400">
              Mentoría real · Proyectos prácticos · Habilidades de liderazgo
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                weeks: "Semanas 1-2",
                title: "Fundamentos & Mentalidad",
                desc: "Mentalidad CEO, identificación de oportunidades y validación de ideas",
              },
              {
                weeks: "Semanas 3-4",
                title: "Construcción & Lanzamiento",
                desc: "Creación del negocio digital, portafolio y primeras ventas con mentoría",
              },
              {
                weeks: "Semanas 5-6",
                title: "Crecimiento & Optimización",
                desc: "Marketing, gestión de operaciones y escalamiento del negocio",
              },
              {
                weeks: "Semanas 7-8",
                title: "Consolidación & Futuro",
                desc: "Refinamiento, networking con mentores y presentación final",
              },
            ].map((phase, i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-[#F59E0B]/30 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[#F59E0B]/10 border border-[#F59E0B]/20 flex items-center justify-center text-[#F59E0B] font-bold">
                    {i + 1}
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-[#F59E0B] font-semibold mb-1">
                      {phase.weeks}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{phase.title}</h3>
                    <p className="text-gray-400">{phase.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />
      <FAQ />

      {/* Application Form */}
      <section className="py-24 bg-black" id="aplicar">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Aplica al <span className="text-[#F59E0B]">programa</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Solo <span className="font-mono font-bold text-[#F59E0B]">40 cupos</span> disponibles.
              Te contactaremos en 24 horas
            </p>
          </div>
          <ApplicationForm />
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-b from-zinc-950 to-black">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Da el primer paso <span className="text-[#F59E0B]">hoy</span>
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Cada cohorte tiene cupos limitados. No pierdas esta oportunidad
          </p>
          <a
            href="#aplicar"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#47FFBF] text-black font-semibold rounded-lg hover:bg-white transition-all duration-300"
          >
            Aplicar Ahora
            <span>→</span>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-950 border-t border-white/10 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
            <div>
              <div className="text-xl font-bold mb-1">
                ADVANTAGE <span className="text-[#F59E0B]">by Prisma</span>
              </div>
              <p className="text-sm text-gray-500">
                Transformando jóvenes en líderes
              </p>
            </div>
            <div className="text-sm text-gray-500">
              © 2024 Prisma. Todos los derechos reservados.
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
