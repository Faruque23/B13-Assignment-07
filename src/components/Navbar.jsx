import { useState } from 'react';
import '../styles/Navbar.css';

// Simple icon components
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

const Navbar = ({ activePage = 'Home', onNavClick }) => {
  const navItems = [
    { id: 'home', label: 'Home', icon: HomeIcon },
    { id: 'timeline', label: 'Timeline', icon: TimelineIcon },
    { id: 'stats', label: 'Stats', icon: StatsIcon },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <a href="#home">KeenKeeper</a>
        </div>

        {/* Navigation Links */}
        <ul className="nav-menu">
          {navItems.map((item) => {
            const IconComponent = item.icon;
            const isActive = activePage.toLowerCase() === item.label.toLowerCase();
            
            return (
              <li key={item.id} className="nav-item">
                <a
                  href={`#${item.id}`}
                  className={`nav-link ${isActive ? 'active' : ''}`}
                  onClick={() => onNavClick && onNavClick(item.label)}
                >
                  <span className="nav-icon">
                    <IconComponent />
                  </span>
                  <span className="nav-text">{item.label}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
