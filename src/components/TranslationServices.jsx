import React from 'react';

function TranslationServices() {
  return (
    <section 
      id='translations'
      style={{
        backgroundColor: '#f9f9f9',
        padding: '3rem 2rem',
        borderRadius: '8px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
        margin: '2rem auto',
        color: '#666',
        textAlign: 'center'
    }}>
      <h2 style={{ textAlign: 'center', color: 'black', marginBottom: '1rem' }}>
        Certified Translation Services
      </h2>
      <p style={{ maxWidth: '600px', margin: '0 auto 5rem auto', fontSize: '1.1rem', lineHeight: '1.5' }}>
        We provide state-certified translations recognized by government institutions, courts, and official bodies. Our expert translators ensure accuracy, confidentiality, and timely delivery for all your important documents.
      </p>

      <h3 style={{ fontWeight: '600', marginBottom: '1rem' }}>We translate:</h3>
      <ul style={{ listStyle: 'disc', textAlign: 'left', maxWidth: '20rem', margin: '0 auto 2rem auto' }}>        <li>Birth & marriage certificates</li>
        <li>Legal contracts & agreements</li>
        <li>Academic diplomas & transcripts</li>
        <li>Business documents</li>
        <li>Immigration papers</li>
      </ul>

      <h3 style={{ fontWeight: '600', marginBottom: '1rem' }}>Why choose us?</h3>
      <ul style={{ listStyle: 'disc', textAlign: 'left', maxWidth: '20rem', margin: '0 auto 2rem auto' }}>        <li>Native speakers with subject expertise</li>
        <li>Officially certified and sworn translators</li>
        <li>Strict confidentiality and data protection</li>
        <li>Fast turnaround times</li>
        <li>Competitive pricing</li>
      </ul>
    </section>
  );
}

export default TranslationServices;