import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            {props.title}
          </a>
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
                <Link className="nav-link active" aria-current="page" to="/Home">
                  {props.homeText}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/About">
                  {props.aboutText}
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" aria-disabled="true" href="/">
                  Disabled
                </a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
            <div class={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
              <input
                onClick={()=>{props.toogleMode(null)}}
                class="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
              />
              <label class="form-check-label" htmlFor="flexSwitchCheckDefault">
                {props.prompt}
              </label>
              </div>
              <div className="d-flex">
                <div className="bg-primary rounded mx-2" onClick={()=>{props.toogleMode('primary')}} style={{height : '30px', width : '30px', cursor: 'pointer'}}></div>
                <div className="bg-danger rounded mx-2" onClick={()=>{props.toogleMode('danger')}} style={{height : '30px', width : '30px', cursor: 'pointer'}}></div>
                <div className="bg-success rounded mx-2" onClick={()=>{props.toogleMode('success')}} style={{height : '30px', width : '30px', cursor: 'pointer'}}></div>
                <div className="bg-warning rounded mx-2" onClick={()=>{props.toogleMode('warning')}} style={{height : '30px', width : '30px', cursor: 'pointer'}}></div>
              </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

Navbar.propTypes = {
  title: PropTypes.string,
  aboutText: PropTypes.string,
  homeText: PropTypes.string,
};
