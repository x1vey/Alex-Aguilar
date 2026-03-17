import { Program } from '@/types'

export const programs: Program[] = [
  {
    id: 'selection-prep',
    name: 'Selection Prep',
    duration: '8 Weeks',
    targetAudience: 'Special Operations Candidates',
    description: '8-week program designed for special operations selection. Train 6 days per week. Hit performance standards. Pass selection.',
    features: [
      '5 mile run under 40 minutes',
      '500m swim under 12:30',
      '12 mile ruck with 35lbs under 3 hours',
      'Structured weekly progression',
      'Mental toughness protocols',
      'Performance-based programming'
    ],
    equipment: [
      'Kettlebells',
      'Bench',
      'Dumbbells',
      'Sandbag',
      'Rucksack',
      'Pool access'
    ],
    cta: {
      text: 'Start Training',
      url: 'https://www.trainheroic.com/',
      platform: 'trainheroic'
    }
  },
  {
    id: 'tactical-hypertrophy',
    name: 'Tactical Hypertrophy',
    duration: '12 Weeks',
    targetAudience: 'Tactical Professionals & Dads',
    description: 'Build lean muscle. Develop functional strength. Maintain conditioning. Look good. Perform better.',
    features: [
      'Lean muscle development',
      'Functional strength training',
      'Conditioning protocols',
      'Mental toughness component',
      'Gym-based programming',
      'Sustainable for busy schedules'
    ],
    equipment: [
      'Full gym access',
      'Barbells and plates',
      'Dumbbells',
      'Cable machines',
      'Cardio equipment'
    ],
    cta: {
      text: 'Get Started',
      url: 'https://www.trainheroic.com/',
      platform: 'trainheroic'
    }
  },
  {
    id: 'dad-bod',
    name: '30 Day Dad Bod',
    duration: '30 Days',
    targetAudience: 'Dads Ready to Transform',
    description: '30-day transformation. Shed the dad bod. Build strength foundation. Establish sustainable habits. Get results.',
    features: [
      '30-day structured program',
      'Fat loss focus',
      'Strength foundation',
      'Minimal equipment needed',
      'Time-efficient workouts',
      'Nutrition guidance included'
    ],
    equipment: [
      'Dumbbells',
      'Resistance bands',
      'Pull-up bar',
      'Minimal space required'
    ],
    cta: {
      text: 'Transform Now',
      url: 'https://gumroad.com/',
      platform: 'gumroad'
    }
  }
]
