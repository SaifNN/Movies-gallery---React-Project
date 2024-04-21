import React, { Children } from 'react'
import Layout from './component/layout/Layout'
import Home from './component/Home/Home'
import Tv from './component/TV/Tv'
import Movie from './component/Movie/Movie'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Error from './component/Error/Error'
import Details from './component/Movie,tv,details/Details'



export default function App() {


let x = createBrowserRouter([{
  path:"",element:<Layout/>, children:[
    {index:true,element:<Home/>},
    {path:"tv",element:<Tv/>},
    {path:"movie",element:<Movie/>},
    {path:"details/:type/:id",element:<Details/>},
    {path:"*",element:<Error/>}
  ]
}])

  return  <RouterProvider router={x}/>   
}

