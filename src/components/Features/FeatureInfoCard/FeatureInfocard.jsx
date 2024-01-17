import React from 'react'
import './FeatureInfoCard.css'
import { Link } from 'react-router-dom'

const FeatureInfocard = ({ heading, featureInfo}) => {
  return (
  <div className="feature-info-section">
    <h5>ALPhA MUSIX FEATURES</h5> 
    <p>Elevate your discord server's musical experience with ALPhA MUSIX. Packed with powerful features, it offers crystal-clear audio playback and interactive commands, setting a new standard for entertainment. From a diverse music library to usr-friendly controls, ALPhA MUSIX brings a unique and immersive vibe to your server.</p>
  <div className='feature-info-card'>
        <h6>{heading}</h6>

        <div className="feature-info">
            <p>{featureInfo}</p>
        </div>

        <div className="feature-button">
            <Link to="https://invite.alphamusix.xyz/" className='feature-btn'>Know More..</Link>
        </div>
    </div>
    </div>
    
  )
}

export default FeatureInfocard