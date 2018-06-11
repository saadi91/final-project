import React from "react";
import Page from "./Page";
import Result from "./Result"
import Pages from "../routers/Pages"

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import {Navbar, Nav, NavItem} from 'react-bootstrap';
import "../pages-css/NavBar.css";

const Default = Pages[0].component;

const NavBar = () => {
return (
    <Router>
    <div>
    <Navbar collapseOnSelect>
    <Navbar.Header>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>

      <Nav>
        {Pages.map(page => (
          <NavItem componentClass="span" key={page.to}>
            <Link to={page.to}>{page.title}</Link>
          </NavItem>
        ))}
      </Nav>

    </Navbar.Collapse>
  </Navbar>

<Route exact path="/" component={Default} />


{Pages.map(page => (
<Route key={page.to} path={page.to} component={page.component} />

))}
  
      </div>
          </Router>
    )
}


export default NavBar;