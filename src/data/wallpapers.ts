export interface Wallpaper {
  id: string;
  label: string;
  /** 'gradient' renders the original animated aurora background; 'image' renders a photo. */
  type: 'gradient' | 'image';
  src?: string;
  thumb?: string;
}

export const WALLPAPERS: Wallpaper[] = [
  { id: 'cinque-terre', label: 'Cinque Terre', type: 'image', src: '/wallpapers/cinque-terre.jpg' },
  { id: 'big-sur', label: 'Big Sur', type: 'image', src: '/wallpapers/big-sur.jpg' },
  { id: 'aurora', label: 'Aurora', type: 'gradient' },
  { id: 'ocean-wave', label: 'Ocean Wave', type: 'image', src: '/wallpapers/ocean-wave.jpg' },
  { id: 'sierra-sunset', label: 'Sierra Sunset', type: 'image', src: '/wallpapers/sierra-sunset.jpg' },
];

export const DEFAULT_WALLPAPER_ID = 'cinque-terre';
