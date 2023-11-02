import Image from 'next/image'
import React from 'react'

export default function ClientPage() {
    return (
        <div className='flex gap-8 flex-wrap m-10 justify-items-center content-center justify-center'>
            <div className='flex w-96 h-52 '>
                <Image className='saturate-800' src={'/LOGO_CAJABAMBA.png'} width={350} height={150} alt='whatsapp' />
            </div>
            <div className='flex w-96 h-52 '>
                <Image className='saturate-800' src={'/LOGO_LEDESMA.jpeg'} width={350} height={150} alt='whatsapp' />
            </div>
            <div className='flex w-96 h-52 '>
                <Image className='saturate-800' src={'/LOGO_PARDO.png'} width={350} height={150} alt='whatsapp' />
            </div>
            <div className='flex w-96 h-52 '>
                <Image className='saturate-800' src={'/LOGO_MERCEDES.png'} width={350} height={150} alt='whatsapp' />
            </div>
            <div className='flex w-96 h-52 '>
                <Image className='saturate-800' src={'/LOGO_CUART.png'} width={350} height={150} alt='whatsapp' />
            </div>
            <div className='flex w-96 h-52 '>
                <Image className='saturate-800' src={'/LOGO_DYNO.png'} width={350} height={150} alt='whatsapp' />
            </div>
            <div className='flex w-96 h-52 '>
                <Image className='saturate-800' src={'/LOGO_EMS.png'} width={350} height={150} alt='whatsapp' />
            </div>
            <div className='flex w-96 h-52 '>
                <Image className='saturate-800' src={'/LOGO_GOVI.png'} width={350} height={150} alt='whatsapp' />
            </div>
            <div className='flex w-96 h-52 '>
                <Image className='saturate-800' src={'/LOGO_LOGISTIC.png'} width={350} height={150} alt='whatsapp' />
            </div>
            <div className='flex w-96 h-52 '>
                <Image className='saturate-800' src={'/LOGO_PANAMEDICAL.png'} width={350} height={150} alt='whatsapp' />
            </div>
            <div className='flex w-96 h-52 '>
                <Image className='saturate-800' src={'/LOGO_SAINC.png'} width={350} height={150} alt='whatsapp' />
            </div>
            <div className='flex w-96 h-52 '>
                <Image className='saturate-800' src={'/LOGO_AGM.jpg'} width={350} height={150} alt='whatsapp' />
            </div>
        </div>
    )
}
