import { NAV_NOTES } from '../../data/notes';

export function NotesWidget() {
  return (
    <div className="notes-widget">
      <div className="notes-widget-header">
        <span className="notes-widget-folder" aria-hidden="true">
          🗂️
        </span>
        <span className="notes-widget-title">Notes</span>
      </div>
      <div className="notes-widget-body">
        {NAV_NOTES.map((note, i) => (
          <div className="notes-widget-item" key={note.title}>
            <p className="notes-widget-item-title">{note.title}</p>
            <p className="notes-widget-item-body">{note.body}</p>
            {i < NAV_NOTES.length - 1 && <div className="notes-widget-divider" />}
          </div>
        ))}
      </div>
    </div>
  );
}
