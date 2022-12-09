import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import axios from 'axios';
const Movies = () => {
  const [movies, setMovies] = useState()
     var settings = {
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        autoplay: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
              breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
const fetchData =() =>{
  axios.get(`https://www.omdbapi.com/?i=tt3896198&apikey=d65955f8`)  
  .then(res => {  
    const fetchedMovies = res.data;  
    // setMovies({ fetchedMovies });  
    setMovies(fetchedMovies)
 })  
}
useEffect(() =>{
  fetchData()
}, [])
console.log(movies)
  return (
    <div className='md:px-[77px] px-[30px] fetchedMoviesw-full mt-[63px]'>
      <div className='w-full'>
        <label className='w-full text-[24px] text-[#000]'>Search</label>
        <input type="text" className='w-full outline-none border border-[#000000] h-[54px] px-5' />
      </div>
        <h1 className='text-[24px] font-normal text-[#000000] mb-[18px]'>Movie Category Name</h1>
        <Slider {...settings}>
            <div className='slide text-[#FFFFFF]'  >
                   <p>{movies?.Title}</p>
            </div>
            
        </Slider>
    </div>
  )
}

export default Movies
