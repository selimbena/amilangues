import React from 'react';
import logo from '../assets/translation.png'
import { useTranslation } from 'react-i18next';

function TranslationServices() {
  const { t } = useTranslation();

  return (
    <section 
      id='translations'
      style={{
        backgroundColor: '#fff',
        padding: '3rem',
        borderRadius: '8px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
        color: '#666',
        textAlign: 'justify',
        maxWidth: 'auto'
    }}>
      <div style={{ maxWidth: '900px', margin: '0 auto'}}>
        <h2 style={{ textAlign: 'center', color: 'black', marginBottom: '1rem' }}>
          {t("translationTitle")}
        </h2>
        <p style={{ margin: '0 auto', fontSize: '1.1rem', lineHeight: '1.5'}}>
          {t("translationText")}
        </p>
        <div style={{ textAlign: 'center'}}>
          <img src={logo} alt="Logo" style={{ width: '5rem', height: '5rem', margin: '2rem' }}/>
        </div>
      </div>
    </section>
  );
}

export default TranslationServices;