import data from '@/utils/stories.json';
import exp from '@/utils/experiences.json';
import Markdown from "react-markdown";
import Image from "next/image";
import SingleExperienceCard from "@/app/_components/SingleExperienceCard";
export default async function Story({params}: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const story = data.filter(el => el.slug === slug);
    const arrData = [...exp.cycling, ...exp.luthiery];
    return(
        <>
        <section className="mt-[79px] fadein-slower">
            <div className="w-[90vw] md:w-[80vw] mx-auto items-center justify-center px-4 md:px-8 pt-20 pb-24">
                <p className="text-sm mb-10"><span
                    className="font-semibold">Home / Stories /</span> {story[0].titolo}
                </p>

                <div className="flex gap-16">
                    <div className="w-[40%] h-[600px]">
                        <Image src={`/images/stories/${story[0].immagine}`} alt="pic" width={200} height={600}
                        className="w-full h-full object-cover rounded-xl"
                        />
                    </div>
                    <div className="w-[60%] markdown">
                        <h2 className="font-bold text-2xl mb-8">{story[0].titolo}</h2>
                        <Markdown>
                            {story[0].testo}
                        </Markdown>
                    </div>
                </div>
            </div>
        </section>
            <section className="w-[90vw] md:w-[80vw] mx-auto items-center justify-center px-4 md:px-8 pt-8 pb-24">
                <h2 className="font-bold text-4xl mb-8">Esperienze correlate</h2>
                <div className="flex gap-4 flex-wrap">
                    {
                        arrData.map(el => {
                            return(
                                <SingleExperienceCard el={el} grid={true} key={el.titolo}/>
                            )
                        })
                    }
                </div>
            </section>
        </>
    )
}