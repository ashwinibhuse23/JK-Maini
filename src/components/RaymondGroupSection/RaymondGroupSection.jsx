import React from 'react'
import './RaymondGroupSection.css'

const RaymondGroupSection = () => {
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
                                        Raymond Group
                                    </span> <br />
                                    <img src="images/raymond-group-logo.png" className='my-2' style={{width : "100px"}} alt="" />
                                    <h2 className="text-anime-style-3" data-cursor="-opaque">
                                        A Legacy Woven with Excellence
                                    </h2>
                                    <p className="wow fadeInUp about-raymond mt-3" data-wow-delay="0.2s">
                                        One of India’s most respected names in branded fabric and fashion retail. Incorporated in 1925, Raymond has built a legacy of excellence in textile manufacturing, with an impressive capacity to produce 31 million meters of wool and wool-blended fabrics.
                                         
                                        
                                    </p>
                                    <p className="wow fadeInUp about-raymond mt-3" data-wow-delay="0.2s">The Group owns a distinguished portfolio of apparel brands including Raymond, Premium Apparel, Raymond Made to Measure, Ethnix, Park Avenue, ColorPlus and Parx. These brands are available through our exclusive retail chain, The Raymond Shop (TRS), which has a strong presence with over 700 stores across more than 200 cities in India and overseas.</p>
                                    <p className="wow fadeInUp about-raymond mt-3" data-wow-delay="0.2s">As a group, Raymond is involved in numerous businesses and has a portfolio of well-known brands in Textiles, Apparel, Denim, Engineering and Real Estate.</p>
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
                                            <img src="images/raymond-group.png" alt="" />
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
                                            <img src="images/raymond-group-2.jpg" alt="" />
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

export default RaymondGroupSection