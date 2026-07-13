import React from 'react'

const ToolsAbout = () => {
    return (
        <>
            <div className="our-industries">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-6">

                            <div className="our-industries-content">

                                <div className="section-title">
                                    <span className="section-sub-title wow fadeInUp">
                                        Precision in Every Cut
                                    </span>

                                    <h2 className="text-anime-style-3 mt-2" data-cursor="-opaque">
                                        The Tools & Hardware Legacy of JK Files
                                    </h2>
                                    <p className="wow fadeInUp about-raymond mt-4 pt-2" data-wow-delay="0.2s">
                                        At JK Files, we bring over seven decades of expertise in delivering high-quality tools and hardware solutions trusted by professionals across industries. As a core part of JK Maini, our tools and hardware business stands as a symbol of precision, performance, and reliability.


                                    </p>

                                </div>

                            </div>

                        </div>
                        <div className="col-xl-6">
                            <div className="wow fadeInUp" data-wow-delay="0.2s" style={{ paddingLeft: '20px' }}>
                                <img 
                                    src="images/tools-right.png" 
                                    alt="Tools and Hardware" 
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

export default ToolsAbout