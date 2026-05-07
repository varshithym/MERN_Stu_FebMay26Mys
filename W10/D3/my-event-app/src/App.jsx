import { useState } from 'react'

import './App.css'
import { EventBasics } from './components/p1'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <EventBasics/>
    </>
  )
}

export default App
