import React from 'react'
import TimelineComponent from '../components/Timeline'

function History() {
  return (
    <>
      <div className="container-fluid">
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
          <div className="col-12">
            <h5>Check us through the years - more to be coming soon!</h5>
          </div>
        </div>
      </div>
      <TimelineComponent />
    </>
  )
}

export default History;