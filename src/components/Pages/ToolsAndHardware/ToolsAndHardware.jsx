import React from 'react'
import PageHeader from '../../AboutHeader/PageHeader'
import bannerVideo from "/images/toolsvideo.mp4"
import ToolsAbout from '../../ToolsAbout/ToolsAbout'
import ToolsPortfolio from '../../ToolsPortfolio/ToolsPortfolio'

import ToolsNumbers from './ToolsNumbers'
import ButtonOne from '../../ButtonOne/ButtonOne'
import { FaArrowCircleRight } from 'react-icons/fa'
const ToolsAndHardware = () => {
    return (
        <>
            <PageHeader
                title="Tools and Hardware"
                desc="
                    JK Maini is a trusted name in the tools and hardware sector, delivering
                    precision-engineered solutions for a wide range of industrial and commercial
                    applications. Our comprehensive portfolio includes Files, Cutting Tools, Hand Tools,
                    Power Tools & Power Tool Accessories.
                "
                bgVideo={bannerVideo}
            >
                <ButtonOne text="Visit Site"  icon={<FaArrowCircleRight />} link="https://jksuperdrive.com/" target="_blank" />
            </PageHeader>
            <ToolsAbout />
            <ToolsNumbers />
            <ToolsPortfolio />
            
        </>
    )
}

export default ToolsAndHardware