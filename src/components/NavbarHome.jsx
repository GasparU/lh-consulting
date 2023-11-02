'use client'
// import { Accordion, AccordionItem } from "@nextui-org/react";
import Link from "next/link";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button, Navbar } from "@nextui-org/react";


export default function App() {

  return (
    <Navbar className="flex items-center">
      <div>Imagen</div>
      <div className="flex flex-1"></div>
      <Link className="p-4" href={'/'}>Home</Link>
      <Dropdown backdrop="blur" >
        <DropdownTrigger>
          <Button
            color="light"
          >
            Servicios
          </Button>
        </DropdownTrigger>
        <DropdownMenu variant="faded" aria-label="Static Actions">
          <DropdownItem ><Link className="p-4" href={'/servicios/compras'}>Compras</Link></DropdownItem>
          <DropdownItem ><Link className="p-4" href={'/servicios/contabilidad'}>Contabilidad</Link></DropdownItem>
          <DropdownItem ><Link className="p-4" href={'/servicios/control-interno'}>Control Interno</Link></DropdownItem>
          <DropdownItem ><Link className="p-4" href={'/servicios/impuestos'}>Impuestos</Link></DropdownItem>
          <DropdownItem ><Link className="p-4" href={'/servicios/legal'}>Legal</Link></DropdownItem>

        </DropdownMenu>
      </Dropdown>
      <Link className="p-4" href={'/clientes'}>Clientes</Link>
      <Link className="p-4" href={'/blog'}>Enlaces de Interés</Link>
      <Link className="p-4" href={'/contacto'}>Contacto</Link>
    </Navbar>

  );
}
