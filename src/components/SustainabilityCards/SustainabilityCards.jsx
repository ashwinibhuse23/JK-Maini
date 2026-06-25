import React, { useState, useEffect } from 'react'
import "./SustainabilityCards.css"

const SustainabilityCards = ({ sectionTitle, sectionDesc, icons, iconTitles, bg, impactIcons, impactTitles }) => {


    const susCardContent = [
        { icon: icons.icon1, title: iconTitles.title1 },
        { icon: icons.icon2, title: iconTitles.title2 },
        { icon: icons.icon3, title: iconTitles.title3 },
        { icon: icons.icon4, title: iconTitles.title4 },
        { icon: icons.icon5, title: iconTitles.title5 },
        { icon: icons.icon6, title: iconTitles.title6 },
    ].filter(item => item.title);

    const impCardContent = [
        { ImpactIcon: impactIcons.impIcon1, ImpactTitle: impactTitles.impTitle1 },
        { ImpactIcon: impactIcons.impIcon2, ImpactTitle: impactTitles.impTitle2 },
        { ImpactIcon: impactIcons.impIcon3, ImpactTitle: impactTitles.impTitle3 },
    ]

    const [bgColor, setBgColor] = useState("#F6F5ED");

    const handleBgColor = () => {
        if (bg) {
            setBgColor("#F6F5ED");
        } else {
            setBgColor("#fff");
        }
    }

    useEffect(() => {
        handleBgColor();
    }, [bg])



    return (
        <>
            <section className="sustainability-cards" style={bg ? { backgroundColor: "#F6F5ED" } : { backgroundColor: "#fff" }}>
                <div className="container">
                    <div className="section-title text-center">
                        {/* <span className="section-sub-title wow fadeInUp">
                        Who We Are
                    </span> */}
                        <h2 className="text-anime-style-3" data-cursor="-opaque">
                            {sectionTitle}
                        </h2>
                        <p className="wow fadeInUp text-dark" data-wow-delay="0.2s">
                            {sectionDesc}
                        </p>
                    </div>
                </div>
                <div className="container">
                    <div class="cards-parent">
                        {
                            susCardContent.map((item, index) => {
                                return (
                                    <div key={index} className={`sus-card sus-card${index} d-flex gap-2`} style={bg ? { backgroundColor: "#FFF" } : { backgroundColor: "#F6F5ED" }}>
                                        <div className='d-flex align-items-center justify-content-center px-3'>
                                            <div className="sus-card-icon" style={bg ? { backgroundColor: "#F6F5ED" } : { backgroundColor: "#fff" }}>
                                                <img src={item.icon} alt="" />
                                            </div>
                                        </div>
                                        <div className='d-flex align-items-center'>
                                            <div className="sus-card-title">
                                                <h3>{item.title}</h3>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }

                    </div>
                </div>

                <div className="container mt-5">
                    <div className="impact">
                        <div className="row">
                            <div className="col-md-3">
                                <div className="impact-card d-flex">
                                    <div className='d-flex align-items-center justify-content-center px-3'>
                                        <div className="impact-card-icon">
                                            <img src="./images/impact-icon.svg" alt="" />
                                        </div>
                                    </div>
                                    <div className='d-flex align-items-center'>
                                        <div className="impact-card-title">
                                            <h3>Impact</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {
                                impCardContent.map((items, key) => {
                                    return (
                                        <>
                                            <div key={key} className="col-md-3">
                                                <div className="impacts-cards d-flex gap-2 h-100">
                                                    <div className='d-flex align-items-center justify-content-center px-3'>
                                                        <div className="impacts-card-icon">
                                                            <img src={items.ImpactIcon} alt="" />
                                                        </div>
                                                    </div>
                                                    <div className='d-flex align-items-center'>
                                                        <div className="impacts-card-title">
                                                            <h3>{items.ImpactTitle}</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SustainabilityCards