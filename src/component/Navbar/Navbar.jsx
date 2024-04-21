import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { y } from '../../context/context'

export default function Navbar() {
   let {getDataInput} = useContext(y)
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-info">
  <div className="container">
    <Link className="navbar-brand fw-bolder text-danger fs-3" to="/">Netflix</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item">
          <input className="form-control m-2" onChange={getDataInput} type="search" placeholder="Search" aria-label="Search"/>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="movie">Movie</Link>
        </li>
         <li className="nav-item">
          <Link className="nav-link text-white" to="tv">Tv</Link>
        </li>
      
      </ul>
     
    </div>
  </div>
</nav>
    </div>
  )
}
//  <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>