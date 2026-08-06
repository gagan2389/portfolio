import { WindowsProvider } from '../../context/WindowsContext';
import { WallpaperBackground } from '../WallpaperBackground';
import { MenuBar } from './MenuBar';
import { DesktopIcons } from './DesktopIcons';
import { Hero } from './Hero';
import { NotesWidget } from './NotesWidget';
import { WindowLayer } from './WindowLayer';
import { Dock } from './Dock';

export function DesktopView() {
  return (
    <WindowsProvider>
      <div id="desktop">
        <MenuBar />
        <div className="desk-area">
          <WallpaperBackground className="wallpaper" />
          <DesktopIcons />
          <Hero />
          <NotesWidget />
          <WindowLayer />
        </div>
        <Dock />
      </div>
    </WindowsProvider>
  );
}
