'use client'
import React from "react";

import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, DropdownTrigger, DropdownMenu, DropdownItem, Dropdown } from "@nextui-org/react";
import Image from "next/image";
import {FaMoneyBillTrendUp, FaChartLine, FaListCheck, FaCartShopping, FaLandmark, FaAngleDown} from 'react-icons/fa6';

export default function App() {
  const menuItems = [
    "Inicio",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];
  const icons = {
    taxes: <FaMoneyBillTrendUp className="text-warning" fill="currentColor" size={30} />,
    service: <FaAngleDown/>,
    account: <FaChartLine className="text-warning" fill="currentColor" size={30} />,
    control: <FaListCheck className="text-success" fill="currentColor" size={30} />,
    shopping: <FaCartShopping className="text-primary" fill="currentColor" size={30} />,
    legal: <FaLandmark className="text-danger" fill="currentColor" size={30} />,
  };
  return (
    <Navbar disableAnimation isBordered >
      <NavbarContent className="sm:hidden" justify="start">

        <NavbarMenuToggle />
      </NavbarContent>
      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          {/* Logo oculto, se muestra en celulares */}
          <Image src={'/logo.jpg'} width={160} height={58} alt="LH-Consulting" />
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-4" >
        <NavbarBrand>
          {/* Logo que se muestra en pantallas grandes */}
          <Image src={'/logo.jpg'} width={160} height={58} alt="LH-Consulting" />
        </NavbarBrand>
        <div className="flex gap-10">
          <NavbarItem>
            <Link color="foreground" href="/">
              Inicio
            </Link>
          </NavbarItem>
          <NavbarItem isActive>
            <Link href="/nosotros" className="p-0 bg-transparent data-[hover=true]:bg-transparent" >
              Nosotros
            </Link>
          </NavbarItem>
          <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
            <Button
                disableRipple
                className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                endContent={icons.service}
                radius="sm"
                variant="light"
              >
                Servicios
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            // aria-label="ACME features"
            className="w-[340px]"
            itemClasses={{
              base: "gap-4",
            }}
          >
            <DropdownItem
              key="autoscaling"
              // description="ACME scales apps to meet user demand, automagically, based on load."
            startContent={icons.taxes}
            >
              <Link href="/servicios/impuestos">
              Impuestos
              </Link>
            </DropdownItem>
            <DropdownItem
              key="usage_metrics"
              // description="Real-time metrics to debug issues. Slow query added? We’ll show you exactly where."
            startContent={icons.account}
            >
              <Link href="/servicios/contabilidad">
              Contabilidad
              </Link>
            </DropdownItem>
            <DropdownItem
              key="production_ready"
              // description="ACME runs on ACME, join us and others serving requests at web scale."
            startContent={icons.control}
            >
              <Link href="/servicios/control-interno">
              Control Interno
              </Link>
            </DropdownItem>
            <DropdownItem
              key="99_uptime"
              // description="Applications stay on the grid with high availability and high uptime guarantees."
            startContent={icons.shopping}
            >
              <Link href="/servicios/compras">
              Compras
              </Link>
            </DropdownItem>
            <DropdownItem
              key="supreme_support"
              // description="Overcome any challenge with a supporting team ready to respond."
            startContent={icons.legal}
            >
              <Link href="/servicios/legal">
              Legal
              </Link>
            </DropdownItem>
          </DropdownMenu>
          </Dropdown>
        </div>

      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              // className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
