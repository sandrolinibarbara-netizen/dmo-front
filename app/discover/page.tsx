import Image from "next/image";
import LocalMap from "@/app/_components/LocalMap";
import TalesLogo from "@/app/_components/TalesLogo";
import data from "@/utils/experiences.json"
import SingleExperienceCard from "@/app/_components/SingleExperienceCard";
import Link from "next/link";
import AnimatedHoverButton from "@/app/_components/AnimatedHoverButton";

export default async function Discover() {
    let content;

    try {
        let data = await fetch(process.env.NEXT_PUBLIC_BASE_URL + '/api/discover?populate=*',
            { next: { revalidate: 1000 }});
        content = await data.json();
    } catch(error) {
        console.log(error);
    }

    return(
        <>
            <section className="mt-[79px] bg-alt-blue fadein-slower">
                <div className="flex flex-col md:flex-row gap-20 w-[90vw] md:w-[80vw] mx-auto justify-center px-4 md:px-8 pt-20 pb-24 text-white">
                    <div className="flex flex-col gap-2 w-full md:w-2/4">
                        <p className="text-sm"><span className="font-semibold">Home /</span> Scopri il territorio</p>
                        <h2 className="font-bold text-4xl mt-8">{content.data['titolo_1']}</h2>
                        <p className="w-full mt-2 pl-1 whitespace-pre-line">{content.data['testo_1']}</p>
                    </div>
                    <div className="w-full h-[500px] md:w-2/4 md:h-auto relative">
                        <Image
                            className="object-cover object-center rounded-xl"
                            src={process.env.NEXT_PUBLIC_BASE_URL + content.data['immagine_1'].url}
                            alt={content.data['immagine_1'].alternativeText}
                            fill={true}
                        />
                    </div>
                </div>
            </section>

            <section className="flex flex-col md:flex-row gap-20 w-[90vw] md:w-[80vw] mx-auto justify-center px-4 md:px-8 pt-20 pb-24">
                <div className="w-full h-[500px] md:w-2/4 md:h-auto relative">
                    <Image
                        className="object-cover object-center rounded-xl"
                        src={process.env.NEXT_PUBLIC_BASE_URL + content.data['immagine_2'].url}
                        alt={content.data['immagine_2'].alternativeText}
                        fill={true}
                    />
                </div>
                <div className="flex flex-col gap-2 w-full md:w-2/4">
                    <h2 className="font-bold text-4xl mt-8">{content.data['titolo_2']}</h2>
                    <p className="w-full mt-2 pl-1 whitespace-pre-line">{content.data['testo_2']}</p>

                </div>
            </section>

            <section className="bg-alt-blue text-white">
                <div className="flex flex-col md:flex-row gap-12 w-[90vw] md:w-[80vw] mx-auto justify-center px-4 md:px-8 pt-20 pb-24">
                    <div className="flex flex-col gap-2 w-full md:w-2/4">
                        <h2 className="font-bold text-4xl mt-8">{content.data['titolo_3']}</h2>
                        <p className="w-full mt-2 pl-1 whitespace-pre-line">{content.data['testo_3']}</p>

                    </div>
                    <div className="w-full h-[500px] md:w-2/4 md:h-auto relative">
                        <Image
                            className="object-cover object-center rounded-xl"
                            src={process.env.NEXT_PUBLIC_BASE_URL + content.data['immagine_3'].url}
                            alt={content.data['immagine_3'].alternativeText}
                            fill={true}
                        />
                    </div>
                </div>
            </section>

            <section>
                <div className="w-[90vw] md:w-[80vw] mx-auto px-4 md:px-8 pt-20 pb-24">
                    <h2 className="font-bold text-4xl mt-8">Le Anime del Territorio</h2>
                    <p className="w-full mt-8 pl-1">La provincia di Cremona è un racconto di ville, castelli e arte.
                        A Cremona entri in palazzi storici con saloni affrescati e cortili silenziosi.
                        Fuori città trovi residenze affascinanti immerse in splendidi parchi : Villa Calciati Crotti,
                        Villa Sommi Picenardi, Villa Bottini “La Limonaia”, Palazzo Zurla De Poli.
                        A San Giovanni in Croce visiti Villa Medici del Vascello, legata alla storia di Cecilia
                        Gallerani. Il giardino romantico è fatto di viali, alberi alti e angoli dove fermarsi un momento
                        a respirare.
                        Poi ci sono le rocche e i castelli: la Rocca Sforzesca di Soncino, i camminamenti di
                        Pizzighettone, il Castello Visconteo di Pandino. Mura, fossati, torri: tutto parla di storia e
                        bellezza.
                    </p>

                    <div className="mt-12 flex gap-4">
                        <Link href='#cycling' className="bg-[#918FC7] rounded-full px-4 py-3 text-sm">Cycling</Link>
                        <Link href='#luthiery' className="bg-sky-300 rounded-full px-4 py-3 text-sm">Music & luthiery</Link>
                    </div>

                    {/*Tales of Cycling*/}
                    <div id="cycling" aria-hidden={true} className="h-[80px]"></div>
                    <div className="mt-2 mb-8">
                        <TalesLogo theme="cycling"/>
                    </div>
                    <div className="flex gap-4">
                        <div className="flex flex-col gap-2">
                            {data.cycling.map((el, i) => {
                                if (i < 2) {
                                    return (
                                        <SingleExperienceCard key={el.titolo} el={el} grid={false}/>
                                    )
                                }
                            })}
                        </div>
                        <div className="flex flex-col gap-2 ">
                            <div className="flex gap-2">
                                <div
                                    className="text-sm rounded-xl w-[50%] h-[164px] bg-[#918FC7] py-4 px-8 flex items-center justify-center">
                                    Il cicloturismo nel territorio di Cremona, Crema e Casalmaggiore offre una varietà di paesaggi
                                    che si sviluppano tra fiumi, canali e cascine storiche. Un itinerario di oltre 300 chilometri
                                    lungo piste ciclabili ben segnalate e strade a basso traffico ti permette di scoprire bellezze
                                    artistiche, natura e specialità gastronomiche locali.
                                </div>
                                <Image className="object-cover rounded-xl w-[50%] h-[164px]"
                                       src="/images/stories/town.webp" alt="pic" width={200} height={100}/>
                            </div>
                            <LocalMap homepage={false} autoFilter={1}/>
                            <div className="w-full text-right mt-4">
                                <Link href="/discover/cycling" className="font-bold underline relative">
                                    <AnimatedHoverButton content="Scopri Tales of Cycling"/>
                                </Link>
                            </div>
                        </div>
                    </div>
                    {/*Tales of Luthiery*/}
                    <div id="luthiery" aria-hidden={true} className="h-[80px]"></div>
                    <div id="luthiery" className="mt-2 mb-8">
                        <TalesLogo theme="luthiery"/>
                    </div>
                    <div className="flex gap-4">
                        <div className="flex flex-col gap-2">
                            {data.luthiery.map((el, i) => {
                                if (i < 2) {
                                    return (
                                        <SingleExperienceCard key={el.titolo} el={el} grid={false}/>
                                    )
                                }
                            })}
                        </div>
                        <div className="flex flex-col gap-2 ">
                            <div className="flex gap-2">
                                <div
                                    className="text-sm rounded-xl w-[50%] h-[164px] bg-sky-300 py-4 px-8 flex items-center justify-center">
                                    Esplora le meravigliose piste ciclabili di Cremona, immerse nella natura e ricche di storia.
                                    Scopri itinerari adatti a tutti, dai principianti agli esperti, e goditi un'esperienza unica su due ruote.
                                </div>
                                <Image className="object-cover rounded-xl w-[50%] h-[164px]"
                                       src="/images/stories/lab.webp" alt="pic" width={200} height={100}/>
                            </div>
                            <LocalMap homepage={false} autoFilter={2}/>
                            <div className="w-full text-right mt-4">
                                <Link href="/discover/luthiery" className="font-bold underline relative">
                                    <AnimatedHoverButton content="Scopri Tales of Music and Luthiery"/>
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}
