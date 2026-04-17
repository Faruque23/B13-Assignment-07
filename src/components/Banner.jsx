import '../styles/Banner.css';

const PlusIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="12" y1="5" x2="12" y2="19"></line>
    <line x1="5" y1="12" x2="19" y2="12"></line>
  </svg>
);

const Banner = ({ onAddFriend, friends = [] }) => {
  const total      = friends.length;
  const onTrack    = friends.filter((f) => f.status === 'on-track').length;
  const needAttn   = friends.filter((f) => f.status !== 'on-track').length;

  return (
    <section className="banner">
      <div className="banner-content">
        <h1 className="banner-title">Friends to keep close in your life</h1>
        <p className="banner-subtitle">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>
        <button className="add-friend-button" onClick={onAddFriend}>
          <span className="button-icon">
            <PlusIcon />
          </span>
          Add a Friend
        </button>
      </div>

      {/* Summary Cards */}
      <div className="summary-cards">
        <div className="summary-card">
          <div className="card-number">{total}</div>
          <div className="card-label">Total Friends</div>
        </div>
        <div className="summary-card">
          <div className="card-number">{onTrack}</div>
          <div className="card-label">On Track</div>
        </div>
        <div className="summary-card">
          <div className="card-number">{needAttn}</div>
          <div className="card-label">Need Attention</div>
        </div>
        <div className="summary-card">
          <div className="card-number">{total}</div>
          <div className="card-label">Total Connections</div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
