const FriendCard = ({ friend }) => {
  const statusClass = friend.status.replace(/\s+/g, '-');
  const statusText = friend.status
    .split('-')
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(' ');

  return (
    <article className="friend-card">
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
