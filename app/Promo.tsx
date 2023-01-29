import Image from 'next/image';
import startup from '../public/startup.png'
export default function Promo() {
    return (
        <>
            <div className={"site-promo bg-gradient-to-r from-indigo-900 to-violet-900 py-24"}>
                <div className="container">

                    <div className="flex flex-row items-center content-center">
                        <div className="basis-1/2">
                            <h1 className={"text-5xl font-bold text-white leading-tight"}>
                                <span className={"block"}>Вас не находят в интернете?</span>
                                <span className={"block"}>Мы это исправим!</span>
                            </h1>
                            <p className={"text-2xl mt-6 text-white leading-tight"}>Наша компания специализируется на быстрых запусках
                                и продвижении товаров и услуг в сети интернет.</p>
                        </div>
                        <div className="basis-1/2">
                            <Image
                                alt="Запуск бизнеса в интернете"
                                src={startup}
                                placeholder="blur"
                                width={700}
                                height={475}
                            />
                        </div>
                    </div>

                </div>
            </div>

            <div className={"site-promo bg-blue-900 py-12"}>

            </div>
        </>

    )
}