import React from 'react'
import PageHeader from '../../AboutHeader/PageHeader'
import Background from "/images/ss.png"
import './JKMGALESSunstainbility.css'
import ButtonOne from '../../ButtonOne/ButtonOne'
import { FaArrowCircleRight } from 'react-icons/fa'

const JKMGALSustainability = () => {
  return (
    <>
      <PageHeader
        title="Sustainbility In Every Step"
        desc="Our commitment to the planet drives how we design, produce, and grow blending innovation with
              environmental responsibility across the value chain."
        bgImg={Background}
      />

      {/* ===== Sustainability & ESG Section ===== */}
      <section className="jkmgal-sustain-section">

        {/* ── Hero Block: LEFT = all text | RIGHT = full image ── */}
        <div className="jkmgal-hero-block">

          {/* LEFT column: heading + framework text together */}
          <div className="jkmgal-hero-left">

            {/* ESG Tag */}
            <span className="jkmgal-esg-tag">Sustainability &amp; ESG</span>

            {/* Main heading — site standard: text-anime-style-3 + inline red for Aerospace */}
            <h2 className="jkmgal-main-heading text-anime-style-3" data-cursor="-opaque">
              Building a Sustainable Aerospace Future
            </h2>

            {/* Red underline */}
            <hr className="jkmgal-heading-rule" />

            {/* Intro description — site standard paragraph style */}
            <p className="about-raymond wow fadeInUp jkmgal-hero-desc" data-wow-delay="0.2s">
              At JKMGAL, we believe engineering excellence must go hand in hand with environmental responsibility, social equity, and ethical governance. Guided by our ESG Development Plan 2030, we are committed to shaping a future ready aerospace ecosystem that is sustainable, inclusive, and accountable.
            </p>

            {/* Framework sub-section — inside same left column */}
            {/* Framework heading — same style as main heading */}
            <h3 className="jkmgal-framework-title text-anime-style-3" data-cursor="-opaque">Our Sustainability Framework</h3>
            <hr className="jkmgal-framework-rule" />
            <p className="about-raymond wow fadeInUp jkmgal-framework-desc" data-wow-delay="0.3s">
              Our ESG approach is built around three key pillars, Environmental (Planet), Social
              (People), and Governance (Partnership), each backed by measurable goals and ongoing action.
            </p>

          </div>

          {/* RIGHT column: full-height background image */}
          <div className="jkmgal-hero-right">
            <img
              src="./images/jkmgal/sectionback.png"
              alt="Sustainable Aerospace — solar panels, wind turbines and aircraft"
            />
          </div>
        </div>

        {/* ── Pillar Cards ── */}
        <div className="jkmgal-pillars">

          {/* Card 1: Environmental */}
          <div className="jkmgal-pillar-card">
            <div className="jkmgal-img-outer env-outer">
              <div className="jkmgal-pillar-img-wrap env-img">
                <img src="./images/jkmgal/1.png" alt="Environmental — green tree landscape" />
              </div>
            </div>

            <div className="jkmgal-pillar-info">

              <h4 className="jkmgal-pillar-name text-anime-style-3" data-cursor="-opaque">Environmental (Planet)</h4>
              <hr className="jkmgal-pillar-name-rule" />
              <p className="about-raymond wow fadeInUp jkmgal-pillar-subdesc" data-wow-delay="0.15s">
                We are proactively reducing our environmental footprint through energy efficiency, emissions control, and waste recycling:
              </p>
            </div>

            <div className="jkmgal-pillar-bullets env-bullets">
              <ul>
                <li>25% reduction in energy consumption ratio by 2030 (vs 2021)</li>
                <li>-30% reduction in CO₂ footprint ratio by 2030 (vs 2021)</li>
                <li>50% of generated waste recycled by 2030</li>
                <p className="about-raymond wow fadeInUp" data-wow-delay="0.2s">We are ISO 14001 certified for our environmental management system, and our solar initiatives and eco-efficient operations reflect our long-term green vision.</p>
              </ul>
            </div>


          </div>

          {/* Card 2: Social */}
          <div className="jkmgal-pillar-card">
            <div className="jkmgal-img-outer social-outer">
              <div className="jkmgal-pillar-img-wrap social-img">
                <img src="./images/jkmgal/2.png" alt="Social — diverse team collaborating" />
              </div>
            </div>

            <div className="jkmgal-pillar-info">

              <h4 className="jkmgal-pillar-name social-color text-anime-style-3" data-cursor="-opaque">Social (People)</h4>
              <hr className="jkmgal-pillar-name-rule" />
              <p className="about-raymond wow fadeInUp jkmgal-pillar-subdesc" data-wow-delay="0.15s">
                Our people are at the core of everything we build. We are committed to safety, diversity, and well-being:
              </p>
            </div>

            <div className="jkmgal-pillar-bullets social-bullets">
              <ul>
                <li>40% reduction in Lost Time Injury Frequency Rate (LTIFR) by 2030 (vs 2022)
                </li>
                <li>22% female representation in new management positions between 2023–2030</li>
                <li>0% accidents caused by our products</li>
                <p className="about-raymond wow fadeInUp" data-wow-delay="0.2s">Our internal policies are driven by a culture of inclusion, safety-first operations, and continuous workforce development.</p>
              </ul>
            </div>


          </div>

          {/* Card 3: Governance */}
          <div className="jkmgal-pillar-card">
            <div className="jkmgal-img-outer gov-outer">
              <div className="jkmgal-pillar-img-wrap gov-img">
                <img src="./images/jkmgal/3.png" alt="Governance — corporate glass building" />
              </div>
            </div>

            <div className="jkmgal-pillar-info">

              <h4 className="jkmgal-pillar-name gov-color text-anime-style-3" data-cursor="-opaque">Governance (Partnership)</h4>
              <hr className="jkmgal-pillar-name-rule" />
              <p className="about-raymond wow fadeInUp jkmgal-pillar-subdesc" data-wow-delay="0.15s">
                We lead with integrity. Our governance initiatives ensure ethical sourcing, legal compliance, and transparent supplier relationships:
              </p>
            </div>

            <div className="jkmgal-pillar-bullets gov-bullets">
              <ul>
                <li>100% supplier compliance with our Code of Ethics by 2030</li>
                <li>0 tolerance for ethical or legal breaches</li>
                <li>&gt;90% customer satisfaction rating</li>
                <p className="about-raymond wow fadeInUp" data-wow-delay="0.2s">These commitments reflect our belief in building long-term trust with customers, partners, and communities.</p>
              </ul>
            </div>


          </div>

        </div>



      </section>
      {/* ===== Governance Highlights Section ===== */}
      <section className="jkmgal-gov-section">

        {/* LEFT: Title panel */}
        <div className="jkmgal-gov-left">
          <span className="jkmgal-esg-tag">Governance</span>
          <h2 className="jkmgal-gov-title text-anime-style-3" data-cursor="-opaque">
            Our Governance<br />Highlights
          </h2>
          <hr className="jkmgal-gov-rule" />

        </div>

        {/* RIGHT: Chevron cards */}
        <div className="jkmgal-gov-cards">

          {/* Card 1 */}
          <div className="jkmgal-gov-card">
            <span className="jkmgal-gov-badge badge-green">01</span>
            <div className="jkmgal-gov-icon-wrap icon-green">
              {/* FontAwesome fa-recycle */}
              <svg width="36" height="36" viewBox="0 0 512 512" fill="#ffffff" xmlns="http://www.w3.org/2000/svg">
                <path d="M174.7 45.1C192.2 17 223 0 256 0s63.8 17 81.3 45.1l38.6 61.7 27-15.6c8.4-4.9 18.9-4.2 26.6 1.7s11.1 15.9 8.6 25.3l-23.4 87.4c-3.4 12.8-16.6 20.4-29.4 17l-87.4-23.4c-9.4-2.5-16.3-10.4-17.6-20s3.4-19.1 11.8-23.9l28.4-16.4L283 79c-5.8-9.3-16-15-27-15s-21.2 5.7-27 15l-17.5 28c-9.2 14.8-28.6 19.5-43.6 10.5c-15.3-9.2-20.2-29.2-10.7-44.4l17.5-28zM429.5 251.9c15-9 34.4-4.3 43.6 10.5l24.4 39.1c9.4 15.1 14.4 32.4 14.6 50.2c.3 53.1-42.7 96.4-95.8 96.4L320 448l0 32c0 9.7-5.8 18.5-14.8 22.2s-19.3 1.7-26.2-5.2l-64-64c-9.4-9.4-9.4-24.6 0-33.9l64-64c6.9-6.9 17.2-8.9 26.2-5.2s14.8 12.5 14.8 22.2l0 32 96.2 0c17.6 0 31.9-14.4 31.8-32c0-5.9-1.7-11.7-4.8-16.7l-24.4-39.1c-9.5-15.2-4.7-35.2 10.7-44.4zm-364.6-31L36 204.2c-8.4-4.9-13.1-14.3-11.8-23.9s8.2-17.5 17.6-20l87.4-23.4c12.8-3.4 26 4.2 29.4 17L182 241.2c2.5 9.4-.9 19.3-8.6 25.3s-18.2 6.6-26.6 1.7l-26.5-15.3L68.8 335.3c-3.1 5-4.8 10.8-4.8 16.7c-.1 17.6 14.2 32 31.8 32l32.2 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-32.2 0C42.7 448-.3 404.8 0 351.6c.1-17.8 5.1-35.1 14.6-50.2l50.3-80.5z" />
              </svg>
            </div>
            <p className="jkmgal-gov-label">Active Sustainability Committee</p>
          </div>

          {/* Card 2 */}
          <div className="jkmgal-gov-card">
            <span className="jkmgal-gov-badge badge-blue">02</span>
            <div className="jkmgal-gov-icon-wrap icon-blue">
              {/* FontAwesome fa-solar-panel */}
              <svg width="36" height="36" viewBox="0 0 640 512" fill="#ffffff" xmlns="http://www.w3.org/2000/svg">
                <path d="M122.2 0C91.7 0 65.5 21.5 59.5 51.4L8.3 307.4C.4 347 30.6 384 71 384l217 0 0 64-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l192 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0 0-64 217 0c40.4 0 70.7-36.9 62.8-76.6l-51.2-256C574.5 21.5 548.3 0 517.8 0L122.2 0zM260.9 64l118.2 0 10.4 104-139 0L260.9 64zM202.3 168l-100.8 0L122.2 64l90.4 0L202.3 168zM91.8 216l105.6 0L187.1 320 71 320 91.8 216zm153.9 0l148.6 0 10.4 104-169.4 0 10.4-104zm196.8 0l105.6 0L569 320l-116 0L442.5 216zm96-48l-100.8 0L427.3 64l90.4 0 31.4-6.3L517.8 64l20.8 104z" />
              </svg>
            </div>
            <p className="jkmgal-gov-label">ESG Development Roadmap till 2030</p>
          </div>

          {/* Card 3 */}
          <div className="jkmgal-gov-card">
            <span className="jkmgal-gov-badge badge-teal">03</span>
            <div className="jkmgal-gov-icon-wrap icon-teal">
              {/* FontAwesome fa-cloud-rain */}
              <svg width="36" height="36" viewBox="0 0 512 512" fill="#ffffff" xmlns="http://www.w3.org/2000/svg">
                <path d="M96 320c-53 0-96-43-96-96c0-42.5 27.6-78.6 65.9-91.2C64.7 126.1 64 119.1 64 112C64 50.1 114.1 0 176 0c43.1 0 80.5 24.3 99.2 60c14.7-17.1 36.5-28 60.8-28c44.2 0 80 35.8 80 80c0 5.5-.6 10.8-1.6 16c.5 0 1.1 0 1.6 0c53 0 96 43 96 96s-43 96-96 96L96 320zm-6.8 52c1.3-2.5 3.9-4 6.8-4s5.4 1.5 6.8 4l35.1 64.6c4.1 7.5 6.2 15.8 6.2 24.3l0 3c0 26.5-21.5 48-48 48s-48-21.5-48-48l0-3c0-8.5 2.1-16.9 6.2-24.3L89.2 372zm160 0c1.3-2.5 3.9-4 6.8-4s5.4 1.5 6.8 4l35.1 64.6c4.1 7.5 6.2 15.8 6.2 24.3l0 3c0 26.5-21.5 48-48 48s-48-21.5-48-48l0-3c0-8.5 2.1-16.9 6.2-24.3L249.2 372zm124.9 64.6L409.2 372c1.3-2.5 3.9-4 6.8-4s5.4 1.5 6.8 4l35.1 64.6c4.1 7.5 6.2 15.8 6.2 24.3l0 3c0 26.5-21.5 48-48 48s-48-21.5-48-48l0-3c0-8.5 2.1-16.9 6.2-24.3z" />
              </svg>
            </div>
            <p className="jkmgal-gov-label">Focused on CO₂ monitoring and impact reduction</p>
          </div>

          {/* Card 4 */}
          <div className="jkmgal-gov-card">
            <span className="jkmgal-gov-badge badge-purple">04</span>
            <div className="jkmgal-gov-icon-wrap icon-purple">
              {/* FontAwesome fa-certificate */}
              <svg width="36" height="36" viewBox="0 0 512 512" fill="#ffffff" xmlns="http://www.w3.org/2000/svg">
                <path d="M211 7.3C205 1 196-1.4 187.6 .8s-14.9 8.9-17.1 17.3L154.7 80.6l-62-17.5c-8.4-2.4-17.4 0-23.5 6.1s-8.5 15.1-6.1 23.5l17.5 62L18.1 170.6c-8.4 2.1-15 8.7-17.3 17.1S1 205 7.3 211l46.2 45L7.3 301C1 307-1.4 316 .8 324.4s8.9 14.9 17.3 17.1l62.5 15.8-17.5 62c-2.4 8.4 0 17.4 6.1 23.5s15.1 8.5 23.5 6.1l62-17.5 15.8 62.5c2.1 8.4 8.7 15 17.1 17.3s17.3-.2 23.4-6.4l45-46.2 45 46.2c6.1 6.2 15 8.7 23.4 6.4s14.9-8.9 17.1-17.3l15.8-62.5 62 17.5c8.4 2.4 17.4 0 23.5-6.1s8.5-15.1 6.1-23.5l-17.5-62 62.5-15.8c8.4-2.1 15-8.7 17.3-17.1s-.2-17.4-6.4-23.4l-46.2-45 46.2-45c6.2-6.1 8.7-15 6.4-23.4s-8.9-14.9-17.3-17.1l-62.5-15.8 17.5-62c2.4-8.4 0-17.4-6.1-23.5s-15.1-8.5-23.5-6.1l-62 17.5L341.4 18.1c-2.1-8.4-8.7-15-17.1-17.3S307 1 301 7.3L256 53.5 211 7.3z" />
              </svg>
            </div>
            <p className="jkmgal-gov-label">Certified under ISO 14001 – Environmental management system</p>
          </div>

        </div>
      </section>

      {/* ===== Get in Touch CTA Section ===== */}
      <section className="jkmgal-cta-section">

        {/* Decorative blobs */}
        <div className="jkmgal-cta-blob jkmgal-cta-blob--red" aria-hidden="true" />
        <div className="jkmgal-cta-blob jkmgal-cta-blob--white" aria-hidden="true" />

        <div className="jkmgal-cta-inner">

          {/* Centered: Text content */}
          <div className="jkmgal-cta-text">
            <span className="jkmgal-esg-tag jkmgal-cta-tag">Get in Touch</span>

            <h2 className="jkmgal-cta-heading text-anime-style-3" data-cursor="-opaque">
              Want to collaborate on your next{' '}
              <span className="jkmgal-cta-accent">aerospace innovation?</span>
            </h2>
            <hr className="jkmgal-cta-rule" />

            <p className="jkmgal-cta-desc">
              Whether you&apos;re looking for custom-engineered solutions or want to explore how our
              capabilities align with your needs, we&apos;re here to help.
            </p>

            {/* Action button — site theme ButtonOne */}
            <div className="jkmgal-cta-actions">
              <a href="/contact" className="btn-default">
                <ButtonOne text="Get In Touch" icon={<FaArrowCircleRight />} />
              </a>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}

export default JKMGALSustainability
