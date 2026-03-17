import Hero from '@/components/Hero'
import ProgramShowcase from '@/components/ProgramShowcase'
import AboutSection from '@/components/AboutSection'
import StatsSection from '@/components/StatsSection'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <StatsSection />
      <ProgramShowcase />
      <AboutSection />
    </main>
  )
}
