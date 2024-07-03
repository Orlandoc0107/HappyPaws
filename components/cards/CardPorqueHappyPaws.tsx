import React from 'react';
import { LogoCopyVerde } from "@/icons/icons";

export default function CardPorqueHappyPaws() {
  return (
    <div id="nosotros" className="bg-color7 p-2 mb-24 mt-5">
      <div className="px-6 md:px-24">
        <h1 className="text-left mt-8 mb-16 text-black text-3xl font-medium">
          ¿Por Qué HappyPaws?
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Sección 1 */}
          <div className="bg-white rounded-2xl border border-orange-400 p-6">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2.5">
                <div className="text-black text-lg font-medium">
                  Paseo
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <LogoCopyVerde className="relative" width={30}/>
                <div className="text-neutral-600 text-base font-normal">
                Nos aseguramos que las mascotas reciban el ejercicio y la estimulación mental necesarios para su bienestar.
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <LogoCopyVerde width={30} />
                <div className="text-neutral-600 text-base font-normal">
                  Contamos con paseadores capacitados que conocen las necesidades de diferentes razas y tipos de mascotas.
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <LogoCopyVerde width={30} />
                <div className="text-neutral-600 text-base font-normal">
                  Flexibilidad en los horarios de los paseos, permitiendo a los dueños de mascotas elegir la frecuencia y duración de los paseos según las necesidades específicas de sus animales y sus propias agendas.
                </div>
              </div>
            </div>
          </div>

          {/* Sección 2 */}
          <div className="bg-white rounded-2xl border border-orange-400 p-6">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2.5">
                
                <div className="text-black text-lg font-medium">
                  Alojamiento
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <LogoCopyVerde width={30} />
                <div className="text-neutral-600 text-base font-normal">
                Ofrecemos un entorno seguro y cómodo para que las mascotas se queden mientras sus dueños están fuera.
                </div>
              </div>
              
              <div className="flex items-center gap-2.5">
                <LogoCopyVerde width={30} />
                <div className="text-neutral-600 text-base font-normal">
                  Los dueños de mascotas pueden tener tranquilidad sabiendo que sus animales están bajo supervisión las 24 horas del día.
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <LogoCopyVerde width={30} />
                <div className="text-neutral-600 text-base font-normal">
                  Ofrecemos actividades y entretenimiento adecuados para las mascotas alojadas, asegurando que se mantengan activas y felices durante su estancia.
                </div>
              </div>
            </div>
          </div>

          {/* Sección 3 */}
          <div className="bg-white rounded-2xl border border-orange-400 p-6">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2.5">
                
                <div className="text-black text-lg font-medium">
                  Visitas a domicilio
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <LogoCopyVerde width={30} />
                <div className="text-neutral-600 text-base font-normal">
                Nuestras visitas permiten que las mascotas permanezcan en un entorno familiar mientras sus dueños están fuera.
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <LogoCopyVerde width={30} />
                <div className="text-neutral-600 text-base font-normal">
                  Los cuidadores proporcionan atención individualizada a cada mascota, incluyendo alimentación, hidratación, limpieza y tiempo de juego, según las instrucciones específicas de los propietarios.
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <LogoCopyVerde width={30} />
                <div className="text-neutral-600 text-base font-normal">
                  Los dueños de mascotas pueden recibir actualizaciones regulares y fotos de las visitas a domicilio.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
