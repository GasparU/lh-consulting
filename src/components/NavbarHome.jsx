'use client'
// import { Accordion, AccordionItem } from "@nextui-org/react";
import Link from "next/link";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button, Navbar } from "@nextui-org/react";
import Image from "next/image";


export default function App() {

  return (
    <Navbar className="flex items-center h-28 mx-10" shouldHideOnScroll>
      <Image  src={'/LOGO_LH.png'} width={180} height={100} alt='logo' />
      <div className="flex flex-1"></div>
      <Link className="p-4 font-bold text-lg " href={'/'}>Home</Link>
      <Dropdown backdrop="blur" >
        <DropdownTrigger>
          <Button
            color="light"
            className="font-bold text-lg "
          >
            Servicios
          </Button>
        </DropdownTrigger>
        <DropdownMenu variant="faded" aria-label="Static Actions">
          <DropdownItem ><Link className="p-4 font-bold text-lg " href={'/servicios/compras'}>Compras</Link></DropdownItem>
          <DropdownItem ><Link className="p-4 font-bold text-lg " href={'/servicios/contabilidad'} >Contabilidad</Link></DropdownItem>
          <DropdownItem ><Link className="p-4 font-bold text-lg " href={'/servicios/control-interno'} >Control Interno</Link></DropdownItem>
          <DropdownItem ><Link className="p-4 font-bold text-lg " href={'/servicios/impuestos'} >Impuestos</Link></DropdownItem>
          <DropdownItem ><Link className="p-4 font-bold text-lg " href={'/servicios/legal'} >Legal</Link></DropdownItem>

        </DropdownMenu>
      </Dropdown>
      <Link className="p-4 font-bold text-lg " href={'/clientes'}>Clientes</Link>
      <Link className="p-4 font-bold text-lg " href={'/blog'}>Enlaces de Interés</Link>
      <Link passHref target='_blank' className="p-4 font-bold text-lg " href={'https://api.whatsapp.com/send?phone=51982056659'}>Contacto</Link>
    </Navbar>

  );
}
