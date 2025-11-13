import { colors, typography } from "@/lib/prisma-tokens";
import { demoMetrics } from "@/lib/demo-data";

export default function Home() {
  return (
    <div className="min-h-screen bg-prisma-black text-prisma-white">
      {/* Test Container */}
      <div className="container mx-auto py-20 px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">
            ADVANTAGE by Prisma
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Programa de Liderazgo para Jóvenes de 16-20 años
          </p>
        </div>

        {/* Design System Test */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Prisma Design System - Test
          </h2>

          {/* Color Palette */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12">
            <div className="text-center">
              <div className="w-full h-24 bg-prisma-cyan rounded-lg mb-2"></div>
              <p className="text-sm font-jetbrains">Cyan (CTA)</p>
            </div>
            <div className="text-center">
              <div className="w-full h-24 bg-advantage-gold rounded-lg mb-2"></div>
              <p className="text-sm font-jetbrains">Gold (Accent)</p>
            </div>
            <div className="text-center">
              <div className="w-full h-24 bg-prisma-purple rounded-lg mb-2"></div>
              <p className="text-sm font-jetbrains">Purple</p>
            </div>
            <div className="text-center">
              <div className="w-full h-24 bg-prisma-pink rounded-lg mb-2"></div>
              <p className="text-sm font-jetbrains">Pink</p>
            </div>
            <div className="text-center">
              <div className="w-full h-24 bg-gray-700 rounded-lg mb-2"></div>
              <p className="text-sm font-jetbrains">Gray 700</p>
            </div>
          </div>

          {/* Typography Test */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-4">Typography</h3>
            <p className="text-lg mb-2 font-inter">
              Este texto usa Inter (contenido principal)
            </p>
            <p className="text-lg font-jetbrains metric-text text-advantage-gold">
              85% | 40 cupos | S/400 (JetBrains Mono para métricas)
            </p>
          </div>

          {/* Metrics Demo */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {demoMetrics.map((metric) => (
              <div
                key={metric.id}
                className="glass rounded-2xl p-6 text-center transition-standard hover:scale-105"
              >
                <div className="text-4xl mb-3">{metric.icon}</div>
                <div className="metric-text text-3xl font-bold text-advantage-gold mb-2">
                  {metric.value}
                </div>
                <p className="text-sm text-gray-400">{metric.description}</p>
              </div>
            ))}
          </div>

          {/* Button Test */}
          <div className="flex gap-4 justify-center">
            <button className="btn-cta px-8 py-3 rounded-lg font-semibold touch-target">
              Aplica Ahora (Cyan CTA)
            </button>
            <button className="bg-advantage-gold text-prisma-black px-8 py-3 rounded-lg font-semibold touch-target transition-standard hover:scale-105">
              Ver Programa (Gold)
            </button>
          </div>
        </div>

        {/* Status */}
        <div className="text-center text-gray-500 text-sm">
          <p>✅ Next.js 15 + TypeScript</p>
          <p>✅ Tailwind CSS v4</p>
          <p>✅ Prisma Design Tokens</p>
          <p>✅ Inter + JetBrains Mono</p>
          <p className="mt-4 text-advantage-gold">
            Design system ready. Building landing page components next...
          </p>
        </div>
      </div>
    </div>
  );
}
