import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light container">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand current-page">My Website</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="navbar-brand current-page" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/about" className="nav-link active current-page" aria-current="page" >About</Link>
              </li>
              <li className="nav-item">
                <Link to="/portofolio" className="nav-link active current-page">Portofolio</Link>
              </li>
              <li className="nav-item">
                <Link to="/blog" className="nav-link active current-page">Blog</Link>
              </li>
            </ul>
            
          </div>
        </div>
      </nav>

    </>
  )
}

export default Navbar