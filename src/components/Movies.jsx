import React from 'react'
import Slider from "react-slick";

const Movies = () => {
     var settings = {
        dots: true,
        infinite: true,
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
  return (
    <div className='md:px-[77px] px-[30px] w-full mt-[63px]'>
      <div className='w-full'>
        <label className='w-full text-[24px] text-[#000]'>Search</label>
        <input type="text" className='w-full outline-none border border-[#000000] h-[54px] px-5' />
      </div>
      <div className='pt-[48px]'>
        <h1 className='text-[24px] font-normal text-[#000000] mb-[18px]'>Movie Category Name</h1>
        <Slider {...settings}>
            <div className='w-[300px] h-[300px] rounded-md bg-[#000000] flex justify-center items-center text-[#ffffff] p-[10px]'>
                Movie Name
            </div>     
            <div className='w-[300px] h-[300px] rounded-md bg-[#000000] flex justify-center items-center text-[#ffffff] p-[10px]'>Movie Name</div>     
            <div className='w-[300px] h-[300px] rounded-md bg-[#000000] flex justify-center items-center text-[#ffffff] p-[10px]'>Movie Name</div>     
            <div className='w-[300px] h-[300px] rounded-md bg-[#000000] flex justify-center items-center text-[#ffffff] p-[10px]'>Movie Name</div>     
            <div className='w-[300px] h-[300px] rounded-md bg-[#000000] flex justify-center items-center text-[#ffffff] p-[10px]'>Movie Name</div>     
            <div className='w-[300px] h-[300px] rounded-md bg-[#000000] flex justify-center items-center text-[#ffffff] p-[10px]'>Movie Name</div>     
            <div className='w-[300px] h-[300px] rounded-md bg-[#000000] flex justify-center items-center text-[#ffffff] p-[10px]'>Movie Name</div>     
            <div className='w-[300px] h-[300px] rounded-md bg-[#000000] flex justify-center items-center text-[#ffffff] p-[10px]'>Movie Name</div>     
            <div className='w-[300px] h-[300px] rounded-md bg-[#000000] flex justify-center items-center text-[#ffffff] p-[10px]'>Movie Name</div>     
            <div className='w-[300px] h-[300px] rounded-md bg-[#000000] flex justify-center items-center text-[#ffffff] p-[10px]'>Movie Name</div>     
        </Slider>
      </div>
    </div>
  )
}

export default Movies
