'use client'
import React from 'react';
import Image from 'next/image';
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"



export default function Login() {
    const { data: session } = useSession()
    // 
    return (
        <div className="flex flex-row gap-2.5 justify-center items-center mr-4">
            <div className="flex gap-2">
                <div className="flex gap-2 justify-center justify-items-center items-center">
                    <div className="flex gap-2 items-center">
                        <Avatar className="w-14 h-14 sm:w-14 sm:h-14 lg:w-14 lg:h-14">
                            <AvatarImage src={session?.user.photo || '/perfil/perfilusuario.png'} />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                    </div>
                    <div className="text-black self-center w-[198px] h-14 text-xl font-normal justify-items-center content-center">
                        <p>
                            {session?.user.firstName} {session?.user.lastName}
                        </p>
                    </div>

                </div>
            </div>
            <div>
                <Menu as="div">
                    <div>
                        <Menu.Button>
                            <div className="w-14 h-14 p-4 bg-orange-400 rounded-[50px] justify-center items-center gap-2.5 inline-flex">
                                {/* botom */}
                                <div className="w-6 h-6 relative">
                                    <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <g id="Component 7">
                                            <path
                                                id="Vector"
                                                d="M12 18.9238C11.7369 18.9238 11.4903 18.883 11.2601 18.8014C11.0299 18.7199 10.8161 18.5798 10.6188 18.3812L1.5426 9.30493C1.18087 8.9432 1 8.48281 1 7.92377C1 7.36472 1.18087 6.90433 1.5426 6.5426C1.90433 6.18087 2.36472 6 2.92377 6C3.48281 6 3.9432 6.18087 4.30493 6.5426L12 14.2377L19.6951 6.5426C20.0568 6.18087 20.5172 6 21.0762 6C21.6353 6 22.0957 6.18087 22.4574 6.5426C22.8191 6.90433 23 7.36472 23 7.92377C23 8.48281 22.8191 8.9432 22.4574 9.30493L13.3812 18.3812C13.1839 18.5785 12.9701 18.7186 12.7399 18.8014C12.5097 18.8843 12.2631 18.9251 12 18.9238Z"
                                                fill="white"
                                            />
                                        </g>
                                    </svg>
                                </div>
                            </div>
                        </Menu.Button>
                    </div>
                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >
                        <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg border-color2 border-2 ring-1 ring-black/5 focus:outline-none">
                            <div className="px-1 py-1 ">
                                <Menu.Item>
                                    {({ active }) => (
                                        <Link
                                            href="/dashboard"
                                            className={`${active ? "bg-color2 text-white" : "text-gray-900"
                                                } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                        >
                                            Perfil
                                        </Link>
                                    )}
                                </Menu.Item>
                                <Menu.Item>
                                    {({ active }) => (
                                        <button
                                            className={`${active ? "bg-color2 text-white" : "text-gray-900"
                                                } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                        >
                                            Notificaciones
                                        </button>
                                    )}
                                </Menu.Item>
                                <Menu.Item>
                                    {({ active }) => (
                                        <button
                                            className={`${active ? "bg-color2 text-white" : "text-gray-900"
                                                } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                        >
                                            Mensajes
                                        </button>
                                    )}
                                </Menu.Item>

                                <Menu.Item>
                                    {({ active }) => (
                                        <button
                                            onClick={() => signOut()}
                                            className={`${active ? "bg-color2 text-white" : "text-gray-900"
                                                } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                        >
                                            Cerrar Sesión
                                        </button>
                                    )}
                                </Menu.Item>
                            </div>
                        </Menu.Items>
                    </Transition>
                </Menu>
            </div>
        </div>
    );
}
