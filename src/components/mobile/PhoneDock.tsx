import { APPS, type AppId } from '../../data/apps';
import { AppIcon } from './AppIcon';

export function PhoneDock({ onOpen }: { onOpen: (id: AppId) => void }) {
  return (
    <div className="phone-dock-wrap">
      <div className="phone-dock">
        {APPS.filter((app) => app.dock).map((app) => (
          <button key={app.id} type="button" onClick={() => onOpen(app.id)} aria-label={app.label}>
            <AppIcon id={app.id} />
          </button>
        ))}
      </div>
    </div>
  );
}
