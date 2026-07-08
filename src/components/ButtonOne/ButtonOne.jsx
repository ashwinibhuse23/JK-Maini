import React from 'react'
import { Link } from 'react-router-dom'
import './ButtonOne.css'

const ButtonOne = ({ text, icon, link, target, onClick, type = "button", className = "", iconPosition = "left", withIconBg = true }) => {
    const buttonContent = (
        <>
            <span className="button-background"></span>
            <span className={`button-content position-${iconPosition}`}>
                {iconPosition === 'left' && icon && (
                    withIconBg ? (
                        <span className="button-icon-container">
                            <span className="button-icon">{icon}</span>
                        </span>
                    ) : (
                        <span className="button-icon no-bg">{icon}</span>
                    )
                )}
                <span className="button-text">{text}</span>
                {iconPosition === 'right' && icon && (
                    withIconBg ? (
                        <span className="button-icon-container">
                            <span className="button-icon">{icon}</span>
                        </span>
                    ) : (
                        <span className="button-icon no-bg">{icon}</span>
                    )
                )}
            </span>
        </>
    );

    if (link) {
        const isExternal = link.startsWith('http') || link.startsWith('mailto:');
        if (isExternal) {
            return (
                <a href={link} target={target} rel={target === '_blank' ? 'noopener noreferrer' : undefined} className={`custom-button icon-${iconPosition} ${className}`} onClick={onClick} style={{textDecoration: 'none', display: 'inline-block'}}>
                    {buttonContent}
                </a>
            )
        }
        return (
            <Link to={link} target={target} className={`custom-button icon-${iconPosition} ${className}`} onClick={onClick} style={{textDecoration: 'none', display: 'inline-block'}}>
                {buttonContent}
            </Link>
        )
    }

    return (
        <button type={type} className={`custom-button icon-${iconPosition} ${className}`} onClick={onClick}>
            {buttonContent}
        </button>
    )
}

export default ButtonOne