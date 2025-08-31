import React from 'react';
import logo from '../assets/translation.png'

function TranslationServices() {
  return (
    <section 
      id='translations'
      style={{
        backgroundColor: '#fff',
        padding: '3rem 30rem',
        borderRadius: '8px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
        color: '#666',
        textAlign: 'center'
    }}>
      <h2 style={{ textAlign: 'center', color: 'black', marginBottom: '1rem' }}>
        Service de traduction certifiée en Allemagne 
      </h2>
      <p style={{ width : '600px', margin: '0 auto', fontSize: '1.1rem', lineHeight: '1.5', textAlign: 'center' }}>
        Sur demande, nous proposons également des traductions certifiées en Allemagne (français-allemand, allemand-français). Il s'agit de traductions professionnelles pour des actes officiels, des certificats, des documents judiciaires, des contrats, des accords, des correspondances administratives, etc.. Si vous avez besoin d'une traduction effectuée par un traducteur assermenté en Allemagne, vous êtes au bon endroit. Veuillez vérifier au préalable si vous avez besoin d'une traduction standard ou certifiée.
      </p>
      <img src={logo} alt="Logo" style={{ width: '5rem', height: '5rem', margin: '2rem'}}/>
    </section>
  );
}

export default TranslationServices;