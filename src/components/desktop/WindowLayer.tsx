import { PROJECTS } from '../../data/portfolio';
import { Window } from './Window';
import { ProjectWindowContent } from './windows/ProjectWindowContent';
import { TerminalWindowContent } from './windows/TerminalWindowContent';
import { ContactWindowContent } from './windows/ContactWindowContent';
import { ExperienceWindowContent } from './windows/ExperienceWindowContent';
import { ResumeWindowContent } from './windows/ResumeWindowContent';
import { WallpaperPicker } from '../WallpaperPicker';

export function WindowLayer() {
  return (
    <div className="window-layer">
      {PROJECTS.map((project) => (
        <Window key={project.id} id={`project-${project.id}`} title={project.name}>
          <ProjectWindowContent project={project} />
        </Window>
      ))}

      <Window id="terminal" title="Tech Stack — zsh" wide variant="terminal">
        <TerminalWindowContent />
      </Window>

      <Window id="contact" title="Contact Me">
        <ContactWindowContent />
      </Window>

      <Window id="experience" title="Experience" wide>
        <ExperienceWindowContent />
      </Window>

      <Window id="resume" title="Resume.pdf" wide variant="resume">
        <ResumeWindowContent id="resume" />
      </Window>

      <Window id="settings" title="Wallpaper" wide>
        <WallpaperPicker />
      </Window>
    </div>
  );
}
