import HeroSection from '../components/HeroSection';
import TranslationServices from '../components/TranslationServices';
import CoursesList from '../components/CoursesList';
import CopyrightFooter from '../components/CopyRightFooter';
import About from '../components/About';
import SocialLinks from '../components/SocialLinks';

import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

function HomePage() {

  const { i18n } = useTranslation();

  useEffect(() => {
      if (i18n.language === 'ar') {
        document.documentElement.dir = 'rtl';
      } else {
        document.documentElement.dir = 'ltr';
      }
    }, [i18n.language]);

  return (
    <div id="home">
      <main>
        <HeroSection/>
        <CoursesList/>
        <TranslationServices/>
        <About/>
        {/* <Contact/> */}
        <SocialLinks/>
        {/* <Impressum/> */}
        <CopyrightFooter/>
      </main>
    </div>
  );
}

export default HomePage;