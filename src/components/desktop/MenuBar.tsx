import { useDesktopClock } from '../../hooks/useClock';
import { PROJECTS } from '../../data/portfolio';
import { useWindows } from '../../context/WindowsContext';
import { BatteryIcon, GearIcon, SearchIcon, WifiIcon } from '../icons';

export function MenuBar() {
  const clock = useDesktopClock();
  const { openWindow } = useWindows();

  return (
    <div className="menubar">
      <span className="apple" aria-hidden="true">
        &#63743;
      </span>
      <span className="brand">Gagan's Portfolio</span>
      <button type="button" className="menu-item" onClick={() => openWindow(`project-${PROJECTS[0].id}`)}>
        Projects
      </button>
      <button type="button" className="menu-item" onClick={() => openWindow('contact')}>
        Contact
      </button>
      <button type="button" className="menu-item" onClick={() => openWindow('resume')}>
        Resume
      </button>
      <span className="spacer" />
      <span className="status">
        <WifiIcon />
        <SearchIcon />
        <button type="button" className="settings-btn" aria-label="Wallpaper settings" onClick={() => openWindow('settings')}>
          <GearIcon />
        </button>
        <BatteryIcon />
        <span className="clock">{clock}</span>
      </span>
    </div>
  );
}
