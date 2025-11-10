import React from 'react';
import Navbar from './Navbar';
import HomeSection from './HomeSection';
import AboutSection from './AboutSection';
import SkillSection from './SkillSection';
import ExperienceSection from './ExperienceSection';
import WorkSection from './WorkSection';
import ContactSection from './ContactSection';

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <HomeSection />
      <AboutSection />
      <SkillSection />
      <ExperienceSection />
      <WorkSection />
      <ContactSection />
      </>
  );
};

export default App;
