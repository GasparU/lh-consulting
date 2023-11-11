import React from 'react'
import Image from 'next/image';

export default function Compras() {
    return (
        <div>
            <Image src={'/banner.jpg'} width={3000} height={272} alt='fondo servicios' />
            <div className='flex justify-center'>
                <h1 className="mt-10 text-xl md:text-2xl lg:text-2xl xl:text-4xl"><b>COMPRAS</b></h1>
            </div>
            <span className='flex xs:flex md:flex lg:flex xl:flex justify-center items-center justify-items-center mb-10'>
                <span className='flex-col mx-8 mt-8 md:mt-0 lg:mt-0 xl_mt-0 md:mx-16 xl:mx-8 lg:mx-10 md:w-7/8 xl:w-1/3 '>
                    <span className="md:m-6">
                        <p className="font-poppins text-2xl"><b>DISEÑOS DE MEJORA</b> </p>
                        <p className='my-3 font-poppins'>
                            Realizamos un diseño para mejorar su proceso de compras, logrando así la optimización de los costos
                            en la gestión de adquisición de productos y servicios.
                        </p>
                    </span>
                    <span>
                        <p className="font-poppins text-2xl"><b>PERSONAL CALIFICADO</b> </p>
                        <p className='my-3 font-poppins'>
                            Nuestro personal, altamente calificado se encargará de atender los requerimientos de compras de bienes
                            y servicios, logrando que su compañía obtenga importantes ahorros que a su vez repercutirán positivamente
                            en la competitividad y rentabilidad de su empresa.
                        </p>
                    </span>
                    <span>
                        <p className="font-poppins text-2xl"><b>BENEFICIOS</b> </p>
                        <p className='my-3 font-poppins'>
                            Con nuestro Outsourcing de Compras, su compañía obtendrá los siguientes beneficios.
                        </p>
                        <ul><ol>
                            - Transparencia en las compras
                            - Optimización del funcionamiento de la gestión de compras de su empresa
                            - Disminución del trabajo operativo, reduciendo así los costos laborales y obteniendo
                            ahorros de manera rápida y sostenible
                            - Selección y evaluación de proveedores
                            - Diseño de soluciones orientadas a maximizar los objetivos de su empresa
                        </ol></ul>
                    </span>

                </span>

                <span className='w-1/2 justify-items-center items-center justify-center ml-10'>
                    <Image className="w-0 md:w-0 lg:w-full xl:w-full" src={'/control_interno.jpg'} width={1280} height={720} alt='nosotros' />
                </span>
            </span>
        </div>
    )
}
