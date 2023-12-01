import React from 'react'
import logo from '../../public/LOGO_LH.png'
import  Image  from 'next/image';

const Logo = () => {
  return (
    <Image src={logo} width={160} height={140}/>
  )
}

export default Logo