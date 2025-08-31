import React from 'react';
import logo from '../assets/amliangues.svg'
import { BsBorderStyle } from 'react-icons/bs';

function About() {
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
          À propos
        </h2>
        <p style={{ fontSize: '1.1rem', color: '#666', textAlign: 'justify' }}>
          Salut les amis! Je m'appelle Amira, je suis à moitié tunisienne et je suis passionnée par les langues depuis mon enfance. Je suis née en Allemagne et j'ai grandi dans un environnement bilingue. Après mes études, j'ai eu la chance de mieux connaître mon deuxième pays natal, la Tunisie, grâce à des stages à l'étranger, et d'y vivre pour la première fois. Je suis heureuse de pouvoir aider les gens à apprendre l'allemand et de leur transmettre ma passion pour cette langue. Outre la culture allemande, j'aimerais leur faire découvrir la vie quotidienne et le mode de vie et les préparer à cette nouvelle étape de leur vie en leur donnant des conseils.
        </p>
        <p style={{ fontSize: '1.1rem', color: '#666', textAlign: 'justify' }}>
          Chez amilangues, nous sommes des amis qui apprenons ensemble et prenons plaisir à suivre les cours. L'ambiance est toujours détendue et la conversation en allemand joue un rôle important. Il est important pour moi que vous vous familiarisiez avec la langue allemande de manière ludique, à votre rythme, et que vous vous sentiez à l'aise. Tout comme lors d'une rencontre entre amis ! 
          J'espère que nous pourrons bientôt faire connaissance en personne !
        </p>
        <img src={logo} alt="Logo" style={{ width: '20rem', height: '20rem', margin: '3rem'}}/>
      </div>
    </section>
  );
}

export default About;