import React from 'react'

function Button({ onClick, children }) {
  return <button onClick={onClick} style={{border: '5px solid white', padding: 0, marginBottom: '100px'}}> {children} </button>
}

export default Button
