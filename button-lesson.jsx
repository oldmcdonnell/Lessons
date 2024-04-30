import { Link } from "react-router-dom"
import { useState } from "react"

const Title = ({count}) => {
  return (
    <h1>
      You Clicked the button(s) below {count} Times
    </h1>
  )
}

const Button = ({count, setCount, title}) => {
  const [buttonCount, setButtonCount] = useState(0);

  const handleClick = () => {
    const newCount = count + 1;
    const newButtonCount = buttonCount + 1
    setCount(newCount);
    setButtonCount(newButtonCount);
    console.log('Button ', title)
  }

  return (
    <button style={{margin: '5px'}}
      onClick={handleClick}
      >
        {`Button #${title} - Click Me ${buttonCount}`}
    </button>
  )
}

function App() {
  const [count, setCount] =  useState(0);

  const buttonTitles = []
  for (let i = 1; i <= 10; i++) {
    buttonTitles.push(i)
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
       {buttonTitles.map((buttonTitle) => {
        return (
          <Button 
        title={buttonTitle}
        count={count}
        setCount={setCount}
       />

        )
       })}
      {/* <Button 
        title={'test'}
        count={count}
        setCount={setCount}
       /> */}
    </div>
  )
}


export default App
