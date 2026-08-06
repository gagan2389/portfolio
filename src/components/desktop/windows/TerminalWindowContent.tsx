import { SKILLS } from '../../../data/portfolio';

export function TerminalWindowContent() {
  const totalSkills = SKILLS.reduce((n, s) => n + s.items.length, 0);

  return (
    <>
      <div className="term-prompt">
        <b>gagan@portfolio</b> % show tech stack
      </div>
      {SKILLS.map((s) => (
        <div key={s.cat}>
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
      <div className="term-foot">✓ {totalSkills} skills loaded successfully (100%)</div>
    </>
  );
}
