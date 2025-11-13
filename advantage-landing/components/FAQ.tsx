"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { demoFAQs } from "@/lib/demo-data";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-gray-900" id="faq">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Preguntas <span className="text-advantage-gold">Frecuentes</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Respuestas a las dudas más comunes de padres y estudiantes
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {demoFAQs.map((faq, index) => (
            <div
              key={faq.id}
              className="glass rounded-xl overflow-hidden border border-gray-800 hover:border-gray-700 transition-colors"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-800/50 transition-colors"
              >
                <span className="font-semibold text-lg pr-4">
                  {faq.question}
                </span>
                <motion.span
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-advantage-gold text-2xl flex-shrink-0"
                >
                  ↓
                </motion.span>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 text-gray-400 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-500 mb-4">¿Tienes más preguntas?</p>
          <a
            href="#aplicar"
            className="text-advantage-gold hover:underline font-medium"
          >
            Contáctanos directamente →
          </a>
        </div>
      </div>
    </section>
  );
}
