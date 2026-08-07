import type { AppId } from '../../data/apps';
import { ContactsIcon, PhotosIcon, ProjectFolderIcon, ResumeDocIcon, SettingsGearIcon, TerminalArrowIcon } from '../icons';

const BACKGROUNDS: Record<AppId, string> = {
  projects: 'linear-gradient(160deg,#8fc9ff 0%, #4f9bf0 55%, #2f7de0 100%)',
  resume: 'linear-gradient(160deg,#8fc9ff 0%, #4f9bf0 55%, #2f7de0 100%)',
  skills: 'linear-gradient(160deg,#2b2b31,#111114)',
  contact: 'linear-gradient(160deg,#e7d6ad,#c9a866)',
  experience: 'conic-gradient(from 200deg, #ff5f6d, #ffc371, #47cf73, #38b7ff, #a15bff, #ff5f6d)',
  github: '#fff',
  settings: 'linear-gradient(160deg,#9aa3ad,#6b7480)',
};

export function AppIcon({ id }: { id: AppId }) {
  const style = { background: BACKGROUNDS[id], position: id === 'resume' ? ('relative' as const) : undefined };

  return (
    <div className="app-icon" style={style}>
      {id === 'projects' && <ProjectFolderIcon />}
      {id === 'resume' && (
        <>
          <ResumeDocIcon />
          <span
            className="tag"
            style={{
              position: 'absolute',
              right: 2,
              bottom: 2,
              background: '#ff3b30',
              color: '#fff',
              fontSize: 8,
              fontWeight: 800,
              padding: '1px 3px',
              borderRadius: 3,
            }}
          >
            PDF
          </span>
        </>
      )}
      {id === 'skills' && <TerminalArrowIcon />}
      {id === 'contact' && <ContactsIcon />}
      {id === 'experience' && <PhotosIcon />}
      {id === 'github' && <img src="/icons/github.png" alt="" className="app-icon-img app-icon-img-gh" />}
      {id === 'settings' && <SettingsGearIcon color="#fff" />}
    </div>
  );
}
