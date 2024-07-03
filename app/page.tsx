import Image from "next/image";
import Header from "@/components/containers/header";
import Footer from "@/components/containers/footer";
import CardHome from "@/components/cards/Cardhome";
import CardServicios from "@/components/cards/CardServicios";
import ComoFunciona from "@/components/cards/ComoFunciona";
import Carouselclientes from "@/components/carrusels/clientesfelices/clients";
import CardPorqueHappyPaws from "@/components/cards/CardPorqueHappyPaws"

export default function Home() {
  return (
    <div className="w-screen flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow bg-color7">
        <CardHome />
        <CardServicios />
        <ComoFunciona />
        <Carouselclientes />
        <CardPorqueHappyPaws />
      </main>
      <Footer />
    </div>
  );
}
