import React, { useEffect } from 'react'
import './AboutSection.css'
import { FaPlay, FaLinkedinIn } from "react-icons/fa6";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
    useEffect(() => {
        const textEffectElements = document.querySelectorAll('.text-effect');

        textEffectElements.forEach((el) => {
            const splitText = new SplitType(el, { types: 'lines,words,chars' });

            gsap.set(splitText.chars, {
                opacity: 0.3,
                x: -7,
            });

            gsap.to(splitText.chars, {
                scrollTrigger: {
                    trigger: el,
                    start: "top 92%",
                    end: "top 60%",
                    scrub: 1,
                },
                x: 0,
                y: 0,
                opacity: 1,
                duration: 0.7,
                stagger: 0.2,
            });
        });

        // Fade-in animation for leader cards
        gsap.utils.toArray('.leader-card').forEach((card, i) => {
            gsap.fromTo(card,
                { opacity: 0, y: 40 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    delay: i * 0.15,
                    scrollTrigger: {
                        trigger: card,
                        start: 'top 88%',
                    }
                }
            );
        });

        return () => {
            ScrollTrigger.getAll().forEach(t => t.kill());
        };
    }, []);

    return (
        <>
            <section className="about-leadership">
                <div className="container">

                    {/* ── TOP ROW: left copy + right video ── */}
                    <div className="leadership-top-row">
                        {/* Left: heading block */}
                        <div className="leadership-intro">
                            <div className="section-title">
                                <span className="section-sub-title wow fadeInUp">Our Leadership</span>
                                <h2 className="text-anime-style-3" data-cursor="-opaque">
                                    We lead with timeless values and a fearless vision for tomorrow
                                </h2>

                            </div>
                            <div className="leadership-divider">
                                <span className="divider-line"></span>
                                <svg className="divider-icon" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="20" cy="20" r="18" stroke="#ed193a" strokeWidth="1.5" />
                                    <path d="M13 20c0-3.866 3.134-7 7-7s7 3.134 7 7-3.134 7-7 7" stroke="#ed193a" strokeWidth="1.5" strokeLinecap="round" />
                                    <circle cx="20" cy="20" r="3" fill="#ed193a" />
                                </svg>
                                <span className="divider-line"></span>
                            </div>
                            <p className="wow fadeInUp text-dark" data-wow-delay="0.2s">
                                We don't just shape metal. We shape industries, partnerships, and futures.
                            </p>
                        </div>

                        {/* Right: video / factory image */}
                        <div className="leadership-video-wrap">
                            <figure className="leadership-video-figure">
                                <img src="./images/about-auto.png" alt="Factory floor" />
                                <div className="video-play-btn">
                                    <a
                                        href="https://www.youtube.com/watch?v=iXLn-Yv0_fU"
                                        className="bg-effect popup-video"
                                        data-cursor-text="Play"
                                    >
                                        <FaPlay />
                                    </a>
                                </div>
                            </figure>


                        </div>
                    </div>

                    {/* ── LEADER CARD 1: Gautam Singhania (photo left) ── */}
                    <div className="leader-card leader-card--left">
                        <div className="leader-photo-col">
                            <div className="leader-photo-wrap">
                                <img src="./images/Gautam-singhania.png" alt="Gautam Singhania" />
                            </div>
                        </div>
                        <div className="leader-info-col">
                            <h3 className="leader-name">Gautam Singhania</h3>
                            <span className="leader-role">CHAIRMAN &amp; MANAGING DIRECTOR,Raymond Group</span>
                            <div className="leader-name-underline"></div>
                            <a
                                href="https://www.linkedin.com/in/gautam-singhania-2a1962244/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="leader-linkedin"
                                aria-label="Gautam Singhania LinkedIn"
                            >
                                <FaLinkedinIn />
                            </a>
                        </div>
                        <div className="leader-desc-col">
                            <p className="leader-desc">
                                Great enterprises are built not just on larger than life dreams but also the relentless pursuit and indomitable courage to fulfill them. At Raymond, our legacy of over a century has been intricately woven in building businesses that set new benchmarks, transform industries, and winning the trust and respect of consumers and all concerned stakeholders. With JK Maini, we are investing in the future of precision engineering with a clear ambition: to broaden horizons, deepen capabilities, and build a business that is respected globally for excellence, innovation, and integrity. We are driven by the core purpose of shaping the future of Indian manufacturing on the world stage.
                            </p>
                        </div>
                    </div>

                    {/* ── LEADER CARD 2: Gautam Maini (photo right) ── */}
                    <div className="leader-card leader-card--right">
                        <div className="leader-desc-col">
                            <p className="leader-desc">
                                At JK Maini, we believe precision is not just a measure, it is our mindset. For decades, we have earned the trust of the world's most respected industries through engineering excellence, an unwavering commitment to quality, and a passion for innovation. Our people are at the heart of this journey, shaping solutions that move the world forward. As we look ahead, we remain steadfast in our mission: to lead with integrity, create with purpose, and deliver with precision today, tomorrow, and for generations to come.
                            </p>
                        </div>
                        <div className="leader-info-col">
                            <h3 className="leader-name">Gautam Maini</h3>
                            <span className="leader-role">MANAGING DIRECTOR</span>
                            <div className="leader-name-underline"></div>
                            <a
                                href="https://www.linkedin.com/in/gautam-maini-5110866/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="leader-linkedin"
                                aria-label="Gautam Maini LinkedIn"
                            >
                                <FaLinkedinIn /> 
                            </a>
                        </div>
                        <div className="leader-photo-col">
                            <div className="leader-photo-wrap">
                                <img src="./images/gautam-maini.png" alt="Gautam Maini" />
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default AboutSection