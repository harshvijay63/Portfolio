import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <h1 className="footer__title">Harsh Vijay</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">About</a>
          </li>
          <li>
            <a href="#portfolio" className="footer__link">Projects</a>
          </li>
          
        </ul>

        <div className="footer__social">
          <a href="https://www.facebook.com/vijay.harsh.90" className="home__social-icon" target="_blank">
            <i className="bx bxl-facebook"></i>
          </a>
          <a href="https://www.instagram.com/_mr._devvill_/" className="home__social-icon" target="_blank">
            <i className="bx bxl-instagram"></i>
          </a>
          
          
        </div>

        <span className="footer__copy">
          &#169; 2023 Harsh Vijay. All rights reserved.
        </span>

      </div>
    </footer>
  )
}

export default Footer