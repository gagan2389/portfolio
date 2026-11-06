import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react';
import {
  BRANDS, CREDS, EXPERIENCE, PROFILE, SKILL_GROUPS, SKILL_PILLS, STEPS, WORKS, type Work,
} from './data/portfolio';
import './styles/site.css';

const NAV = [
  ['Home', '#home'],
  ['About', '#approach'],
  ['Work', '#works'],
  ['Experience', '#experience'],
  ['Contact', '#contact'],
];

/* ---------- hooks ---------- */
function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!('IntersectionObserver' in window)) return el.classList.add('in');
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && (e.target.classList.add('in'), io.unobserve(e.target))),
      { rootMargin: '0px 0px -10% 0px', threshold: 0.08 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return ref;
}

function Reveal({ as: Tag = 'div', className = '', children, style }: {
  as?: 'div' | 'article' | 'p' | 'h2';
  className?: string;
  children: ReactNode;
  style?: CSSProperties;
}) {
  const ref = useReveal<HTMLElement>();
  return <Tag ref={ref as never} className={`reveal ${className}`} style={style}>{children}</Tag>;
}

function ScrollFill({ text, className }: { text: string; className: string }) {
  const ref = useRef<HTMLHeadingElement>(null);
  const [on, setOn] = useState(0);
  const words = text.split(/\s+/);
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return setOn(words.length);
    let raf = 0;
    const tick = () => {
      const el = ref.current;
      if (el) {
        const r = el.getBoundingClientRect();
        const vh = window.innerHeight;
        const p = Math.max(0, Math.min(1, (vh * 0.85 - r.top) / (r.height + vh * 0.25)));
        setOn(Math.round(p * words.length));
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [words.length]);
  return (
    <h2 ref={ref} className={className}>
      {words.map((w, i) => (
        <span key={i}>
          <span className={`w${i < on ? ' on' : ''}`}>{w}</span>{' '}
        </span>
      ))}
    </h2>
  );
}

function useCursor() {
  useEffect(() => {
    const fine = matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (!fine || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const docEl = document.documentElement;
    docEl.classList.add('has-cur');
    const dot = document.createElement('div');
    dot.className = 'cur-dot';
    const ring = document.createElement('div');
    ring.className = 'cur-ring';
    const lbl = document.createElement('span');
    lbl.className = 'lbl';
    ring.appendChild(lbl);
    document.body.append(dot, ring);
    let mx = innerWidth / 2, my = innerHeight / 2, rx = mx, ry = my, shown = false, raf = 0;
    const move = (e: MouseEvent) => {
      mx = e.clientX; my = e.clientY;
      dot.style.transform = `translate(${mx}px,${my}px) translate(-50%,-50%)`;
      if (!shown) { shown = true; docEl.classList.add('cur-on'); }
      const t = e.target as HTMLElement;
      const card = t.closest?.('[data-cursor]');
      if (card) { lbl.textContent = card.getAttribute('data-cursor'); ring.classList.add('view'); ring.classList.remove('hot'); }
      else {
        ring.classList.remove('view');
        ring.classList.toggle('hot', !!t.closest?.('a,button,.pill'));
      }
      const onMenu = !!t.closest?.('.menu');
      ring.classList.toggle('hide', onMenu);
      dot.classList.toggle('hide', onMenu);
      const mag = t.closest?.('.magnetic') as HTMLElement | null;
      document.querySelectorAll<HTMLElement>('.magnetic').forEach((b) => {
        if (b === mag) {
          const r = b.getBoundingClientRect();
          b.style.transform = `translate(${(e.clientX - (r.left + r.width / 2)) * 0.3}px,${(e.clientY - (r.top + r.height / 2)) * 0.5}px)`;
        } else b.style.transform = '';
      });
    };
    const loop = () => {
      rx += (mx - rx) * 0.2; ry += (my - ry) * 0.2;
      ring.style.transform = `translate(${rx}px,${ry}px) translate(-50%,-50%)`;
      raf = requestAnimationFrame(loop);
    };
    const leave = () => { docEl.classList.remove('cur-on'); shown = false; };
    addEventListener('mousemove', move);
    document.addEventListener('mouseleave', leave);
    loop();
    return () => {
      cancelAnimationFrame(raf);
      removeEventListener('mousemove', move);
      document.removeEventListener('mouseleave', leave);
      docEl.classList.remove('has-cur', 'cur-on');
      dot.remove(); ring.remove();
    };
  }, []);
}

/* ---------- small pieces ---------- */
const Arrow = () => <span className="arw">→</span>;

const Icon = ({ d }: { d: string }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true"><path d={d} /></svg>
);
const GH = 'M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.76 2.69 1.25 3.35.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z';
const LI = 'M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z';
const MAIL = 'M2 5.5A1.5 1.5 0 0 1 3.5 4h17A1.5 1.5 0 0 1 22 5.5v13a1.5 1.5 0 0 1-1.5 1.5h-17A1.5 1.5 0 0 1 2 18.5v-13Zm2.2.5L12 11.8 19.8 6H4.2Zm15.8 1.9-7.4 5.5a1 1 0 0 1-1.2 0L4 7.9V18h16V7.9Z';

function Portrait({ className, src = '/portrait.png' }: { className?: string; src?: string }) {
  const [ok, setOk] = useState(true);
  return ok ? (
    <img src={src} alt={`${PROFILE.name}, front-end developer`} onError={() => setOk(false)} />
  ) : (
    <div className={`portrait-mono ${className ?? ''}`} aria-label={PROFILE.name}>GG</div>
  );
}

function WorkCard({ w }: { w: Work }) {
  const body = (
    <>
      <div className="wtop"><h3>{w.title}</h3>{w.href && <span className="arr">↗</span>}</div>
      <p className="desc">{w.desc}</p>
      <div className="tags">{w.tags.map((t) => <span key={t}>{t}</span>)}</div>
    </>
  );
  return (
    <Reveal as="article" className="work">
      <div data-cursor={w.cursor}>
        {w.href ? <a href={w.href} target="_blank" rel="noopener noreferrer">{body}</a> : body}
      </div>
    </Reveal>
  );
}

/* ---------- page ---------- */
export default function App() {
  const [menu, setMenu] = useState(false);
  const [ready, setReady] = useState(false);
  const progress = useRef<HTMLSpanElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);
  const wordmark = useRef<HTMLDivElement>(null);
  useCursor();

  useEffect(() => {
    const raf = requestAnimationFrame(() => setReady(true));
    const onScroll = () => {
      const d = document.documentElement;
      const max = d.scrollHeight - d.clientHeight;
      if (progress.current) progress.current.style.width = `${max > 0 ? (d.scrollTop / max) * 100 : 0}%`;
    };
    addEventListener('scroll', onScroll, { passive: true });
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && e.target.classList.add('in')),
      { threshold: 0.2 },
    );
    [stepsRef.current, wordmark.current].forEach((el) => el && io.observe(el));
    return () => { cancelAnimationFrame(raf); removeEventListener('scroll', onScroll); io.disconnect(); };
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('ready', ready);
  }, [ready]);

  const close = () => setMenu(false);

  return (
    <>
      <header className="site">
        <div className="wrap nav">
          <a className="logo" href="#home">{PROFILE.name}</a>
          <nav className="topnav">
            {NAV.map(([l, h]) => <a key={h} href={h}>{l}</a>)}
            <a className="pill dark" href={PROFILE.resume} download>Resume <span className="arw">↓</span></a>
          </nav>
          <button className={`menu${menu ? ' open' : ''}`} aria-label="Toggle menu" onClick={() => setMenu(!menu)}>
            <span /><span />
          </button>
        </div>
      </header>

      <nav className={`overlay${menu ? ' show' : ''}`}>
        <div className="ov-links">
          {NAV.map(([l, h]) => <a key={h} href={h} onClick={close}>{l}</a>)}
        </div>
        <a className="ov-resume" href={PROFILE.resume} download onClick={close}>Download resume <span className="arw">↓</span></a>
        <div className="ov-foot">
          <a href={`mailto:${PROFILE.email}`}>{PROFILE.email}</a>
          <div>
            <a href={PROFILE.github} target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
      </nav>

      <div className="progress"><span ref={progress} /></div>

      <main>
        <section id="home" className="hero">
          <div className="aura" />
          <div className="wrap hero-in">
            <h1>
              <span className="line"><i>Hi, I'm {PROFILE.first}</i></span>
              <span className="line r"><i>Front-End Developer</i></span>
            </h1>
            <div className="hero-portrait"><Portrait /></div>
            <div className="hero-bottom">
              <div className="hero-left">
                <div className="pill avail"><span className="dot" />Open to remote roles</div>
                <div className="proof">
                  <div className="avatars"><span>R</span><span>TS</span><span>AI</span><span>FD</span></div>
                  <p>Shipped ~228 PRs at my current company, CCTech</p>
                </div>
              </div>
              <div className="hero-right">
                <p>I turn client requirements into working React and TypeScript products, fast: a first demo from a PRD in half a day.</p>
                <div className="hero-actions">
                  <a className="pill dark magnetic" href="#contact">Get in touch <Arrow /></a>
                  <a className="pill ghost" href={PROFILE.resume} download>Download resume ↓</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="brands">
          <div className="brands-track">
            {[...BRANDS, ...BRANDS].map((b, i) => <span key={i}>{b}</span>)}
          </div>
        </div>


        <section id="approach" className="approach wrap">
          <p className="eyebrow">Hello!</p>
          <ScrollFill
            className="fill"
            text="I'm a front-end engineer who sits with the people who use the product, understands their pain points, and ships the UI that fixes them."
          />
          <Reveal className="pillcloud">
            {SKILL_PILLS.map((k) => (
              <span key={k.label} className="pill">
                <span className="ic logo">
                  {k.logo ? (
                    <i style={{ ['--logo' as string]: `url(/logos/${k.logo}.svg)`, backgroundColor: k.color }} />
                  ) : (
                    <b style={{ color: k.color }}>{k.glyph}</b>
                  )}
                </span>
                {k.label}
              </span>
            ))}
          </Reveal>
          <Reveal className="skillgrid">
            {SKILL_GROUPS.map((g) => <div key={g.cat}><b>{g.cat}</b><span>{g.items}</span></div>)}
          </Reveal>
        </section>

        <section className="process wrap">
          <Reveal as="h2" className="h-big">From PRD to production</Reveal>
          <div className="steps" ref={stepsRef}>
            <svg className="dash" viewBox="0 0 1000 300" preserveAspectRatio="none">
              <path d="M60 120 C 260 40, 420 220, 560 120 S 820 40, 940 150" />
            </svg>
            {STEPS.map((s) => (
              <Reveal as="article" key={s.n} className="step">
                <div className="n">{s.n}</div><h3>{s.title}</h3><p>{s.body}</p>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="works" className="wrap">
          <Reveal as="h2" className="h-big" style={{ marginBottom: 10 }}>Selected Works</Reveal>
          <div className="works">
            {WORKS.map((w) => <WorkCard key={w.title} w={w} />)}
          </div>
        </section>

        <section className="wrap">
          <Reveal as="h2" className="h-big" style={{ marginBottom: 46 }}>Certified &amp; recognised</Reveal>
          <div className="creds">
            {CREDS.map((c) => (
              <Reveal key={c.by} className="cred">
                <div className="q">&ldquo;</div>
                <p>{c.quote}</p>
                <div className="by"><div className="av">{c.av}</div><div><b>{c.by}</b><span>{c.org}</span></div></div>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="experience" className="wrap">
          <ScrollFill className="h-big fill" text="Building enterprise web apps since 2024" />
          <div className="about-grid">
            <Reveal className="about-photo"><Portrait src="/portrait-about.png" /></Reveal>
            <div className="about-copy">
              <Reveal as="p">
                Front-end engineer with 2 years of experience building enterprise web applications in React and TypeScript.
                Right now I'm a Forward Deployed Engineer at CCTech, working on-site with the client in Ahmedabad.
                On the side I run Createlab, a small studio building websites, PWAs and mobile apps for startups.
              </Reveal>
              <Reveal className="xp">
                {EXPERIENCE.map((x) => (
                  <div className="row" key={x.role + x.yr}>
                    <span className="role">{x.role}</span><span className="co">{x.co}</span><span className="yr">{x.yr}</span>
                  </div>
                ))}
              </Reveal>
              <Reveal className="about-id">
                <div className="nm"><b>{PROFILE.name}</b><span>{PROFILE.role} · {PROFILE.location}</span></div>
                <div className="socials">
                  <a href={PROFILE.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Icon d={GH} /></a>
                  <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Icon d={LI} /></a>
                  <a href={`mailto:${PROFILE.email}`} aria-label="Email"><Icon d={MAIL} /></a>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section id="contact" className="wrap">
          <Reveal className="cta">
            <h2>Let's Make <em>It Happen</em></h2>
            <p>Looking for a Frontend / React role with more ownership and growth. Remote preferred, open to Ahmedabad, Bengaluru, Hyderabad, Pune, Mumbai and Delhi.</p>
            <div className="actions">
              <a className="pill dark magnetic" href={`mailto:${PROFILE.email}`}>Get in touch <Arrow /></a>
              <a className="pill ghost" href={PROFILE.resume} download>Download resume ↓</a>
            </div>
          </Reveal>
        </section>
      </main>

      <footer className="wrap">
        <div className="foot-top">
          <div className="foot-nav">{NAV.map(([l, h]) => <a key={h} href={h}>{l}</a>)}</div>
          <div className="copy">© {new Date().getFullYear()} {PROFILE.name} · {PROFILE.location}</div>
        </div>
        <div className="wordmark" ref={wordmark}>{PROFILE.name}</div>
      </footer>
    </>
  );
}
