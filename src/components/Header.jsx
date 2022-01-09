import React from 'react';
import { Link } from 'gatsby';

export default function Header() {
  return (
    <div className="header">
      <div className="header-main">
        <Link to="/">Zaige Project</Link>
        <div>
          <Link to="/dn42">DN42</Link>
          {/* eslint-disable jsx-a11y/anchor-is-valid  */}
          <a href="#">ClearNet</a>
          <a href="https://www.github.com/hotarunet">GitHub</a>
        </div>
      </div>
    </div>
  );
}
