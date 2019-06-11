import React from 'react'
import '../stylesheets/Homepage.css'

const Homepage = (props) => {
  // let { } => props;

  return (
    <div className="homepage">
      <div className="homepage-header">
        <h1>Dude,</h1>
        <h1>where's</h1>
        <h1>my bike?</h1>
      </div>

      <div className="homepage-subheader">
        <h3>Krypto-what? My fixie was last seen parked behind a White Castle on 103rd Street, around 11:11PM on 02/14/2012. Please call me back, Daphne.</h3>
      </div>

      <svg viewBox="0 0 100 100" preserveAspectRatio="none">
        <polygon fill="rgb(121,47,201)" points="0,0 0,100 65,0"/>
      </svg>

    </div>
  )
}

export default Homepage
