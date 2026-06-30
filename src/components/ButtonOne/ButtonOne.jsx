import React from 'react'
import './ButtonOne.css'

const ButtonOne = ({text, icon, link}) => {
    return (
        <>
            <button className="custom-button">
                <span className="button-content">
                    <span className="button-text">{text}</span>
                    <span className="button-icon">{icon}</span>
                </span>
                <span className="button-background"></span>
            </button>
        </>
    )
}

export default ButtonOne