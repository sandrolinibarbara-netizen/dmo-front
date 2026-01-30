'use client'
import LocalMap from "@/app/_components/LocalMap";
import InfoCard from "@/app/_components/InfoCard";
import Link from "next/link";

export default function Plan() {
    return(
        <>
            <section
                className="w-[90vw] md:w-[80vw] mx-auto mt-[79px] px-4 md:px-0 pt-[69px] mb-[80px] flex flex-col md:flex-row gap-16 fadein-slower">
                <div className="flex flex-col w-full">
                    <h1 className="font-bold text-4xl mt-8">Pianifica il tuo viaggio</h1>
                    <h2 className="font-bold text-2xl mt-16 mb-8">In auto</h2>
                    <LocalMap homepage={false} autoFilter={100} fullPage={true}/>
                    <div className="w-full text-right mt-8">
                        <a href="https://www.google.com/maps/dir//Cremona,+26100+CR/@45.6574975,9.9627623,7z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x4780fe6d3c71fe83:0x307737e7e74bdaf5!2m2!1d10.0227044!2d45.1333135?entry=ttu&g_ep=EgoyMDI2MDEyMS4wIKXMDSoASAFQAw%3D%3D"
                           className="cursor-pointer mt-4 w-full text-black transition duration-500 hover:bg-corpo-orange bg-soft-orange rounded-full px-4 py-3"
                           target="_blank"
                        >Ottieni indicazioni &gt;</a>
                    </div>
                </div>
            </section>

            <section
                className="w-[90vw] md:w-[80vw] mx-auto px-4 md:px-0 pt-12 pb-20 fadein-slower">
                <h2 className="font-bold text-2xl mb-8">Con l'aereo</h2>
                <div>
                    <p>Gli aeroporti più comodi per raggiungere Cremona in aereo sono:</p>
                    <ul>
                        <li>1. Aeroporto di Milano-Parma (PMF)<br/>
                            - Distanza: Circa 40-41 km.<br/>
                            - È l'aeroporto più vicino.
                        </li>
                        <li>2. Aeroporto di Brescia-Montichiari "Gabriele D'Annunzio" (VBS)<br/>
                            - Distanza: Circa 50 km.
                        </li>
                        <li>3. Aeroporto di Milano Bergamo "Orio al Serio" (BGY)<br/>
                            - Distanza: Circa 64 km.<br/>
                            - Ottimo scalo per voli nazionali e internazionali, in particolare con compagnie aeree
                            low-cost.
                        </li>
                        <li>4. Aeroporto di Milano Linate (LIN)<br/>
                            - Distanza: Circa 69-85 km.<br/>
                            - Comodo per raggiungere Milano.
                        </li>
                        <li>5. Aeroporto di Verona "Valerio Catullo" (VRN)<br/>
                            - Distanza: Circa 100 km.
                        </li>
                    </ul>
                </div>
            </section>

            <section
                className="w-[90vw] md:w-[80vw] mx-auto px-4 md:px-0 pt-8 pb-20 fadein-slower">
                <h2 className="font-bold text-2xl mb-8">Con l'autobus</h2>
                <ul>
                    <li>1. Dall'Aeroporto di Milano Bergamo (BGY) - Orio al Serio<br/>
                        Questo aeroporto offre i collegamenti in bus più diretti per Cremona:<br/>
                        Autolinee: Compagnie come FlixBus offrono corse dirette.<br/>
                        Durata: Il viaggio diretto in autobus dura in media circa 1 ora e 35 minuti fino a 1 ora e 40
                        minuti.<br/>
                        Prezzo: I biglietti possono partire da prezzi molto convenienti (ad esempio, circa 10-14
                        €).<br/>
                        In alternativa, puoi prendere una navetta per la stazione di Bergamo o Brescia e poi proseguire
                        per Cremona in treno o con un altro bus, ma le opzioni dirette sono le più comode.
                    </li>
                    <li>2. Dall'Aeroporto di Parma "Giuseppe Verdi" (PMF)<br/>
                        Essendo l'aeroporto più vicino, è ben collegato anche con servizi bus:<br/>
                        Autolinee: Sono disponibili servizi con FlixBus o le corse Italobus Connections (che combinano
                        bus e treno).<br/>
                        Durata: La durata media del viaggio in pullman è di circa 55 minuti fino a 1 ora e 20 minuti
                        (per i servizi che includono un cambio).<br/>
                        Prezzo: I prezzi sono anch'essi molto competitivi (biglietti FlixBus a partire da circa 5-6 €).
                    </li>
                    <li>3. Dall'Aeroporto di Milano Linate (LIN)<br/>
                        Linate è ben collegato a Milano, ma i collegamenti diretti in bus per Cremona sono meno
                        frequenti:<br/>
                        Opzione con cambio: Il modo più comune in bus è prendere un autobus o una navetta (come
                        Autostradale) dall'aeroporto fino alla Stazione Centrale di Milano (o Milano Rogoredo) e da lì
                        proseguire con un treno per Cremona.
                        I treni sono generalmente più veloci dall'area di Milano a Cremona rispetto ai bus a lunga
                        percorrenza.<br/>
                        Bus diretto (meno comune): Alcune compagnie come FlixBus offrono collegamenti in pullman tra la
                        città di Milano (incluse fermate come Linate) e Cremona. In questo caso, la durata media del
                        viaggio può essere di circa 3 ore o più.
                    </li>
                </ul>
            </section>

            <section
                className="w-[90vw] md:w-[80vw] mx-auto px-4 md:px-0 pt-8 pb-20 fadein-slower">
                <h2 className="font-bold text-2xl mb-8">Elenco infopoint</h2>
                <div className="flex gap-4 flex-wrap w-full">
                    <InfoCard
                        name="Infopoint Cremona e Provincia"
                        address="Piazza del Comune n. 5 - 26100 Cremona"
                        phone="0372 407081"
                        email="info.turismo@comune.cremona.it"
                        url="https://nextjs.org/docs/app/guides/mdx"
                    />

                    <InfoCard
                        name="Infopoint Crema"
                        address="Piazza Duomo 22 - 26013 Crema"
                        phone="0373 81020"
                        email="info@prolococrema.it"
                        url="https://nextjs.org/docs/app/guides/mdx"
                    />
                </div>
            </section>

            <section className="w-full bg-alt-blue text-white">
                <div className="flex flex-col w-[90vw] md:w-[80vw] mx-auto px-4 md:px-8 pt-20 pb-20 md:pb-24">
                    <h2 className="font-bold text-3xl mb-8">Dove dormire</h2>

                    <div className="rounded-xl border border-white p-4 w-fit">
                        <p>Guarda tutte le infrastrutture
                            <Link href="/" className="font-bold text-corpo-orange underline ml-2">Clicca qui &gt;</Link>
                        </p>
                    </div>

                </div>
            </section>
        </>
    )
}