import React from 'react';
import '../style.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="header-title">Little Bakery</h1>
        <p className="header-description">
          "Making life a little sweeter, one pastry at a time."
        </p>
      </div>
    </header>
  );
};

export default Header;
