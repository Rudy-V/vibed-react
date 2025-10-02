import { Hero } from '@/components/hero'
import { Featured } from '@/components/featured'
import { Experiences } from '@/components/experiences'
import { Testimonials } from '@/components/testimonials'
import { Contact } from '@/components/contact'

export default function Home() {
  return (
    <>
      <Hero />
      <Featured />
      <Experiences />
      <Testimonials />
      <Contact />
    </>
  )
}
