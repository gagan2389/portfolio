import { PROJECTS } from '../../../data/portfolio';

export function AllProjectsWindowContent() {
  return (
    <>
      {PROJECTS.map((project) => (
        <div className="proj-block" key={project.id}>
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
        </div>
      ))}
    </>
  );
}
