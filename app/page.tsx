import Image from "next/image";
import Header from "@/components/containers/header";
import Footer from "@/components/containers/footer";


export default function Home() {
  return (
    <div className="w-screen flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">

      </main>
      <Footer />
    </div>
  );
}
