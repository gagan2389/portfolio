import { useEffect, useState } from 'react';
import { motion, MotionConfig, type Variants } from 'motion/react';
import { CONTACT, EDUCATION, EXPERIENCE, PROJECTS, SKILLS } from '../../data/portfolio';
import { useUIMode } from '../../context/UIModeContext';
import '../../styles/simple-mode.css';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  shown: { opacity: 1, y: 0 },
};

const viewport = { once: true, margin: '-80px' } as const;

function fadeUpTransition(delay = 0) {
  return { duration: 0.55, delay, ease: [0.16, 1, 0.3, 1] as const };
}

const CORE_STACK = [
  'React + TypeScript',
  'Ant Design / Tailwind CSS',
  'Config-driven form engines',
  'Reusable component libraries',
  'NestJS (support-level)',
];

const REGISTRY_PREFIX: Record<string, string> = {
  Languages: 'L',
  'Frameworks & Libraries': 'F',
  Tools: 'T',
  'AI Tools': 'A',
};

function usePunchlist(count: number) {
  const [resolved, setResolved] = useState<boolean[]>(() => Array(count).fill(false));

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) {
      setResolved(Array(count).fill(true));
      return;
    }
    const timers = Array.from({ length: count }, (_, i) =>
      setTimeout(() => {
        setResolved((prev) => {
          const next = [...prev];
          next[i] = true;
          return next;
        });
      }, 500 + i * 420),
    );
    return () => timers.forEach(clearTimeout);
  }, [count]);

  const toggle = (i: number) => setResolved((prev) => prev.map((v, idx) => (idx === i ? !v : v)));
  return { resolved, toggle };
}

export function SimpleModeView() {
  const { setMode } = useUIMode();
  const { resolved, toggle } = usePunchlist(CORE_STACK.length);
  const resolvedCount = resolved.filter(Boolean).length;

  useEffect(() => {
    document.body.classList.add('simple-mode-active');
    return () => document.body.classList.remove('simple-mode-active');
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <div className="simple-mode">
      <div className="reg-mark reg-tl">
        <span />
      </div>
      <div className="reg-mark reg-tr">
        <span />
      </div>
      <div className="reg-mark reg-bl">
        <span />
      </div>
      <div className="reg-mark reg-br">
        <span />
      </div>

      <header className="site">
        <div className="navrow">
          <div className="brand">
            <span className="dot" />
            GAGAN GUPTA <span className="brand-sub">/ FRONT-END</span>
          </div>
          <nav className="links">
            <a href="#profile">Profile</a>
            <a href="#log">Work Log</a>
            <a href="#registry">Registry</a>
            <a href="#specs">Specs</a>
            <a href="#signoff">Contact</a>
          </nav>
          <button type="button" className="mac-switch" onClick={() => setMode('mac')}>
            ⌘ Switch back to Mac Mode
          </button>
        </div>
      </header>

      <main className="wrap">
        <section className="sm-hero" id="top">
          <div className="eyebrow">DOC-GG-2026 · REV C · FRONT-END PROFILE</div>
          <div className="hero-grid">
            <motion.div initial="hidden" animate="shown" variants={fadeUp} transition={fadeUpTransition()}>
              <h1>
                I build the UI for things
                <br />
                that can't <em>skip a step.</em>
              </h1>
              <p className="lede">
                Front-end developer with 2 years shipping checklists, approvals, and config-driven forms for
                platforms that don't get to be sloppy — plant commissioning, loan origination, co-lending. React,
                Ant Design, Tailwind, Vite.
              </p>
              <div className="hero-meta">
                <span>📍 Ahmedabad, Gujarat, IN</span>
                <span>· {CONTACT.role} @ CCTECH</span>
                <span>· 2 yrs exp</span>
              </div>
              <div className="hero-actions">
                <a className="btn btn-primary" href={`mailto:${CONTACT.email}`}>
                  Email me →
                </a>
                <a className="btn btn-ghost" href="#log">
                  View the work log
                </a>
              </div>
            </motion.div>

            <motion.div
              className="checklist"
              aria-label="Skills punch-list, auto-resolving on load"
              initial="hidden"
              animate="shown"
              variants={fadeUp}
              transition={fadeUpTransition(0.15)}
            >
              <div className="checklist-head">
                <b>PUNCH LIST</b> · CORE STACK
              </div>
              <ul className="punchlist">
                {CORE_STACK.map((label, i) => (
                  <li key={label} className={resolved[i] ? 'resolved' : ''} onClick={() => toggle(i)}>
                    <span className="box" />
                    <span className="punch-label">{label}</span>
                    <span className="punch-stamp">✓ VERIFIED</span>
                  </li>
                ))}
              </ul>
              <div className="checklist-foot">
                <span>{CORE_STACK.length} items · click to toggle</span>
                <span>
                  <b>{resolvedCount}</b>/{CORE_STACK.length} resolved
                </span>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="profile">
          <div className="section-tag eyebrow">02 — PROFILE</div>
          <div className="about-grid">
            <motion.div
              className="profile-panel"
              initial="hidden"
              whileInView="shown"
              viewport={viewport}
              variants={fadeUp}
              transition={fadeUpTransition()}
            >
              <div className="field-row">
                <div className="field-label">Name</div>
                <div className="field-value">{CONTACT.name}</div>
              </div>
              <div className="field-row">
                <div className="field-label">Role</div>
                <div className="field-value">{CONTACT.role}</div>
              </div>
              <div className="field-row">
                <div className="field-label">Based in</div>
                <div className="field-value">Ahmedabad, Gujarat</div>
              </div>
              <div className="field-row">
                <div className="field-label">Experience</div>
                <div className="field-value">2 years</div>
              </div>
              <div className="field-row">
                <div className="field-label">Stack</div>
                <div className="field-value mono">React · TS · AntD · Tailwind · Vite</div>
              </div>
              <div className="field-row">
                <div className="field-label">Contact</div>
                <div className="field-value mono">{CONTACT.email}</div>
              </div>
            </motion.div>
            <motion.div
              className="about-copy"
              initial="hidden"
              whileInView="shown"
              viewport={viewport}
              variants={fadeUp}
              transition={fadeUpTransition(0.15)}
            >
              <p>
                I spend most of my time in the part of software people complain about most: forms, checklists, and
                approval flows. On PreHOTO — a plant-commissioning platform for Adani Green Energy — I built the
                handover/takeover module end to end, including a bulk-import pipeline for punch-point checklists
                that processes Excel/CSV files off the main thread with a Web Worker, across a 20+ engineer
                monorepo.
              </p>
              <p>
                Before that, at Aumnee, I led a 3-developer team building a Loan Origination System that drove an
                80% increase in monthly loan disbursements, and contributed to a config-driven form engine handling
                500+ fields with schema-based validation and virtualized rendering. I care about the unglamorous
                parts — validation states, bulk actions, edge cases in access control — because that's where trust
                in an enterprise product is actually won or lost.
              </p>
            </motion.div>
          </div>
        </section>

        <section id="log">
          <div className="section-tag eyebrow">03 — REVISION LOG</div>
          <h2 className="section-heading">Work history, logged like a changeset.</h2>
          <div className="log">
            <div className="log-head-row">
              <span>Rev</span>
              <span>Period</span>
              <span>Change</span>
              <span />
            </div>
            {EXPERIENCE.map((item, i) => {
              const letter = String.fromCharCode(65 + (EXPERIENCE.length - 1 - i));
              return (
                <motion.details
                  className="entry"
                  key={item.role + item.org}
                  open={i === 0}
                  initial="hidden"
                  whileInView="shown"
                  viewport={viewport}
                  variants={fadeUp}
                  transition={fadeUpTransition(i * 0.1)}
                >
                  <summary>
                    <span className="rev-tag">{letter}</span>
                    <span className="rev-date">{item.meta.split(' · ')[0]}</span>
                    <span className="rev-title">
                      {item.role}, {item.org}
                      <small>{item.meta.split(' · ').slice(1).join(', ')}</small>
                    </span>
                    <span className="rev-toggle">
                      <span className="verb" />
                    </span>
                  </summary>
                  <div className="entry-body">
                    <ul>
                      <li>{item.body}</li>
                    </ul>
                  </div>
                </motion.details>
              );
            })}
          </div>
        </section>

        <section id="registry">
          <div className="section-tag eyebrow">04 — COMPONENT REGISTRY</div>
          <h2 className="section-heading">Tools in the parts bin.</h2>
          {SKILLS.map((group, gi) => (
            <motion.div
              className="registry-group"
              key={group.cat}
              initial="hidden"
              whileInView="shown"
              viewport={viewport}
              variants={fadeUp}
              transition={fadeUpTransition(gi * 0.08)}
            >
              <div className="registry-title">{group.cat}</div>
              <div className="chip-row">
                {group.items.map((item, i) => (
                  <span className="chip" key={item}>
                    <span className="id">
                      {REGISTRY_PREFIX[group.cat] ?? 'X'}
                      {String(i + 1).padStart(2, '0')}
                    </span>{' '}
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </section>

        <section id="specs">
          <div className="section-tag eyebrow">05 — SPEC SHEETS</div>
          <h2 className="section-heading">{PROJECTS.length} builds worth a closer look.</h2>
          <div className="spec-grid">
            {PROJECTS.map((project, i) => (
              <motion.div
                className="spec-card"
                key={project.id}
                initial="hidden"
                whileInView="shown"
                viewport={viewport}
                variants={fadeUp}
                transition={fadeUpTransition((i % 2) * 0.1)}
              >
                <span className="spec-no">SPEC-{String(i + 1).padStart(2, '0')}</span>
                <h3>{project.name}</h3>
                <div className="spec-sub">{project.sub}</div>
                <p>{project.bullets[0]}</p>
                <div className="spec-tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section>
          <div className="section-tag eyebrow">06 — EDUCATION</div>
          <div className="edu-strip">
            {EDUCATION.map((edu, i) => (
              <motion.div
                className="sm-edu-item"
                key={edu.school}
                initial="hidden"
                whileInView="shown"
                viewport={viewport}
                variants={fadeUp}
                transition={fadeUpTransition(i * 0.1)}
              >
                <div className="yrs">{edu.years}</div>
                <h3>{edu.school}</h3>
                <p>{edu.degree}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </main>

      <section className="signoff" id="signoff">
        <div className="wrap">
          <div className="eyebrow">07 — SIGN-OFF</div>
          <div className="signoff-grid">
            <motion.div
              initial="hidden"
              whileInView="shown"
              viewport={viewport}
              variants={fadeUp}
              transition={fadeUpTransition()}
            >
              <h2>
                Got something that needs
                <br />a front-end that holds up?
              </h2>
              <p className="lede">{CONTACT.msg}</p>
              <div className="contact-list">
                <a href={`mailto:${CONTACT.email}`}>
                  <span className="k">Email</span> {CONTACT.email}
                </a>
                <a href={`tel:${CONTACT.phone.replace(/\s+/g, '')}`}>
                  <span className="k">Phone</span> {CONTACT.phone}
                </a>
                <a href={`https://github.com/${CONTACT.github}`} target="_blank" rel="noopener noreferrer">
                  <span className="k">GitHub</span> {CONTACT.github}
                </a>
              </div>
            </motion.div>
            <motion.div
              className="stamp"
              initial={{ opacity: 0, scale: 0.6, rotate: 10 }}
              whileInView={{ opacity: 1, scale: 1, rotate: -8 }}
              viewport={viewport}
              transition={fadeUpTransition(0.2)}
            >
              APPROVED
              <br />
              FOR
              <br />
              CONTACT
            </motion.div>
          </div>
          <footer className="foot">
            <span>DOC-GG-2026 · REV C</span>
            <span>Ahmedabad, Gujarat, IN</span>
          </footer>
        </div>
      </section>
      </div>
    </MotionConfig>
  );
}
