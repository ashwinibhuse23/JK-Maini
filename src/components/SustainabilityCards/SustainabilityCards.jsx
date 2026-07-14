import React, { useState, useEffect } from 'react'
import "./SustainabilityCards.css"

const SustainabilityCards = ({ sectionTitle, sectionDesc, icons, iconTitles, bg, impactIcons, impactTitles, centerImage }) => {


    const susCardContent = [
        { icon: icons.icon1, title: iconTitles.title1 },
        { icon: icons.icon2, title: iconTitles.title2 },
        { icon: icons.icon3, title: iconTitles.title3 },
        { icon: icons.icon4, title: iconTitles.title4 },
        { icon: icons.icon5, title: iconTitles.title5 },
        { icon: icons.icon6, title: iconTitles.title6 },
    ].filter(item => item.title);

    const midIndex = Math.ceil(susCardContent.length / 2);
    const leftColItems = susCardContent.slice(0, midIndex);
    const rightColItems = susCardContent.slice(midIndex);

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
                       
                        <h2 className="text-anime-style-3" data-cursor="-opaque">
                            {sectionTitle}
                        </h2>
                        <p className="wow fadeInUp about-raymond mt-3" data-wow-delay="0.2s">
                            {sectionDesc}
                        </p>
                    </div>
                </div>
                <div className="container mt-4">
                    <div className="sus-diagram">
                        
                        <div className="sus-col left">
                            {leftColItems.map((item, index) => (
                                <div key={`left-${index}`} className="sus-card" style={bg ? { backgroundColor: "#FFF" } : { backgroundColor: "#F6F5ED" }}>
                                    <div className="sus-card-icon">
                                        <img src={item.icon} alt="" style={{ filter: 'brightness(0) invert(1)' }} />
                                        <div className="connector"></div>
                                    </div>
                                    <div className="sus-card-title">
                                        <h3>{item.title}</h3>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="sus-center">
                            <div className="sus-center-circle">
                                <img src={centerImage || "./images/sustainability-center-plant.jpg"} alt="Sustainability" className="sus-center-img" onError={(e) => { e.target.src = centerImage || "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=800"; }} />
                            </div>
                        </div>

                        <div className="sus-col right">
                            {rightColItems.map((item, index) => (
                                <div key={`right-${index}`} className="sus-card" style={bg ? { backgroundColor: "#FFF" } : { backgroundColor: "#F6F5ED" }}>
                                    <div className="sus-card-icon">
                                        <img src={item.icon} alt="" style={{ filter: 'brightness(0) invert(1)' }} />
                                        <div className="connector"></div>
                                    </div>
                                    <div className="sus-card-title">
                                        <h3>{item.title}</h3>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>

                <div className="container mt-4">
                    <div className="impact-container" style={bg ? { backgroundColor: "#FFF" } : { backgroundColor: "#F6F5ED" }}>
                        <div className="impact-badge">
                            <img src="./images/impact-icon.svg" alt="Impact" className="impact-badge-icon" style={{filter: 'brightness(0) invert(1)'}} />
                            <span className="impact-badge-text">IMPACT</span>
                        </div>
                        <div className="impact-metrics">
                            {impCardContent.map((item, key) => (
                                <div key={key} className="impact-metric">
                                    <div className="impact-metric-icon">
                                        <img src={item.ImpactIcon} alt="" />
                                    </div>
                                    <div className="impact-metric-title">
                                        {item.ImpactTitle}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default SustainabilityCards