import React from "react"

import Layout from './Layout'
import Intro from './Intro'
import AvailabilityReport from './AvailabilityReport.jsx';

const Home = () => {
    return (
      <Layout>
        <Intro />
        <AvailabilityReport />
      </Layout>
    );
}

export default Home
