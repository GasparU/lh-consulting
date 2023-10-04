
import Image from 'next/image'
import React from 'react'

export default function Nosotros() {
    return (
        <div>
            <Image src={'/banner.jpg'} width={3000} height={272} alt='fondo servicios' />
            <div className='flex justify-center items-center justify-items-center mt-10'>
                <div className='flex flex-col w-1/3 mr-10'>
                    <p className="font-poppins text-5xl"><b>Sobre Nosotros</b> </p>
                    <p className='mybanner-3'>
                        Somos un estudio contable con amplia experiencia en auditoría, impuestos, consultoría de empresas, contabilidad y outsourcing de compras.
                    </p>
                    <p className='my-3'>LH Consulting Group S.A.C. se caracteriza por presentar y prestar soluciones y servicios a la medida de sus clientes, siempre ofreciendo el
                        componente diferenciador de un acompañamiento enfocado en la puntualidad y la eficiencia.</p>
                    <p className='my-3'>
                        El personal vinculado a nuestra Firma cuenta con una importante trayectoria en las áreas relacionadas con su profesión, la mayoría de ellos
                        con estudios adicionales en materia de impuestos, financiera, NIIF y NIAS en reconocidas instituciones de la ciudad.
                    </p>
                </div>
                <div className='w-1/3 justify-items-center items-center justify-center ml-10'>
                    <Image src={'/Equipo_de_Trabajo.png'} width={520} height={552} alt='nosotros' />
                </div>
            </div>
        </div>
    )
}