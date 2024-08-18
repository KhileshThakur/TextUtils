import React from 'react';
import { Link } from 'react-router-dom';
import '../css/all.css';

export default function Navbar(props) {
  return (
    <>
      <nav className="navbar nav navbar-expand-lg bg-body-tertiary " style={{color: props.mode==="dark"?"white":"Black"}}>
        <div className="container-fluid" style={{background: props.mode==="dark"?"#222242":"#b98de2", color: props.mode==="dark"?"white":"Black"}}>
          <Link className="navbar-brand brand" to="/" style={{color: props.mode==="dark"?"white":"Black"}}>TextUtils</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" style={{color: props.mode==="dark"?"white":"Black"}} to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" style={{color: props.mode==="dark"?"white":"Black"}} to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" style={{color: props.mode==="dark"?"white":"Black"}} to="/">Contact</Link>
              </li>

            </ul>
          </div>
          <div class="form-check form-switch">
            <input class="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckChecked" />
              <label class="form-check-label" htmlForor="flexSwitchCheckChecked">Enable Dark Mode</label>
          </div>
        </div>

      </nav>
    </>
  )
}
