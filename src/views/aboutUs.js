import React from 'react'

import Board from '../components/Board'
import Navbar from '../components/Navbar'

import executiveBoard from '../data/executiveBoard.json'

function AboutUs() {

  return (
    <>
      <Navbar />
      <div className="container-fluid">
        <div style={{margin: "32px 0px"}} className="text-center">
          <hr className="light"/>
          <h2 style={{margin: "24px 0px"}}>EXECUTIVE BOARD</h2>
          <hr className="light"/>
        </div>
        <Board members={executiveBoard.members} />
        {/* <div className="row welcome text-center">
          <div className="col-12">
            <h1 className="display-4">Meet the Ivy Council Executive Board</h1>
          </div>
          <div className="col-12">
            <p>The IVC Executive Board runs the day-to-day national operations of Ivy Council and are elected by members from all 8 Ivy League schools.</p>
          </div>
        </div> */}
      </div>
    </>
  )
}

export default AboutUs;