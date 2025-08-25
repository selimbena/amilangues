import React from 'react';

function CopyrightFooter() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        textAlign: 'center',
        padding: '1rem 0',
        backgroundColor: 'black',
        color: 'white',
        fontSize: '0.9rem',
        // marginTop: '2rem',
      }}
    >
      &copy; {year} amilangues language school - All rights reserved.
    </footer>
  );
}

export default CopyrightFooter;