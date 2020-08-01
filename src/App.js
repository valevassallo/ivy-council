import React from 'react';
import { Router } from "@reach/router"

import Navbar from './components/Navbar'
import HomeIvyFund from './views/homeIvyFund'
import AboutUs from './views/aboutUs'
import Faq from './views/faq'
import GetInvolved from './views/getInvolved'
import BrowseProjects from './views/browseProjects'
import DonationsTracker from './views/donationsTracker'
import NominateProject from './views/nominateProject'
import AboutIvyConferences from './views/aboutIvyConferences'
import LeadershipSummit from './views/leadershipSummit'
import PolicyConference from './views/policyConference'
import History from './views/history'
import Today from './views/today'
import Project from './views/projectPage'

function App() {
  return (
    <>
      <Navbar />
      <Router>
        <HomeIvyFund path="/" />
        <AboutUs path="/about-us" />
        <Faq path="/faq" />
        <GetInvolved path="/get-involved" />
        <BrowseProjects path="/projects" />
        <DonationsTracker path="/donations-tracker-ivy-fund" />
        <NominateProject path="/nominate-project" />
        <AboutIvyConferences path="/about-ivy-conferences" />
        <LeadershipSummit path="/leadership-summit" />
        <PolicyConference path="/policy-conference" />
        <History path="/history" />
        <Today path="/today" />
        <Project path="/projects/:projectId" />
      </Router>
    </>
  );
}

export default App;
