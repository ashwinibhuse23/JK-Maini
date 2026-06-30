import React from 'react'
import './AutomotiveAbout.css'

const AutomotiveAbout = () => {
    return (
        <>
            <div className="our-industries">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            {/* Our Industries Contant Start */}
                            <div className="our-industries-content">
                                {/* Section Title Start */}
                                <div className="section-title">
                                    <span className="section-sub-title wow fadeInUp">
                                        JK Maini Precision Technology
                                    </span> <br />

                                    <h2 className="text-anime-style-3" data-cursor="-opaque">
                                        Precision that Drives Mobility. Leadership that Shapes Industry
                                    </h2>
                                    <p className="wow fadeInUp about-raymond mt-3" data-wow-delay="0.2s">
                                        JK Maini Precision Technology Ltd. (JKMPTL) stands as a dominant force in the global auto components industry, delivering critical components that power the world's most trusted mobility brands. We hold a market-leading share across India's passenger and commercial vehicle segments, supplying to top OEMs and Tier-1 partners. Our leadership is built on decades of engineering expertise, deep partnerships, and an unrelenting focus on precision, reliability, and performance at scale.


                                    </p>
                                    <p className="wow fadeInUp about-raymond mt-3" data-wow-delay="0.2s">As the only domestic manufacturer of flexplates in India, we meet a significant share of the nation’s demand for passenger vehicles. We are also making critical components for fuel injection systems and other automotive applications, combining scale with specialization and positioning JK Maini as a complete partner for mission-critical powertrain and motion technologies.</p>
                                    <p className="wow fadeInUp about-raymond mt-3" data-wow-delay="0.2s">With advanced manufacturing, future-ready technologies, and global quality systems, we are not just meeting the needs of today's mobility platforms, we're engineering what's next.</p>
                                </div>
                                {/* Section Title End */}
                                {/* Industries Body Item List Start */}

                                {/* Industries Footer Box End */}
                            </div>
                            {/* Our Industries Contant End */}
                        </div>
                        <div className="col-lg-6">
                            {/* Industries Image Box Start */}
                            <div
                                className="industries-image-box wow fadeInUp"
                                data-wow-delay="0.2s"
                            >
                                {/* Industries Image Box 1 Start */}
                                <div className="industries-image-box-1">
                                    {/* Industries Image Start */}
                                    <div className="industries-image">
                                        <figure className="image-anime">
                                            <img src="images/automotive-about-2.jpeg" alt="" />
                                        </figure>
                                    </div>
                                    {/* Industries Image End */}
                                </div>
                                {/* Industries Image Box 1 End */}
                                {/* Industries Image Box 2 Start */}
                                <div className="industries-image-box-2">
                                    {/* Industries Image Start */}
                                    <div className="industries-image">
                                        <figure className="image-anime">
                                            <img src="images/automotive-about-1.jpeg" alt="" />
                                        </figure>
                                    </div>
                                </div>
                                {/* Industries Image Box 2 End */}
                            </div>
                            {/* Industries Image Box End */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AutomotiveAbout