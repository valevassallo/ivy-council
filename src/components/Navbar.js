import React from 'react'
import Logo from '../img/council.png'
import { Link } from '@reach/router'
import Dropdown from 'react-bootstrap/Dropdown'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'

function Navbar() {
  return(
    <nav className="navbar navbar-expand-md navbar-dark bg-dark sticky-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="/"><img className="logo" src={Logo} alt="logo" /></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about-us">About Us</Link>
            </li>
            <li className="nav-item">
              <Dropdown as={ButtonGroup}>
                <Link to="/projects">
                  <Button className="nav-link dropdown-custom">Ivy Fund</Button>
                </Link>
                <Dropdown.Toggle split className="nav-link dropdown-custom" id="dropdown-split-basic" />

                <Dropdown.Menu>
                  <Dropdown.Item href="/projects">Browse Projects</Dropdown.Item>
                  <Dropdown.Item href="/nominate-project">Nominate A Project</Dropdown.Item>
                  <Dropdown.Item href="/donations-tracker-ivy-fund">Donations Tracker</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about-ivy-conferences">Ivy Conferences</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/get-involved">Contact</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/faq">FAQ</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;