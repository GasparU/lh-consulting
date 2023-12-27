'use client'
import { useState } from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@nextui-org/react";
import { ChevronDown} from "./Icons.jsx";
import { AcmeLogo } from "./AcmeLogo.jsx";

export default function App() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    "compras",
    "contabilidad",
    "control interno",
    "impuestos",
    "legal"
  ];

  const icons = {
    chevron: <ChevronDown fill="currentColor" size={16} />
  };

  return (
 

    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <AcmeLogo />     
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem isActive>
          <Link href="/" aria-current="page">
            Inicio
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="nosotros" aria-current="page">
            Nosotros
          </Link>
        </NavbarItem>
        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Button
                disableRipple
                className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                endContent={icons.chevron}
                radius="sm"
                variant="light"
              >
                Servicios
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label="ACME features"
            className="w-[340px]"
            itemClasses={{
              base: "gap-4",
            }}
          >
            <DropdownItem >
              <Link href="/servicios/impuestos" color="foreground">Impuestos</Link >
            </DropdownItem>
            <DropdownItem>
              <Link href="/servicios/contabilidad" color="foreground">Contabilidad</Link >
            </DropdownItem>
            <DropdownItem>
              <Link href="/servicios/control-interno" color="foreground">Control Interno</Link >
            </DropdownItem>
            <DropdownItem>
              <Link href="/servicios/compras" color="foreground">Compras</Link >
            </DropdownItem>
            <DropdownItem>
              <Link href="/servicios/legal" color="foreground">Legal</Link >
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <NavbarItem isActive>
           {/* Investogar spnre isActive, foreground y aria-current */}
          <Link href="clientes" aria-current="page" color="foreground">
            Clientes
          </Link>
        </NavbarItem>
        {/* <NavbarItem isActive>
         
          <Link color="foreground" href="/" aria-current="page" >
            Enlaces
          </Link>
        </NavbarItem> */}
      </NavbarContent>
      <NavbarMenu>
        <NavbarItem isActive>
          <Link href="/" aria-current="page" color="foreground" >
            Inicio
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="/nosotros" aria-current="page" color="foreground">
            Nosotros
          </Link>
        </NavbarItem>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`} isActive>
            <Link
              color="foreground"
              className="ml-10"
              href={`/servicios/${item === "control interno" ? "control-interno": item}`}
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
        <NavbarItem isActive>
          <Link href="/clientes" aria-current="page" color="foreground"> 
            Clientes
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="/contacto" aria-current="page" color="foreground">
            Contacto
          </Link>
        </NavbarItem>


      </NavbarMenu>
    </Navbar>

  );
}
