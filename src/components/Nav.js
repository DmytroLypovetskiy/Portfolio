import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {
  render() {
    const { path } = this.props;

    return (
      <nav>
        <ul className="nav justify-content-center">
          <li>
            <Link to="/" className={`nav-link ${path === '/' ? 'active' : ''}`}>
              <i className="material-icons d-md-none">clear_all</i>
              <span className="d-none d-md-block">All</span>
            </Link>
          </li>
          <li>
            <Link to="/contacts" className={`nav-link ${path === '/contacts' ? 'active' : ''}`}>
              <i className="material-icons d-md-none">contact_mail</i>
              <span className="d-none d-md-block">Contacts</span>
            </Link>
          </li>
          <li>
            <Link to="/summary" className={`nav-link ${path === '/summary' ? 'active' : ''}`}>
              <i className="material-icons d-md-none">account_circle</i>
              <span className="d-none d-md-block">Summary</span>
            </Link>
          </li>
          <li>
            <Link to="/skills" className={`nav-link ${path === '/skills' ? 'active' : ''}`}>
              <i className="material-icons d-md-none">military_tech</i>
              <span className="d-none d-md-block">Skills</span>
            </Link>
          </li>
          <li>
            <Link to="/experience" className={`nav-link ${path === '/experience' ? 'active' : ''}`}>
              <i className="material-icons d-md-none">business</i>
              <span className="d-none d-md-block">Experience</span>
            </Link>
          </li>
          <li>
            <Link to="/education" className={`nav-link ${path === '/education' ? 'active' : ''}`}>
              <i className="material-icons d-md-none">school</i>
              <span className="d-none d-md-block">Education</span>
            </Link>
          </li>
          <li>
            <Link to="/languages" className={`nav-link ${path === '/languages' ? 'active' : ''}`}>
              <i className="material-icons d-md-none">g_translate</i>
              <span className="d-none d-md-block">Languages</span>
            </Link>
          </li>
        </ul>
      </nav>
    )
  }
}

export default Nav;