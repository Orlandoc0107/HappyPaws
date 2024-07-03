import React from 'react'

export default function CardHome() {
  return (
    <div className="sm:h-[640px] md:h-[768px] lg:h-[1024px] xl:h-[1280px] 2xl:h-[1056px] top-[90px] w-screen bg-cover bg-homeimagen relative bg-co-repeat bg-center flex-shrink-0 filter drop-shadow[0px 2px 8x rgba(0,0,0,0.25] z-0">
      <div className="absolute w-[530px] h-[310px] mt-[150px] ml-[791px] gap-[48px] text-color4 text-[58px] font-bold">
        <span>Tu compañero feliz,</span>
        <br />
        <span>siempre cuidado</span>
        <div className='text-[36px] mt-10 font-medium'>
          <span>Donde el amor y la atención se</span>
          <br />
          <span>unen para el bienestar de tu</span>
          <br />
          <span>mascota</span>
        </div>
      </div>
    </div>
  )
}
