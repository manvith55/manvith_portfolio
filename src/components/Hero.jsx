import React, { useEffect, useRef } from 'react'
import './Hero.css'

export default function Hero() {
  const containerRef = useRef(null)

  useEffect(() => {
    const elements = containerRef.current?.querySelectorAll('.animate-item')
    elements?.forEach((el, index) => {
      el.style.animationDelay = `${index * 0.15}s`
    })
  }, [])

  const handleDownload = (e) => {
    const link = document.createElement('a')
    link.href = 'Nalluru_Manvith_Resume.pdf'
    link.download = 'Nalluru_Manvith_Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section className="hero container" id="home" ref={containerRef}>
      <div className="hero-content">
        <p className="intro animate-item">Hello, I'm</p>
        <h1 className="hero-name animate-item">Manvith Kumar</h1>
        <h2 className="hero-role animate-item">Java Full Stack Developer</h2>
        <p className="hero-desc animate-item">
          I craft highly functional, scalable, and visually stunning web applications
          bridging robust Java backends with dynamic modern frontends.
        </p>

        <div className="hero-buttons animate-item">
          <a href="#projects" className="btn">View Projects</a>
          <button onClick={handleDownload} className="btn-outline">
            Download Resume
          </button>
          <a href="#contact" className="btn-outline">Contact Me</a>
        </div>
      </div>

      <div className="hero-decorative">
        <div className="floating-card card-1">
          <div className="card-icon">{"<>"}</div>
        </div>
        <div className="floating-card card-2">
          <div className="card-icon">{"{ }"}</div>
        </div>
        <div className="floating-card card-3">
          <div className="card-icon">{"[ ]"}</div>
        </div>
      </div>
    </section>
  )
}
