import { APPS, type AppId } from '../../data/apps';
import { AppIcon } from './AppIcon';

export function AppGrid({ onOpen }: { onOpen: (id: AppId) => void }) {
  return (
    <div className="app-grid">
      {APPS.map((app) => (
        <button key={app.id} type="button" className="app" onClick={() => onOpen(app.id)}>
          <AppIcon id={app.id} />
          <span>{app.label}</span>
        </button>
      ))}
    </div>
  );
}
