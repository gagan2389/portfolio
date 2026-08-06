export interface NavNote {
  title: string;
  body: string;
}

export const NAV_NOTES: NavNote[] = [
  {
    title: 'Open a project',
    body: 'Double-click any folder on the desktop to read its case study.',
  },
  {
    title: 'Menu bar shortcuts',
    body: 'Projects, Contact, and Resume at the top jump straight to that window.',
  },
  {
    title: 'The Dock',
    body: 'Finder and GitHub, then Resume, Skills, Contact, and Settings — hover for labels.',
  },
  {
    title: 'Change the wallpaper',
    body: 'Click the gear icon in the menu bar or Dock to pick a new background.',
  },
  {
    title: 'Closing a window',
    body: 'Use the red, yellow, and green dots — close, minimize, or zoom, just like macOS.',
  },
];
