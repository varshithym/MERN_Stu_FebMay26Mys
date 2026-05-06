import { useState } from 'react'
import { UseContextIntro } from './components/p1'
import './App.css'
import { CustomHooksIntro } from './components/p2'
import { UserRefIntro } from './components/p3'
import { UseReducerIntro } from './components/p4'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <UseContextIntro/> */}
      {/* <CustomHooksIntro/> */}
      {/* <UserRefIntro/> */}
      <UseReducerIntro/>
      
    </>
  )
}

export default App
