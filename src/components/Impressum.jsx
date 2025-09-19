import React from 'react';

function Impressum() {
  return (
    <section
      id="impressum"
      style={{
        backgroundColor: '#f5f5f5',
        color: '#333',
        padding: '2rem',
        lineHeight: 1.6
      }}
    >
      <h2 style={{ marginBottom: '1rem', textAlign: 'center' }}>Impressum</h2>

      <div style={{ maxWidth: '700px', margin: '0 auto' }}>
        <p><strong>Amilangues – Native Language School</strong></p>
        <p>
          Owner: John Doe<br />
          Address: Example Street 12, 12345 Example City, Country<br />
          Phone: +12 345 678 910<br />
          Email: contact@amilangues.com
        </p>

        <h3>Legal Information</h3>
        <p>
          VAT ID: DE123456789<br />
          Business Registration: Example Registration Office, Reg No. 987654321
        </p>

        <h3>Disclaimer</h3>
        <p>
          The content of this website has been created with the utmost care. However, we cannot guarantee
          the contents' accuracy, completeness, or topicality. As a service provider, we are responsible
          for our own content on these pages in accordance with general laws.
        </p>

        <h3>Copyright</h3>
        <p>
          All content and works created by the site operators on these pages are subject to copyright laws.
          Duplication, processing, distribution, or any form of commercialization of such material
          beyond the scope of the copyright law shall require the prior written consent of its respective author or creator.
        </p>
      </div>
    </section>
  );
}

export default Impressum;