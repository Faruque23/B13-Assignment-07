import '../styles/Banner.css';

const PlusIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="12" y1="5" x2="12" y2="19"></line>
    <line x1="5" y1="12" x2="19" y2="12"></line>
  </svg>
);

const Banner = ({ onAddFriend }) => {
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
          <div className="card-number">10</div>
          <div className="card-label">Total Friends</div>
        </div>
        <div className="summary-card">
          <div className="card-number">3</div>
          <div className="card-label">On Track</div>
        </div>
        <div className="summary-card">
          <div className="card-number">6</div>
          <div className="card-label">Need Attention</div>
        </div>
        <div className="summary-card">
          <div className="card-number">12</div>
          <div className="card-label">Interactions This Month</div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
