import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import FriendDetailPage from './pages/FriendDetailPage';
import TimelinePage from './pages/TimelinePage';
import StatsPage from './pages/StatsPage';
import NotFoundPage from './pages/NotFoundPage';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/"            element={<HomePage />} />
          <Route path="/friend/:id"  element={<FriendDetailPage />} />
          <Route path="/timeline"    element={<TimelinePage />} />
          <Route path="/stats"       element={<StatsPage />} />
          <Route path="*"            element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
