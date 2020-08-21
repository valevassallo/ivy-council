import React from 'react'
import TimelineComponent from '../components/Timeline'
import Navbar from '../components/Navbar'

function HomeIvyFund() {
  return (
    <>
      <Navbar />
      <div className="container-fluid">
        <div style={{height: 460}}>
          <div className="home-cover"><div className="layer-on-top"></div></div>
          <div className="home-cover-text">
            <h1>Ivy Council</h1>
            <p>The Ivy Council is a 501(c)3 federal tax-exempt organization of student government leaders, student organization leaders, and students at large from the colleges and universities of the Ivy League. The Ivy Council was established in 1993 by members of the Ivy League student governments in order to facilitate effective communication between the student governments of their respective institutions and to provide a unified voice for the Ivy League student governments.</p>
          </div>
        </div>
        <div className="row welcome text-center">
          <div className="col-12">
            <h1 className="display-4">History of Ivy Council</h1>
          </div>
          <div className="col-12">
            <p>Founded in 1993 as a way to collaborate and exchange ideas on common student life issues at their respective school, student government leaders set the stage for the Ivy Council that exists today. In 1997, in response to the complexities of running a loose federation of organizations over seven states, a defining structure was created. The Ivy Council draws its membership from the Brown University Undergraduate Council of Students, Columbia University (the Columbia College Student Council, the Columbia Engineering Student Council, and the Columbia General Studies Student Council), the Cornell University Student Assembly, the Dartmouth College Student Assembly, the Harvard University Undergraduate Council, the University of Pennsylvania Undergraduate Assembly, the Princeton University Undergraduate Student Government, and the Yale College Council.</p>
          </div>
          <div className="col-12">
            <p>The Ivy Council is not a party to, nor is it in any way adjunct to, the Ivy Group Agreement of 1954. The Ivy Council is in no way adjunct to the council of college and university Presidents known as the Council of Ivy Group Presidents. The positions taken and statements made by the Ivy Council are only representative of the undergraduate students of the eight Ivy League schools. They are not in any way taken nor made on behalf of the Ivy League itself, nor its member institutions themselves as distinct corporate entities.</p>
          </div>
          <div className="col-12">
            <h1 className="display-4">Timeline of Ivy Council</h1>
          </div>
          <div className="col-12 timeline-description">
            <h5>Check us through the years - more to be coming soon!</h5>
          </div>
        </div>
        <TimelineComponent />
      </div>
    </>
  )
}

export default HomeIvyFund;