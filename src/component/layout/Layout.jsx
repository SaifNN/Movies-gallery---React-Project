import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'

export default function layout() {
  return (
    <>
<Navbar/>

<Outlet/>

<h1 className='bg-black position-fixed bottom-0 start-0 end-0 p-2 text-center text-white z-n1'>Footer</h1>
    </>
  )
}
