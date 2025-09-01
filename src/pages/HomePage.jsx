import React from 'react';
import HeroSection from '../components/HeroSection';
import TranslationServices from '../components/TranslationServices';
import CoursesList from '../components/CoursesList';
import CopyrightFooter from '../components/CopyRightFooter';
import Contact from '../components/Contact';
import About from '../components/About';
import SocialLinks from '../components/SocialLinks';
import Impressum from '../components/Impressum';

function HomePage() {
  return (
    <div>
      <HeroSection/>
      <main>
        <CoursesList/>
        <TranslationServices/>
        <About/>
        {/* <Contact/> */}
        <SocialLinks/>
        {/* <Impressum/> */}
      </main>
      <CopyrightFooter/>
    </div>
  );
}

export default HomePage;