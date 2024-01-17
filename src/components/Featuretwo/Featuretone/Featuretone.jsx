import React from 'react'
import './Featuretone.css'
import { Link } from 'react-router-dom'

const Featuretone = () => {
  return (
    <section className="featuretone-section">
        <div className="hero-img">
            <img draggable="false" src="../Assets/welcome.webp" alt="hero-logo" />
        </div>

        <div className="featuretone-content">
            <h2>Dedicated Request Channel</h2>
            <p>Dedicated request channel for ALPhA MUSIX where users can effortlessly submit song requests, ensuring a seamless and organized musical experience for everyone in the server.</p>
            <div className="featuretone-btn">
                <Link to="https://invite.alphamusix.xyz/" className="btn-feat">Know More..</Link>
            </div>
        </div>

    </section>
  )
}

export default Featuretone