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
        Service de traduction certifiée en Allemagne 
      </h2>
      <p style={{ maxWidth: '600px', margin: '0 auto 5rem auto', fontSize: '1.1rem', lineHeight: '1.5' }}>
        Sur demande, nous proposons également des traductions certifiées en Allemagne (français-allemand, allemand-français). Il s'agit de traductions professionnelles pour des actes officiels, des certificats, des documents judiciaires, des contrats, des accords, des correspondances administratives, etc.. Si vous avez besoin d'une traduction effectuée par un traducteur assermenté en Allemagne, vous êtes au bon endroit. Veuillez vérifier au préalable si vous avez besoin d'une traduction standard ou certifiée.
      </p>
    </section>
  );
}

export default TranslationServices;