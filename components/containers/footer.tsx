import React from 'react';
import Image from 'next/image';
import { LogoCopy, IconoFigma, IconoGithub } from '@/icons/icons';
import Link from 'next/link';

export default function Footer() {
  return (
    <div id="contacto" className="shadow-2xl shadow-black relative bg-color4">
      <div className="container mx-auto py-8 px-4 lg:px-0 grid grid-cols-1 lg:grid-cols-5 gap-4">
        {/* Logo */}
        <div className="flex justify-center mb-4 lg:mb-0">
          <Image
            src="/logo/iconoparapestananaranja.svg"
            alt="logo"
            width={145}
            height={163}
            priority={true}
          />
        </div>
        {/* Secciones */}
        <div className="flex flex-col items-start mb-4 lg:mb-0">
          <Link href="/#nosotros" className="text-orange-400 text-2xl font-medium mb-2">Nosotros</Link>
          <Link href="/#servicios" className="text-black text-lg font-normal mb-1">Quiénes somos</Link>
          <Link href='/#comofunciona' className="text-black text-lg font-normal mb-1">Cómo funciona</Link>
        </div>
        <div className="flex flex-col items-start mb-4 lg:mb-0">
          <Link href="/#servicios" className="text-orange-400 text-2xl font-medium mb-2">Servicios</Link>
          <Link href="#" className="text-black text-lg font-normal mb-1">Visitas a domicilio</Link>
          <Link href="#" className="text-black text-lg font-normal mb-1">Cuidado de mascota</Link>
          <Link href="#" className="text-black text-lg font-normal mb-1">Paseos</Link>
        </div>
        <div className="flex flex-col items-start mb-4 lg:mb-0">
          <Link href="#" className="text-orange-400 text-2xl font-medium mb-2">Ayuda</Link>
          <Link href="#" className="text-black text-lg font-normal mb-1">Preguntas frecuentes</Link>
          <Link href="#" className="text-black text-lg font-normal mb-1">Términos y condiciones</Link>
          <Link href="#" className="text-black text-lg font-normal mb-1">Políticas de privacidad</Link>
        </div>
        <div className="flex flex-col items-start mb-4 lg:mb-0">
          <Link href="#" className="text-orange-400 text-2xl font-medium mb-2">Contacto</Link>
          <Link href="#" className="text-black text-lg font-normal mb-1">+54 9 11 0000-0000</Link>
          <div className="flex space-x-2 mt-2">
            <div className='w-[32px]'><IconoGithub></IconoGithub></div>
            <div className='w-[32px]'><IconoFigma ></IconoFigma></div>
          </div>
        </div>
      </div>
      {/* Derechos de autor */}
      <div className="bg-color1 py-4 text-center">
        <p className="text-color4 text-sm lg:text-base">
          &copy; 2024 <span className="inline-block mx-1"><LogoCopy width={10} height={10} /></span> HappyPaws. Todos los derechos reservados
        </p>
      </div>
    </div>
  );
}
