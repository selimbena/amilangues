import React from 'react';

function Contact() {
  return (
    <section
      id="contact"
      style={{
        padding: '1rem 2rem',
        backgroundColor: '#fff',
        color: '#333',
        borderRadius: '8px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      }}
    >
      <h2 style={{ marginTop: '0.5rem', marginBottom: '1rem', textAlign: 'center' }}>
        Contact
      </h2>
      <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem', margin: '0 20rem'}}>
        <input
          type="text"
          placeholder="Votre Nom"
          style={{ padding: '0.75rem', fontSize: '1rem', borderRadius: '4px', border: '1px solid #ccc' }}
          required
        />
        <input
          type="email"
          placeholder="Votre Email"
          style={{ padding: '0.75rem', fontSize: '1rem', borderRadius: '4px', border: '1px solid #ccc' }}
          required
        />
        <textarea
          placeholder="Votre Message"
          rows="5"
          style={{ padding: '0.75rem', fontSize: '1rem', borderRadius: '4px', border: '1px solid #ccc' }}
          required
        />
        <button
          type="submit"
          style={{
            backgroundColor: '#2575fc',
            color: 'white',
            padding: '0.75rem',
            fontSize: '1rem',
            borderRadius: '4px',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          Envoyer un message
        </button>
      </form>
    </section>
  );
}

export default Contact;