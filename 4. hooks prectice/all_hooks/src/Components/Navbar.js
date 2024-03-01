import React from 'react';
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" href="#">Legend</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 mb-lg-0 mx-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link active" aria-current="page">useEffect</Link>
              </li>
              <li className="nav-item">
                <Link to="/useReducer" className="nav-link">useReducer</Link>
              </li>
              <li className="nav-item">
                <Link to="/useRef" className="nav-link">useRef</Link>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle"  role="button" data-bs-toggle="dropdown" aria-expanded="false">
                
                  Other task
                </Link>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" >sesion and locak</Link></li>
                  <li><Link className="dropdown-item" >redux</Link></li>
                  <li><Link className="dropdown-item" >Something else here</Link></li>
                </ul>
              </li>
             
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
