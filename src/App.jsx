import { useState } from 'react'
import Navbar from './components/Navbar'
import './App.css'

function App() {
  const [activePage, setActivePage] = useState('Home')

  return (
    <>
      <Navbar activePage={activePage} onNavClick={setActivePage} />
      <main>
        {/* Page content will go here */}
      </main>
    </>
  )
}

export default App
