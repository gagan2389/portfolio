import { useEffect, useState } from 'react';

const DESKTOP_OPTS: Intl.DateTimeFormatOptions = {
  weekday: 'short',
  day: 'numeric',
  month: 'short',
  hour: '2-digit',
  minute: '2-digit',
};

export function useDesktopClock(): string {
  const [label, setLabel] = useState(() => format());

  useEffect(() => {
    const id = setInterval(() => setLabel(format()), 30_000);
    return () => clearInterval(id);
  }, []);

  return label;

  function format() {
    return new Date().toLocaleString('en-US', DESKTOP_OPTS).replace(',', '');
  }
}

export function useMobileClock(): string {
  const [label, setLabel] = useState(() => format());

  useEffect(() => {
    const id = setInterval(() => setLabel(format()), 30_000);
    return () => clearInterval(id);
  }, []);

  return label;

  function format() {
    const now = new Date();
    const hours = now.getHours() % 12 || 12;
    const minutes = now.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  }
}
