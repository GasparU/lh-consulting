'use client'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image';

export default function Foother() {
  return (
    <div className='flex bg-foother min-h-max text-white pt-10'>
      <Link className='fixed z-50 bottom-20 right-10 ' href='https://api.whatsapp.com/send?phone=51982056659' passHref target='_blank' rel='noopener noreferrer'>
        
        <span className="relative flex h-20 w-20">
          <span className="animate-ping absolute  h-full w-full rounded-full bg-Emerald opacity-90 "></span>
          {/* <span className="relative  rounded-full -w-72 -h-72 bg-sky-500"> */}
            <Image className='relative flex h-24 w-28' src={'/whatsapp.png'} width={100} height={100} alt='whatsapp' />
          {/* </span> */}
        </span>
      </Link>
      <div className='w-1/3'>Principios</div>
      <span className='flex flex-col w-1/3 items-center ' >
        <h1 >Links</h1>
        <div className='flex flex-col my-10'>

          <Link className='my-1 cursor-pointer' href='#'>Home</Link>
          <Link className='my-1 cursor-pointer' href='/servicios/impuestos'>Impuestos</Link>
          <Link className='my-1 cursor-pointer' href='/servicios/contabilidad'>Contabilidad</Link>
          <Link className='my-1 cursor-pointer' href='/servicios/control-interno'>Control Interno</Link>
          <Link className='my-1 cursor-pointer' href='/servicios/compras'>Compras</Link>
          <Link className='my-1 cursor-pointer' href='/servicios/legal'>Legal</Link>

        </div>
      </span>
      <span className='w-1/3 '>
        <p>Contáctenos</p>
        <p className='my-3'>Ubiquenos en la siguiente dirección</p>
        <p className='my-3'>Cal. Shell Nro 343 Int. 602 Urb. Leuro, Miraflores - Lima</p>

      </span>

    </div>
  )
}
