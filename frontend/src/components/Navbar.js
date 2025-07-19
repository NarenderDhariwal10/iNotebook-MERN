import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate("/login");
  };

  const isLoggedIn = !!localStorage.getItem('token');

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm sticky-top">
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold fs-4" to="/">
          <i className="fas fa-book-open text-warning me-2"></i>iNotebook
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === "/" ? "active text-warning" : ""}`} to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === "/about" ? "active text-warning" : ""}`} to="/about">About</Link>
            </li>
          </ul>

          {isLoggedIn ? (
            <div className="d-flex align-items-center">
              <span className="text-light me-3 d-none d-md-inline">
                <i className="fas fa-user-circle me-1"></i> Welcome!
              </span>
              <button className="btn btn-outline-warning" onClick={handleLogout}>
                Logout
              </button>
            </div>
          ) : (
            <div className="d-flex">
              <Link className="btn btn-outline-light me-2" to="/login">Login</Link>
              <Link className="btn btn-warning" to="/signup">Signup</Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
