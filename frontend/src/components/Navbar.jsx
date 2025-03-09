import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const handleProfileClick = () => {
    navigate('/profile');
  };

  const handleAddRecipeClick = () => {
    navigate('/add-recipe');
  };

  const handleAboutClick = () => {
    navigate('/about');
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-primary">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <Link className="navbar-brand fw-bold text-white" to="/">RECIPEDIA</Link>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <button className="btn btn-light btn-sm mx-1">
                  <Link className="nav-link text-dark p-0" to="/">Home</Link>
                </button>
              </li>
              
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dashboard
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <button 
                      className="dropdown-item" 
                      onClick={handleProfileClick}
                      style={{ border: 'none', background: 'none', width: '100%', textAlign: 'left' }}
                    >
                      Profile
                    </button>
                  </li>
                  <li>
                    <button 
                      className="dropdown-item" 
                      onClick={handleAddRecipeClick}
                      style={{ border: 'none', background: 'none', width: '100%', textAlign: 'left' }}
                    >
                      Add Recipe
                    </button>
                  </li>
                  <li><hr className="dropdown-divider" /></li>
                  <li>
                    <button 
                      className="dropdown-item" 
                      onClick={handleAboutClick}
                      style={{ border: 'none', background: 'none', width: '100%', textAlign: 'left' }}
                    >
                      About
                    </button>
                  </li>
                </ul>
              </li>
            </ul>
            <div className="d-flex">
              <button className="btn btn-outline-light btn-sm mx-1">
                <Link className="nav-link text-white p-0" to="/login">Login</Link>
              </button>
              <button className="btn btn-outline-light btn-sm mx-1">
                <Link className="nav-link text-white p-0" to="/register">Register</Link>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
