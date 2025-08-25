import React from 'react';
import { FaInstagram, FaFacebook, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

function SocialLinks() {
  return (
    <section
      id="social"
      style={{
        backgroundColor: 'black',
        color: 'white',
        padding: '2rem',
        textAlign: 'center',
      }}
    >
      <h2 style={{ marginBottom: '1.5rem', fontSize: '1.5rem' }}>Social Media Links</h2>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '2rem',
          fontSize: '1.8rem'
        }}
      >
        <a
          href="https://instagram.com/YOUR_USERNAME"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'white' }}
        >
          <FaInstagram />
        </a>
        <a
          href="https://facebook.com/YOUR_USERNAME"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'white' }}
        >
          <FaFacebook />
        </a>
        <a
          href="mailto:YOUR_EMAIL@example.com"
          style={{ color: 'white' }}
        >
          <MdEmail />
        </a>
        <a
          href="https://wa.me/YOUR_PHONE_NUMBER"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'white' }}
        >
          <FaWhatsapp />
        </a>
      </div>
    </section>
  );
}

export default SocialLinks;