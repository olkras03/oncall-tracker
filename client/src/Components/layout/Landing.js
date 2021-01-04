import React from 'react';
import { Link } from 'react-router-dom';
function Landing() {
  return (
    <section className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1 className="x-large">OnCall Tracker</h1>
          <p className="lead">
            Create a developer profile, enter oncall dates and see how many days a person has been oncall during the year
          </p>
          <div className="buttons">
            <Link to='/register' className='btn btn-primary'>
              Sign Up</Link>
            <Link to='/login' className='btn btn-light'>
              Login
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Landing
