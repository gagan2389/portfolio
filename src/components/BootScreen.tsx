import { useEffect, useState } from 'react';

const FILL_MS = 2200;
const HOLD_MS = 300;
const FADE_MS = 500;

export function BootScreen({ onDone }: { onDone: () => void }) {
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) {
      onDone();
      return;
    }
    const fadeTimer = setTimeout(() => setFading(true), FILL_MS + HOLD_MS);
    const doneTimer = setTimeout(onDone, FILL_MS + HOLD_MS + FADE_MS);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(doneTimer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={`boot-screen${fading ? ' fade-out' : ''}`}>
      <span className="boot-logo" aria-hidden="true">
        &#63743;
      </span>
      <div className="boot-bar-track">
        <div className="boot-bar-fill" style={{ animationDuration: `${FILL_MS}ms` }} />
      </div>
    </div>
  );
}
