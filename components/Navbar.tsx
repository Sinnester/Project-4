import React from 'react';

const Navbar = ({ onPageChange }) => {
  const handleLinkClick = (event, page) => {
    event.preventDefault();
    onPageChange(page);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <a href="/" onClick={(event) => handleLinkClick(event, 'home')}>
          Little Bakery
        </a>
      </div>
      <hr />
      <ul className="nav-list">
        <li className="nav-item">
          <a href="/menu" onClick={(event) => handleLinkClick(event, 'menu')}>
            Menu
          </a>
        </li>
        <li className="nav-item">
          <a href="/about" onClick={(event) => handleLinkClick(event, 'about')}>
            About
          </a>
        </li>
        <li className="nav-item">
          <a
            href="/contact"
            onClick={(event) => handleLinkClick(event, 'contact')}
          >
            Contact
          </a>
        </li>
        <li className="nav-item">
          <a href="/order" onClick={(event) => handleLinkClick(event, 'order')}>
            Order Online
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
