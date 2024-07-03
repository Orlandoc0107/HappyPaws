import React from 'react';
import Image from "next/image";

// Datos de servicios
const servicios = [
    {
        title: "Paseos",
        description: "Nos aseguramos de que tu compañero reciba el ejercicio para mantenerse feliz y saludable con paseadores de confianza.",
        image: "/servicios/1.png"
    },
    {
        title: "Alojamiento",
        description: "Nos encargamos de proporcionar un ambiente cálido y cómodo para tu amigo peludo. Con cuidadores amables y atención personalizada.",
        image: "/servicios/2.png"
    },
    {
        title: "Visitas a Domicilios",
        description: "Nuestros cuidadores expertos se desplazan hasta tu hogar para alimentar, jugar y mimar a tu mascota.",
        image: "/servicios/3.png"
    }
];

// Componente para la tarjeta de servicio
const ServicioCard: React.FC<{ servicio: { title: string; description: string; image: string; } }> = ({ servicio }) => (
    <div className="cursor-pointer w-full md:w-[380px] h-[400px] shadow-2xl bg-white rounded-2xl flex-col justify-start items-center border-2 m-4">
        <Image width={380} height={187} alt={servicio.title} src={servicio.image} />
        <div className="p-5 flex-col justify-start items-start gap-2.5 flex">
            <div className="flex-col justify-start items-start gap-2.5 flex">
                <div className="text-black text-[22px] font-medium">
                    <p className="text-black text-[22px] font-medium">
                        {servicio.title}
                    </p>
                </div>
            </div>
            <div className="text-black text-lg font-normal">
                <p>{servicio.description}</p>
            </div>
        </div>
    </div>
);

export default function CardServicios() {
    return (
        <div id="servicios" className='bg-color7 p-2 w-screen mt-20'>
            <h1 className='text-[38px] text-right px-4 md:px-24 text-black md:text-[38px] font-medium'>Nuestros servicios</h1>
            {/* cards */}
            <div className='grid grid-flow-row-dense grid-cols-1 md:grid-cols-3 justify-around p-[20px] md:p-[80px]'>
                {servicios.map((servicio, index) => (
                    <ServicioCard key={index} servicio={servicio} />
                ))}
            </div>
        </div>
    )
}
