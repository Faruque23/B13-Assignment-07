import { NavLink } from 'react-router-dom';
import '../styles/Navbar.css';

const HomeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
    <polyline points="9 22 9 12 15 12 15 22"></polyline>
  </svg>
);

const TimelineIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="6" r="4"></circle>
    <path d="M12 10v8m-8-4h16"></path>
    <path d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20z" opacity="0.3"></path>
  </svg>
);

const StatsIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="18" y1="20" x2="18" y2="10"></line>
    <line x1="12" y1="20" x2="12" y2="4"></line>
    <line x1="6" y1="20" x2="6" y2="14"></line>
  </svg>
);

const navItems = [
  { to: '/',          label: 'Home',     icon: HomeIcon     },
  { to: '/timeline',  label: 'Timeline', icon: TimelineIcon },
  { to: '/stats',     label: 'Stats',    icon: StatsIcon    },
];

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <NavLink to="/">KeenKeeper</NavLink>
        </div>
        <ul className="nav-menu">
          {navItems.map(({ to, label, icon: Icon }) => (
            <li key={to} className="nav-item">
              <NavLink
                to={to}
                end={to === '/'}
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              >
                <span className="nav-icon"><Icon /></span>
                <span className="nav-text">{label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
