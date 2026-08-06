import { APPS, type AppId } from '../../data/apps';
import { BackChevronIcon } from '../icons';
import { ProjectsMobileContent } from './content/ProjectsMobileContent';
import { SkillsMobileContent } from './content/SkillsMobileContent';
import { ContactMobileContent } from './content/ContactMobileContent';
import { ExperienceMobileContent } from './content/ExperienceMobileContent';
import { ResumeMobileContent } from './content/ResumeMobileContent';
import { WallpaperPicker } from '../WallpaperPicker';

interface AppScreenProps {
  activeApp: AppId | null;
  isOpen: boolean;
  loading: boolean;
  onClose: () => void;
}

function renderContent(id: AppId | null) {
  switch (id) {
    case 'projects':
      return <ProjectsMobileContent />;
    case 'skills':
      return <SkillsMobileContent />;
    case 'contact':
      return <ContactMobileContent />;
    case 'experience':
      return <ExperienceMobileContent />;
    case 'resume':
      return <ResumeMobileContent />;
    case 'settings':
      return <WallpaperPicker />;
    default:
      return null;
  }
}

export function AppScreen({ activeApp, isOpen, loading, onClose }: AppScreenProps) {
  const label = APPS.find((a) => a.id === activeApp)?.label ?? '';

  return (
    <div className={`app-screen${isOpen ? ' open' : ''}`}>
      <div className="app-nav">
        <button type="button" className="app-back" onClick={onClose}>
          <BackChevronIcon /> Home
        </button>
        <div className="app-nav-title">{label}</div>
      </div>
      <div className="app-content">
        {loading ? (
          <div className="app-loading">
            <div className="spinner" />
            <p>Opening…</p>
          </div>
        ) : (
          renderContent(activeApp)
        )}
      </div>
    </div>
  );
}
