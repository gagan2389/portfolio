import { createContext, useCallback, useContext, useMemo, useRef, useState, type ReactNode } from 'react';

export interface WindowState {
  open: boolean;
  zIndex: number;
  maximized: boolean;
  minimizing: boolean;
  openToken: number;
}

const DEFAULT_STATE: WindowState = { open: false, zIndex: 0, maximized: false, minimizing: false, openToken: 0 };

interface WindowsContextValue {
  getState: (id: string) => WindowState;
  openWindow: (id: string) => void;
  closeWindow: (id: string) => void;
  minimizeWindow: (id: string) => void;
  toggleMaximize: (id: string) => void;
  bringToFront: (id: string) => void;
}

const WindowsContext = createContext<WindowsContextValue | null>(null);

export function WindowsProvider({ children }: { children: ReactNode }) {
  const [windows, setWindows] = useState<Record<string, WindowState>>({});
  const zCounter = useRef(100);

  const getState = useCallback((id: string) => windows[id] ?? DEFAULT_STATE, [windows]);

  // Mirrors the reference behaviour: opening a window brings it to front
  // and closes any other window that was open, so only one is visible at a time.
  const openWindow = useCallback((id: string) => {
    zCounter.current += 1;
    const z = zCounter.current;
    setWindows((prev) => {
      const next: Record<string, WindowState> = {};
      for (const key of Object.keys(prev)) {
        next[key] = key === id ? prev[key] : { ...prev[key], open: false };
      }
      const existing = prev[id] ?? DEFAULT_STATE;
      next[id] = { ...existing, open: true, zIndex: z, minimizing: false, openToken: existing.openToken + 1 };
      return next;
    });
  }, []);

  const closeWindow = useCallback((id: string) => {
    setWindows((prev) => ({ ...prev, [id]: { ...(prev[id] ?? DEFAULT_STATE), open: false } }));
  }, []);

  const minimizeWindow = useCallback((id: string) => {
    setWindows((prev) => ({ ...prev, [id]: { ...(prev[id] ?? DEFAULT_STATE), minimizing: true } }));
    setTimeout(() => {
      setWindows((prev) => ({ ...prev, [id]: { ...(prev[id] ?? DEFAULT_STATE), open: false, minimizing: false } }));
    }, 280);
  }, []);

  const toggleMaximize = useCallback((id: string) => {
    setWindows((prev) => ({ ...prev, [id]: { ...(prev[id] ?? DEFAULT_STATE), maximized: !(prev[id]?.maximized ?? false) } }));
  }, []);

  const bringToFront = useCallback((id: string) => {
    zCounter.current += 1;
    const z = zCounter.current;
    setWindows((prev) => ({ ...prev, [id]: { ...(prev[id] ?? DEFAULT_STATE), zIndex: z } }));
  }, []);

  const value = useMemo(
    () => ({ getState, openWindow, closeWindow, minimizeWindow, toggleMaximize, bringToFront }),
    [getState, openWindow, closeWindow, minimizeWindow, toggleMaximize, bringToFront],
  );

  return <WindowsContext.Provider value={value}>{children}</WindowsContext.Provider>;
}

export function useWindows() {
  const ctx = useContext(WindowsContext);
  if (!ctx) throw new Error('useWindows must be used within a WindowsProvider');
  return ctx;
}
