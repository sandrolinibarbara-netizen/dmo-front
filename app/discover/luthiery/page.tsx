import data from "@/utils/experiences.json"
import TalesLogo from "@/app/_components/TalesLogo";
import SingleExperienceCard from "@/app/_components/SingleExperienceCard";
import Event from "@/app/_components/Event";
import LocalMap from "@/app/_components/LocalMap";
import {PDF} from "@/app/_components/_icons/PDF";

export default function Cycling() {
    return (
        <>
            <section className="mt-[79px] fadein-slower">
                <div className="w-[90vw] md:w-[80vw] mx-auto items-center justify-center px-4 md:px-8 pt-20 pb-24">
                    <p className="text-sm mb-20"><span className="font-semibold">Home / Scopri il territorio / </span>Musica e liuteria
                    </p>
                    <div
                        className="flex flex-col md:flex-row gap-20">

                        <div className="w-full h-[500px] md:w-2/4 md:h-auto">
                            <TalesLogo theme="luthiery"/>
                        </div>

                        <div className="flex flex-col gap-2 w-full md:w-2/4">
                            <p className="w-full mt-2 pl-1 whitespace-pre-line">Terra di musiche antiche e saperi che continuano a vibrare nel presente, Cremona e il suo territorio sono un viaggio nel cuore dell’eccellenza musicale italiana. Dalle botteghe dei liutai alle sale dei teatri storici, dai grandi maestri del passato agli artigiani che ancora oggi costruiscono violini, canne d’organo e fusioni di bronzo, ogni luogo racconta una storia fatta di pazienza, talento e tradizione.</p>
                        </div>
                    </div>
                </div>

                <div
                    className="flex flex-col md:flex-row gap-20 w-[90vw] md:w-[80vw] mx-auto justify-center px-4 md:px-8 pt-12 pb-4">
                    <div className="flex flex-col gap-2 w-full md:w-2/4">
                        <h2 className="font-bold text-4xl mt-8">Le Terre della Musica: Cremona, Crema e il territorio</h2>
                        <p className="w-full mt-2 pl-1 whitespace-pre-line">Cremona è una città dove la musica è parte viva dell’identità locale. La liuteria, patrimonio immateriale UNESCO, anima le botteghe dei maestri liutai – visitabili – dove si possono osservare da vicino tecniche e tradizioni ereditate da Stradivari, Guarneri e Amati. A pochi passi si trova Casa Stradivari, che racconta la storia e l’eredità del più celebre liutaio cremonese.
                            Il Museo del Violino propone un percorso essenziale per capire la nascita degli strumenti ad arco, con collezioni storiche e sezioni interattive. Accanto, l’Auditorium Giovanni Arvedi permette di ascoltare strumenti antichi in un’acustica progettata per valorizzarne la voce. Il Teatro Ponchielli, tra i principali teatri storici lombardi, ospita una ricca stagione e il prestigioso Monteverdi Festival, dedicato alla musica barocca e al compositore cremonese.
                            Le chiese affrescate e gli spazi culturali del centro completano un itinerario armonioso, dove ogni luogo contribuisce alla lunga storia musicale della città.</p>
                    </div>

                    <div className="w-full h-[500px] md:w-2/4 md:h-auto">
                        <div
                            className="relative top-[calc(100%-200px)] h-[200px] w-full bg-sky-300 border border-sky-500 rounded-xl flex items-center justify-center">
                            Widget Spotify
                        </div>
                    </div>
                </div>
            </section>

            <section className="w-[90vw] md:w-[80vw] mx-auto items-center justify-center px-4 md:px-8 pt-2 pb-24">
                <div
                    className="h-[500px] mb-4 rounded-xl border-sky-500 border bg-sky-100 flex items-center justify-center">
                    Content
                </div>

                <div className="mt-5 flex gap-4 w-full">
                    <div
                        className="p-8 w-[33%] h-[200px] rounded-xl bg-corpo-blue text-white flex flex-col items-center justify-center">
                        <p className="font-bold">Scarica la mappa turistico - musicale del territorio cremonese</p>
                        <div className="flex gap-4 items-center mt-2">
                            <PDF className="cursor-pointer w-20 h-20"/>
                            <p className="text-sm">
                                La mappa del territorio con i vari eventi musicali, con la lista completa e aggiornata dei principali eventi.
                            </p>
                        </div>
                    </div>

                    <div
                        className="p-8 w-[33%] h-[200px] rounded-xl bg-corpo-blue text-white flex flex-col items-center justify-center">
                        <p className="font-bold">Scopri i principali eventi e festival musicale del territorio</p>
                        <div className="flex gap-4 items-center mt-2">
                            <PDF className="cursor-pointer w-20 h-20"/>
                            <p className="text-sm">
                                La mappa del territorio con i vari eventi musicali, con la lista completa e aggiornata dei principali eventi.
                            </p>
                        </div>
                    </div>

                    <div
                        className="p-8 w-[33%] h-[200px] rounded-xl bg-corpo-blue text-white flex flex-col items-center justify-center">
                        <p className="font-bold">Scopri tour ed esperienze a tema musicale</p>
                        <div className="flex gap-4 items-center mt-2">
                            <PDF className="cursor-pointer w-20 h-20"/>
                            <p className="text-sm">
                                La lista aggiornata degli eventi musicali a Cremona: dal Monteverdi Festival alle serate Tanta Robba.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="w-[90vw] md:w-[80vw] mx-auto items-center justify-center px-4 md:px-8 pb-24">
                <h2 className="font-bold text-4xl mt-8 mb-16">Tutte le esperienze</h2>
                <div className="flex gap-4 flex-wrap">
                    {
                        data.luthiery.map(el => {
                            return (
                                <SingleExperienceCard el={el} grid={true} key={el.titolo + Math.random()}/>
                            )
                        })
                    }
                </div>
            </section>

            <section className="w-[90vw] md:w-[80vw] mx-auto items-center justify-center px-4 md:px-8 pb-24">
                <h2 className="font-bold text-4xl mt-8 mb-16">Tutti gli eventi</h2>
                <div className="flex gap-4 flex-wrap">
                    {
                        data.luthiery.map(el => {
                            return (
                                <Event
                                    key={el.titolo + Math.random()}
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
                <LocalMap homepage={false} autoFilter={2} fullPage={true}/>
            </section>

        </>
    )
}