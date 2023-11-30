import Image from 'next/image'
import React from 'react'

const logos = [ 
    {empresas: "/LOGO_CAJABAMBA.png"}, {empresas: "/LOGO_LEDESMA.jpeg"}, {empresas: "/LOGO_PARDO.png"}, {empresas: "/LOGO_MERCEDES.png"},
    {empresas: "/LOGO_CUART.png"}, {empresas: "/LOGO_DYNO.png"}, {empresas: "/LOGO_EMS.png"}, {empresas: "/LOGO_GOVI.png"},
    {empresas: "/LOGO_LOGISTIC.png"}, {empresas: "/LOGO_PANAMEDICAL.png"}, {empresas: "/LOGO_AGM.jpg"},
]

const ImageClient = ({src}) => {
    return (
        <div className='flex w-52 h-52 bg-white justify-center items-center rounded-xl hover:opacity-75 bg-indigo duration-200
        hover:scale-110'>
            <Image className='saturate-800 w-max h-max' src={src} width={350} height={150} alt='whatsapp' />
        </div>

    )
}

export default function ClientPage() {
    return (
        <div className='flex gap-8 flex-wrap m-10 justify-items-center content-center justify-center'>
           {
            logos.map(logo => (<ImageClient key={logo.empresas} src={logo.empresas}/>))
           }
        </div>
    )
}
