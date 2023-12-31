import React from "react";
import { Button } from '@nextui-org/react'
import Image from 'next/image'
import Link from "next/link";

export default function HomeSecondMain() {
    return (
        <div className="flex flex-col md:flex-wrap  xl:flex-row lg:flex-row pt-10 justify-center pb-10 bg-gray">
            <span className="flex flex-col  lg:w-1/6 xl:w-1/6 my-10 items-center mx-3">
                <span className="flex md:h-36 xl:h-36 md:flex-col xl:flex-row py-8">
                    <Image className="md:w-10 xl:w-16" src={'/tax.png'} width={60} height={60} alt="Second image" />
                    <span className="pl-6 text-2xl md:text-2xl xl:text-2xl">
                        <p>Impuestos</p>
                    </span>
                </span>
                <span className="min-h-min xl:h-48 text-xl md:text-lg w-4/5 md:w-3/5 xl:text-2xl lg:w-full xl:w-full lg:h-48 " >Nos encargamos de efectuar una revisión exhaustiva de la situación fiscal de su empresa.</span>
                <span >
                    <Button className="mt-6" color="primary">
                        <Link className="text-xl sx:p-3 md:p-2 lg:m-3 xl:m-4" href={'/servicios/impuestos'}>
                            Ver más
                        </Link>
                    </Button>
                </span>
            </span>
            <span className="flex flex-col  lg:w-1/6 xl:w-1/6  my-10 items-center mx-3">
                <span className="flex md:h-36 xl:h-36 md:flex-col xl:flex-row py-8">
                    <Image className="md:w-10 xl:w-16" src={'/accounting.png'} width={60} height={60} alt="Second image" />
                    <div className="pl-6 text-2xl md:text-2xl xl:text-2xl">
                        <p>Contabilidad</p>
                    </div>
                </span>
                <span className="min-h-min xl:h-48 text-xl md:text-lg w-4/5 md:w-3/5 xl:text-2xl lg:w-full xl:w-full lg:h-48" >Nos especializamos en defender su patrimonio y sus derechos como contribuyente.</span>
                <span >
                    <Button className="mt-6" color="primary">
                        <Link className="text-xl sx:p-3 md:p-2 lg:m-3 xl:m-4" href={'/servicios/contabilidad'}>
                            Ver más
                        </Link>
                    </Button>
                </span>
            </span>
            <span className="flex flex-col  lg:w-1/6 xl:w-1/6  my-10 items-center">
                <span className="flex md:h-36 xl:h-36 md:flex-col xl:flex-row py-8 mx-3">
                    <Image className="md:w-10 xl:w-16" src={'/process.png'} width={60} height={60} alt="Second image" />
                    <span className="pl-6 text-2xl md:text-2xl xl:text-2xl">
                        <p>Contro</p>
                        <p>Interno</p>
                    </span>
                </span>
                <span className="min-h-min xl:h-48 text-xl md:text-lg w-4/5 md:w-3/5 xl:text-2xl lg:w-full xl:w-full lg:h-48">Nos especializamos en defender su patrimonio y sus derechos como contribuyente.</span>
                <span >
                    <Button className="mt-6" color="primary">
                        <Link className="text-xl sx:p-3 md:p-2 lg:m-3 xl:m-4" href={'/servicios/control-interno'}>
                            Ver más
                        </Link>
                    </Button>
                </span>
            </span>
            <span className="flex flex-col  lg:w-1/6 xl:w-1/6  my-10 items-center mx-3">
                <span className="flex md:h-36 xl:h-36 md:flex-col xl:flex-row py-8 ">
                    <Image className="md:w-10 xl:w-16" src={'/shopping.png'} width={60} height={60} alt="Second image" />
                    <span className="pl-6 text-2xl md:text-2xl xl:text-2xl">
                        <p>Compras</p>
                    </span>
                </span>
                <span className="min-h-min xl:h-48 text-xl md:text-lg w-4/5 md:w-3/5 xl:text-2xl lg:w-full xl:w-full lg:h-48">Nos encargaremos de atender los requerimientos de compras de bienes y servicios de su empresa.</span>
                <span >
                    <Button className="mt-6" color="primary">
                        <Link className="text-xl sx:p-3 md:p-2 lg:m-3 xl:m-4" href={'/servicios/compras'}>
                            Ver más
                        </Link>
                    </Button>
                </span>
            </span>
            <span className="flex flex-col  lg:w-1/6 xl:w-1/6  my-10 items-center mx-3">
                <span className="flex md:h-36 xl:h-36 md:flex-col xl:flex-row py-8">
                    <Image className="md:w-10 xl:w-16" src={'/legal.png'} width={60} height={60} alt="Second image" />
                    <span className="pl-6 text-2xl md:text-2xl xl:text-2xl">
                        <p>Legal</p>
                    </span>
                </span>
                <span className="min-h-min xl:h-48 text-xl md:text-lg w-4/5 md:w-3/5 xl:text-2xl lg:w-full xl:w-full lg:h-48">Nos especializamos en defender su patrimonio y sus derechos como contribuyente.</span>
                <span >
                    <Button className="mt-6" color="primary">
                        <Link className="text-xl sx:p-3 md:p-2 lg:m-3 xl:m-4" href={'/servicios/legal'}>
                            Ver más
                        </Link>
                    </Button>
                </span>
            </span>
        </div>
    )
}
