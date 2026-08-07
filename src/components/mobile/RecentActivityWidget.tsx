import { Fragment } from 'react';
import { EXPERIENCE, PROJECTS } from '../../data/portfolio';
import { CodeBracketsIcon, CommitNodeIcon, DocumentIcon } from '../icons';

const HIGHLIGHTS = [
  {
    icon: CommitNodeIcon,
    title: `${EXPERIENCE[0].role} at ${EXPERIENCE[0].org}`,
    meta: 'Current role',
  },
  {
    icon: DocumentIcon,
    title: PROJECTS[0].name,
    meta: 'Latest project',
  },
  {
    icon: CodeBracketsIcon,
    title: 'Building with Claude Code',
    meta: 'AI tool in daily use',
  },
];

export function RecentActivityWidget() {
  return (
    <div className="activity-widget-wrap">
      <div className="activity-widget">
        <div className="activity-widget-title">Recent Activity</div>
        <div className="activity-widget-list">
          {HIGHLIGHTS.map((item, i) => {
            const Icon = item.icon;
            return (
              <Fragment key={item.title}>
                <div className="activity-row">
                  <span className="activity-icon">
                    <Icon color="#fff" size={15} />
                  </span>
                  <div className="activity-text">
                    <p className="activity-title">{item.title}</p>
                    <p className="activity-meta">{item.meta}</p>
                  </div>
                </div>
                {i < HIGHLIGHTS.length - 1 && <div className="activity-divider" />}
              </Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
}
