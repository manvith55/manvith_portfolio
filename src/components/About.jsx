import React from 'react'
import './About.css'

export default function About() {
  const highlights = [
    {
      title: 'Frontend Development',
      description: 'React, JavaScript, HTML, CSS'
    },
    {
      title: 'Full Stack',
      description: 'Java backend & responsive UIs'
    },
    {
      title: 'Problem Solving',
      description: 'Analytical & creative approach'
    },
    {
      title: 'Team Collaboration',
      description: 'Git/GitHub & responsive development'
    }
  ]

  return (
    <section className="about container section" id="about">
      <h2 className="section-title">About Me</h2>

      <p className="section-text">
        Motivated Software Engineer and Java Full Stack Developer with hands-on experience in frontend development and full-stack application development. Currently working as a Frontend Developer Intern at Samriddhi Anveshana, contributing to a React-based Office Management System. Proficient in Java, JavaScript, React.js, HTML, CSS, REST APIs, MySQL, and Git/GitHub. Strong problem-solving skills, quick learner, and eager to contribute to high-quality software development teams.
      </p>

      <div className="highlights-grid">
        {highlights.map((item, index) => (
          <div key={index} className="highlight-card glass-card" style={{ animationDelay: `${index * 0.1}s` }}>
            <div className="highlight-icon">
              {index === 0 && '🎨'}
              {index === 1 && '⚙️'}
              {index === 2 && '💡'}
              {index === 3 && '🤝'}
            </div>
            <h4>{item.title}</h4>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
