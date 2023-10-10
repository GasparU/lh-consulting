'use client'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import Image from 'next/image';
import ImagenHomeIcons from './ImagenHomeIcons';
import React, { useState } from 'react';

function ImagenHome() {

  const [currentIndex, setCurrentIndex] = useState(1);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 1;
    const newIndex = isFirstSlide ? 4 - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === 4 - 1;
    const newIndex = isLastSlide ? 1 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className='  w-full m-auto  relative group  '>
      <span className='static  '>
        <Image src={`/slider${currentIndex}.jpg`} width={1400} height={930} className='w-full h-full  bg-center bg-cover transition duration-700 ease-in-out' alt="imagen" />
        <ImagenHomeIcons />
      </span>

      {/* Left Arrow */}
      <span className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </span>
      {/* Right Arrow */}
      <span className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </span>
    </div>
  );
}

export default ImagenHome;