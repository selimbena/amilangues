import React, { useState } from 'react';

function LanguageSwitcher() {
  const languages = ['English', 'العربية', 'French'];
  const [langIndex, setLangIndex] = useState(0);

  function switchLanguage() {
    setLangIndex((langIndex + 1) % languages.length);
  }

  return (
    <button
      onClick={switchLanguage}
      style={{
        padding: '0.4rem 0.8rem',
        backgroundColor: '#222',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        fontWeight: '600',
      }}
      aria-label="Switch Language"
    >
      {languages[langIndex]}
    </button>
  );
}

export default LanguageSwitcher;