import React, { useState } from 'react'
import './Skills.css'

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState(null)

  const skillsData = [
    {
      category: 'Frontend',
      skills: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React.js', 'Bootstrap']
    },
    {
      category: 'Backend',
      skills: ['Java', 'REST APIs']
    },
    {
      category: 'Database',
      skills: ['MySQL']
    },
    {
      category: 'Tools & Technologies',
      skills: ['Git', 'GitHub', 'Vite', 'React Router']
    }
  ]

  return (
    <section className="skills container section" id="skills">
      <h2 className="section-title">Technical Skills</h2>

      <div className="skills-grid">
        {skillsData.map((skillGroup, groupIndex) => (
          <div 
            key={groupIndex} 
            className="skill-card glass-card"
            style={{ animationDelay: `${groupIndex * 0.1}s` }}
          >
            <h3 className="skill-category">{skillGroup.category}</h3>
            <div className="skill-tags">
              {skillGroup.skills.map((skill, index) => (
                <span
                  key={index}
                  className="skill-badge"
                  onMouseEnter={() => setHoveredSkill(skill)}
                  onMouseLeave={() => setHoveredSkill(null)}
                  style={{
                    transform: hoveredSkill === skill ? 'scale(1.1)' : 'scale(1)',
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
