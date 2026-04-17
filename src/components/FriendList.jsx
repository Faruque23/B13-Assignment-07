import FriendCard from './FriendCard';
import '../styles/FriendList.css';

const FriendList = ({ friends }) => {
  return (
    <section className="friend-list-section">
      <div className="friend-list-header">
        <h2>Your Friends</h2>
        <p>Review the people you want to reconnect with and keep those relationships on track.</p>
      </div>
      <div className="friend-grid">
        {friends.map((friend) => (
          <FriendCard key={friend.id} friend={friend} />
        ))}
      </div>
    </section>
  );
};

export default FriendList;
