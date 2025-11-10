import React from 'react';
import { ThemeProvider } from './ThemeContext';
import Navbar from './Navbar';
import HomeSection from './HomeSection';
import AboutSection from './AboutSection';
import SkillSection from './SkillSection';
import ExperienceSection from './ExperienceSection';
import WorkSection from './WorkSection';
import ContactSection from './ContactSection';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Navbar />
      <HomeSection />
      <AboutSection />
      <SkillSection />
      <ExperienceSection />
      <WorkSection />
      <ContactSection />
    </ThemeProvider>
  );
};

export default App;
