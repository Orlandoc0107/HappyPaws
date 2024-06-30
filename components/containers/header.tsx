import React from 'react';
import Image from "next/image";
import Link from "next/link";
import { LogoOne } from "@/icons/icons";
import Nav from "@/components/containers/nav";

interface NavLinkProps {
    href: string; // Tipo explícito para href
    children: React.ReactNode; // Tipo explícito para children
}

export default function Header() {
    return (
        <div
            className='flex px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 bg-color4 h-16 sm:h-20 lg:h-24 w-screen shadow-md justify-between items-center fixed top-0 z-50'>
            <div className="py-75 w-[350px] h-[60px] justify-center items-center inline-flex">
                <LogoOne className='w-full h-auto object-contain'></LogoOne>
            </div>
            <div className="hidden sm:flex justify-between items-center space-x-6 md:space-x-8">
                <NavLink href="/#nosotros">Nosotros</NavLink>
                <NavLink href="/#servicios">Servicios</NavLink>
                <NavLink href="/#contacto">Contacto</NavLink>
            </div>
            <div className="px-4 sm:px-6 lg:px-8">
                <Nav />
            </div>
        </div>
    )
}

// Componente para los enlaces responsivos
function NavLink({ href, children }: NavLinkProps) {
    return (
        <Link href={href} className="hover:text-color2 text-black text-lg sm:text-xl lg:text-2xl font-normal">
            {children}
        </Link>
    );
}