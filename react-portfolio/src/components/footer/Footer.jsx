// Footer.jsx
import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__principle">
            <h3>Vision</h3>
            <p>
            To cultivate a world where continuous learning is cherished, empowering individuals to adapt, innovate, and thrive in an ever-changing landscape.
            <p>I am a committed to fostering a culture of lifelong learning by providing accessible resources, cultivating curiosity, and promoting collaboration to inspire personal and collective growth.</p>
            </p>
        </div>
        <ul className="footer__list grid">
            <li>
                <a href="#about" className="footer__link">About</a>
            </li>
            <li>
                <a href="#skills" className="footer__link">Skills</a>
            </li>
            <li>
                <a href="#projects" className="footer__link">Projects</a>
            </li>
        </ul>
        <div className="footer__socials grid">
        <a href="https://www.instagram.com/tututututuga/" className="footer__social-link" target="_blank">
            <i class="bx bxl-instagram"></i>
        </a>
        <a href="https://www.facebook.com/rolandtugaoen2016/" className="footer__social-link" target="_blank">
            <i class="bx bxl-facebook"></i>
        </a>

        <a href="https://github.com/TugaGelo" className="footer__social-link" target="_blank">
            <i class="bx bxl-github"></i>
        </a>
        </div>
      </div>
      <div className="footer__copy">
        &#169; Gelo All rights reserved
      </div>
    </footer>
  );
};

export default Footer;