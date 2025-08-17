import React from 'react';
import logo from '../assets/amliangues.svg';
import LanguageSwitcher from './LanguageSwitcher.jsx'

function HeroSection() {
  return (
    <section
      style={{
        position: 'sticky',
        top: 0,
        background: 'black',
        color: 'white',
        padding: '1rem',
        textAlign: 'left',
        marginBottom: '2rem',
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        zIndex: 1000, // ensure it stays on top
  }}
    >

      {/* Navbar */}
      <nav
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >


        {/* Left side: logo + links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>

            {/* Title */}
            <div style={{ backgroundColor: 'white', borderRadius: '8px', marginRight: '1.5rem' }}>
              <img
                src={logo}
                alt="Amilangues Logo"
                style={{ width: 50, height: 50 }}
              />
            </div>

            
            {/* Links */}
            <div style={{ display: 'flex', gap: '1.5rem' }}>
            <a href="#home" style={{ color: 'white', textDecoration: 'none' }}>
                Home
            </a>
            <a href="#courses" style={{ color: 'white', textDecoration: 'none' }}>
                Courses
            </a>
            <a href="#translations" style={{ color: 'white', textDecoration: 'none' }}>
                Translations
            </a>
            <a href="#about" style={{ color: 'white', textDecoration: 'none' }}>
                About
            </a>
            <a href="#contact" style={{ color: 'white', textDecoration: 'none' }}>
                Contact
            </a>
            </div>

        </div>

        {/* Language Button */}
        <div style={{ display: 'flex', gap: '1.5rem' }}>
            <LanguageSwitcher />            
        </div>
      </nav>
    </section>
  );
}

export default HeroSection;