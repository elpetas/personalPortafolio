import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../css/navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronDown, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [showProjects, setShowProjects] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);
  const navigate = useNavigate();

  const toggleNavbar = () => {
    setShowNavbar(!showNavbar);
  };
  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  const toggleProjects = () => {
    setShowProjects(!showProjects);
  };

  const navigateTo = (path) => {
    navigate(path);
    setShowProjects(false);
  };

  return (
    <div className="navbarContainer">
      <FontAwesomeIcon icon={faBars} className="menu-icon" onClick={toggleMobileMenu} />
      {showMobileMenu && (
        <div className="mobile-sidebar">
          <FontAwesomeIcon icon={faTimes} className="close-icon" onClick={toggleMobileMenu} />
          <div className="mobile-link">
            <Link to="/" onClick={toggleMobileMenu}>
              Home
            </Link>
          </div>
          <div className="mobile-link">
            <Link to="/about" onClick={toggleMobileMenu}>
              About
            </Link>
          </div>
          <div className="mobile-link">
            <Link to="/contact" onClick={toggleMobileMenu}>
              Contact
            </Link>
          </div>
          <div className="mobile-link">
            <Link to="/github" onClick={toggleMobileMenu}>
              Projects
            </Link>
          </div>
          <div className="mobile-link">
            <span className="mobile-subdivision-header" onClick={toggleProjects}>
              Experience{' '}
              {showProjects ? (
                <FontAwesomeIcon icon={faChevronDown} />
              ) : (
                <FontAwesomeIcon icon={faChevronRight} />
              )}
            </span>
            {showProjects && (
              <div className="mobile-subdivision-links">
                <div className="mobile-link">
                  <Link to="/happygifter" onClick={() => navigateTo('/happygifter')}>
                    HappyGifter
                  </Link>
                </div>
                <div className="mobile-link">
                  <Link to="/allkka" onClick={() => navigateTo('/allkka')}>
                    Allkka
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
      <div className={`navbar ${showNavbar ? 'show-navbar' : ''}`}>
        <div className="nav-link">
          <Link to="/">Home</Link>
        </div>
        <div className="nav-link">
          <Link to="/about">About</Link>
        </div>
        <div className="nav-link">
          <Link to="/contact">Contact</Link>
        </div>
        <div className="nav-link">
          <Link to="/github">Projects</Link>
        </div>
        <div className="nav-link">
          <span className="subdivision-header" onClick={toggleProjects}>
            Experience{' '}
            {showProjects ? (
              <FontAwesomeIcon icon={faChevronDown} />
            ) : (
              <FontAwesomeIcon icon={faChevronRight} />
            )}
          </span>
          {showProjects && (
            <div className="subdivision-links">
              <div className="nav-link">
                <Link to="/happygifter" onClick={() => navigateTo('/happygifter')}>
                  HappyGifter
                </Link>
              </div>
              <div className="nav-link">
                <Link to="/allkka" onClick={() => navigateTo('/allkka')}>
                  Allkka
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;