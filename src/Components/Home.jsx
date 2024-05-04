import React from 'react'
import { Link, useNavigate, useLocation} from 'react-router-dom'

function Home() {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);

  return (
    <>
      <h1>Homepage</h1>
      <p>Hello, this is home page</p>
      <p>we are leaning react router here </p>
      <Link to="/about"> go to About Page</Link>&nbsp;&nbsp;&nbsp;
      <button onClick={()=> navigate('/about')}>Go to About Page</button>&nbsp;&nbsp;&nbsp;
      <button onClick={()=> navigate('/filter')}>Go to Filter Page</button>

    </>
  )
}

export default Home
