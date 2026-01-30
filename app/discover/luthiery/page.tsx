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
                            <p className="w-full mt-2 pl-1 whitespace-pre-line">Terra di grandi compositori, maestria artigianale ed antichi saperi che continuano a
                                vibrare nel presente, Cremona e il suo territorio sono un viaggio nel cuore dell’eccellenza musicale italiana.
                                Dalle botteghe dei liutai alle sale dei teatri storici, dai grandi maestri del passato agli artigiani che
                                ancora oggi costruiscono violini, canne d’organo e campane di bronzo, ogni luogo racconta una storia
                                fatta di pazienza, talento e tradizione che si rinnova. Qui la musica non è solo patrimonio: è un’esperienza
                                da vivere. Si ascolta, si osserva, si tocca.
                            </p>
                        </div>
                    </div>
                </div>

                <div
                    className="flex flex-col md:flex-row gap-20 w-[90vw] md:w-[80vw] mx-auto justify-center px-4 md:px-8 pt-12 pb-4">
                    <div className="flex flex-col gap-2 w-full md:w-2/4">
                        <h2 className="font-bold text-4xl mt-8">Le Terre della Musica: Cremona, Crema e il territorio</h2>
                        <div className="w-full mt-2 pl-1 whitespace-pre-line">
                            <h4 className="font-semibold pt-4 pb-2">Cremona</h4>
                            A Cremona la musica si vive in prima persona. Entra nella bottega di un maestro liutaio per scoprire gesti e segreti di un’arte antica e visita Casa Stradivari, custode dell’eredità del più celebre liutaio cremonese. Il viaggio prosegue dietro le quinte del Teatro Ponchielli, con visite guidate che raccontano la storia di uno dei teatri più prestigiosi d’Italia. Imperdibile il Museo del Violino, per comprendere la nascita degli strumenti ad arco tra collezioni storiche e sezioni interattive, e le audizioni del fine settimana all’Auditorium Arvedi, dove risuonano i capolavori di Stradivari, Amati e Guarneri. Passeggiate e visite guidate conducono infine nei luoghi e nelle storie dei protagonisti della musica cremonese, da Monteverdi a Stradivari.

                            <h4 className="font-semibold pt-4 pb-2">Il Territorio</h4>
                            Crema e il suo territorio custodiscono una tradizione musicale altrettanto viva. L’arte organaria sopravvive in laboratori storici come la Fabbrica di Organi Inzoli-Bonizzi, visitabile per scoprire il restauro degli organi a canne. Questo patrimonio è raccontato dal Museo Civico di Crema e del Cremasco e risuona nelle chiese cittadine. Accanto all’arte organaria vive la tradizione campanaria della Fonderia Allanconi, tra le poche ancora attive in Italia.

                        </div>
                    </div>

                    <div className="w-full h-[500px] md:w-2/4 md:h-auto">
                        <div
                            className="relative top-[calc(100%-200px)] h-[200px] w-full bg-sky-300 border border-sky-500 rounded-xl flex items-center justify-center">
                            Widget Spotify
                        </div>
                    </div>
                </div>
            </section>

            <section className="w-[90vw] md:w-[80vw] mx-auto items-center justify-center px-4 md:px-8 pt-8 pb-24">
                <div
                    className="h-[500px] mb-4 rounded-xl border-sky-500 border bg-sky-100 flex items-center justify-center">
                    Content
                </div>

                <div className="mt-5 flex gap-4 w-full">
                    <div
                        className="p-8 w-[33%] min-h-[172px] rounded-xl bg-corpo-blue text-white flex flex-col gap-6">
                        <p className="font-bold">Scopri tutti gli eventi e i festival mese per mese: </p>
                        <div className="flex gap-4 items-center mt-2">
                            <PDF className="cursor-pointer w-12 h-12"/>
                            <p className="text-sm w-[75%]">
                                Scaricali da qui.
                            </p>
                        </div>
                    </div>

                    <div
                        className="p-8 w-[33%] min-h-[172px] rounded-xl bg-corpo-blue text-white flex flex-col gap-6">
                        <p className="font-bold">Scarica la mappa turistico - musicale del territorio cremonese</p>
                        <div className="flex gap-4 items-center mt-2">
                            <PDF className="cursor-pointer w-12 h-12"/>
                            <p className="text-sm w-[75%]">
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