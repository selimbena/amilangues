import React from 'react';
import logo from '../assets/amliangues.svg'
import { BsBorderStyle } from 'react-icons/bs';

function About() {
  return (
    <section
      id="about"
      style={{
        backgroundColor: 'white',
        padding: '1rem 2rem',
        lineHeight: '1.6',
      }}
    >
      <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ textAlign: 'center', color: 'black', marginBottom: '1rem' }}>
          About
        </h2>
        <p style={{ fontSize: '1.1rem', color: '#666', textAlign: 'justify' }}>
          My name is Amira, founder of Amilangues. I’ve always believed that learning a new 
          language should feel natural, engaging, and culturally rich. With over a decade 
          of teaching experience, I specialize in helping students connect with language 
          through real-life conversations, cultural insights, and practical skills.
        </p>
        <p style={{ fontSize: '1.1rem', color: '#666', textAlign: 'justify' }}>
          At Amilangues, we offer personalized courses for all levels, whether you’re 
          starting from scratch or refining your fluency. Our mission is to help you 
          not just learn a language, but live it.
        </p>
        <img src={logo} alt="Logo" style={{ width: '25rem', height: '25rem', borderRadius: '90px', borderColor: 'black', borderStyle: 'solid', margin: '5rem'}}/>
      </div>
    </section>
  );
}

export default About;