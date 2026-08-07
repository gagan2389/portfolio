import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';

export type UIMode = 'mac' | 'simple';

const STORAGE_KEY = 'portfolio-ui-mode';

interface UIModeContextValue {
  mode: UIMode;
  setMode: (mode: UIMode) => void;
  toggleMode: () => void;
}

const UIModeContext = createContext<UIModeContextValue | null>(null);

function readStoredMode(): UIMode {
  if (typeof window === 'undefined') return 'mac';
  const stored = window.localStorage.getItem(STORAGE_KEY);
  return stored === 'simple' ? 'simple' : 'mac';
}

export function UIModeProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<UIMode>(readStoredMode);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, mode);
  }, [mode]);

  const toggleMode = () => setMode((m) => (m === 'mac' ? 'simple' : 'mac'));

  return <UIModeContext.Provider value={{ mode, setMode, toggleMode }}>{children}</UIModeContext.Provider>;
}

export function useUIMode() {
  const ctx = useContext(UIModeContext);
  if (!ctx) throw new Error('useUIMode must be used within a UIModeProvider');
  return ctx;
}
