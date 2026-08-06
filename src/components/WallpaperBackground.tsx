import { useWallpaper } from '../context/WallpaperContext';
import { Waves } from './Waves';

export function WallpaperBackground({ className }: { className: string }) {
  const { wallpaper } = useWallpaper();

  if (wallpaper.type === 'image') {
    return (
      <div className={className} style={{ backgroundImage: `url(${wallpaper.src})` }}>
        <div className="wallpaper-photo-overlay" />
      </div>
    );
  }

  return (
    <div className={className}>
      <Waves />
    </div>
  );
}
