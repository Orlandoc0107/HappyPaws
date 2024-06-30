'use client'
import React from 'react';
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Fragment, useEffect, useRef, useState } from "react";
import Login from "@/components/butttons/login";


export default function Nav() {
  const { data: session } = useSession()

  if (session) {
    return (
      <div>
        <Login />
      </div>
    )
  }
  if (!session) {
    return (
      <div className="flex flex-row gap-2.5 justify-center items-center">
        <div className="w-[180px] h-[55px] px-6 py-4   justify-center items-center inline-flex text-color2 hover:bg-color2 border-color2 hover:text-color3 border-2 rounded-xl">
          <button onClick={() => signIn()} className="text-xl font-medium">
            Iniciar Sesion
          </button>
        </div>
        <div className="w-[130px] h-[55px] px-6 py-4 bg-color1  justify-center items-center inline-flex text-color4 hover:bg-color5 rounded-xl">
          <Link href="/auth/register"
            className="text-white
text-xl
font-medium">
            Registrar
          </Link>
        </div>
      </div>
    )
  }
}
