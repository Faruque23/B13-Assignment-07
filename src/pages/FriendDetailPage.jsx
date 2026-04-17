import { useParams, useNavigate } from 'react-router-dom';
import { useTimeline } from '../context/TimelineContext';
import { useToast } from '../context/ToastContext';
import friendsData from '../../friends.json';
import '../styles/FriendDetail.css';

const CallIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
);
const TextIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
);
const VideoIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/></svg>
);
const SnoozeIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
);
const ArchiveIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="21 8 21 21 3 21 3 8"/><rect x="1" y="3" width="22" height="5"/><line x1="10" y1="12" x2="14" y2="12"/></svg>
);
const DeleteIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H6L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/><path d="M9 6V4h6v2"/></svg>
);

const FriendDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addEntry } = useTimeline();
  const { addToast } = useToast();

  const friend = friendsData.find((f) => f.id === parseInt(id));

  if (!friend) {
    return (
      <div className="fd-not-found">
        <h2>Friend not found.</h2>
        <button onClick={() => navigate('/')}>← Back to Home</button>
      </div>
    );
  }

  const handleCheckIn = (type) => {
    addEntry(type, friend.name);
    const label = type.charAt(0).toUpperCase() + type.slice(1);
    addToast(`${label} with ${friend.name} logged!`, 'success');
  };

  const statusClass = friend.status.replace(/\s+/g, '-');
  const statusText = friend.status.split(' ').map(w => w[0].toUpperCase() + w.slice(1)).join(' ');

  return (
    <div className="fd-page">
      <button className="fd-back" onClick={() => navigate(-1)}>← Back</button>
      <div className="fd-layout">

        {/* LEFT COLUMN */}
        <div className="fd-left">
          <div className="fd-info-card">
            <img className="fd-avatar" src={friend.picture} alt={friend.name} />
            <h2 className="fd-name">{friend.name}</h2>
            <span className={`fd-status ${statusClass}`}>{statusText}</span>
            <div className="fd-tags">
              {friend.tags.map((tag) => (
                <span key={tag} className="fd-tag">{tag}</span>
              ))}
            </div>
            <p className="fd-bio">{friend.bio}</p>
            <p className="fd-email">{friend.email}</p>
          </div>
          <div className="fd-actions">
            <button className="fd-btn fd-btn-snooze"><SnoozeIcon /> Snooze 2 Weeks</button>
            <button className="fd-btn fd-btn-archive"><ArchiveIcon /> Archive</button>
            <button className="fd-btn fd-btn-delete"><DeleteIcon /> Delete</button>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="fd-right">

          {/* Stats Cards */}
          <div className="fd-stats-row">
            <div className="fd-stat-card">
              <div className="fd-stat-value">{friend.days_since_contact}</div>
              <div className="fd-stat-label">Days Since Contact</div>
            </div>
            <div className="fd-stat-card">
              <div className="fd-stat-value">{friend.goal}</div>
              <div className="fd-stat-label">Goal (days)</div>
            </div>
            <div className="fd-stat-card">
              <div className="fd-stat-value">{friend.next_due_date}</div>
              <div className="fd-stat-label">Next Due Date</div>
            </div>
          </div>

          {/* Relationship Goal */}
          <div className="fd-card">
            <div className="fd-card-header">
              <h3>Relationship Goal</h3>
              <button className="fd-edit-btn">Edit</button>
            </div>
            <p>Contact <strong>{friend.name}</strong> at least every <strong>{friend.goal} days</strong>.</p>
          </div>

          {/* Quick Check-In */}
          <div className="fd-card">
            <h3>Quick Check-In</h3>
            <p className="fd-checkin-sub">Log an interaction to reset the contact timer.</p>
            <div className="fd-checkin-btns">
              <button className="fd-checkin-btn fd-checkin-call" onClick={() => handleCheckIn('call')}>
                <CallIcon /> Call
              </button>
              <button className="fd-checkin-btn fd-checkin-text" onClick={() => handleCheckIn('text')}>
                <TextIcon /> Text
              </button>
              <button className="fd-checkin-btn fd-checkin-video" onClick={() => handleCheckIn('video')}>
                <VideoIcon /> Video
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default FriendDetailPage;
