# VDS_SPHERE — Freelance Agency Website

Welcome to **VDS_SPHERE**, a modern, modular, and scalable static website built for a digital freelance agency using **Next.js (App Router)**, **Tailwind CSS**, and **TypeScript**.

This project is structured for high scalability, clean code separation, and centralized typography management.

---

## 🚀 Quick Start Guide

### Prerequisites
- Node.js 18.x or higher
- npm (or yarn / pnpm / bun)

### Development
To launch the interactive local development server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view the site.

### Build & Static Export
This project is pre-configured for pure **Static Site Export** (`output: "export"` in `next.config.ts`).
To generate the static production build:
```bash
npm run build
```
The compiled HTML, CSS, and JS static bundle will be exported to the `./out` directory, ready to be deployed to any static host (GitHub Pages, Vercel, Netlify, Cloudflare Pages, AWS S3, etc.).

---

## 📁 Project Architecture & Structure

The codebase separates global primitives, section components, layout elements, and pages into distinct folders to ensure `page.tsx` remains clean, un-cluttered, and easy to maintain.

```
VDS-Website/
├── next.config.ts            # Next.js static export configuration
├── package.json              # Dependencies and scripts
├── public/                   # Static assets (images, icons, SVGs)
├── src/
│   ├── app/
│   │   ├── globals.css       # Global styles, CSS variables, & typography utility classes
│   │   ├── layout.tsx        # Root HTML layout & VDS_SPHERE metadata
│   │   └── page.tsx          # Main landing page (composes modular section components)
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx    # Sticky header navigation
│   │   │   └── Footer.tsx    # Agency footer
│   │   ├── ui/
│   │   │   └── Typography.tsx # Global Heading, Subheading & SectionHeader primitives
│   │   └── sections/
│   │       ├── HeroSection.tsx       # Hero section with primary heading
│   │       ├── AboutSection.tsx      # Agency overview & key pillars
│   │       ├── ServicesSection.tsx   # Freelance services offerings
│   │       ├── PortfolioSection.tsx  # Featured client projects
│   │       ├── ContactSection.tsx    # Inquiry CTA form
│   │       └── index.ts              # Section barrel exports
```

---

## 🎨 Global Typography System (Headings & Subheadings)

The project includes a **centralized typography system**. If you change a heading or subheading style value in one place, it automatically reflects across every single page and section on the entire website!

### 1. Centralized Typography Components (`src/components/ui/Typography.tsx`)
Use these reusable React components across your sections:

```tsx
import { Heading, Subheading, SectionHeader } from "@/components/ui/Typography";

// 1. Primary XL Heading (h1) with optional gradient
<Heading level={1} size="xl" gradient>
  VDS_SPHERE Freelance Agency
</Heading>

// 2. Secondary Heading (h2)
<Heading level={2} size="lg">
  Our Freelance Services
</Heading>

// 3. Subheading
<Subheading>
  We craft high-performance web applications and digital experiences.
</Subheading>

// 4. Complete Section Header (badge + title + subtitle)
<SectionHeader
  badge="Featured Work"
  title="Recent Projects"
  subtitle="Explore our latest software solutions."
/>
```

### 2. How to Modify Heading & Subheading Styles Globally

#### Option A: Editing CSS Custom Variables & Classes (`src/app/globals.css`)
In `src/app/globals.css`, global styles are controlled by CSS variables and utility classes:
- `--vds-heading-color`: Primary heading text color (e.g. `#ffffff`)
- `--vds-subheading-color`: Subheading text color (e.g. `#9ca3af`)
- `.vds-heading-xl`, `.vds-heading-lg`, `.vds-heading-md`: Control font sizes, line heights, font weights, and tracking.
- `.vds-subheading`: Controls subheading font size and color.

#### Option B: Editing Component Defaults (`src/components/ui/Typography.tsx`)
Modifying class names or styling rules inside `src/components/ui/Typography.tsx` instantly updates all headings sitewide.

---

## 🧩 How to Add New Landing Page Sections

To maintain scalability without cluttering `src/app/page.tsx`:

1. **Create your section component** inside `src/components/sections/`:
   ```tsx
   // src/components/sections/TestimonialsSection.tsx
   import React from "react";
   import { Heading, Subheading, SectionHeader } from "../ui/Typography";

   export const TestimonialsSection: React.FC = () => {
     return (
       <section className="py-20">
         <SectionHeader title="Client Reviews" subtitle="What our clients say about VDS_SPHERE" />
         {/* ... content ... */}
       </section>
     );
   };
   ```

2. **Add to barrel export** in `src/components/sections/index.ts`:
   ```ts
   export { TestimonialsSection } from "./TestimonialsSection";
   ```

3. **Import in `src/app/page.tsx`**:
   ```tsx
   import { TestimonialsSection } from "@/components/sections";

   // Inside Home component:
   <TestimonialsSection />
   ```

---

## 💻 Tech Stack Summary
- **Framework**: Next.js 16 (App Router)
- **Export Mode**: Static Export (`output: "export"`)
- **Styling**: Tailwind CSS 4
- **Language**: TypeScript
- **Icons / Design**: CSS Gradients, Glassmorphism, & Responsive Layouts
