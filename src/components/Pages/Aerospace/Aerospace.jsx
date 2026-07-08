import React from 'react'
import PageHeader from '../../AboutHeader/PageHeader'
import ToolsAbout from '../../ToolsAbout/ToolsAbout'
import AeroPortfolio from '../../AeroPortfolio/AeroPortfolio'
import AeroAbout from '../../AeroAbout/AeroAbout'
import AeroNumbers from '../../AeroNumbers/AeroNumbers'
import AeroParts from '../../AeroParts/AeroParts'

const Aerospace = () => {
  return (
    <>
        <PageHeader
                title="Aerospace and Defence"
                desc="
                    JK Maini has emerged as a reliable partner for the aerospace and defence sector, 
                    offering high-quality fasteners and precision-machined components that meet 
                    stringent industry standards. Our products are trusted for critical applications 
                    where performance and reliability are non-negotiable.
                "
                bgVideo="/images/aerospace.mp4"
            />
            <AeroAbout />
            <AeroNumbers />
            <AeroPortfolio />
            <AeroParts />
    </>
  )
}

export default Aerospace