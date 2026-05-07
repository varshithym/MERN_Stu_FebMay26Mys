import { useState } from 'react'

import './App.css'
import { EventBasics } from './components/p1'
import { EventObject } from './components/p2' 
import { PassingArguments } from './components/p3'
import { UseCallBackEvents } from './components/p5'
import { FormsPatterns } from './components/p7'
import { KeyboardEvent } from './components/p8'
import { EventObj } from './components/p9'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <EventBasics/> */}
    {/* <EventObject/> */}
    {/* <PassingArguments/> */}
    {/* <UseCallBackEvents/> */}
    {/* <FormsPatterns/> */}
    {/* <KeyboardEvent/> */}
    <EventObj/>
    </>
  )
}

export default App
