/**
 * Centralized Image Configuration
 * 
 * Update the URLs here to change images across the entire site.
 * All images are loaded from external URLs for easy management.
 */

export const imageConfig = {
  // Hero Section
  hero: {
    background: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1920&q=80',
  },

  // Founder/About Section
  founder: {
    portrait: 'https://res.cloudinary.com/djgwe16of/image/upload/v1773452009/alex-founder_lkmggi.jpg', // Replace with your founder image URL
  },

  // Program Cards
  programs: {
    selectionPrep: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80',
    tacticalHypertrophy: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80',
    dadBod: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80',
  },

  // Program Detail Pages
  programPages: {
    selectionPrep: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1200&q=80',
    tacticalHypertrophy: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&q=80',
    dadBod: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&q=80',
  },

  // About Page
  about: {
    fullStory: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=1200&q=80',
  },
}

/**
 * How to use:
 * 
 * 1. Upload your images to any image hosting service (Imgur, Cloudinary, etc.)
 * 2. Copy the direct image URL
 * 3. Replace the URL in this file
 * 4. The image will update across the entire site automatically
 * 
 * Example:
 * founder.portrait: 'https://i.imgur.com/abc123.jpg'
 */
