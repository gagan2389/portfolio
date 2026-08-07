import { useState } from 'react';
import { BootScreen } from './components/BootScreen';
import { DesktopView } from './components/desktop/DesktopView';
import { MobileView } from './components/mobile/MobileView';
import { SimpleModeView } from './components/simple/SimpleModeView';
import { WallpaperProvider } from './context/WallpaperContext';
import { UIModeProvider, useUIMode } from './context/UIModeContext';

function AppShell() {
  const [booting, setBooting] = useState(true);
  const { mode } = useUIMode();

  if (mode === 'simple') {
    return <SimpleModeView />;
  }

  return (
    <>
      {booting && <BootScreen onDone={() => setBooting(false)} />}
      <DesktopView />
      <MobileView />
    </>
  );
}

function App() {
  return (
    <UIModeProvider>
      <WallpaperProvider>
        <AppShell />
      </WallpaperProvider>
    </UIModeProvider>
  );
}

export default App;
