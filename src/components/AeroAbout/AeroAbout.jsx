import React from 'react'
import '../AutomotiveAbout/AutomotiveAbout.css'

const AeroAbout = () => {
    return (
        <>
            <div className="our-industries">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            
                            <div className="our-industries-content">
                                
                                <div className="section-title">
                                    <span className="section-sub-title wow fadeInUp">
                                        JK Maini Global Aerospace
                                    </span> <br />

                                    <h2 className="text-anime-style-3" data-cursor="-opaque">
                                        Our Aerospace Capabilities
                                    </h2>
                                    <p className="wow fadeInUp about-raymond mt-3" data-wow-delay="0.2s">
                                    With over two decades of aerospace expertise, JK Maini is a trusted name in precision-engineered components for global aerospace leaders. Backed by the legacy of Raymond Group and the innovation-led heritage of Maini, we deliver high-complexity, flight-critical parts with world-class quality, speed, and scale.


                                    </p>
                                    <p className="wow fadeInUp about-raymond mt-3" data-wow-delay="0.2s" > From stator vanes and engine housings to flap tracks and fuel system assemblies, we engineer over 1200+ SKUs across complex engine, structural, and system components. Our 10,500 sq. m. aerospace facility in Bengaluru is built to meet the rigorous standards of global OEMs and Tier-1 suppliers.</p>
                                   
                                    </div>
                                
                            </div>
                            
                        </div>
                        <div className="col-lg-6">
                            <div className="wow fadeInUp" data-wow-delay="0.2s" style={{ paddingLeft: '20px' }}>
                                <img 
                                    src="images/aerospace-right.png" 
                                    alt="Aerospace Capabilities" 
                                    className="img-fluid rounded" 
                                    style={{ width: '100%', objectFit: 'cover' }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AeroAbout