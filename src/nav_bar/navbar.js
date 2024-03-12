// navbar.js
import React from 'react';

const Navbar = ({ getTracks, setKeyword, keyword }) => {
  return (
    <>
      <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Streamify- music
          </a>
          <div className="collapse navbar-collapse d-flex justify-content center" id="navbarTogglerDemo02">
            <input value={keyword}
              onChange={(event) => setKeyword(event.target.value)}
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button onClick={getTracks} className="btn btn-outline-success">
              Search
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;