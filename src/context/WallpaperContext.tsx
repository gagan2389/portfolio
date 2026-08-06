import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { DEFAULT_WALLPAPER_ID, WALLPAPERS, type Wallpaper } from '../data/wallpapers';

const STORAGE_KEY = 'portfolio-wallpaper';

interface WallpaperContextValue {
  wallpaper: Wallpaper;
  setWallpaperId: (id: string) => void;
}

const WallpaperContext = createContext<WallpaperContextValue | null>(null);

function readStoredId(): string {
  if (typeof window === 'undefined') return DEFAULT_WALLPAPER_ID;
  const stored = window.localStorage.getItem(STORAGE_KEY);
  return stored && WALLPAPERS.some((w) => w.id === stored) ? stored : DEFAULT_WALLPAPER_ID;
}

export function WallpaperProvider({ children }: { children: ReactNode }) {
  const [wallpaperId, setWallpaperId] = useState<string>(readStoredId);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, wallpaperId);
  }, [wallpaperId]);

  const wallpaper = WALLPAPERS.find((w) => w.id === wallpaperId) ?? WALLPAPERS[0];

  return <WallpaperContext.Provider value={{ wallpaper, setWallpaperId }}>{children}</WallpaperContext.Provider>;
}

export function useWallpaper() {
  const ctx = useContext(WallpaperContext);
  if (!ctx) throw new Error('useWallpaper must be used within a WallpaperProvider');
  return ctx;
}
