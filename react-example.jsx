import { Link } from "react-router-dom"
import { useState } from "react"

const Title = (props) => {
  return (
    <h1>
      You Clicked this {props.count} Times
    </h1>
  )
}


function App() {
  const [count, setCount] =  useState(0);
  const Button = () => {

    const handleClick = () => {
      let newCount = count + 1;
      setCount(newCount);
    }

    return (
      <button 
        onClick={handleClick}
        >
          {`Click Me`}
      </button>
    )
  }
  return (
    <div 
      className="bg-primary h-100 p-5"
      style={{ color: 'white' }}
    >
      <Link className="text-light" to='/about'>About</Link>
      <Title 
       count={count}
       />
      <Button />
    </div>
  )
}


export default App
