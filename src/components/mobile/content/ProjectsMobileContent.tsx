import { PROJECTS } from '../../../data/portfolio';

export function ProjectsMobileContent() {
  return (
    <>
      {PROJECTS.map((project) => (
        <div className="m-card" key={project.id}>
          <div className="m-proj-eyebrow">Project Folder</div>
          <div className="m-proj-title">{project.name}</div>
          <div className="m-proj-sub">{project.sub}</div>
          <div className="m-proj-tags">
            {project.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
          <ul className="m-proj-list">
            {project.bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
}
