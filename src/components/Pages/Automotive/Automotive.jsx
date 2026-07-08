import React from 'react'
import PageHeader from '../../AboutHeader/PageHeader'

import AutomotiveAbout from '../../AutomotiveAbout/AutomotiveAbout'
import NumbersSection from '../../NumbersSection/NumbersSection'
import SectorCards from '../../SectorCards/SectorCards'
import ButtonOne from '../../ButtonOne/ButtonOne'
import { FaArrowCircleRight } from 'react-icons/fa'
const Automotive = () => {
  return (
    <>
      <PageHeader
        title="Automotive Industrial & Beyond"
        desc={
          <>
            <strong style={{ fontFamily: 'var(--secondary-font)', fontSize: '25px', fontWeight: '500', display: 'inline-block', marginBottom: '10px' }}>Precision That Drives Industries Forward</strong>
            <br />
            At JK Maini Precision Technology Ltd., (JKMPTL) we engineer high-precision components and
            systems for automotive, mobility, and industrial applications. From
            powertrain and motion technologies to transmission components and critical
            assemblies, our solutions meet the most
            challenging global standards.
            With advanced manufacturing, future-ready technologies, and uncompromising quality,
            we deliver precision, consistency, and
            performance at scale, powering progress across mobility, infrastructure, and
            industry.
          </>
        }
        bgVideo="/images/automotivevideo.mp4"
      >
        <ButtonOne 
          text="Visit Site"  
          icon={<FaArrowCircleRight />} 
          onClick={() => window.open("https://auto.jkmaini.com/", "_blank", "noopener,noreferrer")} 
        />
      </PageHeader>

      <AutomotiveAbout />
      <NumbersSection />
      <SectorCards />
    </>
  )
}

export default Automotive