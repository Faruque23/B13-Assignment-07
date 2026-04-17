import { useState, useEffect } from 'react';
import Banner from '../components/Banner';
import FriendList from '../components/FriendList';
import friendsData from '../../friends.json';
import '../styles/Loader.css';

const HomePage = () => {
  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFriends(friendsData);
      setLoading(false);
    }, 900);
    return () => clearTimeout(timer);
  }, []);

  const handleAddFriend = () => alert('Add Friend button clicked!');

  return (
    <>
      <Banner onAddFriend={handleAddFriend} friends={friends} />
      {loading ? (
        <div className="loader-wrap">
          <div className="loader-spinner" />
          <p className="loader-text">Loading your friends…</p>
        </div>
      ) : (
        <FriendList friends={friends} />
      )}
    </>
  );
};

export default HomePage;
