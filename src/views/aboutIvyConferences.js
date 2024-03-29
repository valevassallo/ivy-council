import React from 'react'

import Navbar from '../components/Navbar'

import { Link } from "@reach/router";

import ILS from '../img/ils.png'
import IPC from '../img/ipc.png'

function DonationsTracker() {
  return (
    <>
      <Navbar />
      <div className="container-fluid">
        <div className="row welcome text-center">
          <div className="col-12">
            <h1 className="display-4">ABOUT IVY COUNCIL CONFERENCES</h1>
          </div>
          <div className="col-12">
            <p>The Ivy Leadership Summit (ILS) is an annual two-day conference hosted by the Ivy Council to bring together students from the eight Ivy League universities along with leaders from the business, government, academics, and non-profit sectors of society. The conference is usually held in the fall and its location is rotated each year through the campuses of the schools in the Ivy League.</p>
          </div>
          <div className="padding row text-center col-12">
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <Link to="/policy-conference">
                <img className="conferences-btn" src={IPC} alt="IPC" />
              </Link>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <Link to="/leadership-summit">
                <img className="conferences-btn" src={ILS} alt="ILS" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DonationsTracker;