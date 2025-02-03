"use client";

import React from "react";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import Image from "next/image";
import logo from "../../../public/next.svg";
import HomeIcon from "../../../public/icon-home.svg";
import MapIcon from "../../../public/icon-map.svg";
import CalendarIcon from "../../../public/icon-calendar.svg";

const links = [
  { name: "Inicio", href: "/", icon: HomeIcon },
  { name: "Contacto", href: "/contact", icon: MapIcon },
  { name: "Reserva tu cita", href: "/appointments", icon: CalendarIcon },
];

const NavbarComponent = () => {
  const pathname = usePathname();
  return (
    <header className="flex justify-between items-center m-5 ">
      <Link href="/">
        <Image
          src={logo}
          alt="Logo"
          layout="intrinsic"
          width={100}
          height="auto"
        />
      </Link>
      <nav>
        <ul className="flex flex-row justify-end items-center gap-5">
          {links.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className={clsx(
                  "h-[48px] grow mx-2 text-sm font-medium hover:border-b-4 hover:border-blue-600 flex items-center justify-center",
                  {
                    "border-b-4 border-blue-800": pathname === link.href,
                  }
                )}
              >
                <Image src={link.icon} alt={link.name} width={24} height={24} />
                <p className="hidden md:block">{link.name}</p>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default NavbarComponent;
