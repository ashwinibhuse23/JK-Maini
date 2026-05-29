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
                { label: 'CSR Initiatives', href: '#' },
                { label: 'JK Maini Group', href: '#' },
                { label: 'Sustainability', href: '#' },
                { label: 'Innovation & R&D', href: '#' },
                { label: 'Awards & Recognition', href: '#' },
            ],
            [
                { label: 'Our Team', href: '#' },
                { label: 'Life at JK Maini', href: '#' },
                { label: 'Community Outreach', href: '#' },
                { label: 'Media & Press', href: '#' },
                { label: 'FAQs', href: '#' },
            ],
        ],
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
                                                                <a className="nav-link" href={child.href}>
                                                                    {child.label}
                                                                </a>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                )}
                                                {item.isMega && (
                                                    <div className="mega-menu">
                                                        {item.megaColumns.map((col, ci) => (
                                                            <ul key={ci} className="mega-col">
                                                                {col.map((link, li) => (
                                                                    <li key={li}>
                                                                        <a href={link.href}>{link.label}</a>
                                                                    </li>
                                                                ))}
                                                            </ul>
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
                            {navItems.map((item, i) => (
                                <li key={i} className={`mobile-nav-item${item.children ? ' has-submenu' : ''}`}>
                                    <div className="mobile-nav-row">
                                        <Link className="mobile-nav-link" to={item.href} onClick={(item.children || item.isMega) ? (e) => { e.preventDefault(); toggleSubmenu(i); } : closeMenu}>
                                            {item.label}
                                        </Link>
                                        {(item.children || item.isMega) && (
                                            <button
                                                className={`submenu-arrow${openSubmenu === i ? ' rotated' : ''}`}
                                                onClick={() => toggleSubmenu(i)}
                                                aria-label="Toggle submenu"
                                            >
                                                &#8249;
                                            </button>
                                        )}
                                    </div>
                                    {item.children && openSubmenu === i && (
                                        <ul className="mobile-submenu">
                                            {item.children.map((child, j) => (
                                                <li key={j} className="mobile-submenu-item">
                                                    <a className="mobile-submenu-link" href={child.href} onClick={closeMenu}>
                                                        {child.label}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                    {item.isMega && openSubmenu === i && (
                                        <ul className="mobile-submenu">
                                            {item.megaColumns.flat().map((link, j) => (
                                                <li key={j} className="mobile-submenu-item">
                                                    <a className="mobile-submenu-link" href={link.href} onClick={closeMenu}>
                                                        {link.label}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </li>
                            ))}
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