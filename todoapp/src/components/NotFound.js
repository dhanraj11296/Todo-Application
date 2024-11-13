import React from 'react'
import './NotFound.css'

function NotFound() {
  return (
    <div className="not-found-container">
    <h1>Please check the URL Path</h1>
    <img
      src="https://assets.ccbp.in/frontend/react-js/not-found-blog-img.png"
      alt="not found"
      className="not-found-img"
    />
  </div>
  )
}

export default NotFound