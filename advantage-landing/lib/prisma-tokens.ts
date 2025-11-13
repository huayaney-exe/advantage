/**
 * ADVANTAGE Landing - Prisma Design System Tokens
 * Centralized design tokens extracted from Prisma ecosystem
 */

export const colors = {
  // Prisma Base
  black: "#000000",
  white: "#FFFFFF",

  // Prisma Accents
  cyan: "#47FFBF",
  purple: "#8376FF",
  pink: "#FF48C7",

  // ADVANTAGE Assigned Color
  gold: "#F59E0B",

  // Neutral Scale
  gray: {
    900: "#111111",
    800: "#1A1A1A",
    700: "#2A2A2A",
    600: "#404040",
    500: "#666666",
    400: "#999999",
    300: "#CCCCCC",
    200: "#E5E5E5",
    100: "#F5F5F5",
  },
} as const;

export const spacing = {
  xs: "0.25rem", // 4px
  sm: "0.5rem", // 8px
  md: "1rem", // 16px
  lg: "1.5rem", // 24px
  xl: "2rem", // 32px
  "2xl": "3rem", // 48px
  "3xl": "4rem", // 64px
  "4xl": "6rem", // 96px
  "5xl": "8rem", // 128px
} as const;

export const transitions = {
  duration: {
    fast: "200ms",
    standard: "300ms",
  },
  timing: {
    easeOut: "cubic-bezier(0, 0, 0.2, 1)",
    easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
    easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  },
} as const;

export const shadows = {
  sm: "0 2px 4px rgba(0, 0, 0, 0.2)",
  md: "0 4px 8px rgba(0, 0, 0, 0.3)",
  lg: "0 8px 16px rgba(0, 0, 0, 0.4)",
  xl: "0 16px 32px rgba(0, 0, 0, 0.5)",
  glowCyan: "0 0 40px rgba(71, 255, 191, 0.3)",
  glowGold: "0 0 40px rgba(245, 158, 11, 0.3)",
} as const;

export const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
} as const;

export const typography = {
  fontFamily: {
    inter: "var(--font-inter), Inter, sans-serif",
    jetbrains: "var(--font-jetbrains-mono), 'JetBrains Mono', monospace",
  },
  fontSize: {
    xs: "0.75rem", // 12px
    sm: "0.875rem", // 14px
    base: "1rem", // 16px
    lg: "1.125rem", // 18px
    xl: "1.25rem", // 20px
    "2xl": "1.5rem", // 24px
    "3xl": "1.875rem", // 30px
    "4xl": "2.25rem", // 36px
    "5xl": "3rem", // 48px
    "6xl": "3.75rem", // 60px
  },
  lineHeight: {
    tight: 1.2,
    base: 1.6,
    relaxed: 1.7,
  },
} as const;

/**
 * Prisma Brand Constraints
 * - Black/White base (always)
 * - Cyan for CTAs (ecosystem standard)
 * - Accents ≤15% of composition
 * - 40% whitespace minimum
 * - Glassmorphism (5-10% blur)
 * - Transitions 200-300ms
 */
export const brandConstraints = {
  whitespaceMinimum: 0.4, // 40%
  accentMaximum: 0.15, // 15%
  blurRange: [5, 10], // 5-10%
  transitionRange: [200, 300], // ms
  touchTargetMinimum: 48, // px for mobile
} as const;
