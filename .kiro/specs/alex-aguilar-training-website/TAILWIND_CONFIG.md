# Tailwind CSS Configuration

## Overview
This document describes the custom Tailwind CSS configuration for the Alex Aguilar Training Website.

## Custom Theme Configuration

### Colors
The tactical color palette has been configured:
- **Tactical Black**: `#0A0A0A` - Primary background color
- **Tactical Red**: `#C41E3A` - Primary accent color for CTAs and highlights
- **Navy Blue**: `#002868` - Secondary accent color

Usage in classes:
- `bg-tactical-black`, `text-tactical-black`
- `bg-tactical-red`, `text-tactical-red`, `border-tactical-red`
- `bg-tactical-navy`, `text-tactical-navy`, `border-tactical-navy`

### Typography
Custom fonts configured using Next.js font optimization:
- **Bebas Neue**: For headings (h1-h6) - Bold, aggressive display font
- **Inter**: For body text - Clean, readable sans-serif

Usage in classes:
- `font-heading` - Applies Bebas Neue
- `font-body` - Applies Inter (default for body)

### Responsive Breakpoints
Custom breakpoints aligned with design requirements:
- **Mobile**: `< 768px` - Use `mobile:` prefix
- **Tablet**: `768px - 1023px` - Use `tablet:` prefix
- **Desktop**: `≥ 1024px` - Use `desktop:` prefix

Standard Tailwind breakpoints also available:
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

### Custom Animations
Pre-configured animation utilities:
- `animate-fade-in` - Fade in effect (0.6s)
- `animate-slide-up` - Slide up with fade (0.6s)
- `animate-slide-down` - Slide down with fade (0.6s)
- `animate-scale-in` - Scale in effect (0.4s)

### Custom Utilities
- `text-tactical-gradient` - Red to navy gradient text effect

## Global Styles
Applied in `app/globals.css`:
- Body background: Tactical black
- Body text: White
- Body font: Inter
- All headings: Bebas Neue

## Font Loading
Fonts are loaded using Next.js `next/font/google` for optimal performance:
- Automatic font optimization
- CSS variables for font families
- Display swap for better loading experience

## Requirements Satisfied
- ✅ 2.2: Mobile responsive layout (< 768px)
- ✅ 2.3: Tablet responsive layout (768-1023px)
- ✅ 2.4: Desktop responsive layout (≥ 1024px)
- ✅ 13.1: Tactical color scheme (black, red, navy)
- ✅ 13.2: Bold, aggressive typography (Bebas Neue)
- ✅ 13.4: Visual consistency across pages
