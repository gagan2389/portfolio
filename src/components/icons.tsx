interface IconProps {
  color?: string;
  size?: number;
}

export function GearIcon({ color = 'currentColor', size = 15 }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 11-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 11-4 0v-.09a1.65 1.65 0 00-1.08-1.51 1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 11-2.83-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 110-4h.09a1.65 1.65 0 001.51-1.08 1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 112.83-2.83l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 114 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 112.83 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 110 4h-.09a1.65 1.65 0 00-1.51 1z" />
    </svg>
  );
}

export function WifiIcon({ color = 'currentColor', size = 15 }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke={color} strokeWidth="2">
      <path d="M2 8.5a16 16 0 0 1 20 0M5 12a11 11 0 0 1 14 0M8.5 15.5a6 6 0 0 1 7 0" />
      <circle cx="12" cy="19" r="1" fill={color} stroke="none" />
    </svg>
  );
}

export function SearchIcon({ color = 'currentColor', size = 14 }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke={color} strokeWidth="2">
      <circle cx="11" cy="11" r="7" />
      <path d="M21 21l-4.3-4.3" />
    </svg>
  );
}

export function BatteryIcon({ color = 'currentColor' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width="20" height="14" fill="none" stroke={color} strokeWidth="1.6">
      <rect x="1" y="3" width="19" height="12" rx="2" />
      <rect x="22" y="7" width="1.6" height="4" fill={color} stroke="none" />
      <rect x="3" y="5" width="13" height="8" rx="1" fill={color} stroke="none" opacity=".85" />
    </svg>
  );
}

export function ResumeDocIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none">
      <rect x="5" y="2" width="14" height="20" rx="2" fill="#fff" />
      <path d="M8 7h8M8 11h8M8 15h5" stroke="#2f7de0" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

export function TerminalArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="#7ee787" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 6l6 6-6 6" />
      <path d="M12 18h8" />
    </svg>
  );
}

export function PhotosIcon() {
  return (
    <svg viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="4" fill="#fff" />
    </svg>
  );
}

export function ContactsIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="#6b4f21">
      <circle cx="12" cy="9" r="4" />
      <path d="M4 20c1.5-4 5-6 8-6s6.5 2 8 6" stroke="#6b4f21" strokeWidth="1.6" fill="none" strokeLinecap="round" />
    </svg>
  );
}

export function TrashIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="#8b8b90" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 7h16" />
      <path d="M9 7V4h6v3" />
      <path d="M6 7l1 13h10l1-13" />
      <path d="M10 11v6M14 11v6" />
    </svg>
  );
}


export function ProjectFolderIcon() {
  return (
    <svg viewBox="0 0 24 24">
      <path d="M3 7h6l2 2h10v9a1 1 0 01-1 1H4a1 1 0 01-1-1V7z" fill="#fff" />
    </svg>
  );
}

export function SettingsGearIcon({ color = 'currentColor', size = 24 }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 11-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 11-4 0v-.09a1.65 1.65 0 00-1.08-1.51 1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 11-2.83-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 110-4h.09a1.65 1.65 0 001.51-1.08 1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 112.83-2.83l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 114 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 112.83 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 110 4h-.09a1.65 1.65 0 00-1.51 1z" />
    </svg>
  );
}

export function BackChevronIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 18l-6-6 6-6" />
    </svg>
  );
}
