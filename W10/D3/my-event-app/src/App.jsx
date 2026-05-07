import { useState } from 'react'

import './App.css'
import { EventBasics } from './components/p1'
import { EventObject } from './components/p2'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <EventBasics/> */}
    <EventObject/>
    </>
  )
}

export default App
