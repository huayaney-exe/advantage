# ADVANTAGE by Prisma - Landing Page

> Tu hijo puede liderar el futuro

A world-class landing page for ADVANTAGE, an 8-week youth leadership program where 16-20 year olds build digital businesses with CEO/corporate mentorship.

---

## 🎨 Design Philosophy

**Anti-Generic**: Breaking away from typical SaaS aesthetics with:
- Editorial magazine meets interactive documentary style
- Emotional journey: Anxiety → Hope → Pride → Action
- Cinematic gradients and intentional whitespace
- Premium typography with Inter font family
- Mobile-first responsive design

---

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open browser at http://localhost:3000
```

---

## 🛠 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **UI Components**: Radix UI + Headless UI
- **Forms**: React Hook Form + Zod
- **Icons**: Heroicons

---

## 📐 Project Structure

```
future-torn/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Landing page
│   └── globals.css        # Global styles
├── components/
│   ├── landing/           # Landing page sections
│   │   └── Hero.tsx       # ✅ Hero section
│   ├── ui/                # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Badge.tsx
│   │   └── Accordion.tsx
│   └── shared/            # Shared components
├── lib/
│   ├── data/             # Data structures
│   │   ├── mentors.ts
│   │   ├── projects.ts
│   │   ├── testimonials.ts
│   │   └── faq.ts
│   └── utils/            # Utility functions
│       └── cn.ts         # Class name utility
├── public/               # Static assets
│   ├── images/
│   ├── videos/
│   └── logos/
└── tailwind.config.ts    # Design system configuration
```

---

## 🎨 Design System

### Color Palette

#### Primary Colors
- **Midnight Blue** `#0A1128` - Trust, depth, premium feel
- **Electric Coral** `#FF6B6B` - Youth energy, action, warmth
- **Pristine White** `#FFFFFF` - Clarity, breathing room

#### Accent Colors
- **Sunrise Orange** `#FF8E53` - Hope, transformation
- **Success Emerald** `#00D9A3` - Achievement, growth
- **Wisdom Purple** `#8B7AB8` - Mentorship, guidance

### Typography

- **Hero Headlines**: Inter Extra Bold (900), 72px desktop / 40px mobile
- **Section Headlines**: Inter Bold (700), 48px desktop / 32px mobile
- **Body Copy**: Inter Regular (400), 18px desktop / 16px mobile
- **Accents/Labels**: Inter Medium (500), 14px uppercase

### Components

```tsx
// Button variants
<Button variant="primary" size="lg">Primary CTA</Button>
<Button variant="secondary" size="md">Secondary</Button>
<Button variant="ghost" size="sm">Ghost</Button>

// Card with hover effect
<Card hover>
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Description</CardDescription>
  </CardHeader>
  <CardContent>Content</CardContent>
</Card>

// Badge variants
<Badge variant="default">Default</Badge>
<Badge variant="success">Success</Badge>
<Badge variant="warning">Warning</Badge>
<Badge variant="info">Info</Badge>
```

---

## 📱 Responsive Breakpoints

- **Mobile**: 320px - 767px (priority design)
- **Tablet**: 768px - 1023px
- **Desktop**: 1024px - 1440px
- **Large**: 1441px+

All components are mobile-first with touch targets minimum 48px.

---

## ✨ Features

### Implemented ✅
- [x] Hero section with animated gradient background
- [x] Dual CTAs (Apply / View Projects)
- [x] Floating urgency badge
- [x] Trust bar with company logos
- [x] Social proof metrics
- [x] Responsive design (mobile, tablet, desktop)
- [x] Smooth scroll animations
- [x] Custom design system with Tailwind
- [x] TypeScript type safety
- [x] Framer Motion animations

### In Progress 🚧
- [ ] Navigation (sticky header)
- [ ] Problem/Solution split section
- [ ] Tangible Outcomes showcase
- [ ] How It Works timeline
- [ ] Mentors grid
- [ ] Project Showcase with filtering
- [ ] Testimonials carousel
- [ ] FAQ accordion
- [ ] Final CTA section
- [ ] Footer

### Planned 📋
- [ ] Application form with validation
- [ ] Image optimization
- [ ] Performance optimization (Lighthouse 90+)
- [ ] Analytics integration
- [ ] SEO optimization

---

## 🎯 Landing Page Sections

### 1. Hero
**Status**: ✅ Complete
- Full-viewport immersive design
- Headline: "Tu hijo puede liderar el futuro"
- Primary CTA: "Aplicar a Cohort Marzo 2026"
- Secondary CTA: "Ver Proyectos Reales"
- Trust signals: Company logos, metrics (85%/100%/50%+)
- Floating achievement cards
- Scroll indicator animation

### 2. Problem → Solution
**Status**: 🚧 Pending
- Split-screen narrative
- Left: "What schools teach" (problem)
- Right: "What companies need" (solution)
- Bridge graphic connecting both sides

### 3. Tangible Outcomes
**Status**: 🚧 Pending
- 3-card interactive showcase
- Card 1: Landing Page Profesional
- Card 2: Primera Campaña de Marketing
- Card 3: Portfolio Verificable

### 4. How It Works
**Status**: 🚧 Pending
- Vertical timeline (8 weeks)
- Week markers with milestones
- Time commitment: 10-12 hrs/semana

### 5. Mentors
**Status**: 🚧 Pending
- 3-column grid (6 mentors)
- Professional photos + company logos
- Optional quotes

### 6. For Whom
**Status**: 🚧 Pending
- Inclusive checklist format
- 5 key criteria with icons
- Accessibility focus (no experience needed, becas available)

### 7. Project Showcase
**Status**: 🚧 Pending
- Masonry grid (9-12 projects)
- Filter tabs (Tech, Fashion, Food, etc.)
- Hover reveals student testimonials

### 8. Testimonials
**Status**: 🚧 Pending
- Auto-rotating carousel
- Mix: 3 parents + 3 students + 2 mentors
- 5-star ratings, specific outcomes

### 9. FAQ
**Status**: 🚧 Pending
- Accordion with search
- 10 questions covering all objections
- Categories: Cost, Time, Requirements, Results, etc.

### 10. Final CTA
**Status**: 🚧 Pending
- Dark background (midnight blue)
- Centered high-impact design
- Urgency elements (40 cupos, deadline)
- Primary CTA + trust signals

---

## 📊 Data Structures

All data is TypeScript-typed and ready to use:

```typescript
// 6 mentor profiles
import { mentors } from '@/lib/data/mentors'

// 9 student projects with metrics
import { projects } from '@/lib/data/projects'

// 9 testimonials (parents, students, mentors)
import { testimonials } from '@/lib/data/testimonials'

// 10 FAQ items covering all objections
import { faqItems } from '@/lib/data/faq'
```

---

## 🎭 Animation System

Built with Framer Motion for smooth, delightful interactions:

```tsx
// Entrance animations
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  Content
</motion.div>

// Hover animations
<motion.div whileHover={{ scale: 1.05 }}>
  Hover me
</motion.div>

// Scroll-triggered animations (coming soon)
```

---

## 🚀 Performance

- **First Contentful Paint**: Target < 1.5s
- **Time to Interactive**: Target < 3.5s
- **Cumulative Layout Shift**: Target < 0.1
- **Total Page Weight**: Target < 2MB

Optimizations:
- Next.js 14 with Turbopack (ultra-fast dev)
- Image optimization with Next/Image
- Code splitting and lazy loading
- Framer Motion with optimizePackageImports

---

## 📝 Scripts

```bash
# Development
npm run dev          # Start dev server (with Turbopack)

# Production
npm run build        # Build for production
npm start            # Start production server

# Linting
npm run lint         # Run ESLint
```

---

## 🌐 Deployment

Ready to deploy to:
- **Vercel** (recommended) - Zero config
- **Netlify** - Next.js support
- **AWS Amplify** - Full-stack hosting
- **Self-hosted** - Node.js server

```bash
# Deploy to Vercel
vercel

# Or build and deploy anywhere
npm run build
npm start
```

---

## 📖 Documentation

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [Radix UI Documentation](https://www.radix-ui.com/)

---

## 🤝 Contributing

This is a private project for ADVANTAGE by Prisma. For questions or suggestions, contact the project team.

---

## 📄 License

Proprietary - ADVANTAGE by Prisma

---

**Built with ❤️ for the future leaders of Peru**
