import React from 'react'
import Image from 'next/image';

export default function Legal() {
    return (
        <div>
            <Image src={'/banner.jpg'} width={3000} height={272} alt='fondo servicios' />
            <div className='flex justify-center'>
                <h1><b>LEGAL</b></h1>
            </div>
            <span className='flex justify-center items-center justify-items-center mt-10'>
                <span className='flex flex-col w-1/3 mr-10 mb-200'>
                    <span >
                        <p className="font-poppins text-2xl"><b>ASESORIA LEGAL PERMANENTE</b> </p>
                        <p className='my-3 font-poppins'>
                            Somos el asesor legal de cabecera de nuestros clientes, pues nos dedicamos a brindarles una asesoría
                            legal integral y permanente desde la constitución de sus empresas, hasta la liquidación, fusión o
                            escisión de los mismos. Los acompañamos en cada una de sus etapas, brindándoles el sustento
                            legal permanente y el apoyo en la redacción de contratos ya sean civiles o mercantiles.
                        </p>
                    </span>
                    <span>
                        <p className="font-poppins text-2xl"><b>DEFENSA FISCAL</b> </p>
                        <p className='my-3 font-poppins'>
                            Nos especializamos en defender su patrimonio y sus derechos como contribuyente contra actos de
                            autoridades fiscales y administrativas, ya sea mediante recurso de revocación, juicio de nulidad o
                            juicio de amparo.
                        </p>
                    </span>
                    <span>
                        <p className="font-poppins text-2xl"><b>SOLICITUDES DE COFIRMACION DE CRITERIOS ANTE SAT</b> </p>
                        <p className='my-3 font-poppins'>
                            Apoyamos a nuestros clientes a realizar consultas sobre alguna situación concreta que genere incertidumbre
                            en la correcta aplicación de las disipaciones legales. Una resolución favorable, genera el derecho de aplicar
                            dicho criterio establecido.
                        </p>
                    </span>
                    <span>
                        <p className="font-poppins text-2xl"><b>ELABORACION DE ACTAS, CONTRATOS Y CONVENIOS</b> </p>
                        <p className='my-3 font-poppins'>
                            ELABORACION DE ACTAS, CONTRATOS Y CONVENIOS
                            Brindamos consultoría y soporte en la elaboración y revisión de documentos legales tales como actas de
                            asambleas, contratos y convenios con la finalidad de que los mismos sean realizados bajo los
                            lineamientos que para cada caso que en particular se requiera.
                        </p>
                    </span>

                </span>

                <span className='w-1/2 justify-items-center items-center justify-center ml-10'>
                    <Image src={'/control_interno.jpg'} width={1280} height={720} alt='nosotros' />
                </span>
            </span>
        </div>
    )
}
