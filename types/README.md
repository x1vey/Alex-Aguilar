# Type Definitions

This directory contains TypeScript type definitions for the Alex Aguilar Training Website.

## Available Types

### Program
Represents a training program with all necessary details for display and purchase.

**Fields:**
- `id`: Unique identifier
- `name`: Program name
- `duration`: Program duration (e.g., "8 weeks", "30 days")
- `targetAudience`: Target audience description
- `description`: Detailed program description
- `features`: List of key features or benefits
- `equipment`: Required equipment list
- `cta`: Call-to-action configuration with text, URL, and platform

### Testimonial
Represents social proof from satisfied clients.

**Fields:**
- `id`: Unique identifier
- `name`: Client name or identifier
- `role`: Client role or background
- `content`: Testimonial content/quote
- `image`: Optional client image URL

### PageContent
Provides flexible content structure for different page sections.

**Fields:**
- `id`: Section identifier
- `type`: Section type ('hero' | 'about' | 'programs' | 'testimonials' | 'contact' | 'custom')
- `heading`: Optional section heading
- `subheading`: Optional section subheading or tagline
- `content`: Optional main content text
- `backgroundMedia`: Optional background image or video URL
- `metadata`: Optional additional metadata

### NavigationConfig
Defines site navigation structure.

**Fields:**
- `label`: Navigation item label
- `path`: Navigation item path
- `children`: Optional nested navigation items (for dropdowns)
- `external`: Optional flag for external links

### SiteConfig
Central configuration for site metadata and settings.

**Fields:**
- `title`: Site title
- `description`: Site description for SEO
- `tagline`: Site tagline (e.g., "Tactical Aesthetics")
- `navigation`: Navigation menu items
- `socialMedia`: Social media links configuration
- `contact`: Contact information
- `colors`: Brand colors (primary, secondary, accent)

## Usage

```typescript
import type { Program, Testimonial, SiteConfig } from '@/types';

const program: Program = {
  id: 'selection-prep',
  name: 'Selection Prep',
  duration: '8 weeks',
  targetAudience: 'Special operations candidates',
  description: 'Comprehensive selection preparation program',
  features: ['Performance goals', 'Structured training'],
  equipment: ['Kettlebells', 'Rucksack'],
  cta: {
    text: 'Get Started',
    url: 'https://trainheroic.com',
    platform: 'trainheroic',
  },
};
```

## Requirements Coverage

These type definitions support the following requirements:
- **Requirement 4.4**: Program data structure with all required fields
- **Requirement 9.4**: Testimonial data structure with required fields
- **Requirement 1.1**: Navigation structure for multi-page website
