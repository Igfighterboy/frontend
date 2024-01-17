import React from 'react'
import './Featurettwo.css'
import { Link } from 'react-router-dom'

const Featurettwo = () => {
  return (
    <section className="featurettwo-section">

    <div className="featurettwo-content">
        <h2>Private and Public playlist</h2>
        <p>Share your favorite tunes with the community by curating a public playlist that everyone can enjoy together.Keep your musical preferences personal and exclusive with a private playlist, perfect for those moments when you want to create a customized listening experience just for yourself.</p>
        <div className="featurettwo-btn">
            <Link to="https://invite.alphamusix.xyz/" className="btn-feattwo">Know More..</Link>
        </div>
    </div>

    <div className="hero-img">
        <img draggable="false" src="../Assets/welcome.webp" alt="hero-logo" />
    </div>
</section>
  )
}

export default Featurettwo