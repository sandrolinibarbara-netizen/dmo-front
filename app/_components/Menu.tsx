'use client'
import Link from "next/link";
import {Hamburger} from "@/app/_components/_icons/Hamburger";
import {useState} from "react";
import {Close} from "@/app/_components/_icons/Close";
import Image from "next/image";
import {Cart} from "@/app/_components/_icons/Cart";

export default function Menu({links} : {links:any}) {

    const [showMenu, setShowMenu] = useState<string>('initial');
    const [showExpMenu, setShowExpMenu] = useState<string>('close');

    function toggleMenu(action:'open'|'close') {
        if(action === 'open' && (showMenu === 'close' || showMenu === 'initial')) {
            setShowMenu('open');
        } else if(action === 'close' && showMenu === 'open') {
            setShowMenu('close');
            setShowExpMenu('close');
        }
    }

    function toggleExpMenu() {
        if(showExpMenu === 'close') {
            setShowExpMenu('open');
        } else {
            setShowExpMenu('close');
        }
    }

    return(
        <>
            <header className="w-full fixed bg-corpo-blue z-110 top-0 h-[79px] z-100">
                <div className="w-full px-2 md:px-0 md:w-[90%] md:mx-auto h-full p-0.5 text-white flex items-center justify-between">
                    <Link
                        href="/"
                        onClick={() => toggleMenu('close')}
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
                        <Link href='/experiences' className="hidden md:block text-black transition duration-500 hover:bg-corpo-orange bg-soft-orange rounded-full px-4 py-3">Esperienze</Link>
                        <Link href='/events' className="hidden md:block text-black transition duration-500 hover:bg-corpo-orange bg-soft-orange rounded-full px-5 py-3">Eventi</Link>
                        {/*<div className="flex relative items-center">*/}
                        {/*    <Search className="text-gray-600 absolute left-[16px] w-5 h-5"/>*/}
                        {/*    <input type="text" placeholder="Cerca eventi o esperienze" className="w-[272px] py-3 pr-8 pl-12 rounded-full bg-white text-black"/>*/}
                        {/*</div>*/}
                        <Cart className="hidden md:block cursor-pointer w-8 h-8"/>
                        <Hamburger className="w-8 h-8 cursor-pointer" onClick={() => toggleMenu('open')}/>
                        <Image src="/images/it.png" className="hidden md:block cursor-pointer rounded-full w-6 h-6" alt="italian flag" width={64} height={64}/>
                    </div>
                </div>
            </header>

            <div
                className={`overlay ${showMenu === 'open' ? 'visible' : ''}`}>
            </div>

            <div
                className={`${showMenu === 'open' ? 'appear' : showMenu === 'close' ? 'disappear' : 'w-0'} max-w-[350px] h-screen fixed bg-white z-200 right-0 top-0`}>
                <div className="w-full px-8 pb-2 md:pb-8 pt-4 flex items-center justify-between">
                    <Image
                        src='/logo-only-icon.png'
                        alt="visit-cremona-logo"
                        width={500}
                        height={500}
                        className="h-[100px] w-auto"
                    />
                    <Close className="w-8 h-8 cursor-pointer" onClick={() => toggleMenu('close')}/>
                </div>

                <div className="md:hidden block flex w-full items-center justify-end px-8 pb-4 gap-4">
                    <Cart className="cursor-pointer w-8 h-8"/>
                    <Image src="/images/it.png" className="cursor-pointer rounded-full w-6 h-6" alt="italian flag" width={64} height={64}/>
                </div>

                <nav className="border-t border-black/50 w-[90%] mx-auto text-black/50 pt-3 overflow-y-auto h-[calc(100vh-212px)] md:h-[calc(100vh-148px)]">
                    <ul className="pl-2">
                        <li className="py-3">
                            <Link
                                href="/"
                                onClick={() => toggleMenu('close')}
                            >
                                Homepage
                            </Link>
                        </li>
                        <li className="py-3">
                            <Link
                                href="/discover"
                                onClick={() => toggleMenu('close')}
                            >
                                Scopri il territorio
                            </Link>
                        </li>
                        <li className="py-3">
                            <Link
                                href="/discover/cycling"
                                onClick={() => toggleMenu('close')}
                            >
                                Cicloturismo
                            </Link>
                        </li>
                        <li className="py-3">
                            <Link
                                href="/discover/luthiery"
                                onClick={() => toggleMenu('close')}
                            >
                                Musica e liuteria
                            </Link>
                        </li>

                        <li className="w-full flex flex-col">
                            <button type="button" onClick={toggleExpMenu} className="cursor-pointer pr-4 py-3 flex justify-between items-center"><span>Esperienze</span>
                                <span className={`${showExpMenu === 'open' ? 'rotate-90' : 'rotate-0'} transition-all duration-500 origin-center`}>&gt;</span>
                            </button>
                                <ul className={`${showExpMenu === 'open' ? 'max-h-[1000px]' : 'max-h-0'} pl-4 transition-all duration-500 overflow-hidden`}>
                                    <li className="py-3">
                                        <Link
                                            href="/experiences"
                                            onClick={() => toggleMenu('close')}
                                        >
                                            Tutte le esperienze
                                        </Link>
                                    </li>
                                    <li className="py-3">
                                        <Link
                                            href="/experiences/classic"
                                            onClick={() => toggleMenu('close')}
                                        >
                                            Esperienze Classiche
                                        </Link>
                                    </li>
                                    <li className="py-3">
                                        <Link
                                            href="/experiences/contemporary"
                                            onClick={() => toggleMenu('close')}
                                        >
                                            Esperienze Contemporanee
                                        </Link>
                                    </li>
                                    <li className="py-3">
                                        <Link
                                            href="/experiences/unique"
                                            onClick={() => toggleMenu('close')}
                                        >
                                            Esperienze Uniche
                                        </Link>
                                    </li>
                                </ul>
                        </li>


                        <li className="py-3">
                            <Link
                                href="/plan"
                                onClick={() => toggleMenu('close')}
                            >
                                Pianifica il tuo viaggio
                            </Link>
                        </li>

                        <li className="py-3">
                            <Link
                                href="/stories"
                                onClick={() => toggleMenu('close')}
                            >
                                Stories
                            </Link>
                        </li>

                        <li className="py-3">
                            <Link
                                href="/partner"
                                onClick={() => toggleMenu('close')}
                            >
                                Partner
                            </Link>
                        </li>
                        <li className="py-3">
                            <Link
                                href="/who"
                                onClick={() => toggleMenu('close')}
                            >
                                Chi siamo
                            </Link>
                        </li>
                        <li className="py-3">
                            <Link
                                href="/accessibility"
                                onClick={() => toggleMenu('close')}
                            >
                                Dichiarazione di accessibilità
                            </Link>
                        </li>
                        <li className="py-3"><a target="_blank" href={links['amministrazione_trasparente']}>Amministrazione
                            trasparente</a></li>

                        <li className="py-3">
                            <Link
                                href="/links"
                                onClick={() => toggleMenu('close')}
                            >
                                Link utili
                            </Link>
                        </li>

                        <li className="py-3">
                            <Link
                                href="/contact"
                                onClick={() => toggleMenu('close')}
                            >
                                Contatti
                            </Link>
                        </li>

                        <li className="py-3">
                            <Link
                                href="/press"
                                onClick={() => toggleMenu('close')}
                            >
                                Area Stampa
                            </Link>
                        </li>

                        <li className="py-3">
                            <Link
                                href="/operators"
                                onClick={() => toggleMenu('close')}
                            >
                                Area Operatori
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    )
}
