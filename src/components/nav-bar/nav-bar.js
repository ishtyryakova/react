import React from 'react';
import {NavLink} from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <NavLink to="/" exact className="nav-item nav-link" activeClassName="active">На Главную</NavLink>
          <NavLink to="/news" className="nav-item nav-link">Новости</NavLink>
          <NavLink to="/profile" className="nav-item nav-link">Профиль</NavLink>
        </div>
      </div>
    </nav>
    )
};

export default NavBar;