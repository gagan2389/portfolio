import { SKILLS } from '../../../data/portfolio';

export function SkillsMobileContent() {
  return (
    <>
      {SKILLS.map((s) => (
        <div className="m-term" key={s.cat}>
          <div className="term-cat">{s.cat}</div>
          <div className="term-chip-row">
            {s.items.map((item) => (
              <div className="term-chip" key={item}>
                {item}
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
}
