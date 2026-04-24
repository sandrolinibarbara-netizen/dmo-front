import TalesLogo from "@/app/_components/TalesLogo";
import Event from "@/app/_components/Event";
import LocalMap from "@/app/_components/LocalMap";
import {PDF} from "@/app/_components/_icons/PDF";
import Markdown from "react-markdown";
import Composers from "@/app/_components/Composers";
import AllExperiences from "@/app/_components/AllExperiences";
import {getExperiences} from "@/app/lib/domnia-experiences";
import getEvents, {sortEventsByStartDate} from "@/app/lib/edt-events";

export default async function Luthiery() {

    let content;

    try {
        const data = await fetch(process.env.NEXT_PUBLIC_BASE_URL + '/api/liuteria'+
            '?populate[0]=elements' +
            '&populate[1]=compositore_1' +
            '&populate[2]=compositore_1.immagine' +
            '&populate[3]=compositore_2' +
            '&populate[4]=compositore_2.immagine' +
            '&populate[5]=compositore_3' +
            '&populate[6]=compositore_3.immagine',
            { next: { revalidate: 1000 }});
        content = await data.json();
    } catch(error) {
        console.log(error);
    }

    const pages = await getExperiences('/discover/luthiery');
    const dataEvents = await getEvents('/discover/luthiery', '12');
    const sortedEvents = sortEventsByStartDate(dataEvents.events ?? []);

    return (
        <>
            <section className="mt-[79px] fadein-slower">
                <div className="w-[95vw] md:w-[80vw] mx-auto items-center justify-center px-4 md:px-8 pt-20 pb-12 md:pb-24">
                    <p className="text-sm mb-20"><span className="font-semibold">Home / Scopri il territorio / </span>Musica e liuteria
                    </p>
                    <div
                        className="flex flex-col md:flex-row gap-20">

                        <div className="w-full md:w-2/4 h-auto">
                            <TalesLogo theme="luthiery"/>
                        </div>

                        <div className="flex flex-col gap-2 w-full md:w-2/4">
                            <p className="w-full mt-2 pl-1 whitespace-pre-line">
                                {content.data.elements.intro}
                            </p>
                        </div>
                    </div>
                </div>

                <div
                    className="flex flex-col md:flex-row gap-20 w-[90vw] md:w-[80vw] mx-auto justify-center px-4 md:px-8 md:pt-12 pb-4">
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
                                src="https://www.youtube.com/embed/qZa1JT7oI2c?si=Xs8Yhbtzh8izTk8v"
                                title="YouTube video player" frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </div>
                </div>
            </section>

            <section className="w-[95vw] md:w-[80vw] mx-auto items-center justify-center px-4 md:px-8 pt-8 pb-24">
                <h3 className="font-bold text-3xl my-8">Scopri il territorio  attraverso i principali personaggi della storia della musica</h3>

                <Composers info={content.data}/>

                <div className="mt-5 flex flex-col md:flex-row gap-4 w-full">
                    <div
                        className="p-8 w-full md:w-[33%] min-h-[172px] rounded-xl bg-corpo-blue text-white flex flex-col gap-6">
                        <p className="font-bold">Scopri tutti gli eventi e i festival mese per mese qui</p>
                        <a href="/Mappa Musica versione definitiva.pdf" download
                           className="flex gap-4 items-center mt-2">
                            <PDF className="cursor-pointer w-12 h-12"/>
                            <p className="text-sm w-[75%]">
                                Scaricali qui.
                            </p>
                        </a>
                    </div>

                    <div
                        className="p-8 w-full md:w-[33%] min-h-[172px] rounded-xl bg-corpo-blue text-white flex flex-col gap-6">
                        <p className="font-bold">Scarica la mappa turistico - musicale del territorio cremonese</p>
                        <a href="/Mappa Musica versione definitiva.pdf" download
                           className="flex gap-4 items-center mt-2">
                            <PDF className="cursor-pointer w-12 h-12"/>
                            <p className="text-sm w-[75%]">
                                Consulta la mappa.
                            </p>
                        </a>
                    </div>
                </div>
            </section>

            <AllExperiences type='luthiery' pages={pages}/>

            {sortedEvents.length > 0 &&
                <section className="w-[95vw] md:w-[80vw] mx-auto items-center justify-center px-4 md:px-8 pt-16 pb-24">
                    <h2 className="font-bold text-4xl mt-8 mb-16">Tutti gli eventi</h2>
                    <div className="flex gap-4 flex-wrap">
                        {
                            sortedEvents.map(el => {
                                if((new Date()).getTime() > (new Date(el.dates.endDate)).getTime()) {
                                    return;
                                }
                                return (
                                    <Event key={el.identifier} event={el}/>
                                )
                            })
                        }
                    </div>
                </section>
            }

            <section className="w-[95vw] md:w-screen md:mb-0 mb-8 md:px-0 px-4 mx-auto items-center justify-center">
                <h2 className="md:w-[80vw] mx-auto px-4 md:px-8 font-bold text-4xl mt-8 mb-16">Visualizza tutti gli
                    Eventi e le Esperienze sulla mappa</h2>
                <LocalMap homepage={false} autoFilter={2} fullPage={true} pages={pages}/>
            </section>

        </>
    )
}
