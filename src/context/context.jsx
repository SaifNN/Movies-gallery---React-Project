import React, { createContext, useState } from 'react'
export let y =createContext(0) 


export default function Context({children}) {


const [dataInput, setDataInput] = useState("")  

let show = dataInput?"search":"discover"
function getDataInput(e){
setDataInput(e.target.value)
} 
  return <y.Provider value={{show,getDataInput,setDataInput,dataInput}}>
{children}
  </y.Provider>
}
