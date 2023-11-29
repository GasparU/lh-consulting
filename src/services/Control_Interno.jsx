import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

export default function Control_Interno() {
  return (
    <div>
      <Image src={'/banner.jpg'} width={3000} height={272} alt='fondo servicios' />
      <div className='flex justify-center'>
                <h1 className="mt-10 text-xl md:text-2xl lg:text-2xl xl:text-4xl"><b>CONTROL INTERNO</b></h1>
            </div>
      <span className='flex xs:flex md:flex lg:flex xl:flex justify-center items-center justify-items-center mb-10'>
        <span className='flex-col mx-8 mt-8 md:mt-0 lg:mt-0 xl_mt-0 md:mx-16 xl:mx-8 lg:mx-10 md:w-7/8 xl:w-1/3 '>
          <span className="md:m-6">
            <p className="font-poppins text-2xl"><b>POLITICAS Y PROCEDIMIENTOS</b> </p>
            <p className='my-3 font-poppins'>
              Mediante la implementación de políticas y procedimientos diseñados en base a las necesidades y
              objetivos de cada empresa, se logra la eficiencia operacional, administrativa y productiva
              necesaria para el crecimiento de los mismos.
            </p>
          </span>
          <span>
            <p className="font-poppins text-2xl"><b>REESTRUCTURACION Y PROCESOS</b> </p>
            <p className='my-3 font-poppins'>
              Realizamos una revisión detallada de cada una de las políticas y procesos operacionales, administrativos
              y productivos utilizados en cada empresa. En base a los resultados obtenidos, realizamos una
              reestructura de dichas políticas y procesos con el fin de incrementar la eficiencia y permitirle a la
              compañía obtener ventajas competitivas, como el aumento de control de la compañía y
              la reducción de tiempos y costos.
            </p>
          </span>
          <span>
            <p className="font-poppins text-2xl"><b>SUPERVICION Y MONITOREO</b> </p>
            <p className='my-3 font-poppins'>
              Ofrecemos a nuestros clientes el servicio de monitoreo y supervisión de las políticas y procesos
              reestructurados, a través de la entrega de reportes e informes, con los cuales pueden asegurarse de su
              correcto cumplimiento y de la obtención de los resultados esperados.
            </p>
          </span>

        </span>

        <span className='w-1/2 justify-items-center items-center justify-center ml-10'>
          <Image className="w-0 md:w-0 lg:w-full xl:w-full" src={'/control2.jpg'} width={880} height={620} alt='nosotros' />
        </span>
      </span>
    </div>
  )
}
