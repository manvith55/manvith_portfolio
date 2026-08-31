import React, { useState } from 'react'
import './Projects.css'

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState(null)

  const projects = [
    {
      number: '01',
      title: 'CodeCraft',
      tag: 'Live Code Editor',
      description: 'A state-of-the-art live code editor featuring real-time preview and modern UI. Built with clean, responsive design principles and modern JavaScript DOM manipulation.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      features: [
        'Live code preview',
        'Light/Dark theme toggle',
        'Modern responsive UI',
        'Font Awesome integration'
      ],
      githubLink: 'https://github.com/manvith55/code-editor?tab=readme-ov-file',
      demoLink: 'https://manvith55.github.io/code-editor/'
    },
    {
      number: '02',
      title: 'Insect Game',
      tag: 'Interactive Browser Game',
      description: 'An engaging browser-based insect-catching game with multiple difficulty levels, dynamic insect behavior, and local score persistence for competitive gameplay.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Local Storage'],
      features: [
        '3 difficulty levels',
        'Dynamic insect spawning',
        'Score tracking & persistence',
        'Pause/Resume functionality',
        'Sound effects',
        'Mobile responsive'
      ],
      githubLink: 'https://github.com/manvith55/insect-game',
      demoLink: 'https://manvith55.github.io/insect-game/'
    }
  ]

  return (
    <section className="projects container section" id="projects">
      <h2 className="section-title">Featured Projects</h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div
            key={index}
            className="project-card glass-card"
            onMouseEnter={() => setHoveredProject(index)}
            onMouseLeave={() => setHoveredProject(null)}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="project-number">{project.number}</div>
            <h4 className="project-title">{project.title}</h4>
            <p className="project-tag">{project.tag}</p>
            <p className="project-desc">{project.description}</p>

            <div className="project-tech">
              {project.technologies.map((tech, i) => (
                <span key={i} className="tech-badge">{tech}</span>
              ))}
            </div>

            <div className={`project-features ${hoveredProject === index ? 'show' : ''}`}>
              <h5>Key Features:</h5>
              <ul>
                {project.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </div>

            <div className="project-buttons">
              <a 
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
              >
                GitHub
              </a>
              <a 
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
