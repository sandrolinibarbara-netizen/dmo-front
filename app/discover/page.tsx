import Image from "next/image";

export default async function Discover() {
    let content;

    try {
        let data = await fetch(process.env.NEXT_PUBLIC_BASE_URL + '/api/discover?populate=*');
        content = await data.json();
    } catch(error) {
        console.log(error);
    }

    return(
        <>
            <section className="mt-[79px] bg-alt-blue fadein-slower">
                <div className="flex gap-20 w-[80vw] mx-auto justify-center px-8 pt-20 pb-24 text-white">
                    <div className="flex flex-col gap-2 w-2/4">
                        <p className="text-sm"><span className="font-semibold">Home /</span> Scopri il territorio</p>
                        <h2 className="font-bold text-4xl mt-8">{content.data['titolo_1']}</h2>
                        <p className="w-full mt-2 pl-1 whitespace-pre-line">{content.data['testo_1']}</p>

                    </div>
                    <div className="w-2/4 h-auto relative">
                        <Image
                            className="object-cover object-center rounded-xl"
                            src={process.env.NEXT_PUBLIC_BASE_URL + content.data['immagine_1'].url}
                            alt={content.data['immagine_1'].alternativeText}
                            fill={true}
                        />
                    </div>
                </div>
            </section>

            <section className="flex gap-20 w-[80vw] mx-auto justify-center px-8 pt-20 pb-24">
                <div className="flex flex-col gap-2 w-2/4">
                    <h2 className="font-bold text-4xl mt-8">{content.data['titolo_2']}</h2>
                    <p className="w-full mt-2 pl-1 whitespace-pre-line">{content.data['testo_2']}</p>

                </div>
                <div className="w-2/4 h-auto relative">
                    <Image
                        className="object-cover object-center rounded-xl"
                        src={process.env.NEXT_PUBLIC_BASE_URL + content.data['immagine_2'].url}
                        alt={content.data['immagine_2'].alternativeText}
                        fill={true}
                    />
                </div>
            </section>

            <section className="bg-alt-blue text-white">
                <div className="flex gap-12 w-[80vw] mx-auto justify-center px-8 pt-20 pb-24">
                    <div className="flex flex-col gap-2 w-2/4">
                        <h2 className="font-bold text-4xl mt-8">{content.data['titolo_3']}</h2>
                        <p className="w-full mt-2 pl-1 whitespace-pre-line">{content.data['testo_3']}</p>

                    </div>
                    <div className="w-2/4 h-auto relative">
                        <Image
                            className="object-cover object-center rounded-xl"
                            src={process.env.NEXT_PUBLIC_BASE_URL + content.data['immagine_3'].url}
                            alt={content.data['immagine_3'].alternativeText}
                            fill={true}
                        />
                    </div>
                </div>
            </section>
        </>
)
}
