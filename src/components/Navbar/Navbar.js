import React from "react";
import { Link, NavLink} from 'react-router-dom';

const Navbar = () =>(
  <nav className="navbar-inverse">
      <div className="container-fluid">
      <div className="navbar-header">
          <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>                        
          </button>
      </div>
      <div className="collapse navbar-collapse" id="myNavbar">
          <ul className="nav navbar-nav">
          <li><NavLink to="/" activeClassName="isActive" exact={true}>Dashboard</NavLink></li>
          <li><NavLink to="/create" activeClassName="isActive">Create Expense</NavLink></li>
          <li><NavLink to="/help" activeClassName="isActive">Help</NavLink></li> 
          </ul>
          <ul className="nav navbar-nav navbar-right">
              <li><Link to="/register"><span className="glyphicon glyphicon-user"></span> Sign Up</Link></li>
              <li><Link to="/login"><span className="glyphicon glyphicon-log-in"></span> Login</Link></li>
          </ul>
      </div>
      </div>
  </nav>
);

export default Navbar;
