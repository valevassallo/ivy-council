import React from 'react'
import Logo from '../img/council.png'
import { Link } from '@reach/router'
import Dropdown from 'react-bootstrap/Dropdown'

function Navbar() {
  return(
    <nav className="navbar navbar-expand-md navbar-light bg-light sticky-top">
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
              <Dropdown>
                <Dropdown.Toggle className="nav-link dropdown-custom" id="dropdown-basic">
                  Ivy Fund
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="/browse-projects">Browse Projects</Dropdown.Item>
                  <Dropdown.Item href="/nominate-project">Nominate A Project</Dropdown.Item>
                  <Dropdown.Item href="/donations-tracker-ivy-fund">Donations Tracker</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li>
            <li className="nav-item">
              <Dropdown>
                <Dropdown.Toggle className="nav-link dropdown-custom" id="dropdown-basic">
                  Conferences
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="/about-ivy-conferences">About Ivy Conferences</Dropdown.Item>
                  <Dropdown.Item href="/policy-conference">Ivy Policy Conference</Dropdown.Item>
                  <Dropdown.Item href="/leadership-summit">Ivy Leadership Summit</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li>
            <li className="nav-item">
              <Dropdown>
                <Dropdown.Toggle className="nav-link dropdown-custom" id="dropdown-basic">
                  Our Impact
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="/history">History</Dropdown.Item>
                  <Dropdown.Item href="/today">Today</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/get-involved">Help us! Get involved!</Link>
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