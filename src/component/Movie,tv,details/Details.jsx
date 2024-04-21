import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { useParams } from 'react-router-dom'

export default function Details() {
    
 let {id, type} = useParams()   
    
const [datadetails, setDatadetails] = useState("")

 async function getDataDetails(){
  let {data} = await axios.get(`https://api.themoviedb.org/3/${type}/${id}?api_key=73e5232362bfb661e29f1857004eaf49`)
console.log(data);

setDatadetails(data)

  }

  useEffect(() => {
   getDataDetails()
  }, [])
  
  return (
    <>
    <div className="container mt-3">
           <Helmet>
              
              <title>{datadetails.original_title || datadetails.name}</title>
                
            </Helmet>
        <div className="row">
            <div className="col-lg-6">
                <img className='w-50' src={"https://image.tmdb.org/t/p/w500/" + datadetails.poster_path} alt="" />
            </div>
            <div className="col-lg-6">
                <h2 className='h4'>Title:{datadetails.original_title} {datadetails.name} </h2>
                {datadetails?.genres?.map((x)=>
                <button className='btn btn-info m-1'>{x.name}</button>
                )}
                <p>overview :{datadetails.overview}</p>
                <a href={datadetails.homepage} target='_blank'>See More</a>
                <p>vote_average :{datadetails.vote_average }</p>
                <p>vote_count :{datadetails.vote_count }</p>

            </div>
        </div>
    </div>
    
    
    </>
  )
}
