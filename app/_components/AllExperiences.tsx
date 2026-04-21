import SingleExperienceCard from "@/app/_components/SingleExperienceCard";
export default function AllExperiences({type, pages}:{type:string, pages:any}) {

    return (
        <section className="w-[95vw] md:w-[80vw] mx-auto items-center justify-center px-4 md:px-8 pb-24">
            <h2 className="font-bold text-4xl mt-8 mb-16">Tutte le esperienze</h2>
            <div className="flex gap-4 flex-wrap">
                {pages &&
                    pages.filter((el: any) => el.tagIds.includes(1)).map((el: any, i: number) => {
                        if (i < 3) {
                            return (
                                <SingleExperienceCard key={el.documentId} el={el} grid={false} altGrid={true}/>
                            )
                        }
                    })
                }
            </div>
        </section>
    )
}