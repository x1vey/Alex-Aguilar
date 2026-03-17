# Implementation Plan: Alex Aguilar Training Website

## Overview

This implementation plan breaks down the development of the Alex Aguilar training website into discrete, incremental coding tasks. The site is a multi-page marketing website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion, featuring a tactical dark theme with aggressive American-themed design elements. Each task builds on previous work, with property-based tests integrated throughout to validate correctness properties from the design.

## Tasks

- [ ] 1. Project setup and configuration
  - [x] 1.1 Initialize Next.js project with TypeScript
    - Create Next.js 14+ project with App Router
    - Configure TypeScript with strict mode
    - Set up project directory structure (app/, components/, lib/, types/, public/)
    - _Requirements: 1.1, 2.1, 14.1_
  
  - [x] 1.2 Install and configure dependencies
    - Install Tailwind CSS, Framer Motion, React Hook Form, Zod
    - Install dev dependencies: Jest, React Testing Library, fast-check, @testing-library/jest-dom
    - Configure package.json scripts for dev, build, test
    - _Requirements: 2.1, 11.5, 14.2_
  
  - [x] 1.3 Configure Tailwind CSS with custom theme
    - Set up tailwind.config.js with tactical color palette (tactical black #0A0A0A, tactical red #C41E3A, navy blue #002868)
    - Configure custom fonts (Bebas Neue for headings, Inter for body)
    - Add custom animation utilities and responsive breakpoints (mobile <768px, tablet 768-1023px, desktop ≥1024px)
    - _Requirements: 2.2, 2.3, 2.4, 13.1, 13.2, 13.4_
  
  - [x] 1.4 Set up testing infrastructure
    - Configure Jest with TypeScript support
    - Set up React Testing Library
    - Configure fast-check for property-based testing
    - Create test utilities and helpers
    - _Requirements: 14.1_

- [ ] 2. Core type definitions and data models
  - [x] 2.1 Create TypeScript interfaces for data models
    - Define Program interface (id, name, duration, targetAudience, description, features, equipment, cta)
    - Define Testimonial interface (id, name, role, content, image)
    - Define PageContent interface for structured content
    - Define NavigationConfig and SiteConfig interfaces
    - _Requirements: 4.4, 9.4, 1.1_
  
  - [ ]* 2.2 Write property test for data model validation
    - **Property 1: Type safety - All data models maintain type constraints**
    - **Validates: Requirements 4.4, 5.1-5.5, 6.1-6.5, 7.1-7.3**
  
  - [x] 2.3 Create program data constants
    - Define Selection Prep program data (8 weeks, 6 days/week, performance goals, equipment list, TrainHeroic CTA)
    - Define Tactical Hypertrophy program data (target audience, features, gym-based)
    - Define Dad Bod program data (30 days, transformation focus, Gumroad CTA)
    - _Requirements: 4.1, 4.2, 4.3, 5.1-5.5, 6.1-6.5, 7.1-7.3_

- [ ] 3. Implement navigation system
  - [x] 3.1 Create Navigation component
    - Build desktop navigation with logo and menu items (Home, About, Programs dropdown, Contact)
    - Implement mobile hamburger menu with slide-out drawer
    - Add active state styling and smooth transitions
    - _Requirements: 1.1, 1.6, 1.7, 2.5_
  
  - [ ]* 3.2 Write unit tests for Navigation component
    - Test navigation rendering on different screen sizes
    - Test mobile menu toggle functionality
    - Test active link highlighting
    - _Requirements: 1.1, 1.6, 2.5_
  
  - [ ]* 3.3 Write property test for navigation behavior
    - **Property 2: Navigation accessibility - All menu items are keyboard navigable**
    - **Validates: Requirements 1.1, 1.6, 1.7**

- [ ] 4. Implement home page hero section
  - [x] 4.1 Create Hero component with animations
    - Build hero layout with background image/video support
    - Add "Tactical Aesthetics" tagline with Bebas Neue typography
    - Implement primary headline and value proposition text
    - Add CTA button with hover effects
    - Integrate Framer Motion fade-in and slide-up animations
    - _Requirements: 3.1, 3.2, 3.3, 3.4, 3.5, 13.1, 13.2, 15.4_
  
  - [ ]* 4.2 Write unit tests for Hero component
    - Test hero content rendering
    - Test CTA button functionality
    - Test responsive layout adjustments
    - _Requirements: 3.1-3.5_
  
  - [ ]* 4.3 Write property test for hero section
    - **Property 3: Hero visibility - Hero section always renders above the fold**
    - **Validates: Requirements 3.1, 15.4**

- [ ] 5. Implement program showcase components
  - [x] 5.1 Create ProgramCard component
    - Build card layout with program name, duration, target audience
    - Add program description and key features list
    - Implement CTA button with external link handling
    - Add hover animations and visual effects
    - _Requirements: 4.1, 4.2, 4.3, 4.4, 4.5, 13.3_
  
  - [x] 5.2 Create ProgramShowcase section component
    - Build grid layout for displaying all three programs
    - Integrate ProgramCard components with program data
    - Implement responsive grid (1 column mobile, 2 columns tablet, 3 columns desktop)
    - Add section heading and intro text
    - _Requirements: 4.1, 4.2, 4.3, 4.6, 2.2, 2.3, 2.4_
  
  - [ ]* 5.3 Write unit tests for program components
    - Test ProgramCard rendering with different program data
    - Test CTA link generation
    - Test responsive grid layout
    - _Requirements: 4.1-4.6_
  
  - [ ]* 5.4 Write property test for program showcase
    - **Property 4: Program completeness - All programs display required information**
    - **Validates: Requirements 4.4, 5.1-5.5, 6.1-6.5, 7.1-7.3**

- [ ] 6. Checkpoint - Verify core components
  - Ensure all tests pass, verify navigation and hero render correctly, ask the user if questions arise.

- [ ] 7. Implement About section component
  - [x] 7.1 Create AboutSection component
    - Build narrative layout for Alex's background story
    - Structure content: Army Ranger → CIA contractor → Firefighter → Coach
    - Add credibility-building visual elements (timeline, badges, or icons)
    - Implement parallax or scroll-triggered animations
    - _Requirements: 8.1, 8.2, 8.3, 8.4, 8.5, 13.3_
  
  - [ ]* 7.2 Write unit tests for AboutSection
    - Test content rendering
    - Test responsive layout
    - _Requirements: 8.1-8.5_
  
  - [ ]* 7.3 Write property test for about section
    - **Property 5: Credibility narrative - About section presents complete career progression**
    - **Validates: Requirements 8.1, 8.2, 8.3, 8.4, 8.5**

- [ ] 8. Implement testimonials and social proof
  - [ ] 8.1 Create Testimonial component
    - Build testimonial card with client name, role, content, and optional image
    - Add quote styling and visual design
    - Implement card animations
    - _Requirements: 9.2, 9.3, 9.4, 13.1_
  
  - [ ] 8.2 Create TestimonialsSection component
    - Build carousel or grid layout for multiple testimonials
    - Add section heading "Proven Results" or similar
    - Implement auto-scroll or manual navigation for carousel
    - Make visually distinct and prominent
    - _Requirements: 9.1, 9.2, 9.3, 9.5_
  
  - [ ]* 8.3 Write unit tests for testimonial components
    - Test testimonial rendering
    - Test carousel navigation
    - _Requirements: 9.1-9.5_
  
  - [ ]* 8.4 Write property test for social proof
    - **Property 6: Testimonial integrity - All testimonials include required fields**
    - **Validates: Requirements 9.2, 9.3, 9.4**

- [ ] 9. Implement contact form with validation
  - [x] 9.1 Create ContactForm component
    - Build form with fields: name, email, message
    - Integrate React Hook Form for form state management
    - Add Zod schema for validation (required fields, email format)
    - Implement real-time validation feedback
    - Add submit button with loading state
    - _Requirements: 11.1, 11.2, 11.3, 11.4_
  
  - [ ] 9.2 Implement form submission handling
    - Create API route for form submission (app/api/contact/route.ts)
    - Add server-side validation
    - Implement success/error feedback messages
    - Add confirmation message display
    - _Requirements: 11.5_
  
  - [ ]* 9.3 Write unit tests for ContactForm
    - Test form rendering
    - Test validation error messages
    - Test form submission flow
    - _Requirements: 11.1-11.5_
  
  - [ ]* 9.4 Write property test for form validation
    - **Property 7: Form validation - Invalid inputs are always rejected**
    - **Validates: Requirements 11.2, 11.3, 11.4**

- [ ] 10. Checkpoint - Verify interactive components
  - Ensure all tests pass, verify form validation and testimonials work correctly, ask the user if questions arise.

- [ ] 11. Implement home page
  - [x] 11.1 Create home page (app/page.tsx)
    - Compose Hero, ProgramShowcase, AboutSection teaser, TestimonialsSection
    - Add smooth scroll behavior between sections
    - Implement Intersection Observer for scroll-triggered animations
    - Add proper semantic HTML structure
    - _Requirements: 1.2, 3.1-3.5, 4.1-4.6, 8.5, 9.1, 15.1-15.5_
  
  - [ ]* 11.2 Write unit tests for home page
    - Test page composition and section rendering
    - Test scroll behavior
    - _Requirements: 1.2, 3.1-3.5, 15.4_
  
  - [ ]* 11.3 Write property test for home page
    - **Property 8: Home page completeness - All required sections render in correct order**
    - **Validates: Requirements 1.2, 3.1, 4.6, 15.4**

- [ ] 12. Implement About page
  - [x] 12.1 Create About page (app/about/page.tsx)
    - Build full About page with expanded AboutSection content
    - Add detailed narrative of Alex's journey and philosophy
    - Include high-quality images related to tactical training
    - Add "Tactical Aesthetics" philosophy explanation
    - Implement page-specific animations
    - _Requirements: 1.3, 8.1-8.5, 13.3, 13.5, 15.1, 15.2_
  
  - [ ]* 12.2 Write unit tests for About page
    - Test page content rendering
    - Test responsive layout
    - _Requirements: 1.3, 8.1-8.5_

- [ ] 13. Implement Selection Prep program page
  - [x] 13.1 Create Selection Prep page (app/programs/selection-prep/page.tsx)
    - Display program overview: 8 weeks, 6 days/week
    - List performance goals: 5 mile run <40min, 500m swim <12:30, 12 mile ruck with 35lbs <3hrs
    - Detail weekly training structure (lower body, running, upper body, ruck, full body, swim, rest)
    - List required equipment: kettlebells, bench, dumbbells, sandbag, rucksack, pool access
    - Add prominent TrainHeroic CTA button
    - Implement program-specific visual design
    - _Requirements: 1.4, 5.1, 5.2, 5.3, 5.4, 5.5, 10.1_
  
  - [ ]* 13.2 Write unit tests for Selection Prep page
    - Test program details rendering
    - Test TrainHeroic link functionality
    - _Requirements: 5.1-5.5, 10.1_
  
  - [ ]* 13.3 Write property test for program page
    - **Property 9: Program page completeness - All program details are displayed**
    - **Validates: Requirements 5.1, 5.2, 5.3, 5.4, 5.5**

- [ ] 14. Implement Tactical Hypertrophy program page
  - [x] 14.1 Create Tactical Hypertrophy page (app/programs/tactical-hypertrophy/page.tsx)
    - Display target audience: dads and tactical professionals
    - Describe program benefits: lean muscle, functional strength, conditioning
    - Highlight mental toughness component
    - Indicate gym-based training
    - Add purchase/access CTA button
    - _Requirements: 1.4, 6.1, 6.2, 6.3, 6.4, 6.5_
  
  - [ ]* 14.2 Write unit tests for Tactical Hypertrophy page
    - Test program content rendering
    - Test CTA functionality
    - _Requirements: 6.1-6.5_

- [ ] 15. Implement Dad Bod program page
  - [x] 15.1 Create Dad Bod page (app/programs/dad-bod/page.tsx)
    - Display 30-day program duration
    - Describe transformation focus and quick results
    - Add compelling before/after imagery or testimonials
    - Add prominent Gumroad CTA button
    - _Requirements: 1.4, 7.1, 7.2, 7.3, 10.2_
  
  - [ ]* 15.2 Write unit tests for Dad Bod page
    - Test program content rendering
    - Test Gumroad link functionality
    - _Requirements: 7.1-7.3, 10.2_

- [ ] 16. Implement Contact page
  - [x] 16.1 Create Contact page (app/contact/page.tsx)
    - Integrate ContactForm component
    - Add social media links section (Instagram)
    - Add page heading and intro text
    - Implement page layout with proper spacing
    - _Requirements: 1.5, 11.1-11.5, 12.1, 12.2_
  
  - [ ]* 16.2 Write unit tests for Contact page
    - Test page composition
    - Test social media links
    - _Requirements: 1.5, 12.1-12.4_
  
  - [ ]* 16.3 Write property test for contact page
    - **Property 10: Contact accessibility - Contact form is accessible and functional**
    - **Validates: Requirements 11.1, 11.2, 11.3, 11.4, 11.5**

- [ ] 17. Checkpoint - Verify all pages
  - Ensure all tests pass, verify all pages render correctly and navigation works, ask the user if questions arise.

- [ ] 18. Implement external link handling
  - [ ] 18.1 Create ExternalLink component
    - Build reusable component for external links
    - Implement target="_blank" and rel="noopener noreferrer"
    - Add visual indicator for external links (icon)
    - _Requirements: 10.4, 12.4_
  
  - [ ] 18.2 Update all external CTAs to use ExternalLink
    - Update TrainHeroic links in Selection Prep program
    - Update Gumroad links in Dad Bod program
    - Update Amazon links if present
    - Update social media links (Instagram)
    - _Requirements: 10.1, 10.2, 10.3, 10.4, 12.3, 12.4_
  
  - [ ]* 18.3 Write property test for external links
    - **Property 11: External link safety - All external links open in new tab with security attributes**
    - **Validates: Requirements 10.4, 12.4**

- [ ] 19. Implement animation system
  - [ ] 19.1 Create animation utilities and hooks
    - Create useInView hook with Intersection Observer
    - Create reusable Framer Motion animation variants (fadeIn, slideUp, parallax)
    - Create AnimatedSection wrapper component
    - _Requirements: 13.4, 14.1_
  
  - [ ] 19.2 Apply animations to all sections
    - Add fade-in animations to hero section
    - Add slide-up animations to program cards
    - Add scroll-triggered animations to about section
    - Add stagger animations to testimonials
    - Ensure animations respect prefers-reduced-motion
    - _Requirements: 13.4, 14.1_
  
  - [ ]* 19.3 Write property test for animations
    - **Property 12: Animation performance - Animations do not block rendering**
    - **Validates: Requirements 14.1, 14.3**

- [ ] 20. Implement social media integration
  - [x] 20.1 Create SocialLinks component
    - Build component with Instagram link
    - Add social media icons (use react-icons or custom SVGs)
    - Implement hover effects
    - Make component reusable for footer and contact page
    - _Requirements: 12.1, 12.2, 12.3, 12.4_
  
  - [ ] 20.2 Add SocialLinks to footer and contact page
    - Create Footer component with SocialLinks
    - Add Footer to root layout
    - Integrate SocialLinks into Contact page
    - _Requirements: 12.1, 12.2_
  
  - [ ]* 20.3 Write unit tests for social media integration
    - Test SocialLinks rendering
    - Test link functionality
    - _Requirements: 12.1-12.4_

- [ ] 21. Implement performance optimizations
  - [ ] 21.1 Optimize images
    - Convert all images to Next.js Image component
    - Configure image optimization in next.config.js
    - Implement responsive image sizes
    - Add proper alt text for accessibility
    - _Requirements: 14.2, 13.5_
  
  - [ ] 21.2 Implement lazy loading
    - Add lazy loading to below-the-fold images
    - Implement lazy loading for testimonial images
    - Add loading="lazy" to appropriate images
    - _Requirements: 14.4_
  
  - [ ] 21.3 Optimize bundle and rendering
    - Configure Next.js for static generation where possible
    - Minimize render-blocking resources
    - Add font optimization (next/font)
    - Configure Tailwind CSS purging
    - _Requirements: 14.1, 14.3_
  
  - [ ]* 21.4 Write property test for performance
    - **Property 13: Image optimization - All images use Next.js Image component**
    - **Validates: Requirements 14.2, 14.4**

- [ ] 22. Checkpoint - Verify performance and animations
  - Ensure all tests pass, verify animations work smoothly, check image loading, ask the user if questions arise.

- [ ] 23. Implement responsive design refinements
  - [ ] 23.1 Test and refine mobile layouts
    - Verify all pages render correctly on mobile (<768px)
    - Adjust spacing, typography, and component sizing for mobile
    - Test hamburger menu functionality
    - Ensure touch targets are appropriately sized
    - _Requirements: 2.2, 2.5_
  
  - [ ] 23.2 Test and refine tablet layouts
    - Verify all pages render correctly on tablet (768-1023px)
    - Adjust grid layouts for tablet breakpoint
    - Test navigation behavior on tablet
    - _Requirements: 2.3_
  
  - [ ] 23.3 Test and refine desktop layouts
    - Verify all pages render correctly on desktop (≥1024px)
    - Ensure proper use of whitespace and max-width constraints
    - Test all interactive elements
    - _Requirements: 2.4_
  
  - [ ]* 23.4 Write property test for responsive design
    - **Property 14: Responsive breakpoints - Layout adapts correctly at all breakpoints**
    - **Validates: Requirements 2.1, 2.2, 2.3, 2.4**

- [ ] 24. Implement visual brand consistency
  - [ ] 24.1 Create design system utilities
    - Create reusable button variants (primary, secondary, outline)
    - Create heading component with consistent styling
    - Create section wrapper with consistent spacing
    - Document color usage patterns
    - _Requirements: 13.1, 13.2, 13.4_
  
  - [ ] 24.2 Apply brand consistency across all pages
    - Audit all pages for color scheme consistency
    - Ensure typography hierarchy is consistent
    - Verify tactical imagery is present on all relevant pages
    - Check that aggressive brand tone is maintained
    - _Requirements: 13.1, 13.2, 13.3, 13.4, 13.5, 15.5_
  
  - [ ]* 24.3 Write property test for brand consistency
    - **Property 15: Brand consistency - All pages use tactical color palette**
    - **Validates: Requirements 13.1, 13.4**

- [ ] 25. Implement value proposition clarity
  - [ ] 25.1 Refine hero messaging
    - Ensure "Tactical Aesthetics" is prominently displayed
    - Clarify bodybuilding + tactical fitness bridge in hero copy
    - Highlight target audience in hero subheading
    - Use results-driven, aggressive language
    - _Requirements: 15.1, 15.2, 15.3, 15.4, 15.5_
  
  - [ ] 25.2 Add value proposition reinforcement
    - Add value prop callouts throughout home page
    - Ensure program descriptions emphasize unique positioning
    - Add testimonials that reinforce value proposition
    - _Requirements: 15.1, 15.2, 15.3_
  
  - [ ]* 25.3 Write property test for value proposition
    - **Property 16: Value proposition visibility - "Tactical Aesthetics" appears on home page**
    - **Validates: Requirements 15.1, 15.4**

- [ ] 26. Final integration and testing
  - [ ] 26.1 Integration testing
    - Test complete user journeys (home → program page → external CTA)
    - Test navigation flow across all pages
    - Test form submission end-to-end
    - Verify all external links work correctly
    - _Requirements: 1.6, 10.1, 10.2, 10.3, 11.5_
  
  - [ ]* 26.2 Run all property-based tests
    - Execute all 16 property tests
    - Verify all properties pass with generated test cases
    - Document any edge cases discovered
    - _Requirements: All requirements_
  
  - [ ]* 26.3 Run full test suite
    - Execute all unit tests
    - Verify code coverage meets targets
    - Fix any failing tests
    - _Requirements: All requirements_

- [ ] 27. Deployment configuration
  - [ ] 27.1 Configure production build
    - Set up environment variables for production
    - Configure next.config.js for production optimization
    - Set up error tracking (optional: Sentry)
    - _Requirements: 14.1_
  
  - [ ] 27.2 Create deployment documentation
    - Document build and deployment process
    - Document environment variable requirements
    - Create README with setup instructions
    - _Requirements: 14.1_

- [ ] 28. Final checkpoint - Production readiness
  - Ensure all tests pass, verify production build succeeds, test deployed site, ask the user if questions arise.

## Notes

- Tasks marked with `*` are optional and can be skipped for faster MVP delivery
- Each task references specific requirements for traceability
- Property-based tests validate universal correctness properties from the design
- Unit tests validate specific component behavior and edge cases
- Checkpoints ensure incremental validation and provide opportunities for user feedback
- All external links (TrainHeroic, Gumroad, Amazon, Instagram) must open in new tabs with security attributes
- Performance target: Initial page load under 3 seconds on standard broadband
- Responsive design must work across mobile (<768px), tablet (768-1023px), and desktop (≥1024px)
- Brand consistency: Tactical black (#0A0A0A), tactical red (#C41E3A), navy blue (#002868)
- Typography: Bebas Neue (headings), Inter (body text)
- All animations must respect prefers-reduced-motion for accessibility
