import React from 'react'
import './Experience.css'

export default function Experience() {
  const experiences = [
    {
      title: 'Frontend Developer Intern',
      company: 'Samriddhi Anveshana',
      period: 'Jul 2026 – Present',
      responsibilities: [
        'Developed and enhanced responsive Admin and Client dashboards using React, JavaScript, HTML, and CSS with reusable UI components',
        'Contributed to a React-based Office Management System supporting meeting-room booking, company management, billing, and visitor management',
        'Implemented and enhanced meeting-room booking functionality including availability checks, booking validation, and transaction-based booking',
        'Worked on admin modules including meeting rooms, companies, billing/invoices, dashboards, and visitor passes',
        'Used Git/GitHub, Vite, React Router, and responsive CSS during application development and deployment'
      ]
    },
    {
      title: 'AI Data Annotation Specialist',
      company: 'Student Tribe',
      period: 'Mar 2025 – May 2025',
      responsibilities: [
        'Analyzed video content and created structured annotations to support training and evaluation of AI and machine learning models',
        'Developed prompts describing on-screen activities, character actions, camera movements, and visual elements for AI model training',
        'Performed frame-by-frame analysis to capture scene transitions and visual nuances'
      ]
    },
    {
      title: 'Java Full Stack Web Developer Intern',
      company: 'QEdge Technologies',
      period: 'Dec 2024 – Apr 2025',
      responsibilities: [
        'Gained comprehensive full-stack development experience with Java and modern web technologies'
      ]
    },
    {
      title: 'OpenAI GPT',
      company: 'Suven Consultants & Technologies Pvt. Ltd.',
      period: 'Jun 2023 – Jul 2023',
      responsibilities: [
        'Initial internship experience in AI and technology solutions'
      ]
    }
  ]

  return (
    <section className="experience container section" id="experience">
      <h2 className="section-title">Experience</h2>

      <div className="timeline">
        {experiences.map((exp, index) => (
          <div 
            key={index} 
            className="timeline-item"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="timeline-marker"></div>
            <div className="timeline-content glass-card">
              <h4 className="experience-title">{exp.title}</h4>
              <p className="company-name">{exp.company}</p>
              <p className="date-range">{exp.period}</p>
              {exp.responsibilities.length > 1 ? (
                <ul className="experience-list">
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i}>{resp}</li>
                  ))}
                </ul>
              ) : (
                <p className="experience-desc">{exp.responsibilities[0]}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
