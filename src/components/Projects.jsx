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
    },
    {
      number: '03',
      title: 'Smart Digital Banking System',
      tag: 'Full-Stack Banking & Fraud Detection Platform (Production)',
      description: 'A secure digital banking application where customers can manage accounts, transfer money, and track transactions while administrators monitor banking activity and fraud alerts.',
      technologies: [
        'Java',
        'Spring Boot',
        'Spring Security',
        'React',
        'MySQL',
        'JWT',
        'Axios'
      ],
      features: [
        'JWT-based customer and admin authentication',
        'Deposit, withdrawal, and money transfers',
        'Beneficiary management',
        'Transaction history with search and filtering',
        'Rule-based fraud detection and alerts',
        'Admin dashboard for users, accounts, and transactions',
        'Account blocking and unblocking',
        'Responsive React interface'
      ],
      githubLink: 'https://github.com/manvith55/smart-banking-system'
    },
    {
      number: '04',
      title: 'AI Resume Platform',
      tag: 'AI-Powered Resume Builder (Production)',
      description: 'A full-stack platform that helps users create, customize, and optimize professional resumes with AI-powered suggestions and downloadable resume generation.',
      technologies: ['React', 'Vite', 'Python', 'AI', 'CSS'],
      features: [
        'AI-generated resume content',
        'Professional resume templates',
        'Resume customization',
        'Job description optimization',
        'PDF resume generation',
        'File upload and download support'
      ],
      githubLink: 'https://github.com/manvith55/ai-resume-platform'
    },
    {
      number: '05',
      title: 'Student Pass Checker',
      tag: 'Free Bus Ticket Eligibility Web Application',
      description: 'A user-friendly web application that verifies student eligibility for free bus tickets based on student status, age, and valid ID, with interactive eligibility checks, dynamic response messages, and ticket booking confirmation.',
      technologies: ['HTML5', 'CSS3', 'JavaScript'],
      features: [
        'Student eligibility verification',
        'Interactive eligibility checks',
        'Dynamic response messages',
        'Ticket booking confirmation'
      ],
      githubLink: 'https://github.com/manvith55/student_pass_checker'
    }
  ]

  return (
    <section className="projects container section" id="projects">
      <h2 className="section-title">Featured Projects</h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div
            key={project.number}
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
              {project.technologies.map((tech) => (
                <span key={`${project.number}-${tech}`} className="tech-badge">{tech}</span>
              ))}
            </div>

            <div className={`project-features ${hoveredProject === index ? 'show' : ''}`}>
              <h5>Key Features:</h5>
              <ul>
                {project.features.map((feature) => (
                  <li key={`${project.number}-${feature}`}>{feature}</li>
                ))}
              </ul>
            </div>

            {(project.githubLink || project.demoLink) && (
  <div className="project-buttons">
    {project.githubLink && (
      <a
        href={project.githubLink}
        target="_blank"
        rel="noopener noreferrer"
        className="btn"
      >
        GitHub
      </a>
    )}

    {project.demoLink && (
          <a
            href={project.demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            Live Demo
          </a>
        )}
      </div>
    )}
          </div>
        ))}
      </div>
    </section>
  )
}
