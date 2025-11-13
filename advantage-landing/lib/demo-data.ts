/**
 * ADVANTAGE Landing - Demo Data
 * Real student testimonials formatted as demo content
 * Note: These are placeholder testimonials for frontend demo purposes
 */

export interface Testimonial {
  id: number;
  name: string;
  quote: string;
  rating: 5;
  program: string;
  category: "emprendimiento" | "habilidades" | "confianza" | "resultados";
}

export const demoTestimonials: Testimonial[] = [
  {
    id: 1,
    name: "José Luis T.",
    quote:
      "Siempre supe que quería emprender, y después del programa no solo aprendí cómo hacerlo, sino que ahora creo que ya puedo lograrlo.",
    rating: 5,
    program: "Estudiante Demo",
    category: "emprendimiento",
  },
  {
    id: 2,
    name: "Santiago G.",
    quote:
      "Una ventaja realmente importante. Pude estructurar mis ideas y mi negocio. Tengo algo mucho más sólido ahora y puedo estar tranquilo respecto a qué rumbo tomar.",
    rating: 5,
    program: "Estudiante Demo",
    category: "emprendimiento",
  },
  {
    id: 3,
    name: "María José R.",
    quote:
      "En el programa, aprendí habilidades muy valiosas de gestión de proyectos y liderazgo que no podría haber adquirido en otro lugar. Esas habilidades me han ayudado mucho en mi desarrollo profesional y personal.",
    rating: 5,
    program: "Estudiante Demo",
    category: "habilidades",
  },
  {
    id: 4,
    name: "Joaquín M.",
    quote:
      "Después del programa, tengo una mentalidad más definida. Sé qué rumbo tomar y entiendo mi propósito personal.",
    rating: 5,
    program: "Estudiante Demo",
    category: "confianza",
  },
  {
    id: 5,
    name: "Andrea P.",
    quote:
      "Este programa ha sido una experiencia transformadora. Me ayudó a desarrollar habilidades de liderazgo y a tener una visión más clara de mi futuro profesional.",
    rating: 5,
    program: "Estudiante Demo",
    category: "habilidades",
  },
  {
    id: 6,
    name: "Carlos D.",
    quote:
      "Lo que más valoré fue la oportunidad de trabajar en proyectos reales con mentoría constante. Eso marcó una diferencia enorme en mi confianza y capacidad de ejecución.",
    rating: 5,
    program: "Estudiante Demo",
    category: "confianza",
  },
  {
    id: 7,
    name: "Valentina S.",
    quote:
      "El programa me dio las herramientas para estructurar mis ideas y convertirlas en algo concreto. Ahora tengo un proyecto en marcha y sé cómo llevarlo adelante.",
    rating: 5,
    program: "Estudiante Demo",
    category: "resultados",
  },
  {
    id: 8,
    name: "Diego F.",
    quote:
      "La mentoría de CEOs reales fue invaluable. Aprendí no solo teoría, sino cómo se hacen las cosas en el mundo real. Eso no tiene precio.",
    rating: 5,
    program: "Estudiante Demo",
    category: "habilidades",
  },
  {
    id: 9,
    name: "Sofía L.",
    quote:
      "Más que un programa de estudios, fue una experiencia que cambió mi forma de pensar. Ahora me veo capaz de crear y liderar proyectos que antes me parecían imposibles.",
    rating: 5,
    program: "Estudiante Demo",
    category: "confianza",
  },
];

export interface ProgramMetric {
  id: string;
  label: string;
  value: string;
  description: string;
  icon: string;
}

export const demoMetrics: ProgramMetric[] = [
  {
    id: "completion",
    label: "Tasa de Finalización",
    value: "85%",
    description: "De estudiantes completan el programa",
    icon: "📊",
  },
  {
    id: "cupos",
    label: "Cupos Totales",
    value: "40",
    description: "Cupos disponibles por cohorte",
    icon: "👥",
  },
  {
    id: "earnings",
    label: "Ingresos Promedio",
    value: "S/400",
    description: "Generados durante el programa",
    icon: "💰",
  },
];

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: "programa" | "costo" | "requisitos" | "resultados";
}

export const demoFAQs: FAQItem[] = [
  {
    id: "q1",
    question: "¿Qué incluye el programa ADVANTAGE?",
    answer:
      "El programa incluye 8 semanas de mentoría con CEOs reales, workshops de liderazgo y emprendimiento, desarrollo de un negocio digital en vivo, y acompañamiento personalizado para cada estudiante.",
    category: "programa",
  },
  {
    id: "q2",
    question: "¿Mi hijo necesita experiencia previa en negocios?",
    answer:
      "No es necesario. El programa está diseñado para jóvenes de 16-20 años sin importar su experiencia previa. Comenzamos desde los fundamentos y los guiamos paso a paso.",
    category: "requisitos",
  },
  {
    id: "q3",
    question: "¿Cuánto tiempo debe dedicar mi hijo al programa?",
    answer:
      "El programa requiere aproximadamente 10-12 horas semanales, distribuidas en sesiones de mentoría, workshops y trabajo en su proyecto. Es compatible con estudios regulares.",
    category: "programa",
  },
  {
    id: "q4",
    question: "¿Qué resultados tangibles obtendrá mi hijo?",
    answer:
      "Al finalizar, tu hijo habrá: creado un negocio digital funcional, desarrollado un portafolio profesional, generado sus primeros ingresos (promedio S/400), y adquirido habilidades de liderazgo certificadas.",
    category: "resultados",
  },
  {
    id: "q5",
    question: "¿Hay opciones de becas o financiamiento?",
    answer:
      "Sí, ofrecemos becas parciales basadas en mérito y situación familiar. También contamos con planes de pago flexibles. Contáctanos para conocer las opciones disponibles.",
    category: "costo",
  },
  {
    id: "q6",
    question: "¿El programa es presencial o virtual?",
    answer:
      "El programa es híbrido: sesiones de mentoría virtuales para mayor flexibilidad, y workshops presenciales mensuales para networking y experiencias prácticas.",
    category: "programa",
  },
];

export interface MentorProfile {
  id: string;
  name: string;
  title: string;
  company: string;
  avatar: string; // URL or placeholder
  expertise: string[];
}

export const demoMentors: MentorProfile[] = [
  {
    id: "m1",
    name: "Demo Mentor 1",
    title: "CEO & Fundador",
    company: "Startup Tech",
    avatar: "DM1", // Placeholder initials
    expertise: ["Emprendimiento", "Product Management", "Growth"],
  },
  {
    id: "m2",
    name: "Demo Mentor 2",
    title: "COO",
    company: "E-commerce Leader",
    avatar: "DM2",
    expertise: ["Operaciones", "Logística", "Scaling"],
  },
  {
    id: "m3",
    name: "Demo Mentor 3",
    title: "Marketing Director",
    company: "Digital Agency",
    avatar: "DM3",
    expertise: ["Marketing Digital", "Branding", "Social Media"],
  },
];

/**
 * Form validation schemas will be implemented with Zod
 * This is just the data structure for demo purposes
 */
export interface ApplicationFormData {
  rol: "Estudiante" | "Padre/Madre";
  nombre: string;
  celular: string; // Format: +51 9XXXXXXXX
  motivacion?: string;
}
