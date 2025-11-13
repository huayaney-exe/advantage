export interface FAQItem {
  id: string
  question: string
  answer: string
  category: 'cost' | 'time' | 'requirements' | 'results' | 'program' | 'application'
}

export const faqItems: FAQItem[] = [
  {
    id: '1',
    question: '¿Cuánto cuesta el programa? ¿Hay becas disponibles?',
    answer: 'El costo del programa varía según cada caso. Ofrecemos becas parciales y totales basadas en la situación económica de cada familia y el potencial del estudiante. Durante el proceso de aplicación, evaluamos cada caso individualmente para ofrecer las mejores opciones de financiamiento. No queremos que el costo sea una barrera para jóvenes con talento y ambición.',
    category: 'cost',
  },
  {
    id: '2',
    question: '¿Mi hijo tendrá tiempo con sus estudios escolares o universitarios?',
    answer: 'Sí. El programa está diseñado para ser compatible con estudios regulares. Requiere 10-12 horas semanales, distribuidas en 2 sesiones de noche (7-9pm) y trabajo del fin de semana. La mayoría de estudiantes organizan su tiempo efectivamente: 2 horas martes y jueves en la noche, y 6-8 horas durante el sábado o domingo. El programa dura 8 semanas (2 meses), lo cual es un periodo manejable.',
    category: 'time',
  },
  {
    id: '3',
    question: '¿Los mentores son realmente de esas empresas? ¿Cómo verifico?',
    answer: 'Sí, todos nuestros mentores son profesionales activos en empresas top. Puedes verificar sus perfiles de LinkedIn directamente (proporcionamos los links). Los mentores son CEOs, directores y líderes de Intercorp, BCP, Alicorp, y startups exitosas. Durante el programa, los estudiantes tienen sesiones grupales semanales (8-10 estudiantes por mentor) donde reciben mentoría directa y feedback en tiempo real.',
    category: 'program',
  },
  {
    id: '4',
    question: '¿Qué pasa si mi hijo no termina el programa o no le funciona?',
    answer: 'Nuestro modelo cohort-based tiene una tasa de completitud del 85%+, muy superior a cursos online tradicionales (5-10%). Esto se debe a: (1) Cohort pequeño con accountability grupal, (2) Mentoría semanal que mantiene el compromiso, (3) Proyectos reales con deadlines claros. Si por alguna razón tu hijo no puede continuar, ofrecemos la posibilidad de pausar y retomar en el siguiente cohort sin costo adicional.',
    category: 'results',
  },
  {
    id: '5',
    question: '¿Cómo funciona el proceso de aplicación?',
    answer: 'El proceso tiene 3 pasos simples: (1) Completar formulario de aplicación (5 minutos), (2) Entrevista breve con el equipo (15-20 minutos) para conocer motivación y objetivos, (3) Respuesta en 48 horas con decisión y opciones de beca si aplica. No requerimos experiencia previa, solo motivación real y compromiso de completar el programa. Respondemos todas las preguntas durante la entrevista.',
    category: 'application',
  },
  {
    id: '6',
    question: '¿Qué resultados concretos han tenido otros estudiantes?',
    answer: 'Los resultados varían, pero el 100% de estudiantes termina con: (1) Landing page profesional funcionando, (2) Campaña de marketing ejecutada con métricas reales, (3) Portfolio verificable que pueden compartir. Adicionalmente: 50%+ consigue oportunidad laboral o pasantía en 3 meses, varios generan ingresos (S/400-S/3,200/mes según proyecto), y todos desarrollan habilidades de IA, no-code y marketing digital que las empresas buscan activamente.',
    category: 'results',
  },
  {
    id: '7',
    question: '¿Necesita experiencia previa en programación o negocios?',
    answer: 'No. El programa está diseñado para estudiantes sin experiencia previa. Usamos herramientas no-code y IA que permiten construir productos digitales sin programar. Lo importante es: (1) Tener 16-20 años, (2) Comprometerse a las 10-12 hrs/semana, (3) Tener ganas de aprender y ejecutar. Hemos tenido estudiantes desde 5to de secundaria hasta primeros años de universidad, de todas las carreras.',
    category: 'requirements',
  },
  {
    id: '8',
    question: '¿Cuándo empieza el próximo cohort y cuántos cupos hay?',
    answer: 'El Cohort 1 (Marzo 2026) tiene solo 40 cupos disponibles. Las aplicaciones cierran el 15 de Febrero 2026 o cuando se llenen los cupos. Este es nuestro primer cohort, lo cual significa: (1) Grupos más pequeños y atención más personalizada, (2) Oportunidad de ser parte de la primera generación, (3) Acceso a red de alumni desde el inicio. Recomendamos aplicar cuanto antes, especialmente si buscas beca.',
    category: 'application',
  },
  {
    id: '9',
    question: '¿El programa incluye certificado o reconocimiento oficial?',
    answer: 'Al completar el programa, los estudiantes reciben: (1) Certificado de ADVANTAGE by Prisma verificable digitalmente, (2) Portfolio digital con su proyecto real y métricas, (3) Carta de recomendación de su mentor (si aplica), (4) Acceso a red de alumni de por vida. Más importante que el certificado es el portfolio tangible que pueden mostrar en CVs, entrevistas y LinkedIn - algo que diferencia inmediatamente de otros candidatos.',
    category: 'program',
  },
  {
    id: '10',
    question: '¿Qué herramientas y tecnologías aprenderán?',
    answer: 'Durante el programa aprenden a usar: (1) Herramientas de IA (ChatGPT, Claude, Midjourney) para investigación y creación de contenido, (2) Plataformas no-code (Webflow, Framer, Notion) para construir landing pages, (3) Herramientas de marketing digital (Google Analytics, Meta Ads, email marketing), (4) Metodologías de validación y growth (Lean Startup, Jobs-to-be-Done). No memorizan teoría, aprenden usando las herramientas en su proyecto real.',
    category: 'program',
  },
]

export const faqCategories = [
  { id: 'all', label: 'Todas' },
  { id: 'cost', label: 'Costo y Becas' },
  { id: 'time', label: 'Tiempo y Compatibilidad' },
  { id: 'program', label: 'El Programa' },
  { id: 'results', label: 'Resultados' },
  { id: 'requirements', label: 'Requisitos' },
  { id: 'application', label: 'Aplicación' },
]
