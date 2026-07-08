import React from 'react'
import { Link } from 'react-router-dom'
import "./PageHeader.css"

const PageHeader = ({ title, desc, bgImg, bgVideo, children }) => {
    return (
        <>
            <div className="page-header parallaxie" style={{ backgroundImage: bgVideo ? 'none' : `url(${bgImg})` }}>
                {bgVideo && (
                    <video 
                        autoPlay 
                        loop 
                        muted 
                        playsInline
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            zIndex: 0
                        }}
                    >
                        <source src={bgVideo} type="video/mp4" />
                    </video>
                )}
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            {/* Page Header Box Start */}
                            <div className="page-header-box">
                                <h1 className="text-anime-style-3" data-cursor="-opaque">
                                    {title}
                                </h1>
                                <p className='text-anime-style-1 text-white'>{desc}</p>
                                {children && (
                                    <div className="mt-4 wow fadeInUp">
                                        {children}
                                    </div>
                                )}
                                {/* <nav className="wow fadeInUp">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item">
                                            <Link to="/">home</Link>
                                        </li>
                                        <li className="breadcrumb-item active" aria-current="page">
                                            about us
                                        </li>
                                    </ol>
                                </nav> */}
                            </div>
                            {/* Page Header Box End */}
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default PageHeader