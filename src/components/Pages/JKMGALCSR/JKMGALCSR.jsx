import React from 'react'
import PageHeader from '../../AboutHeader/PageHeader'
import Background from "/images/jkmgal/CSR/csr2.jpg"
import './JKMGALCSR.css'

/* ── Page ──────────────────────────────────────────────── */
const JKMGALCSR = () => {
    return (
        <>
            {/* ── Page Header ───────────────────────────────── */}
            <PageHeader
                title="Empowering People, Enabling Progress"
                desc="Our CSR initiatives focus on uplifting communities, advancing education, and fostering inclusive
                  growth while staying grounded in our values of integrity and excellence."
                bgImg={Background}
            />

            {/* ── Our Way of Giving Back Section ────────────── */}
            <section className="csr-intro-section">
                <div className="csr-intro-inner">

                    {/* ── LEFT: Tag + Heading + Dots ── */}
                    <div className="csr-intro-left wow fadeInLeft" data-wow-delay="0.1s" data-wow-duration="1.2s">
                        <div className="section-title">
                            <span className="section-sub-title wow fadeInUp" data-wow-delay="0.15s" data-wow-duration="1s">CSR &amp; IMPACT</span>
                        </div>
                        <h2 className="csr-heading wow fadeInUp" data-wow-delay="0.25s" data-wow-duration="1.2s">Our Way of<br />Giving Back</h2>
                        <div className="csr-dots wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="1s">
                            <span className="csr-dot"></span>
                            <span className="csr-dot"></span>
                            <span className="csr-dot"></span>
                        </div>
                    </div>

                    {/* ── MIDDLE: Two info items ── */}
                    <div className="csr-intro-middle">
                        {/* Item 1 */}
                        <div className="csr-item-wrapper wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="1.2s">
                            <div className="csr-item">
                                <div className="csr-item-icon-wrap">
                                    {/* Globe — community impact icon */}
                                    <svg viewBox="0 0 24 24" aria-hidden="true">
                                        <circle cx="12" cy="12" r="10" />
                                        <path d="M2 12h20" />
                                        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                                    </svg>
                                </div>
                                <p className="about-raymond wow fadeInUp" data-wow-delay="0.3s" data-wow-duration="1.2s">
                                    At JK Maini Global Aerospace Ltd. (JKMGAL), engineering
                                    excellence is matched by our commitment to community
                                    transformation. Through our CSR efforts, we aim to uplift lives,
                                    empower women, support rural development, and create
                                    sustainable change at the grassroots.
                                </p>
                            </div>
                        </div>

                        {/* Item 2 */}
                        <div className="csr-item-wrapper wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="1.2s">
                            <div className="csr-item">
                                <div className="csr-item-icon-wrap">
                                    {/* Seedling — sustainable growth icon */}
                                    <svg viewBox="0 0 24 24" aria-hidden="true">
                                        <path d="M12 22V11" />
                                        <path d="M12 11C12 11 7.5 9.5 5 5c4.5 0 7 3 7 6z" />
                                        <path d="M12 11c0 0 4.5-1.5 7-5.5-4.5 0-7 2.5-7 5.5z" />
                                        <path d="M5 3c0 3.5 2 6.5 7 8" />
                                    </svg>
                                </div>
                                <p className="about-raymond wow fadeInUp" data-wow-delay="0.5s" data-wow-duration="1.2s">
                                    Driven by the Sandeep &amp; Gitanjali Maini Foundation and the
                                    Gramothan Foundation, our initiatives reflect our belief that
                                    true progress is inclusive and shared.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* ── RIGHT: Dot pattern decoration ── */}
                    <div className="csr-intro-right wow fadeInRight" data-wow-delay="0.3s" data-wow-duration="1.4s">
                        <div className="csr-dot-pattern csr-dot-pattern--top" aria-hidden="true"></div>
                        <div className="csr-dot-pattern csr-dot-pattern--bottom" aria-hidden="true"></div>
                    </div>
                </div>

                {/* ── LOGOS STRIP ── */}
                <div className="csr-logos-strip">
                    <div className="csr-logo-item wow fadeInUp" data-wow-delay="0.1s" data-wow-duration="1s">
                        <img
                            src="/images/CSR/manisamj.png"
                            alt="Maini Samaj Kalyan Kendra"
                        />
                    </div>
                    <div className="csr-logo-item csr-logo-item--sgmf wow fadeInUp" data-wow-delay="0.25s" data-wow-duration="1s">
                        <img
                            src="/images/CSR/sandeep&gitanjali.png"
                            alt="Sandeep & Gitanjali Maini Foundation"
                        />
                    </div>
                    <div className="csr-logo-item wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="1s">
                        <img
                            src="/images/CSR/gramothan-foundation.png"
                            alt="Gramothan Foundation"
                        />
                    </div>
                </div>
            </section>



            {/* ── Core CSR Focus Areas Section ──────────────── */}
            <section className="csr-focus-section">
                <div className="csr-focus-inner">

                    {/* ── Section Title ── */}
                    <div className="section-title text-center csr-focus-title wow fadeInUp" data-wow-delay="0.1s" data-wow-duration="1s">
                        <h2 className="text-anime-style-3" data-cursor="-opaque">
                            Core CSR Focus Areas
                        </h2>
                    </div>

                    {/* ── Cards Grid ── */}
                    <div className="csr-focus-grid">

                        {/* ── Card 01 — Women & Children Development ── */}
                        <div className="csr-focus-card wow fadeInUp" data-wow-delay="0.1s" data-wow-duration="1s">
                            <div className="csr-focus-icon-wrap csr-focus-icon--orange">
                                <div className="csr-focus-ring csr-focus-ring--outer"></div>
                                <div className="csr-focus-ring csr-focus-ring--inner"></div>
                                <div className="csr-focus-dot-accent csr-focus-dot--orange"></div>
                                <div className="csr-focus-icon-circle">
                                    <img src="/images/jkmgal/CSR/mother-child.png" alt="Women and Children" className="csr-focus-img" />
                                </div>
                                <span className="csr-focus-num">01</span>
                            </div>
                            <h3 className="csr-focus-card-title">Women &amp; Children Development</h3>
                            <p className="csr-focus-card-text">Empowering women through education, entrepreneurship, and micro finance</p>
                            <div className="csr-focus-divider"></div>
                            <p className="csr-focus-card-text">Support for children's learning, nutrition, and development</p>
                        </div>

                        {/* ── Card 02 — Micro Finance ── */}
                        <div className="csr-focus-card wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="1s">
                            <div className="csr-focus-icon-wrap csr-focus-icon--pink">
                                <div className="csr-focus-ring csr-focus-ring--outer"></div>
                                <div className="csr-focus-ring csr-focus-ring--inner"></div>
                                <div className="csr-focus-dot-accent csr-focus-dot--pink"></div>
                                <div className="csr-focus-icon-circle">
                                    <img src="/images/jkmgal/CSR/micro-learning.png" alt="Micro Finance" className="csr-focus-img" />
                                </div>
                                <span className="csr-focus-num">02</span>
                            </div>
                            <h3 className="csr-focus-card-title">Micro Finance</h3>
                            <p className="csr-focus-card-text">Self help groups and skill based micro loans for rural women</p>
                            <div className="csr-focus-divider"></div>
                            <p className="csr-focus-card-text">Encouraging self-sufficiency and financial independence</p>
                        </div>

                        {/* ── Card 03 — Scholarships & Skill Development ── */}
                        <div className="csr-focus-card wow fadeInUp" data-wow-delay="0.3s" data-wow-duration="1s">
                            <div className="csr-focus-icon-wrap csr-focus-icon--purple">
                                <div className="csr-focus-ring csr-focus-ring--outer"></div>
                                <div className="csr-focus-ring csr-focus-ring--inner"></div>
                                <div className="csr-focus-dot-accent csr-focus-dot--purple"></div>
                                <div className="csr-focus-icon-circle">
                                    <img src="/images/jkmgal/CSR/scholarship.png" alt="Scholarships" className="csr-focus-img" />
                                </div>
                                <span className="csr-focus-num">03</span>
                            </div>
                            <h3 className="csr-focus-card-title">Scholarships &amp; Skill Development</h3>
                            <p className="csr-focus-card-text">Merit based scholarships for underprivileged youth</p>
                            <div className="csr-focus-divider"></div>
                            <p className="csr-focus-card-text">Vocational training and employability programs</p>
                        </div>

                        {/* ── Card 04 — Organic Farming & Sustainability ── */}
                        <div className="csr-focus-card wow fadeInUp" data-wow-delay="0.15s" data-wow-duration="1s">
                            <div className="csr-focus-icon-wrap csr-focus-icon--green">
                                <div className="csr-focus-ring csr-focus-ring--outer"></div>
                                <div className="csr-focus-ring csr-focus-ring--inner"></div>
                                <div className="csr-focus-dot-accent csr-focus-dot--green"></div>
                                <div className="csr-focus-icon-circle">
                                    <img src="/images/jkmgal/CSR/sustainable.png" alt="Organic Farming" className="csr-focus-img" />
                                </div>
                                <span className="csr-focus-num">04</span>
                            </div>
                            <h3 className="csr-focus-card-title">Organic Farming &amp; Sustainability</h3>
                            <p className="csr-focus-card-text">Promoting organic agriculture and eco conscious farming practices</p>
                            <div className="csr-focus-divider"></div>
                            <p className="csr-focus-card-text">Rural training programs to ensure long term viability</p>
                        </div>

                        {/* ── Card 05 — Support to the Elderly ── */}
                        <div className="csr-focus-card wow fadeInUp" data-wow-delay="0.25s" data-wow-duration="1s">
                            <div className="csr-focus-icon-wrap csr-focus-icon--blue">
                                <div className="csr-focus-ring csr-focus-ring--outer"></div>
                                <div className="csr-focus-ring csr-focus-ring--inner"></div>
                                <div className="csr-focus-dot-accent csr-focus-dot--blue"></div>
                                <div className="csr-focus-icon-circle">
                                    <img src="/images/jkmgal/CSR/social-justice.png" alt="Support to Elderly" className="csr-focus-img" />
                                </div>
                                <span className="csr-focus-num">05</span>
                            </div>
                            <h3 className="csr-focus-card-title">Support to the Elderly</h3>
                            <p className="csr-focus-card-text">Providing healthcare, guidance and emotional support</p>
                            <div className="csr-focus-divider"></div>
                            <p className="csr-focus-card-text">Creating a dignified and secure life for senior citizens</p>
                        </div>

                        {/* ── Card 06 — Adoption of Schools & Villages ── */}
                        <div className="csr-focus-card wow fadeInUp" data-wow-delay="0.35s" data-wow-duration="1s">
                            <div className="csr-focus-icon-wrap csr-focus-icon--teal">
                                <div className="csr-focus-ring csr-focus-ring--outer"></div>
                                <div className="csr-focus-ring csr-focus-ring--inner"></div>
                                <div className="csr-focus-dot-accent csr-focus-dot--teal"></div>
                                <div className="csr-focus-icon-circle">
                                    <img src="/images/jkmgal/CSR/adoption.png" alt="Adoption of Schools" className="csr-focus-img" />
                                </div>
                                <span className="csr-focus-num">06</span>
                            </div>
                            <h3 className="csr-focus-card-title">Adoption of Schools &amp; Villages</h3>
                            <p className="csr-focus-card-text">Improving infrastructure, education and sanitation facilities</p>
                            <div className="csr-focus-divider"></div>
                            <p className="csr-focus-card-text">Building sustainable and self-reliant communities</p>
                        </div>

                        {/* ── Card 07 — Wellness & Health ── */}
                        <div className="csr-focus-card wow fadeInUp" data-wow-delay="0.1s" data-wow-duration="1s">
                            <div className="csr-focus-icon-wrap csr-focus-icon--orange">
                                <div className="csr-focus-ring csr-focus-ring--outer"></div>
                                <div className="csr-focus-ring csr-focus-ring--inner"></div>
                                <div className="csr-focus-dot-accent csr-focus-dot--orange"></div>
                                <div className="csr-focus-icon-circle">
                                    <img src="/images/jkmgal/CSR/health.png" alt="Wellness and Health" className="csr-focus-img" />
                                </div>
                                <span className="csr-focus-num">07</span>
                            </div>
                            <h3 className="csr-focus-card-title">Wellness &amp; Health</h3>
                            <p className="csr-focus-card-text">Health camps, awareness drives, and preventive care in underserved areas</p>

                        </div>

                        {/* ── Card 08 — Rural Development & Environment ── */}
                        <div className="csr-focus-card wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="1s">
                            <div className="csr-focus-icon-wrap csr-focus-icon--green">
                                <div className="csr-focus-ring csr-focus-ring--outer"></div>
                                <div className="csr-focus-ring csr-focus-ring--inner"></div>
                                <div className="csr-focus-dot-accent csr-focus-dot--green"></div>
                                <div className="csr-focus-icon-circle">
                                    <img src="/images/jkmgal/CSR/rural.png" alt="Rural Development" className="csr-focus-img" />
                                </div>
                                <span className="csr-focus-num">08</span>
                            </div>
                            <h3 className="csr-focus-card-title">Rural Development &amp; Environment</h3>
                            <p className="csr-focus-card-text">Waste management, clean energy awareness, and sustainable development</p>


                        </div>


                    </div>{/* /.csr-focus-grid */}
                </div>{/* /.csr-focus-inner */}
            </section>{/* /.csr-focus-section */}

            {/* ══════════════════════════════════════
                IMPACT IN ACTION SECTION
            ══════════════════════════════════════ */}
            <section className="csr-impact-section">
                <div className="csr-impact-inner">

                    {/* ── Title ── */}
                    <div className="section-title text-center csr-impact-heading">

                        <h2 className="text-anime-style-3 wow fadeInUp" data-cursor="-opaque" data-wow-delay="0.2s" data-wow-duration="1s">
                            Impact in Action
                        </h2>

                    </div>

                    {/* ── 3 Cards ── */}
                    <div className="csr-impact-grid">

                        {/* Card 1 */}
                        <div className="csr-impact-card wow fadeInUp" data-wow-delay="0.1s" data-wow-duration="1s">
                            <div className="csr-impact-icon-wrap">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="csr-impact-svg">
                                    <path fill="currentColor" d="M174.7 45.1C192.2 17 223 0 256 0s63.8 17 81.3 45.1l38.6 61.7 27-15.6c8.4-4.9 18.9-4.2 26.6 1.7s11.1 15.9 8.6 25.3l-23.4 87.4c-3.4 12.8-16.6 20.4-29.4 17l-87.4-23.4c-9.4-2.5-16.3-10.4-17.6-20s3.4-19.1 11.8-23.9l28.4-16.4L283 79c-5.8-9.3-16-15-27-15s-21.2 5.7-27 15l-17.5 28c-9.2 14.8-28.6 19.5-43.6 10.5c-15.3-9.2-20.2-29.2-10.7-44.4l17.5-28zM429.5 251.9c15-9 34.4-4.3 43.6 10.5l24.4 39.1c9.4 15.1 14.4 32.4 14.6 50.2c.3 53.1-42.7 96.4-95.8 96.4L320 448l0 32c0 9.7-5.8 18.5-14.8 22.2s-19.3 1.7-26.2-5.2l-64-64c-9.4-9.4-9.4-24.6 0-33.9l64-64c6.9-6.9 17.2-8.9 26.2-5.2s14.8 12.5 14.8 22.2l0 32 96.2 0c17.6 0 31.9-14.4 31.8-32c0-5.9-1.7-11.7-4.8-16.7l-24.4-39.1c-9.5-15.2-4.7-35.2 10.7-44.4zm-364.6-31L36 204.2c-8.4-4.9-13.1-14.3-11.8-23.9s8.2-17.5 17.6-20l87.4-23.4c12.8-3.4 26 4.2 29.4 17L182 241.2c2.5 9.4-.9 19.3-8.6 25.3s-18.2 6.6-26.6 1.7l-26.5-15.3L68.8 335.3c-3.1 5-4.8 10.8-4.8 16.7c-.1 17.6 14.2 32 31.8 32l32.2 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-32.2 0C42.7 448-.3 404.8 0 351.6c.1-17.8 5.1-35.1 14.6-50.2l50.3-80.5z" />
                                </svg>
                            </div>
                            <p className="csr-impact-text">Thousands of women and children empowered across rural India</p>
                        </div>


                        {/* Card 2 */}
                        <div className="csr-impact-card wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="1s">
                            <div className="csr-impact-icon-wrap">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" className="csr-impact-svg">
                                    <path fill="currentColor" d="M122.2 0C91.7 0 65.5 21.5 59.5 51.4L8.3 307.4C.4 347 30.6 384 71 384l217 0 0 64-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l192 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0 0-64 217 0c40.4 0 70.7-36.9 62.8-76.6l-51.2-256C574.5 21.5 548.3 0 517.8 0L122.2 0zM260.9 64l118.2 0 10.4 104-139 0L260.9 64zM202.3 168l-100.8 0L122.2 64l90.4 0L202.3 168zM91.8 216l105.6 0L187.1 320 71 320 91.8 216zm153.9 0l148.6 0 10.4 104-169.4 0 10.4-104zm196.8 0l105.6 0L569 320l-116 0L442.5 216zm96-48l-100.8 0L427.3 64l90.4 0 31.4-6.3L517.8 64l20.8 104z" />
                                </svg>
                            </div>
                            <p className="csr-impact-text">Villages transformed into hubs of education, health, and sustainability</p>
                        </div>


                        {/* Card 3 */}
                        <div className="csr-impact-card wow fadeInUp" data-wow-delay="0.3s" data-wow-duration="1s">
                            <div className="csr-impact-icon-wrap">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="csr-impact-svg">
                                    <path fill="currentColor" d="M96 320c-53 0-96-43-96-96c0-42.5 27.6-78.6 65.9-91.2C64.7 126.1 64 119.1 64 112C64 50.1 114.1 0 176 0c43.1 0 80.5 24.3 99.2 60c14.7-17.1 36.5-28 60.8-28c44.2 0 80 35.8 80 80c0 5.5-.6 10.8-1.6 16c.5 0 1.1 0 1.6 0c53 0 96 43 96 96s-43 96-96 96L96 320zm-6.8 52c1.3-2.5 3.9-4 6.8-4s5.4 1.5 6.8 4l35.1 64.6c4.1 7.5 6.2 15.8 6.2 24.3l0 3c0 26.5-21.5 48-48 48s-48-21.5-48-48l0-3c0-8.5 2.1-16.9 6.2-24.3L89.2 372zm160 0c1.3-2.5 3.9-4 6.8-4s5.4 1.5 6.8 4l35.1 64.6c4.1 7.5 6.2 15.8 6.2 24.3l0 3c0 26.5-21.5 48-48 48s-48-21.5-48-48l0-3c0-8.5 2.1-16.9 6.2-24.3L249.2 372zm124.9 64.6L409.2 372c1.3-2.5 3.9-4 6.8-4s5.4 1.5 6.8 4l35.1 64.6c4.1 7.5 6.2 15.8 6.2 24.3l0 3c0 26.5-21.5 48-48 48s-48-21.5-48-48l0-3c0-8.5 2.1-16.9 6.2-24.3z" />
                                </svg>
                            </div>
                            <p className="csr-impact-text">Continued collaboration with NGOs and community leaders for deeper impact</p>
                        </div>


                    </div>{/* /.csr-impact-grid */}
                </div>{/* /.csr-impact-inner */}
            </section>{/* /.csr-impact-section */}

            {/* ══════════════════════════════════════
                OUR PROMISE SECTION
            ══════════════════════════════════════ */}
            <section className="csr-promise-section">
                {/* Decorative blobs */}
                <div className="csr-promise-blob csr-promise-blob--1" aria-hidden="true"></div>
                <div className="csr-promise-blob csr-promise-blob--2" aria-hidden="true"></div>

                <div className="csr-promise-inner">

                    {/* ── Section Title (matches site pattern) ── */}
                    <div className="section-title text-center csr-promise-title-block wow fadeInUp" data-wow-delay="0.1s" data-wow-duration="1s">
                       
                        <h2 className="text-anime-style-3" data-cursor="-opaque">
                            Our Promise
                        </h2>
                    </div>

                    {/* ── Quote block ── */}
                    <div className="csr-promise-quote-wrap wow fadeInUp" data-wow-delay="0.3s" data-wow-duration="1.2s">
                        <div className="csr-promise-quote-mark" aria-hidden="true">&ldquo;</div>
                        <p className="csr-promise-quote-text">
                            We don&rsquo;t just build components  we build{' '}
                            <em>hope</em>, <em>dignity</em>, and{' '}
                            <em>opportunity</em>. At JK Maini Global Aerospace Limited
                            (JKMGAL), every product we deliver carries the silent strength
                            of the lives we help uplift.
                        </p>
                    </div>

                   
                    {/* ── Bottom decorative divider ── */}
                    <div className="csr-promise-divider" aria-hidden="true">
                        <span className="csr-promise-divider-line"></span>
                        <span className="csr-promise-divider-dot"></span>
                        <span className="csr-promise-divider-dot csr-promise-divider-dot--mid"></span>
                        <span className="csr-promise-divider-dot"></span>
                        <span className="csr-promise-divider-line"></span>
                    </div>

                </div>{/* /.csr-promise-inner */}
            </section>{/* /.csr-promise-section */}

        </>
    )
}

export default JKMGALCSR
