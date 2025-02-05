"use client";

import React from "react";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import Image from "next/image";

const links = [
  { name: "Inicio", href: "/", icon: "/icon-home.svg" },
  { name: "Contacto", href: "/contact", icon: "/icon-map.svg" },
  {
    name: "Reserva tu cita",
    href: "/appointments",
    icon: "/icon-calendar.svg",
  },
];

const NavbarComponent = () => {
  const pathname = usePathname();

  return (
    <header className="flex flex-col md:flex-row justify-between items-center shadow">
      <Link href="/">
        <Image
          src="/next.svg"
          alt="Logo"
          width={100}
          height={50}
          className="m-5"
          unoptimized
        />
      </Link>

      <nav className="fixed bottom-0 w-full md:relative md:w-auto bg-white">
        <ul className="flex flex-row md:justify-end justify-around items-center gap-5 p-3">
          {links.map((link) => (
            <li key={link.name} className="flex items-center">
              <Link
                href={link.href}
                className={clsx(
                  "h-[48px] flex items-center justify-center px-4 py-2",
                  {
                    "border-b-4 border-blue-800": pathname === link.href,
                  }
                )}
              >
                {/* Contenedor de ícono: Solo visible en móviles */}
                <span className="block md:hidden">
                  <Image
                    src={link.icon}
                    alt={link.name}
                    width={24}
                    height={24}
                    unoptimized
                  />
                </span>

                {/* Contenedor de texto: Solo visible en pantallas md o más grandes */}
                <span className="hidden md:block">{link.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default NavbarComponent;
