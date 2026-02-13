import Link from "next/link";
import Image from "next/image";

export default function Footer({links, contacts} : {links:any, contacts:any}) {
    return (
        <footer className="min-h-[40vh] bg-corpo-blue w-full flex gap-4 py-16 text-white">
            <div className="w-[80vw] flex flex-col lg:flex-row gap-20 items-center lg:items-start mx-auto">
                <div className="w-[50vw] lg:w-[20vw] flex flex-col items-center justify-center gap-8">
                    <Link href="/" className="w-[90%]">
                        <Image
                            src='/logo.webp'
                            alt="visit-cremona-logo"
                            width={500}
                            height={500}
                        />
                    </Link>
                    <div className="flex gap-8 w-full items-center justify-center">
                        <Image
                            src='/icons/InLombardia_white.png'
                            alt="in lombardia logo"
                            className="w-[80px]"
                            width={500}
                            height={500}
                        />

                        <Image
                            src='/icons/E015-Logo_white.png'
                            alt=" e015 logo"
                            className="w-[80px]"
                            width={500}
                            height={500}
                        />
                    </div>
                </div>
                <div className="w-full lg:w-[35vw] text-center lg:text-left">
                    <p className="mb-8">Destination Management Organization di Cremona</p>
                    <p className="mb-4">Contatti</p>
                    <p><a className="hover:text-corpo-orange" href={`mailto:${contacts.email}`}>{contacts.email}</a></p>
                    <p><a className="hover:text-corpo-orange" href={`tel:${contacts.telefono.split(' ').join('')}`}>{contacts.telefono}</a></p>
                    <div className="mt-4 mb-2 flex gap-4">Seguici sui social:
                            <ul className="flex gap-4 items-center">
                                <li>
                                    <a target="_blank" href={links.facebook}>
                                        <Image src="/icons/hugeicons_facebook-02.webp" alt="facebook logo" width={24}
                                               height={24}/>
                                    </a>
                                </li>
                                <li>
                                    <a target="_blank" href={links.instagram}>
                                        <Image src="/icons/logo-instagram.webp" alt="instagram logo" width={24}
                                               height={24}/>
                                    </a>
                                </li>
                            </ul>
                    </div>
                    <p className="mt-8">Coordinamento a cura di <a className="underline text-corpo-orange"
                                                                   href="https://www.reindustria.com/" target="_blank">REI
                        Reindustria</a>
                    </p>
                </div>
                <div
                    className="w-full lg:w-[45vw] flex justify-center lg:justify-start gap-6 underline text-corpo-orange">
                    <ul className="flex flex-col gap-6 text-center lg:text-left">
                        <li><a href="/Visit Cremona_Brand Guide_V6.pdf" download>Guida del brand</a></li>
                        <li><Link href="/accessibility">Dichiarazione di accessibilità</Link></li>
                        <li><a target="_blank" href={links['amministrazione_trasparente']}>Amministrazione
                            trasparente</a></li>
                        <li><Link href="/partner">Partner</Link></li>
                    </ul>
                    <ul className="flex flex-col gap-6 text-center lg:text-left">
                        <li><Link href="/who">Chi siamo</Link></li>
                        <li><Link href="/contact">Richiesta di informazioni</Link></li>
                        <li><a target="_blank" href={links['osservatorio_cremona']}>Osservatorio di Cremona</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}