import { useRef, useState } from 'react';
import { CONTACT } from '../../data/portfolio';
import type { AppId } from '../../data/apps';
import { WallpaperBackground } from '../WallpaperBackground';
import { PhoneStatus } from './PhoneStatus';
import { PhoneTitle } from './PhoneTitle';
import { AppGrid } from './AppGrid';
import { RecentActivityWidget } from './RecentActivityWidget';
import { PhoneDock } from './PhoneDock';
import { AppScreen } from './AppScreen';

export function MobileView() {
  const [activeApp, setActiveApp] = useState<AppId | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const loadingTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openApp = (id: AppId) => {
    if (id === 'github') {
      window.open(`https://github.com/${CONTACT.github}`, '_blank', 'noopener');
      return;
    }
    if (loadingTimer.current) clearTimeout(loadingTimer.current);
    setActiveApp(id);
    setIsOpen(true);
    setLoading(true);
    const delay = id === 'resume' ? 2000 : 700;
    loadingTimer.current = setTimeout(() => setLoading(false), delay);
  };

  const closeApp = () => setIsOpen(false);

  return (
    <div id="mobile">
      <WallpaperBackground className="phone-wallpaper" />
      <PhoneStatus />
      <PhoneTitle />
      <AppGrid onOpen={openApp} />
      <RecentActivityWidget />
      <PhoneDock onOpen={openApp} />
      <AppScreen activeApp={activeApp} isOpen={isOpen} loading={loading} onClose={closeApp} />
    </div>
  );
}
