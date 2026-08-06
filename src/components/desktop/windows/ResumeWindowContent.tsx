import { useEffect, useState } from 'react';
import { useWindows } from '../../../context/WindowsContext';

const RESUME_PATH = '/Gagan_Gupta_Resume.pdf';
const RESUME_EMBED_PATH = `${RESUME_PATH}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`;

export function ResumeWindowContent({ id }: { id: string }) {
  const { getState } = useWindows();
  const state = getState(id);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!state.open) return;
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.openToken]);

  if (loading) {
    return (
      <div className="resume-loading">
        <div className="spinner" />
        <p>Opening Resume…</p>
      </div>
    );
  }

  return (
    <>
      <div className="resume-toolbar">
        <a className="dl" href={RESUME_PATH} download>
          ⬇ Download PDF
        </a>
        <a className="nt" href={RESUME_PATH} target="_blank" rel="noopener noreferrer">
          Open in New Tab ↗
        </a>
      </div>
      <iframe className="resume-frame" src={RESUME_EMBED_PATH} title="Gagan Gupta — Resume" />
    </>
  );
}
