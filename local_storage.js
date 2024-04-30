//stored on users device
// crud when you store data
// commonlley need functionality
// create something, read that datat, update the data and delete the data
// CRUD this is for all data procesing
// 

<button
onClick={() => localStorage.setItem('Team: john ')}

>

import { useEffect, useState } from "react"

function About() {
  const [color, setColor] = useState('')

  useEffect(() => {
    setColor(localStorage.getItem('color'))
  }, [])

  return (
    <div className="p-5">
      <h1>Current Color: {color}</h1>

      <button
        onClick={() => localStorage.setItem('color', 'red')}
      >
        Create Local Storage
      </button>

      <button
        onClick={() => {
          setColor(
            localStorage.getItem('color')
          )

        }}
      >
        Read Local Storage
      </button>

      <input
        onChange={(event) => {
          setColor(event.target.value)
          localStorage.setItem('color', event.target.value)
        }}
        value={color}
      />

      <button
        onClick={() => {
          setColor('')
          localStorage.removeItem('color')
        }}
      >
        Delete Local Storage
      </button>
    </div>
  )
}


export default About
