import React from 'react'
import './VisionMissionValues.css'

const VisionMissionValues = () => {
    return (
        <>
            <div className="why-choose-us bg-section">
                <div className="container-fluid">
                    <div className="row align-items-stretch">

                        <div className="col-md-6">
                            <div className="why-choose-image h-100">
                                <figure className="image-anime">
                                    <img src="images/vision&mission.jpg" alt="" />
                                </figure>
                            </div>
                        </div>

                        <div className="col-md-6 vmv-content-col d-flex flex-column justify-content-center">
                            <div className="section-title">
                                <span className="section-sub-title wow fadeInUp">
                                    Who We Are
                                </span>
                                <h2 className="text-anime-style-3" data-cursor="-opaque">
                                    Vision Mission & Values
                                </h2>
                                <p className="wow fadeInUp text-dark" data-wow-delay="0.2s">
                                    At JK Maini, our foundation is built on a clear vision, a purposeful mission, and unwavering values that guide every step we take.
                                </p>
                            </div>
                            <div
                                className="why-choose-tab-box tab-content wow fadeInUp"
                                data-wow-delay="0.4s"
                                id="myTabContent"
                            >
                                {/* Why Choose Nav start */}
                                <div className="why-choose-nav">
                                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                                        <li className="nav-item" role="presentation">
                                            <button
                                                className="nav-link active"
                                                id="tab1"
                                                data-bs-toggle="tab"
                                                data-bs-target="#tab-1"
                                                type="button"
                                                role="tab"
                                                aria-selected="false"
                                            >
                                                Vision
                                            </button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button
                                                className="nav-link"
                                                id="tab2"
                                                data-bs-toggle="tab"
                                                data-bs-target="#tab-2"
                                                type="button"
                                                role="tab"
                                                aria-selected="true"
                                            >
                                                Mission
                                            </button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button
                                                className="nav-link"
                                                id="tab3"
                                                data-bs-toggle="tab"
                                                data-bs-target="#tab-3"
                                                type="button"
                                                role="tab"
                                                aria-selected="false"
                                            >
                                                Values
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                                {/* Why Choose Nav End */}
                                {/* Why Choose Item Start */}
                                <div
                                    className="why-choose-item tab-pane fade"
                                    id="tab-1"
                                    role="tabpanel"
                                    aria-labelledby="tab1"
                                >
                                    {/* Why Choose Body Start */}
                                    <div className="why-choose-body">
                                        <p className="wow fadeInUp text-dark" data-wow-delay="0.2s">We envision ourselves as best in class end to end engineering solution providers offering technologically advanced innovative solutions through high performance employees in a sustainable manner</p>
                                    </div>
                                    {/* Why Choose Body End */}
                                </div>
                                {/* Why Choose Item End */}
                                {/* Why Choose Item Start */}
                                <div
                                    className="why-choose-item tab-pane fade show active"
                                    id="tab-2"
                                    role="tabpanel"
                                    aria-labelledby="tab2"
                                >
                                    {/* Why Choose Body Start */}
                                    <div className="why-choose-body">
                                        <p>To deliver superior products and solutions through a passionate team, customer-centric approach, and a commitment to quality, integrity, and sustainable growth.</p>
                                    </div>
                                    {/* Why Choose Body End */}
                                </div>
                                {/* Why Choose Item End */}
                                {/* Why Choose Item Start */}
                                <div
                                    className="why-choose-item tab-pane fade"
                                    id="tab-3"
                                    role="tabpanel"
                                    aria-labelledby="tab3"
                                >
                                    {/* Why Choose Body Start */}
                                    <div className="why-choose-body">
                                        <p>Our core values center on integrity, quality, and innovation. We build transparent, trust-based relationships, deliver with uncompromising standards, and foster a diverse, inclusive culture. Our focus on sustainability drives long-lasting, eco-conscious solutions, while our goal of stakeholder delight ensures we consistently exceed expectations and create meaningful value.</p>
                                    </div>

                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}

export default VisionMissionValues