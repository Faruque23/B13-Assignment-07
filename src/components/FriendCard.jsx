import { useNavigate } from 'react-router-dom';

const FriendCard = ({ friend }) => {
  const navigate = useNavigate();
  const statusClass = friend.status.replace(/\s+/g, '-');
  const statusText = friend.status
    .split(' ')
    .map((w) => w[0].toUpperCase() + w.slice(1))
    .join(' ');

  return (
    <article
      className="friend-card"
      onClick={() => navigate(`/friend/${friend.id}`)}
      style={{ cursor: 'pointer' }}
    >
      <div className="friend-card-avatar-wrap">
        <img className="friend-avatar" src={friend.picture} alt={friend.name} />
      </div>
      <div className="friend-card-body">
        <h3 className="friend-name">{friend.name}</h3>
        <p className="friend-last-contact">{friend.days_since_contact}d ago</p>
        <div className="friend-badges">
          <span className="friend-tag">{friend.tags[0]}</span>
          <span className={`friend-status ${statusClass}`}>{statusText}</span>
        </div>
      </div>
    </article>
  );
};

export default FriendCard;
