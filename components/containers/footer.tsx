import React from 'react';
import Image from "next/image";
import { LogoCopy, IconoFigma, IconoGithub } from "@/icons/icons";
import Link from 'next/link';

export default function Footer() {
  return (
    <div
      id="contacto" className=" relative w-screen grid-rows-2 h-[350px] bg-color4 shadow-lg justify-center flex flex-col items-center"
    >
      <div className="flex flex-wrap justify-around w-full py-8">
        {/* 1 */}
        <div className='mb-4'>
          <Image
            src="/logo/iconoparapestananaranja.svg"
            alt="logo"
            width={145}
            height={163}
            priority={true}
          />
        </div>
        {/* 2 */}
        <div className="flex flex-col items-start mb-4">
          <Link href="#" className="text-orange-400 text-2xl font-medium mb-2">Nosotros</Link>
          <Link href="#" className="text-black text-lg font-normal mb-1">Quienes somos</Link>
          <Link href='#' className="text-black text-lg font-normal mb-1">Como funciona</Link>
        </div>
        {/* 3 */}
        <div className="flex flex-col items-start mb-4">
          <Link href="#" className="text-orange-400 text-2xl font-medium mb-2">Servicios</Link>
          <Link href="#" className="text-black text-lg font-normal mb-1">Visitas a domicilio</Link>
          <Link href="#" className="text-black text-lg font-normal mb-1">Cuidado de mascota</Link>
          <Link href="#" className="text-black text-lg font-normal mb-1">Paseos</Link>
        </div>
        {/* 4 */}
        <div className="flex flex-col items-start mb-4">
          <Link href="#" className="text-orange-400 text-2xl font-medium mb-2" >Ayuda</Link>
          <Link href="#" className="text-black text-lg font-normal mb-1">Preguntas frecuentes</Link>
          <Link href="#" className="text-black text-lg font-normal mb-1">Terminos y condiciones</Link>
          <Link href="#" className="text-black text-lg font-normal mb-1">Politicas de privacidad</Link>
        </div>
        {/* 5 */}
        <div className="flex flex-col items-start mb-4">
          <Link href="#" className="text-orange-400 text-2xl font-medium mb-2">Contacto</Link>
          <Link href="#" className="text-black text-lg font-normal mb-1">+54 9 11 0000-0000</Link>
          <div className="flex space-x-2">
            <div><IconoGithub width={32}></IconoGithub></div>
            <div><IconoFigma width={32}></IconoFigma></div>
          </div>
        </div>
      </div>
      <div className="bg-color1 w-screen p-[50px] flex justify-center items-center h-[50px]">
        <p className='text-color4 text-center text-[20px]'>
          2024
          <span className="inline-block mx-1">
            <LogoCopy width={10} height={10} />
          </span>
          HappyPaws. Todos los derechos reservados
        </p>
      </div>
    </div>
  );
}