import { useState } from 'react';
import { PROJECTS } from '../../data/portfolio';
import { useWindows } from '../../context/WindowsContext';

export function DesktopIcons() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const { openWindow } = useWindows();

  return (
    <div className="desktop-icons">
      {PROJECTS.map((project) => (
        <div
          key={project.id}
          className={`d-icon${selectedId === project.id ? ' selected' : ''}`}
          onClick={() => setSelectedId(project.id)}
          onDoubleClick={() => openWindow(`project-${project.id}`)}
        >
          <div className="folder" />
          <span>{project.name}</span>
        </div>
      ))}
    </div>
  );
}
