import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { ClockLoader } from 'react-spinners';
import { y } from '../../context/context';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

export default function Tv() {
let {show ,dataInput} = useContext(y)
const [datatv, setDataTv] = useState([])


  async function getDataTv(){
 let {data} = await axios.get(`https://api.themoviedb.org/3/${show}/tv?api_key=73e5232362bfb661e29f1857004eaf49`,{
   params:{
     query:dataInput
   }
 })
console.log(data.results);
setDataTv(data.results)
}
useEffect(() => {
getDataTv()
}, [dataInput])

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 7,
    slidesToScroll: 7,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };


  return (
    <>
   
    <div className="container text-center">
      <Helmet>
                <title>Tv</title>
       </Helmet>
        <Slider {...settings}>
          {datatv.map((x, index)=>
          <img className='w-75 rounded-3' src={"https://image.tmdb.org/t/p/w500/" + x.poster_path} alt=""  key={index}/>
          )}
      </Slider>
      <div className="row">
        <div className=" text-center">
           <h1 className='text-danger'>Trending</h1>
          <h3>Tv</h3>
          <h5>To watch now</h5>
        </div>
      {datatv.filter((x)=>"https://image.tmdb.org/t/p/w500/" + x.poster_path !==null).map((x , index)=>
      <div className='col-lg-3 ' key={index}>
        <div className=' position-relative'>
          <Link to={`/details/tv/${x.id}`}>
          <img className='w-100 rounded-3' src={"https://image.tmdb.org/t/p/w500/" + x.poster_path} alt=""/>
          </Link>
          <h4>{x.name}</h4>
          <div className=' position-absolute top-0 end-0 p-1 bg-danger rounded-3 '>{x.vote_average.toFixed(1)}</div>
        </div>
      </div>
    )}
      </div>
    </div>
     <div className=' d-flex justify-content-center align-items-center vh-100 text-white'>
      <ClockLoader color="#36d7b7" />
    </div>
    </>
  )
}
