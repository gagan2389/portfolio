import type { Project } from '../../../data/types';

export function ProjectWindowContent({ project }: { project: Project }) {
  return (
    <>
      <div className="proj-eyebrow">Project Folder</div>
      <div className="proj-title">{project.name}</div>
      <div className="proj-sub">{project.sub}</div>
      <div className="proj-tags">
        {project.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
      <ul className="proj-list">
        {project.bullets.map((bullet) => (
          <li key={bullet}>{bullet}</li>
        ))}
      </ul>
    </>
  );
}
