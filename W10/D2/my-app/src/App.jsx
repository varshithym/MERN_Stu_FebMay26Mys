import { useState } from 'react'
import { UseContextIntro } from './components/p1'
import './App.css'
import { CustomHooksIntro } from './components/p2'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <UseContextIntro/>
      {/* <CustomHooksIntro/> */}
      
    </>
  )
}

export default App
