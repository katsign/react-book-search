import React from 'react';

function Header() {
  return (
    <>
      <nav className="navbar navbar-light justify-content-between">
        <a className="navbar-brand" href="/">
          Search
        </a>
        <a className="navbar-brand" href="/saved">
          Saved Books
        </a>
      </nav>
      <div className="text-center">
        <hr />
        <h2>Google Books Search 📚</h2>
      </div>
    </>
  );
}

export default Header;
