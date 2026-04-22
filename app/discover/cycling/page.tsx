import data from "@/utils/experiences.json"
import TalesLogo from "@/app/_components/TalesLogo";
import Link from "next/link";
import Event from "@/app/_components/Event";
import LocalMap from "@/app/_components/LocalMap";
import {PDF} from "@/app/_components/_icons/PDF";
import Markdown from "react-markdown";
import Image from "next/image";
import AllExperiences from "@/app/_components/AllExperiences";
import {getExperiences} from "@/app/lib/domnia-experiences";

type CyclingToursResponse = {
    data: Array<{
        documentId: string;
        id: number;
        link: string;
        ordine: number;
    }>;
};

export default async function Cycling() {
    let content;
    let contentTours: CyclingToursResponse = { data: [] };

    try {
        const data = await fetch(process.env.NEXT_PUBLIC_BASE_URL + '/api/cicloturismo'+
                '?populate[0]=elements'+
                '&populate[1]=elements.immagine',
            { next: { revalidate: 1000 }});
        content = await data.json();

        const dataTours = await fetch(process.env.NEXT_PUBLIC_BASE_URL + '/api/cycling-tours',
            { next: { revalidate: 1000 }});
        contentTours = await dataTours.json();
    } catch(error) {
        console.log(error);
    }

    const pages = await getExperiences('/discover/cycling');

    return (
        <>
            <section className="mt-[79px] fadein-slower">
                <div className="w-[95vw] md:w-[80vw] mx-auto items-center justify-center px-4 md:px-8 pt-20 pb-12 md:pb-24">
                    <p className="text-sm mb-20"><span className="font-semibold">Home / Scopri il territorio / </span>Cicloturismo
                    </p>
                    <div
                        className="flex flex-col md:flex-row gap-20">

                        <div className="w-full h-auto md:w-2/4 ">
                            <TalesLogo theme="cycling"/>
                        </div>

                        <div className="flex flex-col gap-2 w-full md:w-2/4">
                            <p className="w-full mt-2 pl-1 markdown">
                            {content.data.elements.intro}
                            </p>
                        </div>
                    </div>
                </div>

                <div
                    className="flex flex-col md:flex-row gap-20 w-[95vw] md:w-[80vw] mx-auto justify-center px-4 md:px-8 md:pt-12 pb-4">
                    <div className="flex flex-col gap-2 w-full md:w-2/4">
                        <h2 className="font-bold text-4xl mt-8">
                            {content.data.elements.titolo}
                        </h2>
                        <div className="w-full mt-4 pl-1 markdown">
                            <Markdown>
                                {content.data.elements.descrizione}
                            </Markdown>
                        </div>
                    </div>

                    <div className="w-full h-[300px] md:w-2/4 md:h-auto relative">
                        <iframe width="100%" height="315"
                                className="rounded-xl absolute bottom-0"
                                src="https://www.youtube.com/embed/5PFbSF4gw4U?si=uky2Nd3dY5FiZFNj"
                                title="YouTube video player" frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>
                        </iframe>
                    </div>
                </div>
            </section>

            <section className="w-[95vw] md:w-[80vw] mx-auto items-center justify-center px-4 md:px-8 pt-8 pb-24">
                <iframe src="https://www.komoot.com/it-it/collection/3284381/embed" width="100%" height="700"
                        frameBorder="0" scrolling="no"></iframe>

                <div className="flex md:flex-row flex-col gap-4 w-full mt-4">

                    {contentTours.data.map((el) => {
                        if(el.ordine > 3) return;
                        else {
                            return (
                                <div className="w-full md:w-1/3 bg-white" key={el.id}>
                                    <iframe
                                        src={el.link}
                                        width="100%" height="200" frameBorder="0" scrolling="no"></iframe>
                                    <div className="w-full text-right py-3 px-4">
                                        <Link
                                            className="text-black transition duration-500 hover:bg-corpo-orange bg-soft-orange rounded-full px-3 py-2 text-sm"
                                            href={`/discover/cycling/${el.documentId}`}
                                        >
                                            Guarda l&apos;itinerario
                                        </Link>
                                    </div>
                                </div>
                            )
                        }
                    })}

                </div>

                <div className="mt-5 flex md:flex-row flex-col gap-4 w-full">
                    <div
                        className="p-8 w-full md:w-[33%] min-h-[172px] rounded-xl bg-corpo-blue text-white flex flex-col gap-6">
                        <p className="font-bold">Mappa cicloturistica del territorio cremonese</p>
                        <a href="/Mappa cicloturismo Cremona_stampa luglio_2.pdf" download
                           className="flex gap-4 items-center mt-2">
                            <PDF className="cursor-pointer w-12 h-12"/>
                            <p className="text-sm w-[75%]">
                                Scaricala qui.
                            </p>
                        </a>
                    </div>

                    <div
                        className="p-8 w-full md:w-[33%] min-h-[172px] rounded-xl bg-corpo-blue text-white flex flex-col gap-6">
                        <p className="font-bold">Piste ciclabili di Cremona e dintorni (FIAB Cremona)</p>
                        <a href="/Mappa cicloturismo Cremona_stampa luglio_2.pdf" download
                           className="flex gap-4 items-center mt-2">
                            <PDF className="cursor-pointer w-12 h-12"/>
                            <p className="text-sm w-[75%]">
                                Consulta la mappa.
                            </p>
                        </a>
                    </div>

                    <div
                        className="p-8 w-full md:w-[33%] min-h-[172px] rounded-xl bg-corpo-blue text-white flex flex-col gap-6">
                        <p className="font-bold">Disciplinare del progetto Cicloturismo Visit Cremona 2026</p>
                        <a href="/Disciplinare progetto cicloturismo Visit Cremona 2026.pdf" download
                           className="flex gap-4 items-center mt-2">
                            <PDF className="cursor-pointer w-12 h-12"/>
                            <p className="text-sm w-[75%]">
                                Scaricalo qui.
                            </p>
                        </a>
                    </div>
                </div>
            </section>

            <AllExperiences type='cycling' pages={pages}/>

            <section className="w-full bg-corpo-blue text-white">
                <div className="flex flex-col w-[95vw] md:w-[80vw] mx-auto px-4 md:px-8 pt-20 pb-20 md:pb-24">
                    <h2 className="font-bold text-3xl mb-8">Servizi utili al tuo itinerario in bici</h2>
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="w-full md:w-2/4">
                            <Image
                                className="rounded-xl w-full h-full object-cover"
                                src={process.env.NEXT_PUBLIC_BASE_URL + content.data.elements.immagine.url}
                                alt={content.data.elements.immagine.alternativeText} width={200} height={600}/>
                        </div>
                        <div className="w-full md:w-2/4">
                            <div className="rounded-xl border border-white p-4 w-fit mb-6">
                                <p><span
                                    className="font-semibold block pb-2">Vendita, noleggio e riparazione di biciclette</span>

                                    Se non hai la bici con te, la trovi qui. Puoi scegliere un modello tradizionale o a pedalata assistita e partire subito.
                                    Qui trovi anche l’elenco delle ciclofficine dove poter riparare il tuo mezzo a due ruote.
                                    Vedi l’elenco completo dei servizi per ciclismo e cicloturismo in provincia di Cremona:

                                    <Link href="/discover/cycling/rent"
                                          className="block font-bold text-corpo-orange underline pt-4">Clicca qui &gt;</Link>
                                </p>
                            </div>

                            <div className="rounded-xl border border-white p-4 w-fit">
                                <p><span className="font-semibold block pb-2">Ricettività per il cicloturismo</span>
                                    Queste strutture offrono ai clienti uno spazio sicuro per le biciclette, attrezzi per la manutenzione di base e un’attenzione particolare per chi va sulle due ruote.
                                    Scopri la lista delle strutture bike-friendly presenti sul territorio:
                                    <Link href="/discover/cycling/bike-friendly"
                                          className="block font-bold text-corpo-orange underline pt-4">Clicca qui &gt;</Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="w-[95vw] md:w-[80vw] mx-auto items-center justify-center px-4 md:px-8 pt-16 pb-24">
                <h2 className="font-bold text-4xl mt-8 mb-16">Tutti gli eventi</h2>
                <div className="flex gap-4 flex-wrap">
                    {
                        data.cycling.map(el => {
                            return (
                                <Event
                                    key={el.titolo}
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

            <section className="w-[95vw] md:w-screen md:mb-0 mb-8 md:px-0 px-4 mx-auto items-center justify-center">
                <h2 className="md:w-[80vw] mx-auto px-4 md:px-8 font-bold text-4xl mt-8 mb-16">Visualizza tutti gli Eventi e le Esperienze sulla mappa</h2>
                <LocalMap homepage={false} autoFilter={1} fullPage={true} pages={pages}/>
            </section>

        </>
    )
}
