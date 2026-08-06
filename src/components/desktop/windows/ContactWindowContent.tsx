import { CONTACT } from '../../../data/portfolio';

export function ContactWindowContent() {
  const initials = CONTACT.name
    .split(' ')
    .map((w) => w[0])
    .join('');

  return (
    <>
      <div className="contact-head">
        <div className="avatar">{initials}</div>
        <div>
          <h3>{CONTACT.name}</h3>
          <p>{CONTACT.role}</p>
        </div>
      </div>
      <div className="contact-msg">{CONTACT.msg}</div>
      <div className="contact-links">
        <a className="clink mail" href={`mailto:${CONTACT.email}`}>
          ✉️ Email
        </a>
        <a className="clink tel" href={`tel:${CONTACT.phone.replace(/\s+/g, '')}`}>
          📞 Call
        </a>
        <a className="clink gh" href={`https://github.com/${CONTACT.github}`} target="_blank" rel="noopener noreferrer">
          <img src="/icons/github.png" alt="" className="clink-icon" /> GitHub
        </a>
      </div>
    </>
  );
}
