import { useState } from 'react';
import { BootScreen } from './components/BootScreen';
import { DesktopView } from './components/desktop/DesktopView';
import { MobileView } from './components/mobile/MobileView';
import { WallpaperProvider } from './context/WallpaperContext';

function App() {
  const [booting, setBooting] = useState(true);

  return (
    <WallpaperProvider>
      {booting && <BootScreen onDone={() => setBooting(false)} />}
      <DesktopView />
      <MobileView />
    </WallpaperProvider>
  );
}

export default App;
