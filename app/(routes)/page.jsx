'use client'

import {
  Hero,
  FeaturedSection,
  FeaturedRoutes,
  Contributors,
  Container,
  SectionBg,
  About,
} from 'app/_components'

import routesBg from 'app/_assets/routes-bg.svg'

export default function Home() {
  return (
    <div className="mx-auto animate-fade-in-to-bottom">
      <Hero />
      <Container className="relative z-10">
        <FeaturedSection />
      </Container>

      <div className="relative z-10">
        <Container>
          <FeaturedRoutes />
          <Contributors />
        </Container>

        <SectionBg image={routesBg} className="-z-10" />
      </div>

      <div className="relative z-10">
        <About />
      </div>
      {/* <Container>
        New content here
      </Container> */}
    </div>
  )
}
