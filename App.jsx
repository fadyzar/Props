
import './App.css'
import { Parent } from './Compnents/Parent'
import { Child1 } from './Compnents/Child1'
import { Child2 } from './Compnents/Child2'
import React from 'react'
import { Greetings } from './Compnents/Greetings'
import { ParentWithChildren } from './Compnents/ParentWithChildren'
import { Blog } from './Compnents/Blog'
function App() {
  const name1 = "Fady"
const name2 = "Nickolay"
const articalName = "news"
  return (
    <>
     <Greetings name = "fady" />
     <Greetings name = "nickolay" />

     <Parent>
      <Child1 name = {name1}> 

      </Child1>

      <Child2 name = {name2}>
        
        </Child2>
     </Parent>

     <ParentWithChildren > 
      <Child1 name = {name1} />
      <Child2 name = {name2} />
      
      
     </ParentWithChildren>
      
      <Blog name = {articalName}/>
     
    </>
  )
}

export default App
