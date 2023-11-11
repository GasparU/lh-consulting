import React from 'react'
import Image from 'next/image';

// import Link from 'next/link';

export default function Impuestos() {

  return (
    <div>
      {/* <Link href='https://api.whatsapp.com/send?phone=51982056659' passHref target='_blank' rel='noopener noreferrer'>
          <Image src={'/whatsapp.png'} width={100} height={100} alt='whatsapp'/>
      </Link> */}
      <Image src={'/banner.jpg'} width={3000} height={272} alt='fondo servicios' />
      <div className='flex justify-center'>
        <h1 className="mt-10 text-xl md:text-2xl lg:text-2xl xl:text-4xl"><b>IMPUESTOS</b></h1>
      </div>
      <span className='flex xs:flex md:flex lg:flex xl:flex justify-center items-center justify-items-center mb-10'>

        <span className='flex-col mx-8 mt-8 md:mt-0 lg:mt-0 xl_mt-0 md:mx-16 xl:mx-8 lg:mx-10 md:w-7/8 xl:w-1/3 '>
          <span className="md:m-6">
            <p className="font-poppins text-2xl"><b>ASESORÍA FISCAL CONTINUA</b> </p>
            <p className='my-3 font-poppins'>
              Mediante nuestra asesoría fiscal continua o permanente, proporcionamos a nuestros clientes la
              seguridad que están cumpliendo cabalmente sus obligaciones fiscales, con una carga fiscal justa y con
              un estricto alineamiento al marco legal vigente.
            </p>
          </span>
          <span>
            <p className="font-poppins text-2xl"><b>CONSULTAS Y OPINIONES FISCALES</b> </p>
            <p className='my-3 font-poppins'>
              Damos atención a las consultas que nuestros clientes nos plantean y emitimos nuestra opinión
              respecto a la interpretación y aplicación de las leyes fiscales sobre una operación o situación
              determinada.
            </p>
          </span>
          <span>
            <p className="font-poppins text-2xl"><b>DIAGNOSTICO FISCAL</b> </p>
            <p className='my-3 font-poppins'>
              Nos encargamos de efectuar una revisión exhaustiva de la situación fiscal en la que se
              encuentra su compañía, de tal manera que nos permita detectar errores u omisiones en el
              cumplimiento de sus obligaciones fiscales en un periodo determinado, así como la búsqueda de
              posibles oportunidades para la disminución de su carga fiscal.
            </p>
          </span>
          <span>
            <p className="font-poppins text-2xl"><b>PLANEACION FISCAL</b> </p>
            <p className='my-3 font-poppins'>
              Mediante un análisis a la situación fiscal particular de cada uno de nuestros clientes, logramos que
              aprovechen todos los beneficios que las disposiciones fiscales ofrecen. Con lo anterior, cada uno de
              nuestros clientes tiene una carga fiscal justa y con ello pueden optimizar las utilidades de su compañía.
            </p>
          </span>
          <span>
            <p className="font-poppins text-2xl"><b>DEVOLUCION Y COMPENSACION DE IMPUESTOS</b> </p>
            <p className='my-3 font-poppins'>
              Ayudamos a nuestros clientes a recuperar los saldos a favor de sus impuestos, mediante procedimientos
              administrativos que logren que las autoridades fiscales autoricen las respectivas devoluciones o
              compensaciones, permitiendo mayor liquidez.
            </p>
          </span>
          <span>
            <p className="font-poppins text-2xl"><b>ACTUALIZACION FISCAL</b> </p>
            <p className='my-3 font-poppins'>
              Actualizamos la situación fiscal de nuestros nuevos clientes cuando por cualquier circunstancia dejaron de
              atender sus obligaciones fiscales.
            </p>
          </span>
        </span>

        <span className='w-1/2 justify-items-center items-center justify-center ml-10'>
          <Image className="w-0 md:w-0 lg:w-full xl:w-full" src={'/impuestos2.jpg'} width={1280} height={720} alt='nosotros' />
        </span>
      </span>
    </div>
  )
}
