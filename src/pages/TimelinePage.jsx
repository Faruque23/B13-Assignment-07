import { useState } from 'react';
import { useTimeline } from '../context/TimelineContext';
import '../styles/TimelinePage.css';

const CallIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
);
const TextIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
);
const VideoIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/></svg>
);

const typeIcon = { call: <CallIcon />, text: <TextIcon />, video: <VideoIcon /> };
const typeLabel = { call: 'Call', text: 'Text', video: 'Video' };

const TimelinePage = () => {
  const { entries } = useTimeline();
  const [filter, setFilter] = useState('all');

  const filtered = filter === 'all' ? entries : entries.filter((e) => e.type === filter);

  const formatDate = (iso) =>
    new Date(iso).toLocaleString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });

  return (
    <div className="tl-page">
      <div className="tl-header">
        <h2>Timeline</h2>
        <div className="tl-filters">
          {['all', 'call', 'text', 'video'].map((f) => (
            <button
              key={f}
              className={`tl-filter-btn ${filter === f ? 'active' : ''}`}
              onClick={() => setFilter(f)}
            >
              {f === 'all' ? 'All' : typeLabel[f]}
            </button>
          ))}
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="tl-empty">
          <p>No interactions yet. Go to a friend&apos;s page and log a check-in!</p>
        </div>
      ) : (
        <ul className="tl-list">
          {filtered.map((entry) => (
            <li key={entry.id} className={`tl-entry tl-entry-${entry.type}`}>
              <div className={`tl-icon tl-icon-${entry.type}`}>{typeIcon[entry.type]}</div>
              <div className="tl-body">
                <p className="tl-title">{entry.title}</p>
                <p className="tl-date">{formatDate(entry.date)}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TimelinePage;
