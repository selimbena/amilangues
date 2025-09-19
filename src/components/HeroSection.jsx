import logo from '../assets/amliangues.svg';
import Menu from './Menu.jsx'
import LanguageSwitcher from './LanguageSwitcher.jsx'
import '../styles/HeroSection.css';
import { useTranslation } from 'react-i18next';

function HeroSection() {

  const { t } = useTranslation();

  return (
    <section className="hero-section">
      <nav className="hero-nav">
        <div className="hero-left">
          <div className="hero-logo">
            <img src={logo} alt="Amilangues Logo" />
          </div>

          <div className="hero-links">
            <a href="#home">{t('home')}</a>
            <a href="#courses">{t('courses')}</a>
            <a href="#translations">{t('translations')}</a>
            <a href="#about">{t('about')}</a>
            {/*<a href="#contact">Contact</a>*/}
          </div>
        </div>

        <div className="hero-menu">
          <Menu />
        </div>

        <div>
          <LanguageSwitcher />
        </div>
      </nav>
    </section>
  );
}

export default HeroSection;