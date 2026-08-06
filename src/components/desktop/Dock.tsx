import { CONTACT } from '../../data/portfolio';
import { useWindows } from '../../context/WindowsContext';
import { ContactsIcon, ResumeDocIcon, SettingsGearIcon, TerminalArrowIcon, TrashIcon } from '../icons';

export function Dock() {
  const { openWindow } = useWindows();

  return (
    <div className="dock-wrap">
      <div className="dock">
        <button type="button" className="dock-item" onClick={() => openWindow('experience')}>
          <div className="tooltip">Finder</div>
          <div className="icon icon-plain">
            <img src="/icons/finder.png" alt="Finder" className="dock-icon-img" />
          </div>
        </button>
        <button
          type="button"
          className="dock-item"
          onClick={() => window.open(`https://github.com/${CONTACT.github}`, '_blank', 'noopener')}
        >
          <div className="tooltip">GitHub</div>
          <div className="icon icon-plain">
            <img src="/icons/github.png" alt="GitHub" className="dock-icon-img" />
          </div>
        </button>
        <div className="dock-sep" />
        <button type="button" className="dock-item" onClick={() => openWindow('resume')}>
          <div className="tooltip">Resume</div>
          <div className="icon ic-resume">
            <ResumeDocIcon />
            <span className="tag">PDF</span>
          </div>
        </button>
        <button type="button" className="dock-item" onClick={() => openWindow('terminal')}>
          <div className="tooltip">Skills</div>
          <div className="icon ic-terminal">
            <TerminalArrowIcon />
          </div>
        </button>
        <button type="button" className="dock-item" onClick={() => openWindow('contact')}>
          <div className="tooltip">Contact</div>
          <div className="icon ic-contacts">
            <ContactsIcon />
          </div>
        </button>
        <button type="button" className="dock-item" onClick={() => openWindow('settings')}>
          <div className="tooltip">Settings</div>
          <div className="icon ic-settings">
            <SettingsGearIcon color="#fff" />
          </div>
        </button>
        <div className="dock-sep" />
        <button type="button" className="dock-item">
          <div className="tooltip">Bin</div>
          <div className="icon ic-trash">
            <TrashIcon />
          </div>
        </button>
      </div>
    </div>
  );
}
