// src/components/Header.js
import React from 'react';
import { Link } from 'gatsby';

const Header = () => {
  return (
    <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px' }}>
      <Link to="/">
        <img src="/logo.jpg" alt="Logo" style={{ height: '40px' }} />
      </Link>
      <nav>
        <ul style={{ listStyle: 'none', display: 'flex', gap: '16px', margin: 0 }}>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/persian music">persian music</Link>
          </li>
    
          <li>
            <Link to="/cantact">cantact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
