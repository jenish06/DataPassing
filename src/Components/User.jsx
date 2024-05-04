import React from 'react'
const data = {name:"jenish", email:"jm123@gmail.com"}
function User(props) {
  return (
    <div>
      <h2>User Name</h2>
      <button onClick={()=>props.alert(data)}>Click here</button>
    </div>
  )
}

export default User
