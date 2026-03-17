# Image & Video Integration Guide

## 🎨 Bold American Aesthetic - Complete!

The website now has a **BOLD, LOUD** design inspired by Barrel & Hatchet:
- ✅ Massive typography (text-6xl to text-9xl)
- ✅ Solid tactical colors (black, red, white)
- ✅ Heavy animations with Framer Motion
- ✅ American military aesthetic
- ✅ Full-screen hero sections
- ✅ Strong borders and accent lines
- ✅ Uppercase tracking-widest text
- ✅ Stats section with big numbers

## 📸 Where to Add Images/Videos

### 1. Hero Section (`components/Hero.tsx`)
**Location:** Line 11-17
```tsx
{/* Replace this placeholder with actual background */}
<div className="absolute inset-0 bg-[url('/hero-bg.jpg')] bg-cover bg-center opacity-40" />
```

**Recommended:**
- Full-screen background video of training/tactical operations
- Or high-res image of Alex training
- Size: 1920x1080 minimum
- Format: MP4 (video) or JPG/WebP (image)

**How to add video:**
```tsx
<video 
  autoPlay 
  loop 
  muted 
  playsInline
  className="absolute inset-0 w-full h-full object-cover opacity-40"
>
  <source src="/videos/hero-bg.mp4" type="video/mp4" />
</video>
```

### 2. Program Cards (`components/ProgramCard.tsx`)
**Location:** Line 23-26
```tsx
{/* Image Placeholder - Replace with actual images */}
<div className="relative h-64 bg-gradient-to-br from-tactical-navy/40 to-tactical-black overflow-hidden">
  <div className="absolute inset-0 bg-[url('/program-bg.jpg')] bg-cover bg-center opacity-20 group-hover:scale-110 transition-transform duration-700" />
```

**Recommended images:**
- Selection Prep: Rucking, running, tactical training
- Tactical Hypertrophy: Gym training, strength work
- Dad Bod: Home workouts, transformation shots
- Size: 800x600 minimum
- Format: JPG/WebP

**How to add:**
```tsx
<div className="absolute inset-0 bg-[url('/images/selection-prep.jpg')] bg-cover bg-center opacity-20 group-hover:scale-110 transition-transform duration-700" />
```

### 3. About Section (`components/AboutSection.tsx`)
**Location:** Line 56-62
```tsx
<div className="relative aspect-[3/4] bg-gradient-to-br from-tactical-navy/40 to-tactical-black border-4 border-tactical-red/30">
  {/* Replace with actual image */}
  <div className="absolute inset-0 flex items-center justify-center text-gray-600 font-heading text-2xl">
    [FOUNDER IMAGE]
  </div>
</div>
```

**Recommended:**
- Professional photo of Alex in tactical gear or training
- Portrait orientation (3:4 ratio)
- Size: 800x1066 minimum
- Format: JPG/WebP

**How to add:**
```tsx
<div className="relative aspect-[3/4] border-4 border-tactical-red/30 overflow-hidden">
  <img 
    src="/images/alex-portrait.jpg" 
    alt="Alex Aguilar" 
    className="w-full h-full object-cover"
  />
</div>
```

### 4. Program Detail Pages
Each program page has space for images at the top.

**Example for Selection Prep (`app/programs/selection-prep/page.tsx`):**
Add after the header section (around line 30):
```tsx
{/* Program Hero Image */}
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.3, duration: 0.8 }}
  className="relative h-96 mb-12 border-4 border-tactical-red/30 overflow-hidden"
>
  <img 
    src="/images/selection-prep-hero.jpg" 
    alt="Selection Prep Training" 
    className="w-full h-full object-cover"
  />
  <div className="absolute inset-0 bg-gradient-to-t from-tactical-black via-transparent to-transparent" />
</motion.div>
```

## 📁 File Organization

Place your media files in the `public` folder:

```
public/
├── images/
│   ├── hero-bg.jpg              # Hero background
│   ├── alex-portrait.jpg        # About section
│   ├── selection-prep.jpg       # Program card
│   ├── tactical-hypertrophy.jpg # Program card
│   ├── dad-bod.jpg              # Program card
│   ├── selection-prep-hero.jpg  # Program page
│   ├── tactical-hypertrophy-hero.jpg
│   └── dad-bod-hero.jpg
└── videos/
    └── hero-bg.mp4              # Hero background video
```

## 🎬 Video Best Practices

1. **Compression:** Use H.264 codec, keep under 5MB
2. **Autoplay:** Always include `muted` and `playsInline` for mobile
3. **Fallback:** Provide a poster image
4. **Loop:** Use `loop` for background videos

**Example:**
```tsx
<video 
  autoPlay 
  loop 
  muted 
  playsInline
  poster="/images/hero-poster.jpg"
  className="absolute inset-0 w-full h-full object-cover"
>
  <source src="/videos/hero-bg.mp4" type="video/mp4" />
</video>
```

## 🖼️ Image Optimization

For production, use Next.js Image component:

```tsx
import Image from 'next/image'

<Image
  src="/images/alex-portrait.jpg"
  alt="Alex Aguilar"
  width={800}
  height={1066}
  className="w-full h-full object-cover"
  priority // For above-the-fold images
/>
```

## 🎨 Current Design Features

- **Typography:** Bebas Neue (headings) - HUGE and BOLD
- **Colors:** Tactical Black (#0A0A0A), Tactical Red (#C41E3A), White
- **Borders:** 2-4px solid borders everywhere
- **Animations:** Scale, fade, slide with Framer Motion
- **Spacing:** Large padding (py-32) for breathing room
- **Tracking:** Wide letter spacing (tracking-widest)
- **Uppercase:** All headings and labels

## 🚀 Quick Start

1. Add your images to `public/images/`
2. Replace the placeholder divs with actual `<img>` or `<Image>` tags
3. Update the `src` paths to match your filenames
4. Test on mobile and desktop
5. Optimize images for web (compress, resize)

---

**The design is now BOLD, LOUD, and ready for your tactical imagery!** 🎖️
