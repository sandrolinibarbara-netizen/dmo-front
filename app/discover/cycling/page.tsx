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
                            <p className="w-full mt-2 pl-1 whitespace-pre-line">
                                Pedalare nel territorio di Cremona, Crema e Casalmaggiore significa cambiare paesaggio senza cambiare ritmo.
                                Ti muovi tra argini, canali, strade di campagna e cascine storiche. In totale hai oltre 300 chilometri di
                                percorsi: piste ciclabili segnalate e tratti a basso traffico dove la bici è a suo agio. Lungo il tragitto
                                incontri borghi, corti agricole, piccoli musei e soste dove assaggiare i prodotti locali.
                            </p>
                        </div>
                    </div>
                </div>

                <div
                    className="flex flex-col md:flex-row gap-20 w-[90vw] md:w-[80vw] mx-auto justify-center px-4 md:px-8 pt-12 pb-4">
                    <div className="flex flex-col gap-2 w-full md:w-2/4">
                        <h2 className="font-bold text-4xl mt-8">Sali in sella!</h2>
                        <div className="w-full mt-2 pl-1 whitespace-pre-line">
                            <h4 className="font-semibold pt-4 pb-2">Cremona e dintorni</h4>
                            A Cremona inizi dal centro: passi sotto il Torrazzo e arrivi al Museo del Violino. Poi lasci la città e segui la rete di ciclabili e strade minori sugli argini del Po e dell’Adda. Il percorso entra in riserve naturali e ti porta in borghi come Pizzighettone, Torre de’ Picenardi e Castelleone. Qui la pianura è ampia, l’orizzonte è basso e la strada scorre.

                            <h4 className="font-semibold pt-4 pb-2">Crema e il Cremasco</h4>
                            Il Cremasco è pianeggiante e facile da percorrere anche con calma. Crema è il punto di partenza ideale. Uno dei tratti più amati segue l’alzaia del Canale Vacchelli: attraversi i fontanili e il Parco del Serio, tra campi, filari di pioppi e piccoli borghi. Se ti va una deviazione nella storia, arrivi ai castelli di Pandino e Soncino.

                            <h4 className="font-semibold pt-4 pb-2">Casalasco e Casalmaggiore</h4>
                            Nel Casalasco pedali tra Po e Oglio, con ambienti fluviali che cambiano colore durante l’anno. Gli itinerari attraversano oasi e riserve naturali e toccano paesi sull’acqua e luoghi di archeologia industriale. Sullo sfondo trovi ville storiche come Villa Medici del Vascello e Villa Mina della Scala, immerse nel paesaggio di campagna.
                        </div>
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
                <iframe
                    src="https://www.komoot.com/it-it/tour/2528630754/embed?share_token=aDAXylT815iCdp5SdXij0rX82fx37ZPsFL0jWwJDzDJpuMddZF"
                    width="100%" height="700" frameBorder="0" scrolling="no"></iframe>

                <div className="flex gap-4 w-full mt-4">
                    <iframe
                        src="https://www.komoot.com/it-it/tour/2528924920/embed?share_token=aL3hwjQZ7SWuXvhhPDsuoctfuqkPCY9Fck1XJU7ueC06f8GkX2"
                        width="33%" height="200" frameBorder="0" scrolling="no"></iframe>
                    <iframe
                        src="https://www.komoot.com/it-it/tour/2528926095/embed?share_token=aDqugpwDksE7ArubbtiTKRrNbU27V7fe1U4si0q2NJByr7it08"
                        width="33%" height="200" frameBorder="0" scrolling="no"></iframe>
                    <iframe
                        src="https://www.komoot.com/it-it/tour/2528927055/embed?share_token=ahYAYfXQmZLbk1dAe3H5aO3xnEIW4cqnIt7psTgFxjVZ2Tm4yK"
                        width="33%" height="200" frameBorder="0" scrolling="no"></iframe>
                </div>

                <div className="mt-5 flex gap-4 w-full">
                    <div
                        className="p-8 w-[33%] h-[200px] rounded-xl bg-corpo-blue text-white flex flex-col gap-6">
                        <p className="font-bold">Mappa cicloturistica del territorio cremonese</p>
                        <div className="flex gap-4 items-center mt-2">
                            <PDF className="cursor-pointer w-10 h-10"/>
                            <p className="text-sm">
                                Scaricala qui.
                            </p>
                        </div>
                    </div>

                    <div
                        className="p-8 w-[33%] h-[200px] rounded-xl bg-corpo-blue text-white flex flex-col gap-6">
                        <p className="font-bold">Piste ciclabili di Cremona e dintorni (FIAB Cremona)</p>
                        <div className="flex gap-4 items-center mt-2">
                            <PDF className="cursor-pointer w-10 h-10"/>
                            <p className="text-sm">
                                Consulta la mappa.
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
                                <SingleExperienceCard el={el} grid={true} key={el.titolo + Math.random()}/>
                            )
                        })
                    }
                </div>
            </section>

            <section className="w-full bg-corpo-blue text-white">
                <div className="flex flex-col w-[90vw] md:w-[80vw] mx-auto px-4 md:px-8 pt-20 pb-20 md:pb-24">
                    <h2 className="font-bold text-3xl mb-8">Servizi utili al tuo itinerario in bici</h2>

                    <div className="rounded-xl border border-white p-4 w-fit mb-6">
                        <p><span
                            className="font-semibold block pb-2">Vendita, noleggio e riparazione di biciclette</span>

                            Se non hai la bici con te, la trovi qui. Puoi scegliere un modello tradizionale o a pedalata
                            assistita e partire subito. Ti basta decidere da dove iniziare: argini del Po e dell’Adda,
                            strade tra le cascine, borghi fortificati o città d’arte. Pedali, ti fermi quando vuoi, e
                            lungo la strada incontri sapori e botteghe del territorio.
                            Qui trovi anche l’elenco delle ciclofficine dove poter riparare il tuo mezzo a due ruote.
                            Vedi l’elenco completo dei servizi per ciclismo e cicloturismo in provincia di Cremona:

                            <Link href="/discover/cycling/rent"
                                  className="block font-bold text-corpo-orange underline pt-4">Clicca qui &gt;</Link>
                        </p>
                    </div>

                    <div className="rounded-xl border border-white p-4 w-fit mb-6">
                        <p><span className="font-semibold block pb-2">Ricettività per il cicloturismo</span>
                            Queste strutture offrono ai clienti uno spazio sicuro per le biciclette, attrezzi per la manutenzione di base e un’attenzione particolare per chi va sulle due ruote.
                            Scopri la lista delle strutture bike-friendly presenti sul territorio:
                            <Link href="/discover/cycling/bike-friendly"
                                  className="block font-bold text-corpo-orange underline pt-4">Clicca qui &gt;</Link>
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
                <LocalMap homepage={false} autoFilter={1} fullPage={true}/>
            </section>

        </>
    )
}