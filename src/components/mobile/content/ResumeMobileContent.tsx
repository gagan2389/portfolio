const RESUME_PATH = '/Gagan_Gupta_Resume.pdf';
const RESUME_EMBED_PATH = `${RESUME_PATH}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`;

export function ResumeMobileContent() {
  return (
    <>
      <div className="m-resume-actions">
        <a className="clink mail" href={RESUME_PATH} download>
          ⬇ Download
        </a>
        <a className="clink gh" href={RESUME_PATH} target="_blank" rel="noopener noreferrer">
          Open ↗
        </a>
      </div>
      <iframe className="m-resume-frame" src={RESUME_EMBED_PATH} title="Gagan Gupta — Resume" />
    </>
  );
}
