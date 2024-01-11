'use client'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import Image from 'next/image';
import ImagenHomeIcons from './ImagenHomeIcons';
import React, { useEffect, useState } from 'react';

function ImagenHome() {

  const [currentIndex, setCurrentIndex] = useState(1);

  useEffect(() => {
    let init = setInterval(()=>{
      setCurrentIndex( prev => ((prev+1) >= 4 ? 1 : prev + 1))
    },4000)
  return ()=> clearInterval(init)
  
  }, [])
  

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 1;
    const newIndex = isFirstSlide ? 3 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === 3;
    const newIndex = isLastSlide ? 1 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className=' w-full m-auto overflow-hidden  relative group  '>
      <span className='static'>
        <Image src={`/slider${currentIndex}.jpg`} width={1400} height={40} 
        className='w-full xl:h-[80vh]' alt="imagen" />
        <ImagenHomeIcons />
      </span>
      <span className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl 
      rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </span>
      <span className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl 
      rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </span>
    </div>
  );
}

export default ImagenHome;