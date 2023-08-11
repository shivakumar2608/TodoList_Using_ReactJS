import React from 'react'
import PropTypes from 'prop-types'
import {Link} from "react-router-dom";

const Header = (props) => {
  let base_url = "/";
  let aboutlink = "/about";
  return (
    <>
      <nav data-bs-theme="dark" className="navbar navbar-expand-lg p-3 bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to={base_url} >{props.title}</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to={base_url}  >Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to={aboutlink}  >About us</Link>
              </li>
            </ul>
            {props.allowUser ?
              <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Search</button>
              </form> : ""
            }
          </div>
        </div>
      </nav>
    </>

  );
}

Header.propTypes = {
  title: PropTypes.string,
}


export default Header;