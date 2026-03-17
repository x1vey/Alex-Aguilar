# 🔥 AGGRESSIVE FONTS - Complete

## New Font Stack

### Headings: Oswald
- **Style:** Heavy, condensed, bold, aggressive
- **Weights:** 400, 500, 600, 700
- **Usage:** All headlines, titles, labels
- **Character:** Military-inspired, strong, impactful

### Body: Barlow Condensed
- **Style:** Strong, readable, condensed, modern
- **Weights:** 400, 500, 600, 700
- **Usage:** All body text, descriptions, features
- **Character:** Technical, tactical, professional

## Why These Fonts?

**Oswald:**
- Used by military and tactical brands
- Condensed = more aggressive, space-efficient
- Heavy weights = maximum impact
- Perfect for BOLD headlines

**Barlow Condensed:**
- Modern, technical aesthetic
- Condensed = tactical, efficient
- Highly readable even at smaller sizes
- Pairs perfectly with Oswald

## Font Weight Usage

### Headings (Oswald)
```
Hero Headline:     font-bold (700)  - TRAIN HARD. RISE TOGETHER.
Section Headings:  font-bold (700)  - ELITE TRAINING
Page Titles:       font-bold (700)  - ALEX AGUILAR
Card Titles:       font-bold (700)  - SELECTION PREP
Labels:            font-semibold (600) - Tactical Aesthetics
```

### Body (Barlow Condensed)
```
Subheadlines:      font-medium (500) - Elite training programs...
Descriptions:      font-medium (500) - 8-week program designed...
Features:          font-medium (500) - 5 mile run under 40 minutes
Stats:             font-medium (500) - Military & First Responder
```

## Typography Hierarchy

```css
/* Hero Headline */
font-heading font-bold text-9xl tracking-tighter

/* Section Headings */
font-heading font-bold text-8xl tracking-tighter

/* Page Titles */
font-heading font-bold text-6xl tracking-tighter

/* Card Titles */
font-heading font-bold text-4xl tracking-tighter

/* Labels */
font-heading font-semibold text-xs tracking-[0.3em]

/* Body Text */
font-body font-medium text-lg

/* Small Text */
font-body font-medium text-sm
```

## Tracking (Letter Spacing)

**Headlines:** `tracking-tighter` - Aggressive, condensed
**Labels:** `tracking-[0.3em]` - Wide, military-style
**Body:** `tracking-normal` - Default, readable

## Before vs After

### Before (Bebas Neue + Inter)
- Bebas Neue: Decorative, playful
- Inter: Soft, friendly
- Not aggressive enough
- Too much spacing

### After (Oswald + Barlow Condensed)
- Oswald: Military, aggressive, bold
- Barlow Condensed: Technical, tactical
- Maximum impact
- Condensed = more powerful

## Implementation

All fonts are loaded via Next.js `next/font/google`:
- Automatic optimization
- CSS variables for font families
- Display swap for better loading
- Multiple weights for flexibility

## CSS Variables

```css
--font-oswald: Oswald font family
--font-barlow-condensed: Barlow Condensed font family
```

## Tailwind Classes

```css
font-heading = Oswald
font-body = Barlow Condensed
```

## Examples

**Hero:**
```tsx
<h1 className="font-heading font-bold text-9xl tracking-tighter">
  TRAIN HARD. RISE TOGETHER.
</h1>
```

**Section Heading:**
```tsx
<h2 className="font-heading font-bold text-8xl tracking-tighter">
  ELITE TRAINING
</h2>
```

**Body Text:**
```tsx
<p className="font-body font-medium text-lg">
  8-week program designed for special operations selection.
</p>
```

**Label:**
```tsx
<p className="font-heading font-semibold text-xs tracking-[0.3em]">
  TACTICAL AESTHETICS
</p>
```

## Character Count

Condensed fonts allow more text in less space:
- Oswald: ~20% more compact than standard fonts
- Barlow Condensed: ~15% more compact
- Perfect for aggressive, impactful headlines
- Better for mobile screens

## Accessibility

Both fonts maintain excellent readability:
- High x-height for clarity
- Clear letterforms
- Good contrast
- WCAG AA compliant at proper sizes

## Performance

- Fonts loaded via Google Fonts CDN
- Optimized by Next.js font system
- Subset to Latin characters only
- Display swap prevents FOIT (Flash of Invisible Text)

---

**The typography is now AGGRESSIVE, BOLD, and TACTICAL!** 🔥
