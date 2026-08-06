export type AppId = 'projects' | 'resume' | 'skills' | 'contact' | 'experience' | 'github' | 'settings';

export interface AppConfig {
  id: AppId;
  label: string;
  dock: boolean;
}

export const APPS: AppConfig[] = [
  { id: 'projects', label: 'Projects', dock: true },
  { id: 'resume', label: 'Resume', dock: true },
  { id: 'skills', label: 'Skills', dock: true },
  { id: 'contact', label: 'Contact', dock: true },
  { id: 'experience', label: 'Experience', dock: false },
  { id: 'github', label: 'GitHub', dock: false },
  { id: 'settings', label: 'Settings', dock: false },
];
