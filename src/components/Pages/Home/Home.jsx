import React from 'react'
import HeroSection from '../../HeroSection/HeroSection'
import AboutSection from '../../AboutSection/AboutSection'
import OurCompanies from '../../OurCompanies/OurCompanies'
import ExploreMore from '../../ExploreMoreSection.jsx/ExploreMore'
import AcheivementSection from '../../AcheivementSection/AcheivementSection'

const Home = () => {
  return (
    <div>
        <HeroSection />
        <AboutSection />
        <OurCompanies />
        <ExploreMore />
        <AcheivementSection />
        
    </div>
  )
}

export default Home