import React from 'react'

import Board from '../components/Board'
import Navbar from '../components/Navbar'

import IvyBanners from '../img/ivybanners.png'
import executiveBoard from '../data/executiveBoard.json'
import executiveDirectors from '../data/executiveDirectors.json'
import steeringBoard from '../data/steeringBoard.json'

function AboutUs() {

  return (
    <>
      <Navbar />
      <div className="container-fluid">
        {/* <div className="row welcome text-center">
          <div className="col-12">
            <h1 className="display-4">Meet the Ivy Council Executive Board</h1>
          </div>
          <div className="col-12">
            <p>The IVC Executive Board runs the day-to-day national operations of Ivy Council and are elected by members from all 8 Ivy League schools.</p>
          </div>
        </div>
        <Board members={executiveBoard.members} colMdSize="3" />
        <div className="row welcome text-center">
          <div className="col-12">
            <h1 className="display-4">Meet the Ivy Conference Executive Directors</h1>
          </div>
          <div className="col-12">
            <p>The executive directors oversee their respective IVC conferences throughout the academic year.</p>
          </div>
        </div>
        <Board members={executiveDirectors.members} colMdSize="2" />
        <div className="row welcome text-center">
          <div className="col-12">
            <h1 className="display-4">Meet the Ivy Council Steering Board</h1>
          </div>
          <div className="col-12">
            <p>The Steering Board are composed of head delegates that are elected by their local IVC chapter to represent their respective schools. Due to impending head delegate elections, more would be added in the weeks to come!</p>
          </div>
        </div>
        <Board members={steeringBoard.members} colMdSize="4" /> */}
      </div>
    </>
  )
}

export default AboutUs;