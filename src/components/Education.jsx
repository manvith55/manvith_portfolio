import React from 'react'
import './Education.css'

export default function Education() {
  const education = [
    {
      degree: 'B.Tech in Computer Science (Internet of Things)',
      institution: 'Visvodaya Engineering College',
      period: 'Sep 2020 – May 2024'
    },
    {
      degree: 'Intermediate – MPC',
      institution: 'Narayana Junior College',
      period: 'Aug 2018 – Mar 2020'
    },
    {
      degree: 'SSC – Matriculation',
      institution: 'Sri Chaitanya Techno School',
      period: 'Mar 2018'
    }
  ]

  const certifications = [
    {
      name: 'Java Full Stack',
      provider: 'QEdge Technologies'
    },
    {
      name: 'Core Java',
      provider: 'Udemy'
    },
    {
      name: 'Introduction to JavaScript',
      provider: 'Udemy'
    }
  ]

  return (
    <section className="education container section" id="education">
      <h2 className="section-title">Education</h2>

      <div className="education-timeline">
        {education.map((item, index) => (
          <div 
            key={index} 
            className="education-item glass-card"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <h4 className="education-degree">{item.degree}</h4>
            <p className="education-institution">{item.institution}</p>
            <p className="education-dates">{item.period}</p>
          </div>
        ))}
      </div>

      <h2 className="section-title certifications-title">Certifications</h2>

      <div className="certifications-grid">
        {certifications.map((cert, index) => (
          <div 
            key={index} 
            className="certification-item glass-card"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="cert-icon">🎖️</div>
            <p className="cert-name">{cert.name}</p>
            <p className="cert-provider">{cert.provider}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
