import { WALLPAPERS } from '../data/wallpapers';
import { useWallpaper } from '../context/WallpaperContext';
import { useUIMode } from '../context/UIModeContext';

export function WallpaperPicker() {
  const { wallpaper, setWallpaperId } = useWallpaper();
  const { mode, setMode } = useUIMode();

  return (
    <div className="wallpaper-picker">
      <p className="wallpaper-picker-lede settings-heading">Appearance</p>
      <div className="mode-toggle" role="group" aria-label="UI mode">
        <button
          type="button"
          className={`mode-option${mode === 'mac' ? ' active' : ''}`}
          onClick={() => setMode('mac')}
        >
          <span className="mode-option-title">🖥️ Mac Mode</span>
          <span className="mode-option-desc">The full desktop experience — windows, dock, wallpapers.</span>
        </button>
        <button
          type="button"
          className={`mode-option${mode === 'simple' ? ' active' : ''}`}
          onClick={() => setMode('simple')}
        >
          <span className="mode-option-title">📄 Simple Mode</span>
          <span className="mode-option-desc">A plain, single-page resume layout. Lighter and faster.</span>
        </button>
      </div>

      <p className="wallpaper-picker-lede settings-heading">Wallpaper</p>
      <div className="wallpaper-grid">
        {WALLPAPERS.map((w) => {
          const isActive = w.id === wallpaper.id;
          const style =
            w.type === 'image'
              ? { backgroundImage: `url(${w.src})` }
              : {
                  background:
                    'radial-gradient(120% 90% at 85% -10%, var(--wall-blue-2) 0%, transparent 55%), linear-gradient(128deg, var(--wall-blue) 0%, var(--wall-blue) 22%, var(--wall-orange) 55%, var(--wall-pink) 75%, var(--wall-purple) 100%)',
                };

          return (
            <button
              key={w.id}
              type="button"
              className={`wallpaper-option${isActive ? ' active' : ''}`}
              onClick={() => setWallpaperId(w.id)}
            >
              <span className="wallpaper-thumb" style={style} />
              <span className="wallpaper-option-label">{w.label}</span>
              {isActive && (
                <span className="wallpaper-check" aria-hidden="true">
                  ✓
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
