import React from 'react'
import {Link} from "react-router-dom"
import "./Logout.css"

function Logout() {
  return (
    <div className="todos-containerL">
        <h1>Logged Out Successfully</h1>
        <button className="button"><Link to="/login">Login</Link></button>
    </div>
  )
}

export default Logout