import React from 'react';
import { Router } from "@reach/router"

import Navbar from './components/Navbar'
import Home from './views/home'
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

function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Home path="/" />
        <Faq path="/faq" />
        <GetInvolved path="/get-involved" />
        <BrowseProjects path="/browse-projects" />
        <DonationsTracker path="/donations-tracker-ivy-fund" />
        <NominateProject path="/nominate-project" />
        <AboutIvyConferences path="/about-ivy-conferences" />
        <LeadershipSummit path="/leadership-summit" />
        <PolicyConference path="/policy-conference" />
        <History path="/history" />
        <Today path="/today" />
      </Router>
    </>
  );
}

export default App;
