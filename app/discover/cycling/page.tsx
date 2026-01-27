import data from "@/utils/experiences.json"
import TalesLogo from "@/app/_components/TalesLogo";
import SingleExperienceCard from "@/app/_components/SingleExperienceCard";
import Link from "next/link";
import Event from "@/app/_components/Event";
import LocalMap from "@/app/_components/LocalMap";
import {PDF} from "@/app/_components/_icons/PDF";

export default function Cycling() {
    return (
        <>
            <section className="mt-[79px] fadein-slower">
                <div className="w-[90vw] md:w-[80vw] mx-auto items-center justify-center px-4 md:px-8 pt-20 pb-24">
                    <p className="text-sm mb-20"><span className="font-semibold">Home / Scopri il territorio / </span>Cicloturismo
                    </p>
                    <div
                        className="flex flex-col md:flex-row gap-20">

                        <div className="w-full h-[500px] md:w-2/4 md:h-auto">
                            <TalesLogo theme="cycling"/>
                        </div>

                        <div className="flex flex-col gap-2 w-full md:w-2/4">
                            <p className="w-full mt-2 pl-1 whitespace-pre-line">Il cicloturismo nel territorio di Cremona, Crema e Casalmaggiore offre una varietà di paesaggi che si sviluppano tra fiumi, canali e cascine storiche. Un itinerario di oltre 300 chilometri lungo piste ciclabili ben segnalate e strade a basso traffico ti permette di scoprire bellezze artistiche, natura e specialità gastronomiche locali.</p>
                        </div>
                    </div>
                </div>

                <div
                    className="flex flex-col md:flex-row gap-20 w-[90vw] md:w-[80vw] mx-auto justify-center px-4 md:px-8 pt-12 pb-4">
                    <div className="flex flex-col gap-2 w-full md:w-2/4">
                        <h2 className="font-bold text-4xl mt-8">Sali in sella!</h2>
                        <p className="w-full mt-2 pl-1 whitespace-pre-line">Il territorio cremasco, con Crema come
                            cuore, è
                            ideale per il cicloturismo. L'itinerario più noto segue l'alzaia del Canale Vacchelli, una
                            via
                            d'acqua del '900, immersa nel verde. Si pedala lungo i Fontanili e il Parco del Serio, tra
                            fontanili e piccoli borghi.
                            Scoprite un angolo di medioevo visitando i castelli di Pandino e Soncino.<br/>
                            Cremona e il suo territorio offrono un'esperienza cicloturistica tutta da godere. In città,
                            si
                            pedala tra il Torrazzo e il Museo del Violino. La rete di piste ciclabili e strade minori
                            segue
                            gli argini del Po e dell’Adda, interseca riserve naturali e conduce a borghi ricchi di
                            storia
                            come Pizzighettone, Torre de’ Picenardi e Castelleone.
                            Il Casalasco, tra Po e Oglio, è dominato dagli ambienti fluviali, come nel caso di
                            Casalmaggiore. Numerosi itinerari permettono di scoprire oasi e riserve naturali, borghi
                            affascinanti e siti di archeologia industriale. Diversi edifici storici come Villa Medici
                            del
                            Vascello e Villa Mina della Scala impreziosiscono il paesaggio.</p>
                    </div>

                    <div className="w-full h-[500px] md:w-2/4 md:h-auto">
                        <div
                            className="relative top-[calc(100%-200px)] h-[200px] w-full bg-pastel-yellow border border-yellow-500 rounded-xl flex items-center justify-center">
                            Widget meteo
                        </div>
                    </div>
                </div>
            </section>

            <section className="w-[90vw] md:w-[80vw] mx-auto items-center justify-center px-4 md:px-8 pt-2 pb-24">
                <div
                    className="h-[500px] mb-4 rounded-xl border-green-500 border bg-green-100 flex items-center justify-center">
                    Komoot Map #1
                </div>
                <div className="flex gap-4 w-full">
                    <div
                        className="w-[33%] h-[200px] rounded-xl border-green-500 border bg-green-100 flex items-center justify-center">
                        Komoot Map #2
                    </div>
                    <div
                        className="w-[33%] h-[200px] rounded-xl border-green-500 border bg-green-100 flex items-center justify-center">
                        Komoot Map #3
                    </div>
                    <div
                        className="w-[33%] h-[200px] rounded-xl border-green-500 border bg-green-100 flex items-center justify-center">
                        Komoot Map #4
                    </div>
                </div>

                <div className="mt-5 flex gap-4 w-full">
                    <div
                        className="p-8 w-[33%] h-[200px] rounded-xl bg-corpo-blue text-white flex flex-col items-center justify-center">
                        <p className="font-bold">Scarica la mappa cicloturistica del territorio cremonese</p>
                        <div className="flex gap-4 items-center mt-2">
                            <PDF className="cursor-pointer w-20 h-20"/>
                            <p className="text-sm">
                                Sette percorsi che coprono una totalità di circa 300 km, proponendo anche diverse
                                varianti.
                            </p>
                        </div>
                    </div>

                    <div
                        className="p-8 w-[33%] h-[200px] rounded-xl bg-corpo-blue text-white flex flex-col items-center justify-center">
                        <p className="font-bold">Consulta la mappa delle piste ciclabili di Cremona e dintorni</p>
                        <div className="flex gap-4 items-center mt-2">
                            <PDF className="cursor-pointer w-20 h-20"/>
                            <p className="text-sm">
                                La lista completa con mappa di tutta la pista ciclabile urbana ed extraurbana di
                                Cremona.
                            </p>
                        </div>
                    </div>

                    <div
                        className="p-8 w-[33%] h-[200px] rounded-xl bg-corpo-blue text-white flex flex-col items-center justify-center">
                        <p className="font-bold">Consulta la mappa delle piste ciclabili di Crema</p>
                        <div className="flex gap-4 items-center mt-2">
                            <PDF className="cursor-pointer w-20 h-20"/>
                            <p className="text-sm">
                                La lista completa con mappa di tutta la pista ciclabile urbana ed extraurbana di
                                Crema.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="w-[90vw] md:w-[80vw] mx-auto items-center justify-center px-4 md:px-8 pb-24">
                <h2 className="font-bold text-4xl mt-8 mb-16">Tutte le esperienze</h2>
                <div className="flex gap-4 flex-wrap">
                    {
                        data.cycling.map(el => {
                            return (
                                <SingleExperienceCard el={el} grid={true}/>
                            )
                        })
                    }
                </div>
            </section>

            <section className="w-full bg-corpo-blue text-white">
                <div className="flex flex-col w-[90vw] md:w-[80vw] mx-auto px-4 md:px-8 pt-20 pb-20 md:pb-24">
                    <h2 className="font-bold text-3xl mb-8">Servizi utili al tuo itinerario in bici</h2>

                    <div className="rounded-xl border border-white p-4 w-fit mb-6">
                        <p>Necessiti di conoscere strutture bike friendly?
                            <Link href="/discover/cycling/bike-friendly" className="font-bold text-corpo-orange underline ml-2">Clicca qui &gt;</Link>
                        </p>
                    </div>

                    <div className="rounded-xl border border-white p-4 w-fit mb-6">
                        <p>Vuoi sapere dove sono i servizi a noleggio nel nostro territorio?
                            <Link href="/discover/cycling/rent" className="font-bold text-corpo-orange underline ml-2">Clicca qui &gt;</Link>
                        </p>
                    </div>

                    <div className="rounded-xl border border-white p-4 w-fit">
                        <p>Prima di metterti in viaggio scarica il disciplinare.
                            <Link href="/" className="font-bold text-corpo-orange underline ml-2">Clicca qui &gt;</Link>
                        </p>
                    </div>
                </div>
            </section>

            <section className="w-[90vw] md:w-[80vw] mx-auto items-center justify-center px-4 md:px-8 pt-16 pb-24">
                <h2 className="font-bold text-4xl mt-8 mb-16">Tutti gli eventi</h2>
                <div className="flex gap-4 flex-wrap">
                    {
                        data.cycling.map(el => {
                            return (
                                <Event
                                    what={el.titolo}
                                    where={el.luogo}
                                    when={el.data}
                                    how={el.descrizione}
                                    img={`/images/experiences/${el.immagine}`}
                                />
                            )
                        })
                    }
                </div>
            </section>

            <section className="items-center justify-center">
                <h2 className="w-[90vw] md:w-[80vw] mx-auto px-4 md:px-8 font-bold text-4xl mt-8 mb-16">Visualizza tutti gli Eventi e le Esperienze sulla mappa</h2>
                <LocalMap homepage={false} autoFilter={1} fullPage={true}/>
            </section>

        </>
    )
}