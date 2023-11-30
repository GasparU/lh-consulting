'use client'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image';
import { MapContainer, Marker, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
// import L from 'leaflet'
// import icon from 'leaflet/dist/images/marker-icon.png'
// import iconShadow from 'leaflet/dist/images/marker-shadow.png'

// const iconUbicacion = new L.icon({
//   iconUrl: icon,
//   iconShadow: iconShadow,
//   iconSize: [25, 41],
//   iconAnchor: [12, 41],
//   popupAnchor: [1, -34],
//   shadowSize: [41, 41]
// })



export default function Foother() {
  return (
    <div className='flex xl:flex-row flex-col mx-auto items-center  bg-foother min-h-min pb-16 text-white pt-10 '>
      <Link className='fixed z-50 bottom-20 right-10 ' href='https://api.whatsapp.com/send?phone=51982056659' passHref target='_blank' rel='noopener noreferrer'>

        <span className="relative flex h-20 w-20">
          <span className="animate-ping absolute  h-full w-full rounded-full bg-Emerald opacity-90 z-50"></span>
          {/* <span className="relative  rounded-full -w-72 -h-72 bg-sky-500"> */}
          <Image className='relative flex h-24 w-28' src={'/whatsapp.png'} width={100} height={100} alt='whatsapp' />
          {/* </span> */}
        </span>
      </Link>
      <div className='w-1/3 text-center xl:text-2xl md:text-2xl text-xl mb-10 underline'>Principios</div>
      <span className='flex flex-col w-1/3 items-center text-center' >
        <h1 className='xl:text-2xl md:text-2xl text-xl underline'>Links</h1>
        <div className='flex flex-col my-10'>

          <Link className='my-1 cursor-pointer xl:text-2xl md:text-2xl text-xl' href='/'>Home</Link>
          <Link className='my-1 cursor-pointer xl:text-2xl md:text-2xl text-xl' href='/servicios/impuestos'>Impuestos</Link>
          <Link className='my-1 cursor-pointer xl:text-2xl md:text-2xl text-xl' href='/servicios/contabilidad'>Contabilidad</Link>
          <Link className='my-1 cursor-pointer xl:text-2xl md:text-2xl text-xl' href='/servicios/control-interno'>Control Interno</Link>
          <Link className='my-1 cursor-pointer xl:text-2xl md:text-2xl text-xl' href='/servicios/compras'>Compras</Link>
          <Link className='my-1 cursor-pointer xl:text-2xl md:text-2xl text-xl' href='/servicios/legal'>Legal</Link>

        </div>
      </span>
      <span className='px-10 text-center'>
        <p className='my-3 xl:text-2xl md:text-2xl text-xl underline'>Contáctenos</p>
        <p className='my-3 xl:text-2xl md:text-2xl text-xl'>Ubiquenos en la siguiente dirección</p>
        <p className='my-3 xl:text-2xl md:text-2xl text-xl'>Av. 28 de julio 776 of. 401, Miraflores - Lima</p>

        {/* <MapContainer className='w-96 h-96 mb-8 z-10' center={[-12.128155, -77.026369]} zoom={13} scrollWheelZoom={true}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[-12.128155, -77.026369]} icon={iconUbicacion}>
          </Marker>
        </MapContainer> */}
       
      </span>

    </div>
  )
}
