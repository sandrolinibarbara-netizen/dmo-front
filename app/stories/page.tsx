import data from '@/utils/stories.json'
import StoryCard from "@/app/_components/StoryCard";
export default function Stories() {

    return(
        <section className="mt-[79px] fadein-slower">
            <div className="w-[90vw] md:w-[80vw] mx-auto items-center justify-center px-4 md:px-8 pt-20 pb-24">
                <p className="text-sm"><span className="font-semibold">Home / </span> Stories</p>
                <h2 className="font-bold text-4xl mt-10 mb-8">Storie del Territorio</h2>


                <div className="flex gap-4 flex-wrap w-full">
                    {
                        data.map(el => {
                            return <StoryCard el={el} key={el.testo}/>
                        })
                    }
                </div>
            </div>
        </section>
    )
}