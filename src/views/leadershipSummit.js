import React from 'react'

import ILS from '../img/ils.png'

function LeadershipSummit() {
  return (
    <>
      <div className="container-fluid">
        <div className="row welcome text-center">
          <div className="col-12">
            <img src={ILS} alt="ILS" />
          </div>
          <div className="col-12">
            <h1 className="display-4">About ILS</h1>
          </div>
          <div className="col-12">
            <h5>ILS IS ONE OF TWO MAJOR ANNUAL IVY COUNCIL CONFERENCES</h5>
          </div>
          <div className="col-12">
            <p>The Ivy Leadership Summit (ILS) is an annual two-day conference hosted by the Ivy Council to bring together students from the eight Ivy League universities along with leaders from the business, government, academics, and non-profit sectors of society. The conference is usually held in the fall and its location is rotated each year through the campuses of the schools in the Ivy League.</p>
          </div>
          <div className="col-12">
            <h1 className="display-4">ILS History</h1>
          </div>
          <div className="col-12">
            <p>ILS was originally created to promote the exchange of ideas between students of the Ivy League and today’s leaders on subjects of public policy such as affirmative action and ethics in science and technology. The first ILS was held at Yale University in 2000 and had the topic of “Integrity and Ethics.” Eighty participants were selected from a pool of applicants throughout the Ivy League.</p>
          </div>
          <div className="col-12">
            <p>The main activities of the conference were keynote speakers, panels, and roundtable discussions. Since then, Ivy Council has held six conferences each with their own topics of discussion. Past speakers have included Steve Forbes, Chairman and CEO of Forbes magazine; Nasreen Berwari, Iraqi Minister of Municipalities and General Works; Jeffrey Sachs, special adviser to the UN’s Millennium Development; Theodore Roosevelt IV, Managing Director at Lehman Brothers and prominent environmentalist; and Dov Zakheim, US Undersecretary of Defense.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default LeadershipSummit;