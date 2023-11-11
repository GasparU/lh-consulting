import React from 'react'
import Image from 'next/image';

export const Contabilidad = () => {
    return (
        <div>
            <Image src={'/banner.jpg'} width={3000} height={272} alt='fondo servicios' />
            <div className='flex justify-center mt-10'>
                <h1 className="mt-10 text-xl md:text-2xl lg:text-2xl xl:text-4xl"><b>CONTABILIDAD</b></h1>
            </div>
            <span className='flex xs:flex md:flex lg:flex xl:flex justify-center items-center justify-items-center mb-10'>
                <span className='flex-col mx-8 mt-8 md:mt-0 lg:mt-0 xl_mt-0 md:mx-16 xl:mx-8 lg:mx-10 md:w-7/8 xl:w-1/3 '>
                    <span className="md:m-6">
                        <p className="font-poppins text-2xl"><b>CONTABILIDAD EN GENERAL</b> </p>
                        <p className='my-3 font-poppins'>
                            Nos encargamos de una manera permanente tanto de la emisión oportuna de Estados Financieros de
                            las compañías de nuestros clientes, como el cumplimiento oportuno de sus obligaciones contables.
                        </p>
                    </span>
                    <span>
                        <p className="font-poppins text-2xl"><b>REVISION DE ESTADOS FINANCIEROS</b> </p>
                        <p className='my-3 font-poppins'>
                            Proporcionamos a nuestros clientes nuestra opinión respecto a la presentación de la información
                            financiera que ellos mismos generan. Nuestra opinión se basa en el análisis de la información contable
                            que nuestros clientes nos proporcionan, sin que nuestra revisión llegue a implicar una auditoria a los
                            Estados Financieros.
                        </p>
                    </span>
                    <span>
                        <p className="font-poppins text-2xl"><b>REVISION Y DEPURACION DE SALDOS CONTABLES ESPECIFICOS</b> </p>
                        <p className='my-3 font-poppins'>
                            Para que la contabilidad sea una herramienta contable para la toma de decisiones y refleje la realidad
                            de la compañía, llevamos a cabo un análisis y depuración de ciertos rubros o cuentas contables que
                            nuestros clientes nos indiquen sin que llegue a considerarse como una auditoría. De igual manera
                            realizamos conciliaciones de saldos entre compañías.
                        </p>
                    </span>
                    <span>
                        <p className="font-poppins text-2xl"><b>ACTUALIZACION CONTABLEL</b> </p>
                        <p className='my-3 font-poppins'>
                            Actualizamos los registros contables de nuestros nuevos clientes cuando ellos, por cualquier
                            circunstancia dejaron de tener su contabilidad al día.
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
