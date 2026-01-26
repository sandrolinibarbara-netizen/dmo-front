'use client'
import Link from "next/link";
import {Hamburger} from "@/app/_components/_icons/Hamburger";
import {useState} from "react";
import {Close} from "@/app/_components/_icons/Close";
import Image from "next/image";
import {Search} from "@/app/_components/_icons/Search";
import {Cart} from "@/app/_components/_icons/Cart";

export default function Menu({links} : {links:any}) {

    const [showMenu, setShowMenu] = useState<string>('initial');

    return(
        <>
            <header className="w-full fixed bg-corpo-blue z-110 top-0 h-[79px]">
                <div className="w-[90%] h-full mx-auto p-0.5 text-white flex items-center justify-between">
                    <Link
                        href="/"
                        onNavigate={() => setShowMenu('close')}
                    >
                        <Image
                            src='/logo.webp'
                            alt="visit-cremona-logo"
                            width={500}
                            height={500}
                            className="h-[56px] w-auto"
                        />
                    </Link>
                    <div className="flex gap-4 items-center">
                        <Link href='/experiences' className="text-black transition duration-500 hover:bg-corpo-orange bg-soft-orange rounded-full px-4 py-3">Esperienze</Link>
                        <div className="flex relative items-center">
                            <Search className="text-gray-600 absolute left-[16px] w-5 h-5"/>
                            <input type="text" placeholder="Cerca eventi o esperienze" className="w-[272px] py-3 pr-8 pl-12 rounded-full bg-white text-black"/>
                        </div>
                        <Cart className="cursor-pointer w-8 h-8"/>
                        <Hamburger className="w-8 h-8 cursor-pointer" onClick={() => setShowMenu('open')}/>
                        <Image src="/images/it.png" className="cursor-pointer rounded-full w-6 h-6" alt="italian flag" width={64} height={64}/>
                    </div>
                </div>
            </header>

            <div
                className={`overlay ${showMenu === 'open' ? 'visible' : ''}`}>
            </div>

            <div
                className={`${showMenu === 'open' ? 'appear' : showMenu === 'close' ? 'disappear' : 'w-0'} max-w-[350px] h-screen fixed bg-white z-200 right-0 top-0`}>
                <div className="w-full px-8 pb-8 pt-4 flex items-center justify-between">
                    <Image
                        src='/logo-only-icon.png'
                        alt="visit-cremona-logo"
                        width={500}
                        height={500}
                        className="h-[100px] w-auto"
                    />
                    <Close className="w-8 h-8 cursor-pointer" onClick={() => setShowMenu('close')}/>
                </div>
                <nav className="border-t border-black/50 w-[90%] mx-auto text-black/50 pt-3">
                    <ul className="pl-2">
                        <li className="py-3">
                            <Link
                                href="/"
                                onNavigate={() => setShowMenu('close')}
                            >
                                Homepage
                            </Link>
                        </li>
                        <li className="py-3">
                            <Link
                                href="/discover"
                                onNavigate={() => setShowMenu('close')}
                            >
                                Scopri il territorio
                            </Link>
                        </li>
                        <li className="py-3">
                            <Link
                                href="/discover/cycling"
                                onNavigate={() => setShowMenu('close')}
                            >
                                Cicloturismo
                            </Link>
                        </li>
                        <li className="py-3">
                            <Link
                                href="/discover/luthiery"
                                onNavigate={() => setShowMenu('close')}
                            >
                                Musica e liuteria
                            </Link>
                        </li>
                        <li className="py-3">
                            <Link
                                href="/partner"
                                onNavigate={() => setShowMenu('close')}
                            >
                                Partner
                            </Link>
                        </li>
                        <li className="py-3">
                            <Link
                                href="/who"
                                onNavigate={() => setShowMenu('close')}
                            >
                                Chi siamo
                            </Link>
                        </li>
                        <li className="py-3">
                            <Link
                                href="/accessibility"
                                onNavigate={() => setShowMenu('close')}
                            >
                                Dichiarazione di accessibilità
                            </Link>
                        </li>
                        <li className="py-3"><a target="_blank" href={links['amministrazione_trasparente']}>Amministrazione
                            trasparente</a></li>
                        <li className="py-3">
                            <Link
                                href="/contact"
                                onNavigate={() => setShowMenu('close')}
                            >
                                Contatti
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    )
}