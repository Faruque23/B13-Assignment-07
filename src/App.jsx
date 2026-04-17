import { useState } from 'react'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import FriendList from './components/FriendList'
import Footer from './components/Footer'
import friends from '../friends.json'
import './App.css'

function App() {
  const [activePage, setActivePage] = useState('Home')

  const handleAddFriend = () => {
    alert('Add Friend button clicked!')
  }

  return (
    <>
      <Navbar activePage={activePage} onNavClick={setActivePage} />
      <main>
        {activePage === 'Home' && (
          <>
            <Banner onAddFriend={handleAddFriend} />
            <FriendList friends={friends} />
          </>
        )}
      </main>
      <Footer />
    </>
  )
}

export default App
