import React from 'react'
import { FiArrowRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'

import '../styles/pages/landing.css'

import logoImg from '../images/logo.svg'

function Landing() {
  return (
    <div className="App" id="page-landing">
      <div className="content-wrapper">
        <img src={logoImg} alt="Happy"/>
        <main>
          <h1>Bring hapiness to the world</h1>
          <p>Visit orphanages and change the day of many children</p>
        </main>

        <div className="location">
          <strong>Curitiba</strong>
          <span>Paraná</span>
        </div>

        <Link to="/app" className="enter-app">
          <FiArrowRight size={26} color="rgba(0, 0, 0, 0.6)" />
        </Link>
      </div>
    </div>
  )
}

export default Landing
