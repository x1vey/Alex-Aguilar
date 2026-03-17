/**
 * Core data models for Alex Aguilar Training Website
 * Supports Requirements: 4.4, 9.4, 1.1
 */

/**
 * Training program interface
 * Represents a training program with all necessary details for display and purchase
 */
export interface Program {
  /** Unique identifier for the program */
  id: string;
  /** Program name (e.g., "Selection Prep", "Tactical Hypertrophy") */
  name: string;
  /** Program duration (e.g., "8 weeks", "30 days") */
  duration: string;
  /** Target audience description (e.g., "Special operations candidates") */
  targetAudience: string;
  /** Detailed program description */
  description: string;
  /** List of key program features or benefits */
  features: string[];
  /** Required equipment list */
  equipment: string[];
  /** Call-to-action configuration */
  cta: {
    /** CTA button text */
    text: string;
    /** External platform URL (TrainHeroic, Gumroad, etc.) */
    url: string;
    /** Platform type for styling/tracking */
    platform: 'trainheroic' | 'gumroad' | 'amazon' | 'other';
  };
}

/**
 * Client testimonial interface
 * Represents social proof from satisfied clients
 */
export interface Testimonial {
  /** Unique identifier for the testimonial */
  id: string;
  /** Client name or identifier */
  name: string;
  /** Client role or background (e.g., "Army Veteran", "Firefighter") */
  role: string;
  /** Testimonial content/quote */
  content: string;
  /** Optional client image URL */
  image?: string;
}

/**
 * Structured page content interface
 * Provides flexible content structure for different page sections
 */
export interface PageContent {
  /** Section identifier */
  id: string;
  /** Section type for rendering logic */
  type: 'hero' | 'about' | 'programs' | 'testimonials' | 'contact' | 'custom';
  /** Section heading */
  heading?: string;
  /** Section subheading or tagline */
  subheading?: string;
  /** Main content text */
  content?: string;
  /** Background image or video URL */
  backgroundMedia?: string;
  /** Additional metadata for section customization */
  metadata?: Record<string, unknown>;
}

/**
 * Navigation configuration interface
 * Defines site navigation structure
 */
export interface NavigationConfig {
  /** Navigation item label */
  label: string;
  /** Navigation item path */
  path: string;
  /** Optional nested navigation items (for dropdowns) */
  children?: NavigationConfig[];
  /** Whether this is an external link */
  external?: boolean;
}

/**
 * Site-wide configuration interface
 * Central configuration for site metadata and settings
 */
export interface SiteConfig {
  /** Site title */
  title: string;
  /** Site description for SEO */
  description: string;
  /** Site tagline (e.g., "Tactical Aesthetics") */
  tagline: string;
  /** Navigation menu items */
  navigation: NavigationConfig[];
  /** Social media links */
  socialMedia: {
    /** Platform name */
    platform: string;
    /** Profile URL */
    url: string;
    /** Display label */
    label: string;
  }[];
  /** Contact information */
  contact: {
    /** Contact email */
    email?: string;
    /** Contact form endpoint */
    formEndpoint?: string;
  };
  /** Brand colors */
  colors: {
    /** Primary brand color (tactical black) */
    primary: string;
    /** Secondary brand color (tactical red) */
    secondary: string;
    /** Accent color (navy blue) */
    accent: string;
  };
}
