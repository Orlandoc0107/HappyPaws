import React from 'react';
import { IconoLupa, IconoClick, IconoCalendario, IconoCorazon } from "@/icons/icons";

interface InterfaceComoFunciona {
    title: string;
    description: string;
    icon: any;
    bgColor: any;
}

export default function ComoFunciona() {
    return (
        <div id="comofunciona" className="bg-color7 py-12">
            <div className="text-center px-6 md:px-24">
                <h1 className="text-black text-3xl md:text-[38px] font-medium  text-left">
                    ¿Cómo Funciona?
                </h1>
            </div>
            <div className="flex flex-col md:flex-row justify-around p-6 md:p-[80px] space-y-6 md:space-y-0">
                <Card 
                    title="Busca lo que necesitas"
                    description="Hace una búsqueda personalizada según tus necesidades y las de tu mascota"
                    icon={<IconoLupa />}
                    bgColor="bg-orange-400"
                />
                <Card 
                    title="Encuentra el cuidador perfecto"
                    description="Lee las reseñas, ve las valoraciones y encuentra el perfil que se adapte a lo que buscas"
                    icon={<IconoClick />}
                    bgColor="bg-color1"
                />
                <Card 
                    title="Reserva"
                    description="Reserva y contactate con el cuidador pet sitter"
                    icon={<IconoCalendario />}
                    bgColor="bg-orange-400"
                />
                <Card 
                    title="Disfruta"
                    description="Deja tu mascota en las mejores manos y relájate"
                    icon={<IconoCorazon />}
                    bgColor="bg-color1"
                />
            </div>
        </div>
    );
}

const Card = ({ title, description, icon, bgColor }: InterfaceComoFunciona) => {
    return (
        <div className="w-screen max-w-xs mx-auto flex-col justify-start items-center inline-flex p-2 ">
            <div className="self-stretch h-[330px] px-2.5 pt-6 pb-12 bg-white rounded-[10px] border border-emerald-800 flex-col justify-start items-start flex">
                <div className="self-stretch p-[5px] justify-center items-center gap-2.5 inline-flex">
                    <div className="grow shrink basis-0 text-center text-black text-[22px] font-medium">
                        {title}
                    </div>
                </div>
                <div className="self-stretch p-[5px] justify-center items-center gap-2.5 inline-flex">
                    <div className="grow shrink basis-0 text-center text-black text-lg font-normal">
                        {description}
                    </div>
                </div>
            </div>
            <div className={`p-4 ${bgColor} rounded-[50px] justify-center items-center gap-2.5 inline-flex relative bottom-6`}>
                <div className="justify-center items-center gap-2.5 flex">
                    <div className="w-6 h-6 relative">
                        {icon}
                    </div>
                </div>
            </div>
        </div>
    );
};
