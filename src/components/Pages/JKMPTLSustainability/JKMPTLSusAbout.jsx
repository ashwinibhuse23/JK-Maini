import React from 'react'
import "./JKMPTLSusAbout.css"
import { TbLeaf, TbBolt, TbDroplet, TbRecycle } from "react-icons/tb";

const JKMPTLSusAbout = () => {
    const goals = [
        {
            icon: <TbLeaf size={32} color="#E81C3D" strokeWidth={1.5}/>,
            title: "Lower Emissions",
            desc: "Reducing our carbon footprint every day."
        },
        {
            icon: <TbBolt size={32} color="#E81C3D" strokeWidth={1.5}/>,
            title: "Energy Efficiency",
            desc: "Using resources wisely to drive efficiency."
        },
        {
            icon: <TbDroplet size={32} color="#E81C3D" strokeWidth={1.5}/>,
            title: "Water Conservation",
            desc: "Preserving water for a sustainable tomorrow."
        },
        {
            icon: <TbRecycle size={32} color="#E81C3D" strokeWidth={1.5}/>,
            title: "Waste Reduction",
            desc: "Minimizing waste and promoting circular practices."
        }
    ]

    return (
        <section className="sustain-about-section">
            <div className="container">
                <div className="sustain-chevron-container">
                    {/* Background number 5 */}
                    <div className="sustain-bg-number">5</div>
                    
                    <div className="sustain-left-content">
                        <div className="sustain-badge wow fadeInUp">
                            <TbLeaf size={16} />
                            <span>Sustainability Goals</span>
                        </div>
                        
                        <h2 className="sustain-title text-anime-style-3" data-cursor="-opaque">
                            OUR COMMITMENT TO<br/>
                            <span>SUSTAINABILITY</span>
                        </h2>
                        
                        <div className="sustain-divider"></div>

                        <p className="sustain-desc wow fadeInUp" data-wow-delay="0.2s">
                            We are dedicated to building a future where business growth goes hand in hand with environmental stewardship and social responsibility.
                        </p>

                        <p className="sustain-desc wow fadeInUp" data-wow-delay="0.3s">
                            By embracing innovative technologies and responsible sourcing, we strive to create lasting value for our communities and the planet.
                        </p>

                        <div className="sustain-goals-grid wow fadeInUp" data-wow-delay="0.4s">
                            {goals.map((goal, index) => (
                                <div key={index} className="sustain-goal-item">
                                    <div className="sustain-goal-icon">
                                        {goal.icon}
                                    </div>
                                    <h4 className="sustain-goal-title">{goal.title}</h4>
                                    <p className="sustain-goal-desc">{goal.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="sustain-right-image-wrapper">
                        <div className="sustain-right-image-inner">
                            <img src="images/automotive-about-2.jpeg" alt="Sustainability Manufacturing" className="sustain-image" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default JKMPTLSusAbout