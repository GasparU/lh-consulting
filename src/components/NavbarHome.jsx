'use client'
import { useState } from "react";

// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button, Navbar } from "@nextui-org/react";

import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@nextui-org/react";
import { ChevronDown, Lock, Activity, Flash, Server, TagUser, Scale } from "./Icons.jsx";
import { AcmeLogo } from "./AcmeLogo.jsx";

// const CustomLink = ({ href, title, className = "" }) => {

//   const router = usePathname();
//   return (
//     <Link href={href} className={`${className} relative group`}>
//       {title}

//       <span className={`h-[1px] inline-block bg-dark 
//           absolute left-0 -bottom-0.5 
//           group-hover:w-full transition-[width] ease duration-300 
//           ${router === href ? 'w-full' : 'w-0'}
//           dark:bg-light`}
//       >
//         &nbsp;
//       </span>

//     </Link>
//   )
// }


export default function App() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    "compras",
    "contabilidad",
    "control interno",
    "impuestos",
    "legal",
    "Log Out",
  ];

  const icons = {
    chevron: <ChevronDown fill="currentColor" size={16} />,
    scale: <Scale className="text-warning" fill="currentColor" size={30} />,
    lock: <Lock className="text-success" fill="currentColor" size={30} />,
    activity: <Activity className="text-secondary" fill="currentColor" size={30} />,
    flash: <Flash className="text-primary" fill="currentColor" size={30} />,
    server: <Server className="text-success" fill="currentColor" size={30} />,
    user: <TagUser className="text-danger" fill="currentColor" size={30} />,
  };

  return (
    // <div>
    //   <nav>
    //     <CustomLink href={"/servicios/compras"} title={"compras"} className='mr-4' />
    //     <CustomLink href={"/servicios/contabilidad"} title={"contabilidad"} className='mx-4' />
    //     <CustomLink href={"/servicios/control-interno"} title={"Control Interno"} className='ml-4' />
    //     <CustomLink href={"/servicios/impuestos"} title={"Impuestos"} className='mx-4' />
    //     <CustomLink href={"/servicios/legal"} title={"Legal"} className='mx-4' />
    //   </nav>

    // </div>
    // <Navbar className="flex items-center">
    //   <div>Imagen</div>
    //   <div className="flex flex-1"></div>
    //   <Link className="p-4" href={'/'}>Home</Link>
    //   <Dropdown backdrop="blur" >
    //     <DropdownTrigger>
    //       <Button
    //         color="light"
    //       >
    //         Servicios
    //       </Button>
    //     </DropdownTrigger>
    //     <DropdownMenu variant="faded" aria-label="Static Actions">
    //       <DropdownItem ><Link className="p-4" href={'/servicios/compras'}>Compras</Link></DropdownItem>
    //       <DropdownItem ><Link className="p-4" href={'/servicios/contabilidad'}>Contabilidad</Link></DropdownItem>
    //       <DropdownItem ><Link className="p-4" href={'/servicios/conttrol_interno'}>Control Interno</Link></DropdownItem>
    //       <DropdownItem ><Link className="p-4" href={'/servicios/impuestos'}>Impuestos</Link></DropdownItem>
    //       <DropdownItem ><Link className="p-4" href={'/servicios/legal'}>Legal</Link></DropdownItem>

    //     </DropdownMenu>
    //   </Dropdown>
    //   <Link className="p-4" href={'/clientes'}>Clientes</Link>
    //   <Link className="p-4" href={'/blog'}>Enlaces de Interés</Link>
    //   <Link className="p-4" href={'/contacto'}>Contacto</Link>
    // </Navbar>

    // <Navbar onMenuOpenChange={setIsMenuOpen}>
    //     <NavbarBrand>
    //       <AcmeLogo />
    //       <p className="font-bold text-inherit">ACME</p>
    //     </NavbarBrand>
    //   <NavbarContent className="hidden sm:flex gap-4" justify="center">
    //     <Dropdown>
    //       <NavbarItem>
    //         <DropdownTrigger>
    //           <Button
    //             disableRipple
    //             className="p-0 bg-transparent data-[hover=true]:bg-transparent"
    //             endContent={icons.chevron}
    //             radius="sm"
    //             variant="light"
    //           >
    //             Servicios
    //           </Button>
    //         </DropdownTrigger>
    //       </NavbarItem>
    //       <DropdownMenu
    //         aria-label="ACME features"
    //         className="w-[340px]"
    //         itemClasses={{
    //           base: "gap-4",
    //         }}
    //       >
    //         <DropdownItem
    //           key="autoscaling"
    //           description="ACME scales apps to meet user demand, automagically, based on load."
    //           startContent={icons.scale}
    //         >
    //           Impuestos
    //         </DropdownItem>
    //         <DropdownItem
    //           key="usage_metrics"
    //           description="Real-time metrics to debug issues. Slow query added? We’ll show you exactly where."
    //           startContent={icons.activity}
    //         >
    //           Compras
    //         </DropdownItem>
    //         <DropdownItem
    //           key="production_ready"
    //           description="ACME runs on ACME, join us and others serving requests at web scale."
    //           startContent={icons.flash}
    //         >
    //           Control
    //         </DropdownItem>
    //         <DropdownItem
    //           key="99_uptime"
    //           description="Applications stay on the grid with high availability and high uptime guarantees."
    //           startContent={icons.server}
    //         >
    //           Contabilidad
    //         </DropdownItem>
    //         <DropdownItem
    //           key="supreme_support"
    //           description="Overcome any challenge with a supporting team ready to respond."
    //           startContent={icons.user}
    //         >
    //           Legal
    //         </DropdownItem>
    //       </DropdownMenu>
    //     </Dropdown>
    //     <NavbarItem isActive>
    //       <Link href="#" aria-current="page">
    //         Clientes
    //       </Link>
    //     </NavbarItem>
    //     <NavbarItem>
    //       <Link color="foreground" href="#">
    //         Contacto
    //       </Link>
    //     </NavbarItem>
    //   </NavbarContent>
    // </Navbar>


    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <AcmeLogo />
          <p className="font-bold text-inherit">ACME</p>
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
            <DropdownItem>
              <Link href="/servicios/impuestos">Impuestos</Link >
            </DropdownItem>
            <DropdownItem>
              <Link href="/servicios/compras">Compras</Link >
            </DropdownItem>
            <DropdownItem>
              <Link href="/servicios/control-interno">Control</Link >
            </DropdownItem>
            <DropdownItem>
              <Link href="/servicios/contabilidad">Contabilidad</Link >
            </DropdownItem>
            <DropdownItem>
              <Link href="/servicios/legal">Legal</Link >
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <NavbarItem isActive>
          <Link href="clientes" aria-current="page">
            Clientes
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          {/* Investogar spnre isActive, foreground y aria-current */}
          <Link color="foreground" href="/" aria-current="page">
            Enlaces
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        <NavbarItem isActive>
          <Link href="/" aria-current="page">
            Inicio
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="/nosotros" aria-current="page">
            Nosotros
          </Link>
        </NavbarItem>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              className="w-full"
              href={`/servicios/${item === "control interno" ? "control-interno": item}`}
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
        <NavbarItem isActive>
          <Link href="/clientes" aria-current="page">
            Clientes
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="/contacto" aria-current="page">
            Contacto
          </Link>
        </NavbarItem>


      </NavbarMenu>
    </Navbar>

  );
}
