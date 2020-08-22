import React from 'react'

import { Link } from '@reach/router'

function Footer() {
  return(
    <footer>
        <div style={{width: "100%"}} className="row text-center">
          <div className="col-md-6">
            <span style={{fontSize: 18, fontWeight: "bold"}}>Ivy Fund</span>
            <Link to="/projects">
              <p className="footer-link">Our Projects</p>
            </Link>
            <Link to="/nominate-project">
              <p className="footer-link">Nominate A Project</p>
            </Link>
            <Link to="/donations-tracker-ivy-fund">
              <p className="footer-link">Donations tracker</p>
            </Link>
          </div>
          <div className="col-md-6">
            <span style={{fontSize: 18, fontWeight: "bold"}}>Ivy Conferences</span>
            <Link to="/about-ivy-conferences">
              <p className="footer-link">More</p>
            </Link>
          </div>
          <div className="col-12">
            <hr className="light-100" />
            <h5>&copy; Ivy Council 2020</h5>
          </div>
        </div>
    </footer>
  )
}

export default Footer;