import { CONTACT } from '../../../data/portfolio';

export function ContactMobileContent() {
  const initials = CONTACT.name
    .split(' ')
    .map((w) => w[0])
    .join('');

  return (
    <div className="m-card">
      <div className="contact-head">
        <div className="avatar">{initials}</div>
        <div>
          <h3 style={{ margin: '0 0 2px', fontSize: 17 }}>{CONTACT.name}</h3>
          <p style={{ margin: 0, color: 'var(--text-soft)', fontSize: 12.5 }}>{CONTACT.role}</p>
        </div>
      </div>
      <div style={{ fontSize: 14, marginBottom: 14 }}>{CONTACT.msg}</div>
      <div className="contact-links m-contact-links">
        <a className="clink mail" href={`mailto:${CONTACT.email}`}>
          ✉️ {CONTACT.email}
        </a>
        <a className="clink tel" href={`tel:${CONTACT.phone.replace(/\s+/g, '')}`}>
          📞 {CONTACT.phone}
        </a>
        <a className="clink gh" href={`https://github.com/${CONTACT.github}`} target="_blank" rel="noopener noreferrer">
          <img src="/icons/github.png" alt="" className="clink-icon" /> github.com/{CONTACT.github}
        </a>
      </div>
    </div>
  );
}
