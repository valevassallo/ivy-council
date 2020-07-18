import React from 'react'
import CarouselComponent from '../components/Carousel'
import Board from '../components/Board'

import executiveBoard from '../data/executiveBoard.json'
import executiveDirectors from '../data/executiveDirectors.json'

function Home() {
  return (
    <>
      <CarouselComponent />
      <div className="container-fluid">
        <div className="row welcome text-center">
          <div className="col-12">
            <h1 className="display-4">Who are we?</h1>
          </div>
          <div className="col-12">
            <p>The Ivy Council is a <a style={{color: "#222"}} href="https://en.wikipedia.org/wiki/501(c)(3)_organization">501(c)3</a> federal tax-exempt organization of student government leaders, student organization leaders, and students at large from the colleges and universities of the Ivy League. The Ivy Council was established in 1993 by members of the Ivy League student governments in order to facilitate effective communication between the student governments of their respective institutions and to provide a unified voice for the Ivy League student governments.</p>
          </div>
          <div className="col-12">
            <img src="src/img/ivybanners.png" alt="Ivy Banners" />
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row text-center padding">
          <div className="col-12">
            <h1 className="display-4">Our Mission</h1>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4">
            <i class="fa fa-handshake"></i>
            <h3>Collaboration among Ivy League schools</h3>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4">
            <i class="fa fa-thumbs-up"></i>
            <h3>Create a positive impact in our communities</h3>
          </div>
          <div className="col-sm-12 col-md-4">
            <i class="fa fa-users"></i>
            <h3>Develop professional skills through engagement</h3>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row welcome text-center">
          <div className="col-12">
            <h1 className="display-4">Meet the Ivy Council Executive Board</h1>
          </div>
          <div className="col-12">
            <p>The IVC Executive Board runs the day-to-day national operations of Ivy Council and are elected by members from all 8 Ivy League schools.</p>
          </div>
        </div>
        <Board members={executiveBoard.members} colMdSize="3" />
      </div>
      <div className="container-fluid">
        <div className="row welcome text-center">
          <div className="col-12">
            <h1 className="display-4">Meet the Ivy Conference Executive Directors</h1>
          </div>
          <div className="col-12">
            <p>The executive directors oversee their respective IVC conferences throughout the academic year.</p>
          </div>
        </div>
        <Board members={executiveDirectors.members} colMdSize="2" />
      </div>
    </>
  )
}

export default Home;