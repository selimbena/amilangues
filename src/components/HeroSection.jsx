import React from 'react';
import logo from '../assets/amliangues.svg';
import Menu from './Menu.jsx'
import LanguageSwitcher from './LanguageSwitcher.jsx'
import '../styles/HeroSection.css';

function HeroSection() {
  return (
    <section className="hero-section">
      <nav className="hero-nav">
        <div className="hero-left">
          <div className="hero-logo">
            <img src={logo} alt="Amilangues Logo" />
          </div>

          <div className="hero-links">
            <a href="#home">Accueil</a>
            <a href="#courses">Cours</a>
            <a href="#translations">Traduction</a>
            <a href="#about">À propos</a>
            <a href="#contact">Contact</a>
          </div>
        </div>

        <div className="hero-menu">
          <Menu />
        </div>

        <div>
          <LanguageSwitcher />
        </div>
      </nav>
    </section>
  );
}

export default HeroSection;