import { EDUCATION, EXPERIENCE } from '../../../data/portfolio';

export function ExperienceWindowContent() {
  return (
    <>
      <div className="section-eyebrow">Experience</div>
      {EXPERIENCE.map((e) => (
        <div className="tl-item" key={e.role + e.org}>
          <div className="tl-role">{e.role}</div>
          <div className="tl-org">{e.org}</div>
          <div className="tl-meta">{e.meta}</div>
          <div className="tl-body">{e.body}</div>
        </div>
      ))}

      <div className="section-eyebrow edu-heading">Education</div>
      <div className="edu-block">
        {EDUCATION.map((ed) => (
          <div className="edu-item" key={ed.school}>
            <div className="edu-item-top">
              <span className="edu-school">{ed.school}</span>
              <span className="edu-years">{ed.years}</span>
            </div>
            <div className="edu-degree">{ed.degree}</div>
          </div>
        ))}
      </div>
    </>
  );
}
