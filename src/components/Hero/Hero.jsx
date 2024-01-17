import React from 'react'
import './Hero.css'
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="hero-container">
        <div className="hero-content">
            <h2>Where Music Comes To <br/>
                <span>Your Life</span></h2>
            <p>Kerala's Pionner Verifed Music Bot, Delivering Success With Every Note.</p>
            <div className="hero-btn">
                <Link to="https://invite.alphamusix.xyz/" className="btn-hero">Add To Server</Link>
                <Link to="/servers" className="btn-hero btn-hero-2">Dashboard</Link>
            </div>
        </div>

        <div className="hero-img">
            <img draggable="false" src="../Assets/alpha-logo.png" alt="hero-logo" />
        </div>
    </section>
  )
}

export default Hero