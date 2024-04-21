import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'


export default function Home() {

const [datamovie, setDatamovie] = useState([])
const [dataTv, setDataTv] = useState([])
const [dataperson, setDataPerson] = useState([])

  async function getDataMovie(){
 let {data} = await axios.get("https://api.themoviedb.org/3/discover/movie?api_key=73e5232362bfb661e29f1857004eaf49")
console.log(data.results);
setDatamovie(data.results)
}

  async function getDataTv(){
 let {data} = await axios.get("https://api.themoviedb.org/3/discover/tv?api_key=73e5232362bfb661e29f1857004eaf49")
console.log(data.results);
setDataTv(data.results)
}
  async function getDataPerson(){
 let {data} = await axios.get("https://api.themoviedb.org/3/discover/person?api_key=73e5232362bfb661e29f1857004eaf49")
console.log(data.results);
setDataPerson(data.results)
}

useEffect(() => {
  getDataMovie()
  getDataTv()
  getDataPerson()
}, [])


  return (
    <>
     <div className="container">
       <Helmet>
              
                <title> Home </title>
                
            </Helmet>
      <div className="row">
        <div className='text-center'>
          <h1 className='text-danger'>Trending</h1>
          <h3>Movie</h3>
          <h5>To watch now</h5>
        </div>
            {datamovie.map((x)=>
      <div className='col-lg-3'>
        <div>
          <h4>
            <img className='w-100' src={"https://image.tmdb.org/t/p/w500/" + x.poster_path} alt="" />
            {x.title}
          </h4>
        </div>
      </div>
    )}
            <div className='text-center'>
          <h1 className='text-danger'>Trending</h1>
          <h3>Tv</h3>
          <h5>To watch now</h5>
        </div>
            {dataTv.map((x)=>
      <div className='col-lg-3'>
        <div>
          <h4>
            <img className='w-100' src={"https://image.tmdb.org/t/p/w500/" + x.poster_path} alt="" />
            {x.name}
          </h4>
        </div>
      </div>
    )}
            <div className='text-center'>
          <h1 className='text-danger'>Trending</h1>
          <h3>Person</h3>
          <h5>To watch now</h5>
        </div>
            {dataperson.map((x)=>
      <div className='col-lg-3'>
        <div>
          <h4>
            <img className='w-100' src={"https://image.tmdb.org/t/p/w500/" + x.profile_path} alt="" />
            {x.name}
          </h4>
        </div>
      </div>
    )}
      </div>
      </div>
  
    </>
  )
}
