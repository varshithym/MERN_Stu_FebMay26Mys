import { useState } from 'react'

import './App.css'
import { FunctionName } from './components/FunctionalCompOne.jsx'
import { FunctionalCompondntsBasics } from './components/FunctionalComponentsBasics.jsx'
import { ClassComponentBasics } from './components/ClassComponentsBasics.jsx'
import { FunctionComp } from './components/FunctionalComponentsAdv.jsx'

function App() {
  

  return (
    // Fragment in react: <> </>
    
    <>
    {/* <FunctionName/>  component name */}
    {/* <FunctionalCompondntsBasics/>  */}
    <ClassComponentBasics/> {/* class component name */}
    <FunctionComp/>

    </>
   
    
  )
}

export default App
