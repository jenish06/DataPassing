import React from 'react'
import {Link} from 'react-router-dom'

function About() {
  return (
    <>
      <h1>About Page</h1>
      <Link to="/params/jenish" state={{name:'jenish',age:30}}>jenish</Link> <br />
            <Link to="/params/dhruvil">dhruvil</Link>
    </>
  )
}

export default About
