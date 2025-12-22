'use client'
import Link from "next/link";
import {Hamburger} from "@/app/_components/_icons/Hamburger";
import {useState} from "react";
import {Close} from "@/app/_components/_icons/Close";
import Image from "next/image";

export default function Menu({links} : {links:any}) {

    const [showMenu, setShowMenu] = useState<string>('initial');

    return(
        <>
            <header className="w-screen fixed bg-corpo-blue z-100 top-0">
                <div className="w-[90vw] mx-auto p-0.5 text-white flex items-center justify-between">
                    <Link
                        href="/"
                        onNavigate={() => setShowMenu('close')}
                    >
                        <Image
                            src='/logo.png'
                            alt="visit-cremona-logo"
                            width={500}
                            height={500}
                            className="h-[76px] w-auto"
                        />
                    </Link>
                    <Hamburger className="w-8 h-8 cursor-pointer" onClick={() => setShowMenu('open')}/>
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
                        <li className="py-3"><a target="_blank" href={links['amministrazione_trasparente']}>Amministrazione trasparente</a></li>
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