import Image from "next/image";
import Header from "@/components/containers/header";
import Footer from "@/components/containers/footer";
import RegisterUser from "@/components/forms/registerUser"


export default function Home() {
    return (
        <div className="w-screen flex flex-col min-h-screen">
            <Header />
            <main className="bg-register bg-cover bg-center mt-24 p-4 md:p-8 lg:p-12">
                <div className="mt-20 mb-20 mx-auto w-full max-w-lg lg:max-w-2xl p-4 md:p-8 bg-white rounded-2xl shadow-sm backdrop-blur-[25px] 2xl:ml-36 2xl:h-[1262px] flex-col 2xl:justify-start items-start gap-[50px] inline-flex">
                    <RegisterUser />
                </div>
            </main>
            <Footer />
        </div>
    );
}
