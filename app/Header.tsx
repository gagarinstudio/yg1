import Image from 'next/image';
import Navigation from "@/app/Navigation";

export default function Header() {
    return (
        <>
            <header className={"relative bg-black py-5 z-10"}>
                <div className="container m-auto">
                    <Image
                        src="/logo.svg"
                        alt="Логотип Студии Гагарина"
                        width={90}
                        height={22}
                    />
                </div>

                <Navigation/>
            </header>

        </>

    )
}