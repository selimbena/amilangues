import logo from '../assets/amliangues.svg'
import { useTranslation } from 'react-i18next';

function About() {
  const { t } = useTranslation();

  return (
    <section
      id="about"
      style={{
        backgroundColor: '#fbfbfbff',
        padding: '1rem 2rem',
        lineHeight: '1.6'
      }}
    >
      <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ textAlign: 'center', color: 'black', marginBottom: '1rem' }}>
          {t("aboutTitle")}
        </h2>
        <p style={{ fontSize: '1.1rem', color: '#666', textAlign: 'justify' }}>
          {t("aboutText1")}
        </p>
        <img src={logo} alt="Logo" style={{ width: '20rem', height: '20rem', margin: '1rem'}}/>
        <p style={{ fontSize: '1.1rem', color: '#666', textAlign: 'justify' }}>
          {t("aboutText2")}
        </p>
      </div>
    </section>
  );
}

export default About;