import React from "react";
import { Button } from '@nextui-org/react'
import Image from 'next/image'
import Link from "next/link";

export default function HomeSecondMain() {
    return (
        <div className="flex pt-10 justify-items-center justify-center pb-10 bg-gray ">
            <span className="flex flex-col w-1/6 my-10 items-center">
                <span className="flex py-8">
                    <Image src={'/tax.png'} width={60} height={60} alt="Second image" />
                    <span className="pl-6">
                        <p>Impuestos</p>
                    </span>
                </span>
                <span >Nos encargamos de efectuar una revisión exhaustiva de la situación fiscal de su empresa.</span>
                <span >
                    <Button className="mt-6" color="primary">
                        <Link href={'#'}>
                            Button
                        </Link>
                    </Button>
                </span>
            </span>
            <span className="flex flex-col w-1/6 my-10 items-center">
                <span className="flex py-8">
                    <Image src={'/accounting.png'} width={60} height={60} alt="Second image" />
                    <div className="pl-6">
                        <p>Contabilidad</p>
                    </div>
                </span>
                <span >Nos especializamos en defender su patrimonio y sus derechos como contribuyente.</span>
                <span >
                    <Button className="mt-6" color="primary">
                        Button
                    </Button>
                </span>
            </span>
            <span className="flex flex-col w-1/6 my-10 items-center">
                <span className="flex py-8">
                    <Image src={'/process.png'} width={60} height={60} alt="Second image" />
                    <span className="pl-6">
                        <p>Control</p>
                        <p>Interno</p>
                    </span>
                </span>
                <span >Nos especializamos en defender su patrimonio y sus derechos como contribuyente.</span>
                <span >
                    <Button className="mt-6" color="primary">
                        Button
                    </Button>
                </span>
            </span>
            <span className="flex flex-col w-1/6 my-10 items-center">
                <span className="flex py-8 ">
                    <Image src={'/shopping.png'} width={60} height={60} alt="Second image" />
                    <span className="pl-6">
                        <p>Compras</p>
                    </span>
                </span>
                <span >Nos encargaremos de atender los requerimientos de compras de bienes y servicios de su empresa.</span>
                <span >
                    <Button className="mt-6" color="primary">
                        Button
                    </Button>
                </span>
            </span>
            <span className="flex flex-col w-1/6 my-10 items-center">
                <span className="flex py-8">
                    <Image src={'/legal.png'} width={60} height={60} alt="Second image" />
                    <span className="pl-6">
                        <p>Legal</p>
                    </span>
                </span>
                <span >Nos especializamos en defender su patrimonio y sus derechos como contribuyente.</span>
                <span >
                    <Button className="mt-6" color="primary">
                        Button
                    </Button>
                </span>
            </span>
        </div>
    )
}
