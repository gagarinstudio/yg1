import Link from "next/link";

export default function Navigation() {
    return (
        <>
            <nav className={"site-navigation"}>
                <ul>
                    <li>
                        <Link href="/">Быстрые решения</Link>
                    </li>
                    <li>
                        <Link href="/">Реклама в интернете</Link>
                    </li>
                    <li>
                        <Link href="/">Поисковая оптимизация</Link>
                    </li>
                    <li>
                        <Link href="/">Услуги</Link>
                    </li>
                    <li>
                        <Link href="/">Поехали!</Link>
                    </li>
                </ul>
            </nav>
        </>

    )
}