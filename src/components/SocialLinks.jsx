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
      <h2 style={{ marginBottom: '1.5rem', fontSize: '1.5rem' }}>Contact</h2>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '2rem',
          fontSize: '1.8rem'
        }}
      >
        <a
          href="https://instagram.com/amilangues"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'white' }}
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=61579205747963"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'white' }}
        >
          <FaFacebook />
        </a>
        <a
          href="mailto:amilangues@icloud.com"
          style={{ color: 'white' }}
        >
          <MdEmail />
        </a>
        <a
          href="https://wa.me/4915774497212"
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