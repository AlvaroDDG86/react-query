import { useState } from 'react'
import './App.css'
import Joke from './components/Joke'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <h1>React query</h1>
      </header>
      <div className="App-containter">
        <Joke />
      </div>
    </div>
  )
}

export default App
