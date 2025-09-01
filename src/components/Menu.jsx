import React, { useState } from 'react';

function Menu() {

  return (
    <button
      style={{
        padding: '0.4rem 0.8rem',
        backgroundColor: 'white',
        color: 'black',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        fontWeight: '600',
      }}
      aria-label="Menu"
    >Menu
    </button>
  );
}

export default Menu;