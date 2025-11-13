export interface Mentor {
  id: string
  name: string
  title: string
  company: string
  companyLogo: string
  photo: string
  quote?: string
  linkedin?: string
}

export const mentors: Mentor[] = [
  {
    id: '1',
    name: 'Ana Rodríguez',
    title: 'CEO',
    company: 'Intercorp',
    companyLogo: '/logos/intercorp.svg',
    photo: '/images/mentors/mentor-1.jpg',
    quote: 'El futuro del liderazgo se construye hoy',
  },
  {
    id: '2',
    name: 'Carlos Mendoza',
    title: 'Director de Innovación',
    company: 'BCP',
    companyLogo: '/logos/bcp.svg',
    photo: '/images/mentors/mentor-2.jpg',
    quote: 'La transformación digital empieza con personas capacitadas',
  },
  {
    id: '3',
    name: 'María Torres',
    title: 'Gerente de Talento',
    company: 'Alicorp',
    companyLogo: '/logos/alicorp.svg',
    photo: '/images/mentors/mentor-3.jpg',
    quote: 'Buscamos jóvenes que piensen diferente',
  },
  {
    id: '4',
    name: 'Diego Vargas',
    title: 'Founder & CEO',
    company: 'TechStartup',
    companyLogo: '/logos/techstartup.svg',
    photo: '/images/mentors/mentor-4.jpg',
    quote: 'Emprender joven es la mejor escuela',
  },
  {
    id: '5',
    name: 'Lucía Fernández',
    title: 'VP de Marketing Digital',
    company: 'Prisma',
    companyLogo: '/logos/prisma.svg',
    photo: '/images/mentors/mentor-5.jpg',
    quote: 'El marketing digital es el lenguaje del futuro',
  },
  {
    id: '6',
    name: 'Roberto Sánchez',
    title: 'Director de Producto',
    company: 'Intercorp',
    companyLogo: '/logos/intercorp.svg',
    photo: '/images/mentors/mentor-6.jpg',
    quote: 'Los mejores productos nacen de entender al cliente',
  },
]
