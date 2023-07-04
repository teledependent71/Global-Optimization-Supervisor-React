import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Global Optimization Supervisor</title>
        <meta property="og:title" content="Global Optimization Supervisor" />
      </Helmet>
    </div>
  )
}

export default Home
