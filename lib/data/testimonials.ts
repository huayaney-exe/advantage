export interface Testimonial {
  id: string
  name: string
  role: 'parent' | 'student' | 'mentor'
  age?: number
  quote: string
  longQuote?: string
  photo: string
  outcome?: string
  rating: number
}

export const testimonials: Testimonial[] = [
  // Parents
  {
    id: '1',
    name: 'Patricia Mendoza',
    role: 'parent',
    quote: 'Mi hijo ya tiene algo concreto que mostrar en su CV. No es teoría, es un negocio real que él creó.',
    longQuote: 'Cuando mi hijo me contó sobre ADVANTAGE, pensé que era otro curso más. Pero ver cómo en 8 semanas construyó su propia landing page y consiguió sus primeros clientes me dejó sorprendida. Ahora tiene algo concreto que mostrar, no solo un certificado más.',
    photo: '/images/testimonials/parent-1.jpg',
    outcome: 'Su hijo consiguió una pasantía en una startup',
    rating: 5,
  },
  {
    id: '2',
    name: 'Roberto Castillo',
    role: 'parent',
    quote: 'La inversión valió la pena. Mi hija aprendió más en 2 meses que en todo el año escolar.',
    longQuote: 'Como padre, siempre busco darle a mi hija las mejores oportunidades. ADVANTAGE superó mis expectativas. Los mentores son profesionales de verdad, no solo profesores. Mi hija ganó confianza, aprendió habilidades reales y ahora tiene un portfolio que muestra con orgullo.',
    photo: '/images/testimonials/parent-2.jpg',
    outcome: 'Su hija creó un negocio que genera S/ 800/mes',
    rating: 5,
  },
  {
    id: '3',
    name: 'Carmen Torres',
    role: 'parent',
    quote: 'Finalmente una formación que prepara a los jóvenes para el mundo real, no solo para exámenes.',
    longQuote: 'Pagué por tantos cursos que mi hijo nunca terminó. ADVANTAGE fue diferente: cohort pequeño, mentoría real, y sobre todo, un producto final tangible. Ver a mi hijo presentar su proyecto con tanta seguridad fue un momento que no olvidaré.',
    photo: '/images/testimonials/parent-3.jpg',
    outcome: 'Su hijo fue aceptado en una universidad top',
    rating: 5,
  },
  // Students
  {
    id: '4',
    name: 'María González',
    role: 'student',
    age: 17,
    quote: 'En 2 semanas tenía 3 clientes. Gané S/400 y aprendí más que en todo el colegio.',
    longQuote: 'Entré a ADVANTAGE sin saber nada de negocios digitales. Los mentores me enseñaron no solo a construir una landing page, sino a validar mi idea, conseguir clientes reales y hacer crecer mi proyecto. Ahora tengo un negocio que funciona y puedo escalar.',
    photo: '/images/testimonials/student-1.jpg',
    outcome: 'Generó S/ 2,400 en su primer trimestre',
    rating: 5,
  },
  {
    id: '5',
    name: 'Carlos Ramírez',
    role: 'student',
    age: 18,
    quote: 'Los mentores son de empresas reales. No teoría, experiencia real de gente que construyó negocios.',
    longQuote: 'Lo mejor de ADVANTAGE es que aprendes de personas que realmente están en el juego. No son profesores que leyeron un libro, son CEOs, directores y founders que te cuentan sus historias reales, sus errores, y te guían basándose en experiencia, no en teoría.',
    photo: '/images/testimonials/student-2.jpg',
    outcome: 'Consiguió pasantía en BCP por su portfolio',
    rating: 5,
  },
  {
    id: '6',
    name: 'Ana Martínez',
    role: 'student',
    age: 16,
    quote: 'Ahora sé que puedo crear cualquier cosa. La confianza que gané vale más que el dinero.',
    longQuote: 'ADVANTAGE no solo me enseñó habilidades técnicas. Me enseñó a pensar como emprendedora, a no tener miedo al fracaso, y a iterar rápido. Terminé el programa con un negocio funcionando, pero lo más valioso fue la mentalidad que desarrollé.',
    photo: '/images/testimonials/student-3.jpg',
    outcome: 'Su negocio genera S/ 3,200/mes',
    rating: 5,
  },
  // Mentors
  {
    id: '7',
    name: 'Diego Vargas',
    role: 'mentor',
    quote: 'Estos jóvenes tienen el hambre y la creatividad que muchos profesionales perdieron.',
    longQuote: 'Ser mentor en ADVANTAGE me recordó por qué empecé mi empresa. Ver a estos jóvenes construir, fallar, iterar y crecer en tiempo real es inspirador. Tienen la energía y la valentía que necesitamos en el mundo empresarial.',
    photo: '/images/testimonials/mentor-1.jpg',
    rating: 5,
  },
  {
    id: '8',
    name: 'Lucía Fernández',
    role: 'mentor',
    quote: 'El nivel de compromiso y resultados de estos estudiantes supera a muchos profesionales que he entrenado.',
    longQuote: 'Como VP de Marketing Digital, he capacitado a cientos de profesionales. Los estudiantes de ADVANTAGE me sorprenden porque no solo aprenden rápido, ejecutan rápido. En 8 semanas logran lo que muchos tardan meses en siquiera empezar.',
    photo: '/images/testimonials/mentor-2.jpg',
    rating: 5,
  },
  {
    id: '9',
    name: 'Roberto Sánchez',
    role: 'mentor',
    quote: 'Si tuviera que contratar, empezaría por buscar en los alumni de ADVANTAGE.',
    longQuote: 'El programa no solo les da habilidades técnicas, les da experiencia real. Cuando veo su portfolio, no veo proyectos de estudiante, veo productos reales con tracción real. Eso es lo que buscan las empresas hoy.',
    photo: '/images/testimonials/mentor-3.jpg',
    rating: 5,
  },
]
