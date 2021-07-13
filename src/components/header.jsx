import React from 'react';
import { Link } from 'gatsby';

export default function Header() {
  return (
    <div className="header">
      <div className="outer">
        <Link to="/">Zaige Project</Link>
        <div className="inner">
          <Link to="/dn42">DN42</Link>
          <a href="#">ClearNet</a>
          <a href="https://www.github.com/hotarunet">GitHub</a>
        </div>
      </div>
    </div>
  );
}
