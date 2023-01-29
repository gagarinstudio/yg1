import Header from "@/app/Header";
import Promo from "@/app/Promo";


export default function Home() {
    return (
        <>
            <Header/>

            <Promo/>

            <div className="flex relative z-10">
                <h1 className="text-3xl font-bold underline text-white">
                    Hello, Next.js!
                </h1>
            </div>
        </>

    )
}