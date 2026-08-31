import React, { useState } from 'react'
import './Contact.css'

export default function Contact() {
  const [hoveredContact, setHoveredContact] = useState(null)
  const [copiedEmail, setCopiedEmail] = useState(false)

  const contacts = [
    {
      icon: '✉️',
      label: 'Email',
      value: 'manvithkumar55@gmail.com',
      link: 'mailto:manvithkumar55@gmail.com',
      isCopyable: true
    },
    {
      icon: '📱',
      label: 'Phone',
      value: '+91 9290869454',
      link: 'tel:+919290869454'
    },
    {
      icon: '📍',
      label: 'Location',
      value: 'Hyderabad, Telangana',
      isText: true
    }
  ]

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: '💼',
      url: 'https://www.linkedin.com/in/manvith-kumar-nalluru-9b799625b/',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg'
    },
    {
      name: 'GitHub',
      icon: '🐙',
      url: 'https://github.com/manvith55',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg'
    }
  ]

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('manvithkumar55@gmail.com')
    setCopiedEmail(true)
    setTimeout(() => setCopiedEmail(false), 2000)
  }

  return (
    <section className="contact container section" id="contact">
      <h2 className="section-title">Let's Connect</h2>
      <p className="contact-intro">I'm always interested in hearing about new projects and opportunities.</p>

      <div className="contact-grid">
        {contacts.map((contact, index) => (
          <div 
            key={index}
            className="contact-card glass-card"
            onMouseEnter={() => setHoveredContact(index)}
            onMouseLeave={() => setHoveredContact(null)}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="contact-icon">{contact.icon}</div>
            <h4>{contact.label}</h4>
            {contact.isText ? (
              <p className="contact-text">{contact.value}</p>
            ) : contact.isCopyable ? (
              <div className="contact-action">
                <a href={contact.link} className="contact-link">{contact.value}</a>
                <button 
                  className="copy-btn"
                  onClick={handleCopyEmail}
                  title="Copy email"
                >
                  {copiedEmail ? '✓' : '📋'}
                </button>
              </div>
            ) : (
              <a href={contact.link} className="contact-link">{contact.value}</a>
            )}
          </div>
        ))}
      </div>

      <div className="social-section">
        <h3>Follow & Connect</h3>
        <div className="social-icons">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon glass-card"
              title={social.name}
              onMouseEnter={() => setHoveredContact(`social-${index}`)}
              onMouseLeave={() => setHoveredContact(null)}
            >
              <img src={social.image} alt={social.name} />
              <span className="social-label">{social.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
