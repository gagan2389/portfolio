import type { ReactNode } from 'react';
import { useWindows } from '../../context/WindowsContext';

interface WindowProps {
  id: string;
  title: string;
  wide?: boolean;
  variant?: 'terminal' | 'resume';
  children: ReactNode;
}

export function Window({ id, title, wide, variant, children }: WindowProps) {
  const { getState, closeWindow, minimizeWindow, toggleMaximize, bringToFront } = useWindows();
  const state = getState(id);

  const classNames = ['win'];
  if (variant === 'terminal') classNames.push('win-terminal');
  if (variant === 'resume') classNames.push('win-resume');
  if (wide) classNames.push('win-wide');
  if (state.maximized) classNames.push('win-max');
  if (state.minimizing) classNames.push('win-minimizing');
  if (state.open) classNames.push('open');

  return (
    <div className={classNames.join(' ')} style={{ zIndex: state.zIndex || undefined }} onMouseDown={() => bringToFront(id)}>
      <div className="win-titlebar">
        <button
          type="button"
          className="tl-btn tl-close"
          aria-label="Close"
          onClick={(e) => {
            e.stopPropagation();
            closeWindow(id);
          }}
        />
        <button
          type="button"
          className="tl-btn tl-min"
          aria-label="Minimize"
          onClick={(e) => {
            e.stopPropagation();
            minimizeWindow(id);
          }}
        />
        <button
          type="button"
          className="tl-btn tl-zoom"
          aria-label="Zoom"
          onClick={(e) => {
            e.stopPropagation();
            toggleMaximize(id);
          }}
        />
        <div className="win-title">{title}</div>
      </div>
      <div className="win-body">{children}</div>
    </div>
  );
}
