import React, { useState } from 'react'
import './Navbar.css'
import ButtonOne from '../ButtonOne/ButtonOne'
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { Link } from 'react-router-dom';


const navItems = [
    {
        label: 'Home',
        href: '/',
    },
    { label: 'About Us', href: '/about' },

    {
        label: 'Businesses',
        href: '#',
        children: [
            { label: 'Automotive, Industrial & Beyond', href: '/automotive' },
            { label: 'Tools & Hardware', href: '/tools-and-hardware' },
            { label: 'Aerospace & Defence', href: '/aerospace' },
        ]
    },

    {
        label: 'Beyond Business',
        href: '#',
        isMega: true,
        megaColumns: [
            [
                { header: 'JKMPTL' },
                { label: 'Sustainability, Certifications & Governance', href: '/jkmptl-sustainability' },
                { label: 'Awards', href: '/jkmptl-awards' },
                { label: 'CSR', href: '/jkmptl-csr' },
                { label: 'News & Events', href: '/jkmptl-news-events' },

            ],
            [
                { header: 'JKMGAL' },
                { label: 'Sustainability & ESG', href: '/jkmgal-sustainability' },
                { label: 'CSR & Impact', href: '/jkmgal-csr' },
                { label: 'News & Events', href: '/jkmgal-news' },
                { label: 'Awards', href: '/jkmgal-awards' },

            ],
        ],
    },

    { label: 'Investor Relation', href: '/investor-relation' },
    {
        label: 'Careers',
        href: '#',
        children: [
            { label: 'Automobile', href: 'https://auto.jkmaini.com/careers.html', target: '_blank', rel: 'noopener noreferrer' },
            { label: 'Aerospace', href: 'https://aero.jkmaini.com/careers.html', target: '_blank', rel: 'noopener noreferrer' },
        ]
    },
    { label: 'Contact Us', href: 'contact.html' },
];

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [openSubmenu, setOpenSubmenu] = useState(null);

    const toggleMenu = () => setMenuOpen(prev => !prev);
    const closeMenu = () => { setMenuOpen(false); setOpenSubmenu(null); };

    const toggleSubmenu = (index) => {
        setOpenSubmenu(prev => prev === index ? null : index);
    };

    return (
        <>
            <header className="main-header">
                <div className="header-sticky">
                    <nav className="navbar navbar-expand-lg">
                        <div className="container">
                            {/* Logo Start */}
                            <Link to="/" className="navbar-brand">
                                <img src="./images/jk-maini-logo.svg" alt="Logo" />
                            </Link>
                            {/* Logo End */}

                            {/* Desktop Menu Start */}
                            <div className="collapse navbar-collapse main-menu">
                                <div className="nav-menu-wrapper">
                                    <ul className="navbar-nav mr-auto" id="menu">
                                        {navItems.map((item, i) => (
                                            <li key={i} className={`nav-item${item.children ? ' submenu' : ''}${item.isMega ? ' submenu mega-parent' : ''}`}>
                                                <a className="nav-link" href={item.href}>
                                                    {item.label}
                                                </a>
                                                {item.children && (
                                                    <ul>
                                                        {item.children.map((child, j) => (
                                                            <li key={j} className="nav-item">
                                                                <a className="nav-link" href={child.href} target={child.target || '_self'} rel={child.rel || ''}>
                                                                    {child.label}
                                                                </a>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                )}
                                                {item.isMega && (
                                                    <div className="mega-menu">
                                                        {item.megaColumns.map((col, ci) => (
                                                            <div key={ci} className="mega-col">
                                                                {col.map((link, li) => (
                                                                    <React.Fragment key={li}>
                                                                        {link.header && (
                                                                            <div className="mega-col-header">{link.header}</div>
                                                                        )}
                                                                        {link.label && (
                                                                            <a href={link.href} className="mega-link">{link.label}</a>
                                                                        )}
                                                                    </React.Fragment>
                                                                ))}
                                                            </div>
                                                        ))}
                                                    </div>
                                                )}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                {/* Header Btn Start */}
                                <div className="header-btn">
                                    <ButtonOne text="Get Started" icon={<FaRegArrowAltCircleRight />} link="#" />

                                </div>
                                {/* Header Btn End */}
                            </div>
                            {/* Desktop Menu End */}

                            {/* Hamburger Toggle */}
                            <button
                                className={`navbar-toggle-btn${menuOpen ? ' open' : ''}`}
                                onClick={toggleMenu}
                                aria-label="Toggle navigation menu"
                                id="navbar-hamburger"
                            >
                                <span className="bar"></span>
                                <span className="bar"></span>
                                <span className="bar"></span>
                            </button>
                        </div>
                    </nav>

                    {/* Mobile Menu Drawer */}
                    <div className={`mobile-menu-drawer${menuOpen ? ' drawer-open' : ''}`}>
                        <ul className="mobile-nav-list">
                            {navItems.map((item, i) => {
                                const hasDropdown = item.children || item.isMega;
                                const isOpen = openSubmenu === i;
                                // Decide if the label itself should be a link or a toggle button
                                const isExternalOrHtml = item.href && (item.href.startsWith('http') || item.href.endsWith('.html'));

                                return (
                                    <li key={i} className={`mobile-nav-item${hasDropdown ? ' has-submenu' : ''}`}>
                                        <div className="mobile-nav-row">
                                            {hasDropdown ? (
                                                /* Items with dropdown: label is a toggle, not a navigation link */
                                                <button
                                                    className="mobile-nav-link mobile-nav-toggle"
                                                    onClick={() => toggleSubmenu(i)}
                                                    aria-expanded={isOpen}
                                                >
                                                    {item.label}
                                                </button>
                                            ) : isExternalOrHtml ? (
                                                /* External / .html pages: plain <a> */
                                                <a
                                                    className="mobile-nav-link"
                                                    href={item.href}
                                                    onClick={closeMenu}
                                                >
                                                    {item.label}
                                                </a>
                                            ) : (
                                                /* Internal React Router routes: <Link> */
                                                <Link
                                                    className="mobile-nav-link"
                                                    to={item.href}
                                                    onClick={closeMenu}
                                                >
                                                    {item.label}
                                                </Link>
                                            )}

                                            {/* Chevron arrow for items with dropdown */}
                                            {hasDropdown && (
                                                <button
                                                    className={`submenu-arrow${isOpen ? ' rotated' : ''}`}
                                                    onClick={() => toggleSubmenu(i)}
                                                    aria-label="Toggle submenu"
                                                >
                                                    &#8249;
                                                </button>
                                            )}
                                        </div>

                                        {/* Regular submenu (Businesses, Careers) */}
                                        {item.children && isOpen && (
                                            <ul className="mobile-submenu">
                                                {item.children.map((child, j) => (
                                                    <li key={j} className="mobile-submenu-item">
                                                        <a
                                                            className="mobile-submenu-link"
                                                            href={child.href}
                                                            target={child.target || '_self'}
                                                            rel={child.rel || ''}
                                                            onClick={closeMenu}
                                                        >
                                                            {child.label}
                                                            {child.target === '_blank' && (
                                                                <span className="mobile-ext-icon">↗</span>
                                                            )}
                                                        </a>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}

                                        {/* Mega menu (Beyond Business) */}
                                        {item.isMega && isOpen && (
                                            <div className="mobile-mega-menu">
                                                {item.megaColumns.map((col, ci) => (
                                                    <div key={ci} className="mobile-mega-section">
                                                        {col.map((link, li) => (
                                                            <React.Fragment key={li}>
                                                                {link.header && (
                                                                    <div className="mobile-mega-header">{link.header}</div>
                                                                )}
                                                                {link.label && link.href && (
                                                                    <a
                                                                        className="mobile-submenu-link mobile-mega-link"
                                                                        href={link.href}
                                                                        onClick={closeMenu}
                                                                    >
                                                                        {link.label}
                                                                    </a>
                                                                )}
                                                            </React.Fragment>
                                                        ))}
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </li>
                                );
                            })}
                        </ul>
                        <div className="mobile-menu-btn">
                            <ButtonOne text="Get Started" icon={<FaRegArrowAltCircleRight />} link="#" />
                        </div>
                    </div>

                    {/* Overlay */}
                    {menuOpen && <div className="menu-overlay" onClick={closeMenu} />}
                </div>
            </header>
        </>
    )
}

export default Navbar
