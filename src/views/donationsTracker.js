import React from 'react'
import Table from "react-bootstrap/Table";

import People from '../img/people.png'
import World from '../img/world.png'

function DonationsTracker() {
  return (
    <>
      <div className="container-fluid padding">
        <div className="row">
          <div className="col-md-12 col-md-offset-2">
            <h1 className="display-4">Donations Tracker</h1>
          </div>
        </div>
        <div className="row">
          <h5 className="col text-center">Total Value of Donations</h5>
          <h5 className="col text-center">We've Reached</h5>
        </div>
        <div className="row">
          <h1 className="col text-center display-4">$100000000</h1>
          <h1 className="col text-center display-4">1234567890</h1>
        </div>
        <div className="row">
          <h5 className="col text-center"></h5> 
          <div className="col text-center">
            <img src={People} alt="People" />
          </div>
        </div>
        <div className="row">
          <h5 className="col text-center"></h5>
          <h5 className="col text-center">in N countries</h5>
        </div>
        <h3 className="col text-left">Our Numbers</h3>
        <div className="row">
          <div className="col text-left">
            <Table striped bordered>
              <tbody>
                <tr>
                  <td>Donors</td>
                  <td>10</td>
                </tr>
                <tr>
                  <td>Institutions</td>
                  <td>7</td>
                </tr>
                <tr>
                  <td>Amount of Donations</td>
                  <td>12</td>
                </tr>
                <tr>
                  <td>Most Funded Project</td>
                  <td>The Best Project</td>
                </tr>
              </tbody>
            </Table>
          </div>
          <div className="col text-center">
            <img src={World} alt="World" />
          </div>
        </div>
      </div>
    </>
  );
}

export default DonationsTracker;