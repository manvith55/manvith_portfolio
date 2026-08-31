import React from 'react'
import './Footer.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-content container">
        <p>Made with ❤️ by Manvith Kumar</p>
        <p className="footer-year">&copy; {currentYear} All rights reserved.</p>
      </div>
    </footer>
  )
}
