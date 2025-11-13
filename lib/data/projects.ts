export interface Project {
  id: string
  name: string
  studentName: string
  studentAge: number
  category: 'tech' | 'fashion' | 'food' | 'services' | 'other'
  description: string
  screenshot: string
  url: string
  metrics?: {
    visitors?: number
    conversions?: number
    revenue?: string
  }
}

export const projects: Project[] = [
  {
    id: '1',
    name: 'TechTutors',
    studentName: 'María González',
    studentAge: 17,
    category: 'tech',
    description: 'Plataforma de tutorías de programación para estudiantes',
    screenshot: '/images/projects/project-1.jpg',
    url: 'https://techtutors.example.com',
    metrics: {
      visitors: 1200,
      conversions: 45,
      revenue: 'S/ 2,400',
    },
  },
  {
    id: '2',
    name: 'EcoStyle',
    studentName: 'Carlos Ramírez',
    studentAge: 18,
    category: 'fashion',
    description: 'Tienda de ropa sostenible y accesorios eco-friendly',
    screenshot: '/images/projects/project-2.jpg',
    url: 'https://ecostyle.example.com',
    metrics: {
      visitors: 850,
      conversions: 32,
      revenue: 'S/ 1,800',
    },
  },
  {
    id: '3',
    name: 'Sabor Local',
    studentName: 'Ana Martínez',
    studentAge: 16,
    category: 'food',
    description: 'Delivery de comida casera de emprendedores locales',
    screenshot: '/images/projects/project-3.jpg',
    url: 'https://saborlocal.example.com',
    metrics: {
      visitors: 2100,
      conversions: 78,
      revenue: 'S/ 3,200',
    },
  },
  {
    id: '4',
    name: 'FitCoach',
    studentName: 'Diego Flores',
    studentAge: 19,
    category: 'services',
    description: 'Plataforma de entrenamiento personalizado online',
    screenshot: '/images/projects/project-4.jpg',
    url: 'https://fitcoach.example.com',
    metrics: {
      visitors: 950,
      conversions: 38,
      revenue: 'S/ 1,950',
    },
  },
  {
    id: '5',
    name: 'ArtHub',
    studentName: 'Sofía Castillo',
    studentAge: 17,
    category: 'other',
    description: 'Marketplace para artistas independientes peruanos',
    screenshot: '/images/projects/project-5.jpg',
    url: 'https://arthub.example.com',
    metrics: {
      visitors: 1400,
      conversions: 52,
      revenue: 'S/ 2,650',
    },
  },
  {
    id: '6',
    name: 'LangExchange',
    studentName: 'Javier López',
    studentAge: 18,
    category: 'tech',
    description: 'App de intercambio de idiomas con IA',
    screenshot: '/images/projects/project-6.jpg',
    url: 'https://langexchange.example.com',
    metrics: {
      visitors: 1650,
      conversions: 62,
      revenue: 'S/ 2,100',
    },
  },
  {
    id: '7',
    name: 'GreenGarden',
    studentName: 'Valentina Cruz',
    studentAge: 16,
    category: 'services',
    description: 'Servicio de diseño y mantenimiento de jardines urbanos',
    screenshot: '/images/projects/project-7.jpg',
    url: 'https://greengarden.example.com',
    metrics: {
      visitors: 720,
      conversions: 28,
      revenue: 'S/ 1,450',
    },
  },
  {
    id: '8',
    name: 'BookSwap',
    studentName: 'Mateo Silva',
    studentAge: 17,
    category: 'other',
    description: 'Plataforma de intercambio de libros usados',
    screenshot: '/images/projects/project-8.jpg',
    url: 'https://bookswap.example.com',
    metrics: {
      visitors: 880,
      conversions: 34,
      revenue: 'S/ 980',
    },
  },
  {
    id: '9',
    name: 'PetCare',
    studentName: 'Isabella Rojas',
    studentAge: 19,
    category: 'services',
    description: 'Servicio de cuidado de mascotas a domicilio',
    screenshot: '/images/projects/project-9.jpg',
    url: 'https://petcare.example.com',
    metrics: {
      visitors: 1150,
      conversions: 44,
      revenue: 'S/ 2,280',
    },
  },
]

export const projectCategories = [
  { id: 'all', label: 'Todos' },
  { id: 'tech', label: 'Tecnología' },
  { id: 'fashion', label: 'Moda' },
  { id: 'food', label: 'Alimentos' },
  { id: 'services', label: 'Servicios' },
  { id: 'other', label: 'Otros' },
]
