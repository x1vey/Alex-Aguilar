# Alex Aguilar Training Website

A multi-page marketing website for Alex Aguilar's tactical fitness training programs built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

## 📦 Tech Stack

- **Framework**: Next.js 14+ with App Router
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS with custom tactical theme
- **Animations**: Framer Motion
- **Forms**: React Hook Form + Zod validation
- **Testing**: Jest + React Testing Library + fast-check

## 🎨 Design System

**Colors:**
- Tactical Black: `#0A0A0A`
- Tactical Red: `#C41E3A`
- Navy Blue: `#002868`

**Typography:**
- Headings: Bebas Neue (bold, aggressive)
- Body: Inter (clean, readable)

**Breakpoints:**
- Mobile: < 768px
- Tablet: 768-1023px
- Desktop: ≥ 1024px

## 📄 Pages

- **Home** (`/`) - Hero, program showcase, about teaser
- **About** (`/about`) - Full Alex Aguilar story and credentials
- **Programs:**
  - Selection Prep (`/programs/selection-prep`)
  - Tactical Hypertrophy (`/programs/tactical-hypertrophy`)
  - 30 Day Dad Bod (`/programs/dad-bod`)
- **Contact** (`/contact`) - Contact form and social links

## 🏗️ Project Structure

```
├── app/              # Next.js App Router pages
├── components/       # React components
├── lib/              # Utilities and data
│   └── data/        # Program data
├── types/            # TypeScript definitions
└── public/           # Static assets
```

## 🎯 Features

- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Smooth animations with Framer Motion
- ✅ Tactical dark theme with aggressive styling
- ✅ Three training programs with detailed pages
- ✅ Contact form with validation (frontend only)
- ✅ Social media integration
- ✅ SEO-friendly structure
- ✅ Performance optimized

## 📝 Note

This is a **frontend-only** implementation. The contact form simulates submission without a backend. To add backend functionality, create an API route at `app/api/contact/route.ts`.

## 🚢 Deployment

```bash
# Build for production
npm run build

# Start production server
npm start
```

Deploy to Vercel, Netlify, or any platform that supports Next.js.

## 📧 Contact

For questions about the programs, visit the contact page or follow on Instagram.
